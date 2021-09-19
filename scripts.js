const myNav = document.getElementById('nav');
window.onscroll = function () {
  "use strict";
  if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200) {
    myNav.classList.add("nav--scroll");
  } else {
    myNav.classList.remove("nav--scroll");
  }
};
