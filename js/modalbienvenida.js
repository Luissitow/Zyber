document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal-proyecto');
  const closeBtn = modal.querySelector('.close-btn');

  // Esperar 3 segundos después de cargar la página
  setTimeout(() => {
    modal.style.display = 'block';
    modal.classList.add('animate-modal');
    console.log('Modal mostrado con animación después de 3 segundos.');
  }, 3000);

  // Cerrar el modal al hacer clic en el botón de cierre
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    console.log('Modal cerrado.');
  });
});
