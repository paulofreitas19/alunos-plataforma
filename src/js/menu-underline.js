// menu-underline.js
export function initMenuUnderline() {
  const menuItems = document.querySelectorAll('.menu a');
  const underline = document.querySelector('.menu .underline');

  if (!menuItems.length || !underline) return;

  // garante transição suave
  underline.style.transition =
    'transform 0.45s cubic-bezier(0.25, 1.25, 0.5, 1), width 0.45s ease';

  menuItems.forEach(item => {
    item.addEventListener('mouseenter', (e) => {
      const rect = e.target.getBoundingClientRect();
      const parentRect = e.target.parentElement.getBoundingClientRect();

      const offsetLeft = rect.left - parentRect.left;
      const width = rect.width;

      underline.style.width = `${width}px`;
      underline.style.transform = `translateX(${offsetLeft}px)`;
    });
  });

  // ao sair do menu, esconde a underline
  document.querySelector('.menu').addEventListener('mouseleave', () => {
    underline.style.width = '0';
  });
}
