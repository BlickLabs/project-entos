var venturesCarousel = $('.ventures-carousel');

venturesCarousel.owlCarousel ({
  loop: false,
  responsiveClass: true,
  nav: true,
  navText: ['<img class="ventures-navigation" src="img/icons/left-arrow.png" />', '<img class="ventures-navigation" src="img/icons/right-arrow.png" />'],
  dots: true,
  margin: 36,
  onInitialized: counter,
  onTranslated: counter,
  responsive:{
    0:{
      items:1,
    },
    600:{
      items:1,
    },
    1000:{
      items:4,
    }
  }
});

venturesCarousel.each(function(index) {
  $(this).find('.owl-nav, .owl-dots').wrapAll("<div class='ventures-controls'></div>");
});

function counter (event) {
  var element = event.target; // DOM element, in this example .owl-carousel
  var items = event.item.count; // Number of items
  var item = event.item.index + 1; // Position of the current item
  $('#ventures-counter-init').html("0" + item)
  $('#ventures-counter-total').html("0" + items)
}
