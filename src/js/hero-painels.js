document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu');
  const logo = document.querySelector('.logo .img');
  const PANELS_PREFIX = 'painel-';

  if (!menu) return;

  function pulseLogoInline() {
    if (!logo) return;
    // 1) zera a animação atual
    logo.style.animation = 'none';
    // 2) força reflow (garante que o browser “aceite” a mudança)
    //    use qualquer propriedade de leitura: offsetWidth, offsetHeight etc.
    void logo.offsetWidth;
    // 3) aplica a animação de novo inline
    logo.style.animation = 'logoLoad 1.5s ease forwards';
    // 4) limpar ao terminar para poder re-disparar no próximo clique
    logo.addEventListener('animationend', () => {
      logo.style.animation = '';
    }, { once: true });
  }

  function pulseSubtitle() {
    const subtitle = document.querySelector('.logo .text');
    if (!subtitle) return;

    // remove a classe, se já tiver
    subtitle.classList.remove('animate-underline');

    // força reflow para reiniciar
    void subtitle.offsetWidth;

    // adiciona a classe que anima o ::after
    subtitle.classList.add('animate-underline');

    // remove depois que terminar a animação
    subtitle.addEventListener('animationend', () => {
      subtitle.classList.remove('animate-underline');
    }, { once: true });
  }

  // 🔹 dispara assim que a página carregar
  window.addEventListener('DOMContentLoaded', () => {
    pulseSubtitle();
  });

  // 🔹 também dispara quando clicar no menu
  document.querySelectorAll('.menu .item a').forEach(link => {
    link.addEventListener('click', () => {
      pulseSubtitle();
    });
  });


  function selectMenuItem(li, a) {
    document.querySelectorAll('.menu .item.selecionada').forEach(el => el.classList.remove('selecionada'));
    document.querySelectorAll('.menu a.selecionada').forEach(el => el.classList.remove('selecionada'));
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

  document.addEventListener("DOMContentLoaded", () => {
    const subtitle = document.querySelector(".logo .text");
    const menuItems = document.querySelectorAll(".menu .item a");

    // 🔹 animação inicial ao carregar
    subtitle.classList.add("animate-underline");

    // 🔹 remove a classe ao terminar, para poder reusar depois
    subtitle.addEventListener("animationend", () => {
      subtitle.classList.remove("animate-underline");
    });

    // 🔹 ao clicar em item do menu, dispara a animação novamente
    menuItems.forEach(item => {
      item.addEventListener("click", () => {
        subtitle.classList.add("animate-underline");
      });
    });
  });

  // delegação de eventos: funciona clicando no <a> ou em filhos dele
  menu.addEventListener('click', (e) => {
    const a = e.target.closest('a[data-target]');
    if (!a) return;
    e.preventDefault();

    const li = a.closest('.item');
    const target = a.dataset.target;

    // reanima o logo no clique
    pulseLogoInline();
    pulseSubtitle();

    // troca de painel
    if (!li?.classList.contains('selecionada')) {
      selectMenuItem(li, a);
      showPanel(target);
    }
  });
});
