$(document).ready(function() {
    
/* For Sticky navigation */
    
    $('.js--section-features').waypoint(function(direction) {
    
         if (direction == "down") {
            $('nav').addClass('sticky');   
        } else {
            $('nav').removeClass('sticky');
            
        }
    },{ offset: '60px'
    
    }); 
    
    
/* Scroll on buttons */
    
    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
                                   
    });
    
    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 500);
                                   
    });
    
/* Navigation scroll */
    
      $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
                }, 1000);
            return false;
                }
            }
        });
    
      });
    
/* Animations on scroll */
    $('.js--wp-1').waypoint(function(direction) {
       $('.js--wp-1').addClass('animated fadeIn');     
    }, {
        offset: '70%'
    });
    
    $('.js--wp-2').waypoint(function(direction) {
       $('.js--wp-2').addClass('animated fadeInUp');     
    }, {
        offset: '70%'
    });
    
    $('.js--wp-3').waypoint(function(direction) {
       $('.js--wp-3').addClass('animated fadeIn');     
    }, {
        offset: '70%'
    });
    
    $('.js--wp-4').waypoint(function(direction) {
       $('.js--wp-4').addClass('animated pulse');     
    }, {
        offset: '70%'
    });

    
    
/* Mobile navigation */
$('.js--nav-icon').click(function() {
    var nav = $('.js--main-nav');
    var icon = $('.js--nav-icon i');
    
    nav.slideToggle(200);
    
    if (icon.hasClass('icon ion-ios-menu')) {
        
        icon.addClass('ion-ios-close');
        icon.removeClass('ion-ios-menu');
    } else {
        icon.addClass('ion-ios-menu');
        icon.removeClass('ion-ios-close');
    }

    });
    
    var map = new GMaps({
        div: '.map',
        lat: 37.7577627,
        lng: -122.46,
    });
    
    map.addMarker({
      lat: 37.7577627,
      lng: -122.4726194,
      title: 'Lima',
      infoWindow: {
        content: '<p>San Fransisco Head Quarters</p>'
        }
    });

});