window.addEventListener('load', () => {
  checkScroll();
  window.addEventListener('scroll', checkScroll);
  document.getElementById('navTrigger').addEventListener('click', toggleMenu);
  document.getElementById('navTrigger').addEventListener('click', menuAnimation);
  document.getElementById('liabout').addEventListener('click', aboutUnrolled);

  // resize
});

function checkScroll() {
  const mainimage = document.getElementById("main-image").clientHeight;
  const nav = document.getElementById("header");

  const aboutsection = document.getElementById("about-section").clientHeight -5;
  const toursection = document.getElementById("tour-section").clientHeight -5;


  var scroll = window.scrollY;
  var windowwidth = window.innerWidth;

  if (windowwidth > 768) {
    if (scroll >= mainimage ) {
    
      nav.classList.add('scrolledAbout');
    } else nav.classList.remove('scrolledAbout');

    if (scroll >= (mainimage + aboutsection)) {

      nav.classList.remove('scrolledAbout');
      nav.classList.add('scrolledTour');
    } else nav.classList.remove('scrolledTour');

    if (scroll >= (mainimage + aboutsection + toursection)) {
      nav.classList.remove('scrolledTour');
      nav.classList.add('scrolledMusic');
    } else nav.classList.remove('scrolledMusic');

  }


}


function toggleMenu() {
  const x = document.getElementById("left-sidebar-off");
  x.classList.toggle("rolled");
  const y = document.getElementById("header");
  y.classList.toggle("rolled");
  const z = document.getElementById("content");
  z.classList.toggle("rolled");
  

}

function aboutUnrolled(){
  const k = document.getElementById("liabout");
  k.classList.toggle('unrolled');
}
const menuAnimation = () => {
  const x = document.getElementById("navTrigger");
  x.classList.toggle('active');
  


}



