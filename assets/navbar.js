// Activate Offcanvas Bootstrap On Navbar
(function () {
  'use strict'

  document.querySelector('[data-bs-toggle="offcanvas"]').addEventListener('click', function () {
    document.querySelector('.offcanvas-collapse').classList.toggle('open')
  })
  })()

// Activate Shrink Navbar
var nav = document.querySelector('nav');

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 500) {
    nav.classList.add('bg-dark', 'shadow');
    nav.classList.add('shrink');
  } else {
    nav.classList.remove('bg-dark', 'shadow');
    nav.classList.remove('shrink');
  }
});