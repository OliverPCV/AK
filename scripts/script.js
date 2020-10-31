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

  const aboutsection = document.getElementById("about-section").clientHeight;

  var scroll = window.scrollY;
  var windowwidth = window.innerWidth;

  if (windowwidth > 768) {
    if (scroll >= mainimage) {
      nav.classList.add('scrolled');
    } else nav.classList.remove('scrolled');

    if (scroll >= mainimage + aboutsection) {
      nav.classList.remove('scrolled');
      nav.classList.add('scrolledTopic');
    } else nav.classList.remove('scrolledTopic');

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



