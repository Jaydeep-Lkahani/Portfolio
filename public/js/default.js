$(document).ready(function () {
  AOS.init({
    once: true,
  });

  // ************************************************************************
  // START : Header Scroll
  // ************************************************************************

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
      $(".header").addClass("is-scroll");
    } else {
      $(".header").removeClass("is-scroll");
    }
  });

  // ************************************************************************
  // END : Header Scroll
  // ************************************************************************

  // ************************************************************************
  // START : Hamburger
  // ************************************************************************

  $(".hamburger").click(function () {
    $(".hamburger").toggleClass("is-active");
    $(".header nav").toggleClass("is-active");
    $(".header").toggleClass("is-active");
    $("body").toggleClass("is-open-menu");
  });

  // ************************************************************************
  // END : Hamburger
  // ************************************************************************
});
