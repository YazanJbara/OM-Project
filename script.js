const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const sideBar = document.querySelector('.sidebar');
const allContent = document.querySelector('.all-content');

function openSideBar() {
  openMenu.setAttribute('aria-expanded', 'true');
  sideBar.classList.add('open');
  allContent.classList.add('sidebar-open'); // Add class to adjust grid
  openMenu.style.display = 'none';
  closeMenu.style.display = 'block';
}

function closeSideBar() {
  openMenu.setAttribute('aria-expanded', 'false');
  sideBar.classList.remove('open');
  allContent.classList.remove('sidebar-open'); // Remove class to reset grid
  openMenu.style.display = 'block';
  closeMenu.style.display = 'none';
}

openMenu.addEventListener('click', openSideBar);
closeMenu.addEventListener('click', closeSideBar);

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  const modals = document.querySelectorAll('.modal');
  const modalOverlay = document.createElement('div');
  modalOverlay.classList.add('modal-overlay');
  document.body.appendChild(modalOverlay);

  cards.forEach((card) => {
    card.addEventListener('click', () => {
      const modalId = card.getAttribute('data-modal');
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.style.display = 'block';
        modalOverlay.style.display = 'block';
      }
    });
  });

  modals.forEach((modal) => {
    const closeBtn = modal.querySelector('.close');
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
      modalOverlay.style.display = 'none';
    });
  });

  modalOverlay.addEventListener('click', () => {
    modals.forEach((modal) => {
      modal.style.display = 'none';
    });
    modalOverlay.style.display = 'none';
  });
});
