'use strict';

// 페이지 아래로 스크롤시 Header에 다크 스타일링 적용
const header = document.querySelector('.header');
const headerHeight = header.offsetHeight;

document.addEventListener('scroll', () => {
  // console.log(window.scrollY);
  if (window.scrollY > headerHeight) {
    header.classList.add('header--dark');
  } else {
    header.classList.remove('header--dark');
  }
});

// Home 섹션 아래로 스크롤시 투명하게 처리
const homeCont = document.querySelector('.home__container');
const homeHeight = homeCont.offsetHeight;
// console.log(homeHeight);
document.addEventListener('scroll', () => {
  homeCont.style.opacity = 1 - window.scrollY / homeHeight;
});

// 스크롤 내려가면 arrow up 버튼 노출
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  if (window.scrollY >= homeHeight / 2) {
    arrowUp.style.opacity = 1;
  } else {
    arrowUp.style.opacity = 0;
  }
});

// Nav 토글버튼 클릭 처리
const navbarMenu = document.querySelector('.header__menu');
const navbarToggle = document.querySelector('.header__toggle');

navbarToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
});

// Nav 메뉴 클릭시 메뉴 자동으로 닫기
navbarMenu.addEventListener('click', () => {
  navbarMenu.classList.remove('open');
});
