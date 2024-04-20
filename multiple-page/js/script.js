/*----------------------------------------------------------------------

Theme Name :  Festive - Responsive Wedding HTML5 & Bootstrap5 Template
Version    :  1.0.0
Author     :  platinum_themes
URL        :  https://themeforest.net/user/platinum_themes

------------------------------------------------------------------------*/

/* ----------------------------------------------------------------------

>>> TABLE OF CONTENTS:

01. Nav link/menu active and color change based on the current section on scroll
02. Wedding Countdown
03. The animation of elements on scroll with scrollWaypoint
04. Back to top

------------------------------------------------------------------------ */

jQuery(function() {
  
  /*=========================== START - 01.Nav link/menu active and color change based on the current section on scroll ===========================*/
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;

      if (currentScrollPos==0) {
        document.getElementById("header").style.backgroundColor = "transparent";
        document.getElementById("logo").src = "./images/header/01.png";
        document.getElementById("headerLinkactive").style.color = "white";
        document.getElementById("headerLink2").style.color = "white";
        document.getElementById("headerLink3").style.color = "white";
        document.getElementById("headerLink4").style.color = "white";
        document.getElementById("headerLink5").style.color = "white";
        document.getElementById("headerLink6").style.color = "white";
        document.getElementById("headerLinkactive").style.borderColor = "white";
        document.getElementById("navbarToggler").style.color = "white";
      }

      else{
        document.getElementById("header").style.backgroundColor = "#faf8f8";
        document.getElementById("logo").src = "./images/header/02.png";
        document.getElementById("headerLinkactive").style.color = "black";
        document.getElementById("headerLink2").style.color = "black";
        document.getElementById("headerLink3").style.color = "black";
        document.getElementById("headerLink4").style.color = "black";
        document.getElementById("headerLink5").style.color = "black";
        document.getElementById("headerLink6").style.color = "black";

        document.getElementById("headerLinkactive").style.borderColor = "black";
        document.getElementById("navbarToggler").style.color = "black";
      }
    };
    /*=========================== END - 01.Nav link/menu active and color change based on the current section on scroll ===========================*/

    /*=========================== START - 02.Wedding Countdown ===========================*/
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
    /*=========================== END - 02.Wedding Countdown ===========================*/

  /*=========================== START - 03.The animation of elements on scroll with scrollWaypoint===========================*/
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

    $(document).ready(function(){
      scrollWaypointInit( $('.slider-animation') );
      scrollWaypointInit( $('.couples-animation') );
      scrollWaypointInit( $('.wedding-events') );
      scrollWaypointInit( $('.timeline-panel') );
      scrollWaypointInit( $('.tab-content') );
      scrollWaypointInit( $('.gallery-animate') );
    });
  /*=========================== END - 03.The animation of elements on scroll with scrollWaypoint===========================*/

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