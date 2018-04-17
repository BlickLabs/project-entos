var clickHandler = ('ontouchstart' in document.documentElement ? "touchstart" : "click");
$("a.go-section").bind(clickHandler, function(e) {
  var targetDiv = $(this).attr('href');
  $('html, body').animate({
      scrollTop: $(targetDiv).offset().top - 30
  }, 800);
});

$('.navbar-link-container').click(function(event){
  $('.active-decorator').removeClass('active-decorator');
  $(this).addClass('active-decorator');
  event.preventDefault();
});
