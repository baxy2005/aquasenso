// JavaScript Document

  var topoffset = 90;
// Animated Scrolling
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-topoffset
        }, 1000);
        return false;
      } // target.length
    } //location hostname
  }); //on click

  //highlight navigation
  $(window).scroll(function() {
    var windowpos = $(window).scrollTop() + topoffset;
    $('nav li a').removeClass('active');
	
	    if (windowpos > $('#link1').offset().top) {
      $('nav li a').removeClass('active');
      $('a[href$="#link1"]').addClass('active');
    } //windowpos

    if (windowpos > $('#link2').offset().top) {
      $('nav li a').removeClass('active');
      $('a[href$="#link2"]').addClass('active');
    } //windowpos

    if (windowpos > $('#link3').offset().top) {
      $('nav li a').removeClass('active');
      $('a[href$="#link3"]').addClass('active');
    } //windowpos

    if (windowpos > $('#link4').offset().top) {
      $('nav li a').removeClass('active');
      $('a[href$="#link4"]').addClass('active');
    } //windowpos
	
    if (windowpos > $('#link6').offset().top) {
      $('nav li a').removeClass('active');
      $('a[href$="#link6"]').addClass('active');
    } //windowpos
    if (windowpos > $('#link7').offset().top) {
      $('nav li a').removeClass('active');
      $('a[href$="#link7"]').addClass('active');
    } //windowpos


  }); //window scroll
  
  
  $('.owl-carousel').owlCarousel({
    items:1,
    lazyLoad:false,
    loop:true,
	autoplay: false,
	nav:false,
});

  $(".owl-demo").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
	  autoPlay : true,
	  stopOnHover : true,
	  lazyLoad : true,
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
navigationText: [
      "<i class='fa fa-angle-left'></i>",
     "<i class='fa fa-angle-right'></i>"
      ],
	    });
