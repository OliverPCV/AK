$(document).ready(function () {
  var $container2 = $(".container2");
    if ($(document).scrollTop() > $container2.height()) {
      var $nav = $("#header");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());

    }
  $(window).scroll(function () {
    var $container2 = $(".container2");
    if ($(document).scrollTop() > $container2.height()) {
      var $nav = $("#header");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());

    } else if (($(document).scrollTop() < $container2.height())) {
      header.classList.remove("scrolled");
      $nav.toggleClass('hovno', $(this).scrollTop() < $nav.height());
    }
  });
});

function myFunction() {
  var x = document.getElementById("myNav");
  if (x.className === "nav-menu") {
      x.className += " responsive";
  } else {
      x.className = "nav-menu";
  }
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



/*$('.navTrigger').click(function () {
  $(this).toggleClass('active');
  console.log("Clicked menu");
  header.classList.remove(".nav-menu");
  $(".nav-menu").toggleClass("nav-resp");
});*/


  // navbar responsive
/*if ($('.nav-menu').length) {
  var $mobile_nav = $('.nav-menu').clone().prop({
    class: 'mobile-nav d-lg-none d-lg-block'
  });
  $('body').append($mobile_nav);
  $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
  $('body').append('<div class="mobile-nav-overly"></div>');

  $(document).on('click', '.mobile-nav-toggle', function(e) {
    $('body').toggleClass('mobile-nav-active');
    $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
    $('.mobile-nav-overly').toggle();
  });

  $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
    e.preventDefault();
    $(this).next().slideToggle(300);
    $(this).parent().toggleClass('active');
  });

  $(document).click(function(e) {
    var container = $(".mobile-nav, .mobile-nav-toggle");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      if ($('body').hasClass('mobile-nav-active')) {
        $('body').removeClass('mobile-nav-active');
        $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
        $('.mobile-nav-overly').fadeOut();
      }
    }
  });
} else if ($(".mobile-nav, .mobile-nav-toggle").length) {
  $(".mobile-nav, .mobile-nav-toggle").hide();
}

// Navigation active state on scroll
var nav_sections = $('section');
var main_nav = $('.nav-menu, #mobile-nav');

$(window).on('scroll', function() {
  var cur_pos = $(this).scrollTop() + 200;

  nav_sections.each(function() {
    var top = $(this).offset().top,
      bottom = top + $(this).outerHeight();

    if (cur_pos >= top && cur_pos <= bottom) {
      if (cur_pos <= bottom) {
        main_nav.find('li').removeClass('active');
      }
      main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
    }
    if (cur_pos < 300) {
      $(".nav-menu ul:first li:first").addClass('active');
    }
  });
});*/
