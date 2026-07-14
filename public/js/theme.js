/**
 * Theme Toggle for DemoV3 - Mujer Bonita GT
 * Switches between .theme-vino (wine) and .theme-aqua styles
 */
function toggleTheme() {
  const body = document.body;
  const icon = document.getElementById('themeIcon');
  const isVino = body.classList.contains('theme-vino');

  if (isVino) {
    body.classList.remove('theme-vino');
    body.classList.add('theme-aqua');
    if (icon) icon.textContent = '◇';
    localStorage.setItem('mb_theme', 'aqua');
  } else {
    body.classList.remove('theme-aqua');
    body.classList.add('theme-vino');
    if (icon) icon.textContent = '◈';
    localStorage.setItem('mb_theme', 'vino');
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const saved = localStorage.getItem('mb_theme');
  const body = document.body;
  const icon = document.getElementById('themeIcon');
  if (saved === 'aqua') {
    body.classList.remove('theme-vino');
    body.classList.add('theme-aqua');
    if (icon) icon.textContent = '◇';
  } else {
    body.classList.remove('theme-aqua');
    body.classList.add('theme-vino');
    if (icon) icon.textContent = '◈';
  }
});
