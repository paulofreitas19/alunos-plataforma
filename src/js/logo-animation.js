export function initLogoAnimation() {
  const logo = document.querySelector('.logo .img');
  if (!logo) return;

  // roda ao carregar a página
  logo.classList.add('animate-once');

  // roda novamente quando clicar no menu
  document.querySelectorAll('.menu .item a').forEach(link => {
    link.addEventListener('click', () => {
      logo.classList.remove('animate-once');
      void logo.offsetWidth;
      logo.classList.add('animate-once');
    });
  });
}
