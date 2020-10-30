window.addEventListener('load', () => {
  const mainimage = document.getElementsByClassName("main-image").item(0);
  const nav = document.getElementById("header");

  function checkScroll() {
    const isPastImage = window.scrollY > mainimage.clientHeight;
    if (isPastImage) {
      nav.classList.add('scrolled');
      console.log("ahoj");
    }

    else nav.classList.remove('scrolled');
  }
  checkScroll();
  window.addEventListener('scroll', checkScroll);

  document.getElementById('navTrigger').addEventListener('click', toggleMenu);
});

function toggleMenu() {
  const x = document.getElementById("myNav");
  x.classList.toggle("responsive");
  const y = document.getElementById("nav-socials");
  y.classList.toggle("responsive");
}

/*$(document).ready(function () {
  var $mainimage = $(".main-image");
    if ($(document).scrollTop() > $mainimage.height()) {
      var $nav = $("#header");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());

    }
  $(window).scroll(function () {
    var $mainimage = $(".main-image");
    if ($(document).scrollTop() > $mainimage.height()) {
      var $nav = $("#header");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());

    } else if (($(document).scrollTop() < $mainimage.height())) {
      header.classList.remove("scrolled");
      $nav.toggleClass('hovno', $(this).scrollTop() < $nav.height());
    }
  });
});*/


/*const navSlide = () => {
  const burger = document.querySelector('.navTrigger');
  const nav = document.querySelector('.nav-menu');
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
  });
}
navSlide();
*/

