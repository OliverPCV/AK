window.addEventListener('load', () => {
  checkScroll();
  window.addEventListener('scroll', checkScroll);
  document.getElementById('navTrigger').addEventListener('click', toggleMenu);
  document.getElementById('navTrigger').addEventListener('click', menuAnimation);
// resize
});

function checkScroll() {
  const mainimage = document.getElementById("main-image").clientHeight;
  const nav = document.getElementById("header");
  

  const aboutsection = document.getElementById("about-section").clientHeight;


  var scroll = window.scrollY;
  var windowwidth = window.innerWidth;
  if( windowwidth > 768){
    if (scroll >= mainimage){
      nav.classList.add('scrolled');
      console.log(mainimage);
      console.log(scroll);
    } 
    else nav.classList.remove('scrolled');
  
    if(scroll >= mainimage + aboutsection) {
      nav.classList.remove('scrolled');
      nav.classList.add('scrolledTopic');
    }
    else nav.classList.remove('scrolledTopic');

  }
  

  /*var width = window.innerWidth;

  if(width <= 768){
    nav.classList.remove('scrolled');
  }*/
}


function toggleMenu() {
  const x = document.getElementById("left-sidebar-off");
  x.classList.toggle("rolled");
  const y = document.getElementById("header");
  y.classList.toggle("rolled");
  const z = document.getElementById("content");
  z.classList.toggle("rolled");
  /*const x = document.getElementById("myNav");
  x.classList.toggle("responsive");
  const y = document.getElementById("nav-socials");
  y.classList.toggle("resposnive");
  
  window.addEventListener('click', () => {
      const mp =document.getElementById("main-image");
      const c = document.getElementById("content");
      mp.style.display = "block";
      c.style.display = "block";

  });
  window.addEventListener('click', (e) => {
    if (e.target.classList.contains('responsive')) {
      const mp = document.getElementById("main-image");
      mp.style.display = "block";
      const c = document.getElementById("content");
      c.style.display = "block";
      e.target.classList.remove('responsive');
    } else {
      
      e.target.classList.toggle('responsive');
    }

  });*/
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

