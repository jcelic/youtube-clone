// DARK / LIGHT MODE TOGGLE
const darkToggle = document.querySelector('.dark-toggle');
const toggleIcon = document.querySelector('.moon');
const icons = document.querySelectorAll('.icon');

darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  if (toggleIcon.classList.contains('fa-moon')) {
    toggleIcon.classList.replace('fa-moon', 'fa-sun');

    // Change SVG icons from black to white
    icons.forEach(icon => {
      const dataName = icon.getAttribute('data-name');
      icon.src = `img/icons/${dataName}-white.svg`;
    })

    darkToggle.setAttribute('title', 'Light Mode');

  } else {
    toggleIcon.classList.replace('fa-sun', 'fa-moon');

    // Change SVG icons from white to black
    icons.forEach(icon => {
      const dataName = icon.getAttribute('data-name');
      icon.src = `img/icons/${dataName}.svg`;
    })

    darkToggle.setAttribute('title', 'Dark Mode');
  }
})



// MOBILE NAVBAR & OVERLAY
const openNavBtn = document.querySelector('.header__left__open-btn');
const mobSidebar = document.querySelector('.mob-sidebar');
const closeBtn = document.querySelector('.close-btn');
const menuOverlay = document.querySelector('.menu-overlay');

openNavBtn.addEventListener('click', () => {
  mobSidebar.classList.add('active');
  menuOverlay.classList.add('active');
  document.body.style.overflowY = 'hidden';
})

closeBtn.addEventListener('click', closeMobSidebar);


window.addEventListener('click', (e) => {
  if (e.target.classList.contains('menu-overlay')) {
    closeMobSidebar();
  }
})


function closeMobSidebar() {
  mobSidebar.classList.remove('active');
  menuOverlay.classList.remove('active');
  document.body.style.overflowY = 'auto';
}

