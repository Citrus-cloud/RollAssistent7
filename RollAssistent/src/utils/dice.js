/**
 * Dice rolling utility
 */

export function rollDie(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

export function animateRoll(sides, count, resultsDiv, callback) {
  let animationCount = 0;
  const maxFrames = 10;
  const interval = setInterval(() => {
    let tempHtml = '';
    for (let i = 0; i < count; i++) {
      const fakeResult = Math.floor(Math.random() * sides) + 1;
      tempHtml += `<div class="roll-result">🎲 Бросок ${i + 1}: <strong>${fakeResult}</strong></div>`;
    }
    resultsDiv.innerHTML = tempHtml;
    animationCount++;
    if (animationCount >= maxFrames) {
      clearInterval(interval);
      callback();
    }
  }, 50);
}

export function performRoll(sides, count, advantage) {
  let total = 0;
  let resultsHtml = '';

  if (advantage === 'normal') {
    for (let i = 0; i < count; i++) {
      const roll = rollDie(sides);
      total += roll;
      resultsHtml += `<div class="roll-result">🎲 Бросок ${i + 1}: <strong>${roll}</strong></div>`;
    }
    resultsHtml += `<div class="roll-summary">📊 Сумма: ${total}</div>`;
  } else if (advantage === 'advantage') {
    for (let i = 0; i < count; i++) {
      const roll1 = rollDie(sides);
      const roll2 = rollDie(sides);
      const best = Math.max(roll1, roll2);
      total += best;
      resultsHtml += `<div class="roll-result">🎲 Бросок ${i + 1}: <span class="advantage-detail">[${roll1}, ${roll2}] → </span><strong>${best}</strong> (преимущество)</div>`;
    }
    resultsHtml += `<div class="roll-summary">📊 Сумма: ${total}</div>`;
  } else if (advantage === 'disadvantage') {
    for (let i = 0; i < count; i++) {
      const roll1 = rollDie(sides);
      const roll2 = rollDie(sides);
      const worst = Math.min(roll1, roll2);
      total += worst;
      resultsHtml += `<div class="roll-result">🎲 Бросок ${i + 1}: <span class="advantage-detail">[${roll1}, ${roll2}] → </span><strong>${worst}</strong> (помеха)</div>`;
    }
    resultsHtml += `<div class="roll-summary">📊 Сумма: ${total}</div>`;
  }

  return resultsHtml;
}
