import './style/style.less';
import './style/mobile.less';

const headerListLink = document.querySelectorAll('.header__link'),
      headerLinks = document.querySelector('.header__links');

headerLinks.addEventListener('click', event => {
  const target = event.target;
  headerListLink.forEach( elem => {
    if (elem.classList.contains("header__link_active")) {
      elem.classList.remove("header__link_active");
    }
  });

  target.classList.toggle("header__link_active");
})

