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

//  highlight navigation
//  $(window).scroll(function() {
//    var windowpos = $(window).scrollTop() + topoffset;
//    $('nav li a').removeClass('active');
//	
//	    if (windowpos > $('#link1').offset().top) {
//      $('nav li a').removeClass('active');
//      $('a[href$="#link1"]').addClass('active');
//    } //windowpos
//
//    if (windowpos > $('#link2').offset().top) {
//      $('nav li a').removeClass('active');
//      $('a[href$="#link2"]').addClass('active');
//    } //windowpos
//
//    if (windowpos > $('#link3').offset().top) {
//      $('nav li a').removeClass('active');
//      $('a[href$="#link3"]').addClass('active');
//    } //windowpos
//
//    if (windowpos > $('#link4').offset().top) {
//      $('nav li a').removeClass('active');
//      $('a[href$="#link4"]').addClass('active');
//    } //windowpos
//	
//    if (windowpos > $('#link6').offset().top) {
//      $('nav li a').removeClass('active');
//      $('a[href$="#link6"]').addClass('active');
//    } //windowpos
//    if (windowpos > $('#link7').offset().top) {
//      $('nav li a').removeClass('active');
//      $('a[href$="#link7"]').addClass('active');
//    } //windowpos
//
//
//  }); //window scroll
  
  
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


 //set up ScrollMagic
  var controller = new ScrollMagic({
    globalSceneOptions: {
      triggerHook: "onEnter"
    }
  });

  //pin the navigation
  var pin = new ScrollScene({
  offset: 0,
  }).setPin('#nav').addTo(controller);
 
   //fancybox
 		$(document).ready(function() {
			/*
			 *  Simple image gallery. Uses default settings
			 */

			$('.fancybox').fancybox();

			/*
			 *  Different effects
			 */

			// Change title type, overlay closing speed
			$(".fancybox-effects-a").fancybox({
				helpers: {
					title : {
						type : 'outside'
					},
					overlay : {
						speedOut : 0
					}
				}
			});

			// Disable opening and closing animations, change title type
			$(".fancybox-effects-b").fancybox({
				openEffect  : 'none',
				closeEffect	: 'none',

				helpers : {
					title : {
						type : 'over'
					}
				}
			});

			// Set custom style, close if clicked, change title type and overlay color
			$(".fancybox-effects-c").fancybox({
				wrapCSS    : 'fancybox-custom',
				closeClick : true,

				openEffect : 'none',

				helpers : {
					title : {
						type : 'inside'
					},
					overlay : {
						css : {
							'background' : 'rgba(238,238,238,0.85)'
						}
					}
				}
			});

			// Remove padding, set opening and closing animations, close if clicked and disable overlay
			$(".fancybox-effects-d").fancybox({
				padding: 0,

				openEffect : 'elastic',
				openSpeed  : 150,

				closeEffect : 'elastic',
				closeSpeed  : 150,

				closeClick : true,

				helpers : {
					overlay : null
				}
			});

			/*
			 *  Button helper. Disable animations, hide close button, change title type and content
			 */

			$('.fancybox-buttons').fancybox({
				openEffect  : 'none',
				closeEffect : 'none',

				prevEffect : 'none',
				nextEffect : 'none',

				closeBtn  : false,

				helpers : {
					title : {
						type : 'inside'
					},
					buttons	: {}
				},

				afterLoad : function() {
					this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
				}
			});


			/*
			 *  Thumbnail helper. Disable animations, hide close button, arrows and slide to next gallery item if clicked
			 */

			$('.fancybox-thumbs').fancybox({
				prevEffect : 'none',
				nextEffect : 'none',

				closeBtn  : false,
				arrows    : false,
				nextClick : true,

				helpers : {
					thumbs : {
						width  : 50,
						height : 50
					}
				}
			});

			/*
			 *  Media helper. Group items, disable animations, hide arrows, enable media and button helpers.
			*/
			$('.fancybox-media')
				.attr('rel', 'media-gallery')
				.fancybox({
					openEffect : 'none',
					closeEffect : 'none',
					prevEffect : 'none',
					nextEffect : 'none',

					arrows : false,
					helpers : {
						media : {},
						buttons : {}
					}
				});

			/*
			 *  Open manually
			 */

			$("#fancybox-manual-a").click(function() {
				$.fancybox.open('1_b.jpg');
			});

			$("#fancybox-manual-b").click(function() {
				$.fancybox.open({
					href : 'iframe.html',
					type : 'iframe',
					padding : 5
				});
			});

			$("#fancybox-manual-c").click(function() {
				$.fancybox.open([
					{
						href : '1_b.jpg',
						title : 'My title'
					}, {
						href : '2_b.jpg',
						title : '2nd title'
					}, {
						href : '3_b.jpg'
					}
				], {
					helpers : {
						thumbs : {
							width: 75,
							height: 50
						}
					}
				});
			});


		});
