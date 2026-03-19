function checkPassword() {
  const input = document.getElementById('pwd-input').value;
  if (input.trim().toLowerCase() === "22032003") {
    document.getElementById('scene-password').classList.add('hidden');
    document.getElementById('scene-bouquet').classList.remove('hidden');
  } else {
    const err = document.getElementById('pwd-error');
    err.classList.remove('hidden');
    document.getElementById('pwd-input').value = '';
    document.getElementById('pwd-input').focus();
    setTimeout(() => err.classList.add('hidden'), 2000);
  }
}

const COLORS = ['#e91e8c','#c2185b','#ff69b4','#ffb6d9','#880040','#d63f80','#ffc1dc'];

function goStart() {
  document.getElementById('scene-card').classList.add('hidden');
  document.getElementById('scene-bouquet').classList.remove('hidden');
  document.getElementById('cake-section').classList.remove('visible');
  document.getElementById('click-btn').classList.remove('hidden');
  document.getElementById('status-msg').textContent = 'Listo.';
}

function showCard() {
  document.getElementById('scene-bouquet').classList.add('hidden');
  document.getElementById('scene-card').classList.remove('hidden');
  document.getElementById('status-msg').textContent = '¡Abriendo mensaje... 🌸';
  spawnConfetti();
}

function spawnConfetti() {
  const win = document.querySelector('.window');
  const rect = win.getBoundingClientRect();

  for (let i = 0; i < 32; i++) {
    const el = document.createElement('div');
    el.className = 'confetti-piece';
    el.style.background = COLORS[Math.floor(Math.random() * COLORS.length)];
    el.style.position = 'fixed';
    el.style.left = (rect.left + Math.random() * rect.width) + 'px';
    el.style.top  = (rect.top  + Math.random() * rect.height * .6) + 'px';
    const angle = Math.random() * 360;
    const dist  = 50 + Math.random() * 100;
    el.style.setProperty('--tx', Math.cos(angle * Math.PI / 180) * dist + 'px');
    el.style.setProperty('--ty', Math.sin(angle * Math.PI / 180) * dist + 'px');
    el.style.animationDuration = (.5 + Math.random() * .5) + 's';
    document.body.appendChild(el);
    el.addEventListener('animationend', () => el.remove());
  }
}

function reveal() {
  document.getElementById('click-btn').classList.add('hidden');

  const section = document.getElementById('cake-section');
  section.classList.add('visible');

  document.getElementById('status-msg').textContent = '¡Feliz cumpleaños! 🎂';

  spawnConfetti();
  setTimeout(spawnConfetti, 300);
  setTimeout(spawnConfetti, 600);
}
