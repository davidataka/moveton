function markPageActive() {
  let curPage = document.location.pathname.split('/');
  let navContent = document.getElementsByClassName('nav__link');
  curPage = curPage[curPage.length - 1];
  if (curPage !== '') {
    for (let i = 0; i < navContent.length; i++) {
      let item = navContent[i].outerHTML;
      if (item.includes(curPage)) {
        navContent[i].classList.add('active_button');
      }
    }
  } else {
    navContent[0].classList.add('active_button');
  }
}
document.addEventListener('DOMContentLoaded', markPageActive);
