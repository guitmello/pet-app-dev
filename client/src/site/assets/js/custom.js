$(window).scroll(function() {
  var scroll = $(window).scrollTop();

  if (scroll >= 100) {
    $("nav#menu").removeClass("transparent");
    $("nav#menu").addClass("nav-flat");
    $("nav#menu ul li a").addClass("navbar-scroll");

  } else {
    $("nav#menu").removeClass("nav-flat");
    $("nav#menu").addClass("transparent");
    $("nav#menu ul li a").removeClass("navbar-scroll");

  }
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});
