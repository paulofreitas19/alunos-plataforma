// src/js/select-students.js
export function initSelectStudents() {
  const menuIcons = document.querySelectorAll('#menu-alunos .icon');
  const cards = document.querySelectorAll('#cards-alunos .card');

  if (!menuIcons.length || !cards.length) return;

  menuIcons.forEach(icon => {
    icon.addEventListener('click', () => {
      const target = icon.dataset.student;

      // Remove seleção anterior
      menuIcons.forEach(i => i.classList.remove('selecionado'));
      cards.forEach(c => c.classList.remove('selecionado'));

      // Ativa o novo
      icon.classList.add('selecionado');
      const cardAtivo = document.getElementById(`card-${target}`);
      if (cardAtivo) cardAtivo.classList.add('selecionado');
    });
  });
}
