const menuLinks = document.querySelectorAll(".menu a");

menuLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = link.getAttribute("data-target");

    // desmarca aba ativa
    const abaSelecionada = document.querySelector(".menu .item.selecionada");
    if (abaSelecionada) abaSelecionada.classList.remove("selecionada");
    link.parentElement.classList.add("selecionada");

    // esconde painel ativo
    const painelAtivo = document.querySelector(".painel.selecionado");
    if (painelAtivo) painelAtivo.classList.remove("selecionado");

    // mostra painel clicado
    const painel = document.getElementById("painel-" + target);
    if (painel) painel.classList.add("selecionado");
  });
});
