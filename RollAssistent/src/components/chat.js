/**
 * Чат с ИИ-Мастером (YandexGPT)
 */
import { GameState } from '../core/state.js';
import { t } from '../utils/lang.js';

let chatHistory = [];
let isWaitingForAI = false;

const YANDEX_API_KEY = 'AQVNwrSTXZmqIzgJKjBhMXkahp3rlJwnzTYy43ug';
const YANDEX_FOLDER_ID = 'b1gtrc36a7v9v2858406';

function buildSystemPrompt() {
  const race = GameState.race;
  const cls = GameState.class;
  const char = GameState.currentMainCharacter;
  if (!cls || !race) {
    return t('chatSystemPromptDefault');
  }
  return t('chatSystemPromptFull',
    char?.name || t('unnamed'),
    race?.name || '?',
    cls?.name || '?',
    GameState.level || 1,
    GameState.getTotalStat('str'),
    GameState.getTotalStat('dex'),
    GameState.getTotalStat('con'),
    GameState.getTotalStat('int'),
    GameState.getTotalStat('wis'),
    GameState.getTotalStat('cha')
  );
}

export async function sendMessageToAI(userMessage) {
  if (isWaitingForAI) return;
  if (!navigator.onLine) {
    const statusDiv = document.getElementById('chat-status');
    if (statusDiv) statusDiv.textContent = t('chatNoInternet');
    return;
  }

  isWaitingForAI = true;
  const statusDiv = document.getElementById('chat-status');
  if (statusDiv) statusDiv.textContent = t('chatThinking');

  chatHistory.push({ role: 'user', content: userMessage });
  renderChatMessage('user', userMessage);

  const messages = [...chatHistory.slice(-10)];
  const systemMessage = buildSystemPrompt();
  messages.unshift({ role: 'system', content: systemMessage });

  try {
    const response = await fetch('https://llm.api.cloud.yandex.net/foundationModels/v1/completion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Api-Key ${YANDEX_API_KEY}`,
        'x-folder-id': YANDEX_FOLDER_ID
      },
      body: JSON.stringify({
        modelUri: `gpt://${YANDEX_FOLDER_ID}/yandexgpt/latest`,
        completionOptions: { stream: false, temperature: 0.7, maxTokens: 800 },
        messages: messages.map(m => ({ role: m.role === 'user' ? 'user' : 'assistant', text: m.content }))
      })
    });

    if (!response.ok) {
      if (statusDiv) statusDiv.textContent = t('chatApiError', response.status);
      return;
    }

    const data = await response.json();
    const aiReply = data.result.alternatives[0].message.text;
    chatHistory.push({ role: 'assistant', content: aiReply });
    renderChatMessage('assistant', aiReply);
    if (statusDiv) statusDiv.textContent = '';
  } catch (error) {
    if (statusDiv) statusDiv.textContent = t('chatNetworkError');
  } finally {
    isWaitingForAI = false;
  }
}

function renderChatMessage(role, content) {
  const container = document.getElementById('chat-messages');
  if (!container) return;
  const messageDiv = document.createElement('div');
  messageDiv.className = `message message-${role === 'user' ? 'user' : 'ai'}`;
  const bubble = document.createElement('div');
  bubble.className = 'message-bubble';
  bubble.textContent = content;
  const time = document.createElement('div');
  time.className = 'message-time';
  time.textContent = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  messageDiv.appendChild(bubble);
  messageDiv.appendChild(time);
  container.appendChild(messageDiv);
  container.scrollTop = container.scrollHeight;
}

export function initChat() {
  const closeBtn = document.getElementById('btn-close-chat');
  const modal = document.getElementById('chat-modal');
  const sendBtn = document.getElementById('btn-send-chat');
  const inputField = document.getElementById('chat-input');

  closeBtn?.addEventListener('click', () => modal?.classList.remove('active'));
  modal?.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('active'); });

  if (sendBtn && inputField) {
    sendBtn.addEventListener('click', () => {
      const msg = inputField.value.trim();
      if (!msg || isWaitingForAI) return;
      inputField.value = '';
      sendMessageToAI(msg);
    });
    inputField.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendBtn.click();
      }
    });
  }
}

export function getChatHistory() {
  return chatHistory;
}
