$(document).ready(function () {

   var c, currentScrollTop = 0,
       navbar = $('.subnav');

   $(window).scroll(function () {
      var a = $(window).scrollTop();

      currentScrollTop = a;

      if (c <= currentScrollTop) {
        navbar.addClass("scrollUp");
      } else {
        navbar.removeClass("scrollUp");
      }
      c = currentScrollTop;
  });

});
