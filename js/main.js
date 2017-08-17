$(document).ready(function () {
  if ($('.slider1').length) {
    $('.slider1').slick({
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000
      // appendArrows: ".appendArrows",
    });
   }
})

$(document).ready(function () {
  if ($('.slider-brands').length) {
    $('.slider-brands').slick({
      infinite: true,
      // autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 6,
      slidesToScroll: 1
    });
  }
})



jQuery(document).ready(function($) {
    var $grid = $('.grid').masonry({
        // options
        itemSelector: '.card-instagram',
        columnWidth: '.persent-size',
        percentPosition: true
    });
    $grid.imagesLoaded().progress(function() {
    	$grid.masonry();
    });
});