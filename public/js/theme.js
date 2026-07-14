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
    if (icon) icon.textContent = '🍷';
    localStorage.setItem('mb_theme', 'aqua');
  } else {
    body.classList.remove('theme-aqua');
    body.classList.add('theme-vino');
    if (icon) icon.textContent = '🎨';
    localStorage.setItem('mb_theme', 'vino');
  }
}

// Apply saved theme on page load
(function applySavedTheme() {
  const saved = localStorage.getItem('mb_theme');
  if (saved === 'aqua') {
    document.body.classList.remove('theme-vino');
    document.body.classList.add('theme-aqua');
    const icon = document.getElementById('themeIcon');
    if (icon) icon.textContent = '🍷';
  }
})();
