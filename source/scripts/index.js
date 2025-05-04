const header = document.querySelector('.page-header__container');
const headerButton = header.querySelector('.page-header__toggler');
const menu = header.querySelector('.nav');

header.classList.remove('page-header__container--nojs');

headerButton.addEventListener('click', () => {
  header.classList.toggle('page-header__container--closed');
  header.classList.toggle('page-header__container--opened');
});
