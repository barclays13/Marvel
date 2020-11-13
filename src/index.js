import './style/style.less';
import './style/mobile.less';

const headerListLink = document.querySelectorAll('.header__link'),
      headerLinks = document.querySelector('.header__links'),
      burgerBtn = document.querySelector('.burger'),
      closeBtn = document.querySelector('.close'),
      headerDesktop = document.querySelector('.header__desktop'),
      headerMobile = document.querySelector('.header__mobile'),
      header = document.querySelector('.header'),
      about = document.querySelector('#about'),
      services  = document.querySelector('#services'),
      footer = document.querySelector('.footer'),
      navBarLines = document.querySelector('.navbar_lines'),
      listNavBarLines = document.querySelectorAll('.navbar__line'),
      headerMobileBtn = headerMobile.querySelector('button'),
      headerLinksMobile = headerMobile.querySelector('.header_links'),
      body = document.querySelector('body');

const toggleMobileMenu = () => {
  headerDesktop.classList.toggle('d-none');
  headerMobile.classList.toggle('d-none');
  body.classList.toggle('hidden');
}


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
  toggleMobileMenu();
});

closeBtn.addEventListener('click', () => {
  toggleMobileMenu();
});

window.addEventListener('resize', () => {
  const screenWidth = document.documentElement.clientWidth;
  if (screenWidth > 768 && headerDesktop.classList.contains('d-none')) {
    toggleMobileMenu();
  }
});

headerMobileBtn.addEventListener('click', () => {
  toggleMobileMenu();
})

headerLinksMobile.addEventListener('click', event => {
  const target = event.target;

  if (target.classList.contains('header__link')) {
    toggleMobileMenu();
  }
});

const setActive = activeElem => {
  listNavBarLines.forEach( elem => {
    if (elem.classList.contains('active')) {
      elem.classList.remove('active');
    }
  });

  activeElem.className = (`${activeElem.className} active`);
  if (activeElem.children[0].innerText === '01' || activeElem.children[0].innerText === '04'){
    listNavBarLines.forEach(elem=> {
      elem.classList.add('white');
      elem.classList.remove('black');
    });
  } else if (activeElem.children[0].innerText === '02' || activeElem.children[0].innerText === '03'){
    listNavBarLines.forEach(elem=> {
      elem.classList.remove('white');
      elem.classList.add('black');
    });
  }
};

navBarLines.addEventListener('click', event => {
  const target = event.target;
  if (target.classList.contains('navbar__line')) {
    setActive(target);
  }  else if (target.classList.contains('line__number') || target.classList.contains('line__name') || target.classList.contains('line__block')) {
    setActive(target.parentElement);
  }
});

window.addEventListener('scroll', () => {
  const getPositionHeaderY = header.getBoundingClientRect().bottom + window.pageYOffset,
    getPositionAboutY = about.getBoundingClientRect().bottom + window.pageYOffset,
    getPositionServicesY = services.getBoundingClientRect().bottom + window.pageYOffset,
    getPositionFooterY = footer.getBoundingClientRect().bottom + window.pageYOffset,
    positionOfNavBar = window.scrollY + (navBarLines.getBoundingClientRect().bottom - navBarLines.getBoundingClientRect().height/2); //486px

  if (positionOfNavBar <  getPositionHeaderY) {
    setActive(listNavBarLines[0]);
  } else if (positionOfNavBar <  getPositionAboutY) {
    setActive(listNavBarLines[1]);
  } else if (positionOfNavBar <  getPositionServicesY) {
    setActive(listNavBarLines[2]);
  } else if (positionOfNavBar < getPositionFooterY) {
    setActive(listNavBarLines[3]);
  } 
});

