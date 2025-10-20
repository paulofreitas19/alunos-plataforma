// src/js/select-panels.js
export function initSelectPanels() {
  const menu = document.querySelector('.menu');
  const PANELS_PREFIX = 'painel-';

  if (!menu) return;

  function selectMenuItem(li, a) {
    // remove seleção anterior
    document.querySelectorAll('.menu .item.selecionada').forEach(el => el.classList.remove('selecionada'));
    document.querySelectorAll('.menu a.selecionada').forEach(el => el.classList.remove('selecionada'));

    // aplica seleção ao item clicado
    if (li) li.classList.add('selecionada');
    if (a) a.classList.add('selecionada');
  }

  function showPanel(target) {
    if (!target) return;
    const newPanel = document.getElementById(PANELS_PREFIX + target);
    if (!newPanel) return;

    const active = document.querySelector('.painel.selecionado');
    if (active === newPanel) return;

    if (active) active.classList.remove('selecionado');
    newPanel.classList.add('selecionado');
  }

  // delegação de eventos para os cliques no menu
  menu.addEventListener('click', (e) => {
    const a = e.target.closest('a[data-target]');
    if (!a) return;
    e.preventDefault();

    const li = a.closest('.item');
    const target = a.dataset.target;

    if (!li?.classList.contains('selecionada')) {
      selectMenuItem(li, a);
      showPanel(target);
    }
  });
}
