import './style/style.less';
import './style/mobile.less';

const headerListLink = document.querySelectorAll('.header__link'),
      headerLinks = document.querySelector('.header__links'),
      burgerBtn = document.querySelector('.burger'),
      closeBtn = document.querySelector('.close'),
      headerDesktop = document.querySelector('.header__desktop'),
      headerMobile = document.querySelector('.header__mobile');

headerLinks.addEventListener('click', event => {
  const target = event.target;
  headerListLink.forEach( elem => {
    if (elem.classList.contains("header__link_active")) {
      elem.classList.remove("header__link_active");
    }
  });

  target.classList.toggle("header__link_active");
});

burgerBtn.addEventListener('click', () => {
  headerDesktop.classList.toggle('d-none');
  headerMobile.classList.toggle('d-none');
});

closeBtn.addEventListener('click', () => {
  headerDesktop.classList.toggle('d-none');
  headerMobile.classList.toggle('d-none');
});

window.addEventListener('resize', () => {
  const screenWidth = document.documentElement.clientWidth
  if (screenWidth > 768 && headerDesktop.classList.contains('d-none')) {
    headerDesktop.classList.toggle('d-none');
    headerMobile.classList.toggle('d-none');
  }
})
