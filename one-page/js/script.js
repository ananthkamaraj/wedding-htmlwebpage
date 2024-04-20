/*----------------------------------------------------------------------

Theme Name :  Festive - Responsive Wedding HTML5 & Bootstrap5 Template
Version    :  1.0.0
Author     :  platinum_themes
URL        :  https://themeforest.net/user/platinum_themes

------------------------------------------------------------------------*/

/* ----------------------------------------------------------------------

>>> TABLE OF CONTENTS:

01. Wedding Countdown
02. The animation of elements on scroll with scrollWaypoint
03. Nav link/menu active and color change based on the current section on scroll
04. Back to top

------------------------------------------------------------------------ */


jQuery(function() {
  /*=========================== START - 01.Wedding Countdown ===========================*/
    const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

    let countDown = new Date('April 1, 2023 00:00:00').getTime();

    setInterval(function() {
        let now = new Date().getTime(),
        distance = countDown - now;

        let days = Math.floor(distance / (day));
        let hours = Math.floor((distance % (day)) / (hour));
        let minutes = Math.floor((distance % (hour)) / (minute));
        let seconds = Math.floor((distance % (minute)) / second);

        $('.days').html(days);
        $('.hours').html(hours);
        $('.minutes').html(minutes);
        $('.seconds').html(seconds);

    }, second);
  /*=========================== END - 01.Wedding Countdown ===========================*/

  
  /*=========================== START - 02.The animation of elements on scroll with scrollWaypoint===========================*/
    function scrollWaypointInit( items, trigger ) {
      items.each( function() {
        var element = $(this),
            osAnimationClass = element.data("animation"),
            osAnimationDelay = element.attr('data-animation-delay');
      
        element.css({
            '-webkit-animation-delay':  osAnimationDelay,
            '-moz-animation-delay':     osAnimationDelay,
            'animation-delay':          osAnimationDelay
        });
      
        var trigger = ( trigger ) ? trigger : element;
      
        trigger.waypoint(function() {
            element.addClass('animated').addClass(osAnimationClass);
        },{
            // triggerOnce: true,
            offset: '100%'
        });
      });
    }
    
    scrollWaypointInit( $('.slider-animation') );
    scrollWaypointInit( $('.timeline-panel') );
    scrollWaypointInit( $('.couples-animation') );
    scrollWaypointInit( $('.wedding-events') );
    scrollWaypointInit( $('.place-around') );
    scrollWaypointInit( $('.groomsmen-bridesmaid') );
    scrollWaypointInit( $('.gallery-animation') );
    scrollWaypointInit( $('.gift-animation') );
    scrollWaypointInit( $('.footer-animation') );
    scrollWaypointInit( $('#countdown') );
  /*=========================== END - 02.The animation of elements on scroll with scrollWaypoint===========================*/


  /*=========================== START - 03.Nav link/menu active and color change based on the current section on scroll ===========================*/
    $(document).on('click', '.header-link', function (event) {
      event.preventDefault();

      $('html, body').animate({
          scrollTop: $($.attr(this, 'href')).offset().top+1
      }, 100);
      return false;
    });

  
    function updateNav(sectionClass, navLinkClass) {
        var scroll = $(window).scrollTop();
        var objectSelect = $(sectionClass);
        var objectPosition = objectSelect.offset().top;

        var $header = $('.header');
        
        if (scroll == 0) {
          $header.removeClass('displayNav');
        }

        if (scroll > objectPosition) {
            $header.addClass('displayNav');

            $('.link-home').removeClass('header-link-active');
            $('.link-story').removeClass('header-link-active');
            $('.link-wedding').removeClass('header-link-active');
            $('.link-gallery').removeClass('header-link-active');
            $('.link-rsvp').removeClass('header-link-active');
            $('.link-gift').removeClass('header-link-active');

            $(navLinkClass).addClass('header-link-active');
        } else {
            $(navLinkClass).removeClass('header-link-active');
        }
    }

    $(window).scroll(function() {
        updateNav('#homeSection', '.link-home');
        updateNav('#storySection', '.link-story');
        updateNav('#weddingSection', '.link-wedding');
        updateNav('#gallerySection', '.link-gallery');
        updateNav('#rsvpSection', '.link-rsvp');
        updateNav('#giftSection', '.link-gift');
    });
  /*=========================== END - 03.Nav link/menu active and color change based on the current section on scroll ===========================*/


  /*=========================== START - 04.Back to top ===========================*/
    $(window).scroll(function () {
      if ($(this).scrollTop() > 50)
        $('#backToTop').fadeIn();
      else
        $('#backToTop').fadeOut();
    });

    $('#backToTop').click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 400);

      return false;
    });
  /*=========================== END - 04.Back to top ===========================*/

});

//END of file