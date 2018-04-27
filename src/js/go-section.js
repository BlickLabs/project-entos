var clickHandler = ('ontouchstart' in document.documentElement ? "touchstart" : "click");
var scrollLink = $('a.go-section');
scrollLink.bind(clickHandler, function(e) {
  var targetDiv = $(this).attr('href');
  console.log(targetDiv);
  $('html, body').animate({
      scrollTop: $(targetDiv).offset().top - 100
  }, 800);
});

$(window).scroll(function() {
  var scrollbarLocation = $(this).scrollTop();
  
  scrollLink.each(function() {
    
    var sectionOffset = $(this.hash).offset().top - 500;
    
    if ( sectionOffset <= scrollbarLocation ) {
      $(this).parent().addClass('active');
      $(this).parent().siblings().removeClass('active');
    }
  });  
});
