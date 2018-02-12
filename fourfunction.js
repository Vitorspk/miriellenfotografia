(function () {
  window.SliderParallax.init('#introBanner .b__container');
}());
(function () {

  var size = $('.sidenav').length ? 1024 : 768;

  $('#testimonialsContent').owlCarousel({
    autoplay: true,
    loop: $('#testimonialsContent').children().length > 1,
    dots: true,
    nav: true,
    smartSpeed: 1500,
    loadedClass: 'owl-loaded owl-carousel',
    navClass: ['slider-control sc--left', 'slider-control sc--right'],
    autoplayTimeout: 9000,
    items: 1,
    autoHeight: true,
    responsive: {
      [size]: {
        items: 1,
      }
    }
  });
}())
$(document).ready(function () {
  // twemoji.parse(document.body);
});