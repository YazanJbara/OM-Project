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
