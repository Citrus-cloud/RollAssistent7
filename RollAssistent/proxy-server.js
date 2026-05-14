// proxy-server.js - простой прокси для DeepSeek API (только для локальной разработки)

const http = require('http');
const url = require('url');

// ⚠️ ВСТАВЬТЕ СЮДА ВАШ НАСТОЯЩИЙ API-КЛЮЧ DeepSeek
// Получить ключ можно на https://platform.deepseek.com/
const DEEPSEEK_API_KEY = 'ваш_ключ_сюда';

const server = http.createServer(async (req, res) => {
    // Разрешаем запросы с любого источника (для локальной разработки)
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    // Обрабатываем preflight запросы (OPTIONS)
    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }
    
    // Принимаем только POST запросы
    if (req.method !== 'POST') {
        res.writeHead(405);
        res.end('Method Not Allowed');
        return;
    }
    
    let body = '';
    req.on('data', chunk => body += chunk);
    
    req.on('end', async () => {
        try {
            const data = JSON.parse(body);
            const messages = data.messages;
            
            // Отправляем запрос к DeepSeek API
            const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${DEEPSEEK_API_KEY}`
                },
                body: JSON.stringify({
                    model: 'deepseek-chat',
                    messages: messages,
                    temperature: 0.7,
                    max_tokens: 800,
                    stream: false
                })
            });
            
            const result = await response.json();
            const reply = result.choices[0].message.content;
            
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ reply }));
            
        } catch (error) {
            console.error('Proxy error:', error);
            res.writeHead(500);
            res.end(JSON.stringify({ error: 'Ошибка прокси: ' + error.message }));
        }
    });
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`✅ Прокси-сервер запущен на http://localhost:${PORT}`);
    console.log(`📌 В чате используйте адрес: http://localhost:${PORT}/proxy`);
});