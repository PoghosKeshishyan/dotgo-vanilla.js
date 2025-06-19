const selectedLang = document.querySelector('.change-lang .selected-lang');
const langDropdown = document.querySelector('.change-lang .lang-dropdown');
const flagArrow = document.querySelector('.change-lang .flag-arrow');
const dropdownParents = document.querySelectorAll('.has-dropdown');
const menu = document.querySelector('.menubar-icon');
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  navbar.classList.remove('active');
})

menu.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

document.addEventListener('click', (e) => {
  const isClickInside = selectedLang.contains(e.target) || langDropdown.contains(e.target);
  const isNavbarClick = navbar.contains(e.target) || menu.contains(e.target);

  if (!isClickInside) {
    langDropdown.classList.remove('active');
    flagArrow.classList.remove('rotate');
  }

  if (!e.target.closest('.has-dropdown')) {
    dropdownParents.forEach(p => p.classList.remove('open'));
  }

  if (!isNavbarClick) {
    navbar.classList.remove('active');
  }
});

selectedLang.addEventListener('click', () => {
  langDropdown.classList.toggle('active');
  flagArrow.classList.toggle('rotate');
});


dropdownParents.forEach(parent => {
  parent.addEventListener('click', (e) => {
    e.preventDefault();

    dropdownParents.forEach(p => {
      if (p !== parent) p.classList.remove('open');
    });

    parent.classList.toggle('open');
  });
});