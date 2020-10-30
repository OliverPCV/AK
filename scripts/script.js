window.addEventListener('load', () => {
  window.addEventListener('scroll', checkScroll);
  document.getElementById('navTrigger').addEventListener('click', toggleMenu);
  document.getElementById('navTrigger').addEventListener('click', menuAnimation);

});

function checkScroll() {
  const mainimage = document.getElementById("main-image").clientHeight;
  const nav = document.getElementById("header");
  var scroll = window.scrollY;
  
  if(scroll >= mainimage) nav.classList.toggle('scrolled');
  else nav.classList.remove('scrolled');
  
}


function toggleMenu() {
 
  const x = document.getElementById("myNav");
  x.classList.toggle("responsive");
  const y = document.getElementById("nav-socials");
  y.classList.toggle("responsive");
}

const menuAnimation = () => {
  const x = document.getElementById("navTrigger");
  x.classList.toggle('active');
  
  
}

/*const navSlide = () => {
  const burger = document.querySelector('.navTrigger');
  const nav = document.querySelector('.nav-menu');
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
  });
}
navSlide();
*/

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

