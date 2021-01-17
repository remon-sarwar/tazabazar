/**
 * Created by USER on 10-Dec-20.
 */




//*-----------------------------------
// nav bar js start
//------------------------------------*//

$(document).ready(function() {

    $(window).resize(function(){
        if ($(window).width() >= 980){

            $(".navbar .dropdown-toggle").hover(function () {
                $(this).parent().toggleClass("show");
                $(this).parent().find(".dropdown-menu").toggleClass("show");
            });

            $( ".navbar .dropdown-menu" ).mouseleave(function() {
                $(this).removeClass("show");
            });

        }
    });

});
//**nav bar js end**//




//*-----------------------------------
// Sticky nev bar js start
//------------------------------------*//

/*Mid nav Start*/



$(window).scroll(function(){
    $('#re').toggleClass('scrolled', $(this).scrollTop() > 60);
});

/*Mid nav end*/

//
//$(document).ready(function(){
//    $(window).scroll(function(){
//        var header_height = $('header').height() + $('.navbar').height();
//        if ($(this).scrollTop() > header_height) {
//            $('.navbar').stop(true, true).addClass('fixed-top').addClass('animated slideInDown');
//        } else {
//            $('.navbar').stop().removeClass('fixed-top');
//        }
//    });
//});
//**Sticky nev bar js end**//



//*-----------------------------------
// Brand js start
//------------------------------------*//

$(document).ready(function(){

    $('#owl-1 .owl-carousel').owlCarousel(
        {
            items: 4,
            margin: 16,
            loop: true,
            stagePadding: 64,
            nav: true,
            navText: ['',''],
            dots: false,
            dotsEach: true,
            lazyLoad: false,
            autoplay: true,
            autoplaySpeed: 600,
            navSpeed: 600,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
        }
    );


});
//* Brand js end*//


//*-----------------------------------
// clock counter js start
//------------------------------------*//
function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        var t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
initializeClock('clockdiv', deadline);

//* Clock counter  js end*//




//*-----------------------------------
// Deaals of the day  product slide start
//------------------------------------*//

var $origin = $("#carouselPlus .carousel-inner").prop("outerHTML");
function multiCarousel(){
    if ( $( "#lg" ).is( ":visible" ) ) {
        do {
            $( "#carouselPlus .carousel-inner" ).children( ".carousel-grid:lt(4)" ).wrapAll( "<div class=\"carousel-item\"><div class=\"row\"></div></div>" );
            $( "#carouselPlus .carousel-inner .carousel-item:first" ).addClass("active");
        } while ( $( "#carouselPlus .carousel-inner" ).children( ".carousel-grid" ).length );
    } else if ( $( "#md" ).is( ":visible" ) ) {
        do {
            $( "#carouselPlus .carousel-inner" ).children( ".carousel-grid:lt(3)" ).wrapAll( "<div class=\"carousel-item\"><div class=\"row\"></div></div>" );
            $( "#carouselPlus .carousel-inner .carousel-item:first" ).addClass("active");
        } while ( $( "#carouselPlus .carousel-inner" ).children( ".carousel-grid" ).length );
    } else {
        do {
            $( "#carouselPlus .carousel-inner" ).children( ".carousel-grid:lt(1)" ).wrapAll( "<div class=\"carousel-item\"><div class=\"row\"></div></div>" );
            $( "#carouselPlus .carousel-inner .carousel-item:first" ).addClass("active");
        } while ( $( "#carouselPlus .carousel-inner" ).children( ".carousel-grid" ).length);
    }
}
$(window).on( "load resize", function() {
    $.when(
        $( "#carouselPlus .carousel-inner" ).replaceWith( $origin ),
        multiCarousel()
    ).done(function() {
            $( ".multi-carousel" ).animate({opacity: "1"}, 1000);
        });
});
//* Deaals of the day  product end*//








//*-----------------------------------
// Recommended product start
//------------------------------------*//
$(function () {
    $(".ra").slice(0, 12).show();
    $("body").on('click touchstart', '.load-more', function (e) {
        e.preventDefault();
        $(".ra:hidden").slice(0, 12).slideDown();
        if ($(".r:hidden").length == 0) {
            $(".load-more").css('visibility', 'hidden');
        }
        //$('html,body').animate({
        //    scrollTop: $(this).offset().top
        //}, 2000);
    });
});
//* Recommended product end*//





//*-----------------------------------
//      scrollTop start
//------------------------------------*//
$(document).ready(function(){
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#back-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});
//* scrollTop end*//







//*------------------------------------
//     cart page js star
//-------------------------------------*//




/* cart page end*/


/************************************************/
/************************************************/
//<script>
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
//</script>









//
///*<script>*/
//function myFunction() {
//    var x = document.getElementById("log-for");
//    if (x.className === "log-for") {
//        x.className += " responsive";
//    } else {
//        x.className = "log-for";
//    }
//}
///*</script>*/

