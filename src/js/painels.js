export function initPainels() {
  const items = document.querySelectorAll('.menu .item a');
  const painels = document.querySelectorAll('.painel');

  items.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();

      const targetId = link.getAttribute('data-target');
      const targetPainel = document.getElementById(`painel-${targetId}`);

      // remove seleção atual
      painels.forEach(p => p.classList.remove('selecionado'));
      items.forEach(i => i.parentElement.classList.remove('selecionada'));

      // aplica seleção no item e painel certo
      link.parentElement.classList.add('selecionada');
      targetPainel.classList.add('selecionado');
    });
  });
}
