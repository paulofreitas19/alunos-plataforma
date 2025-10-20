export function pulseSubtitle() {
  const subtitle = document.querySelector('.logo .text');
  if (!subtitle) return;

  subtitle.classList.remove('animate-underline');
  void subtitle.offsetWidth; // força reflow
  subtitle.classList.add('animate-underline');

  subtitle.addEventListener('animationend', () => {
    subtitle.classList.remove('animate-underline');
  }, { once: true });
}

export function initSubtitleAnimation() {
  // dispara ao carregar
  window.addEventListener('DOMContentLoaded', () => {
    pulseSubtitle();
  });

  // dispara ao clicar no menu
  document.querySelectorAll('.menu .item a').forEach(link => {
    link.addEventListener('click', () => {
      pulseSubtitle();
    });
  });
}
