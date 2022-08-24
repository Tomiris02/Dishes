
$(function() {

    let intro = $("#intro");
    let header = $("#header");
    let subnav = $("#subnav");
    let subnav2 = $(".subnav");
    let search = $("#search");
    let introHight = intro.innerHeight();
    let headerHight = header.innerHeight();
    let scrollTop = $(window).scrollTop();

    headerScroll();

    $(window).on("scroll", function() {
        headerScroll();
    });

    // Scroll 


    function headerScroll() {
        introHight = intro.innerHeight();
        headerHight = header.innerHeight();

        let topScroll = $(this).scrollTop();
        let scrollSpy = introHight - headerHight;
        if (topScroll >= scrollSpy) {
            header.addClass("header--darken");
            subnav.addClass("subnav--darken");
            subnav2.addClass("subnav--darken");
            search.addClass("search--darken");

        } else {
            header.removeClass("header--darken");
            subnav.removeClass("subnav--darken");
            subnav2.removeClass("subnav--darken");
            search.removeClass("search--darken");
        }
    };

    // Modal

    $('[data-modal]').on('click', function(e) {
        e.preventDefault();

        let modal = $(this).data('modal');

        $(modal).addClass('show');

        setTimeout(function() {
            $(modal).find('.modal__content').css({
                transform: 'scale(1)',
                opacity: '1'
            });
        });

    });

    $('[data-close]').on('click', function(event) {
        event.preventDefault();

        let modal = $(this).parents('.modal');


        modal.find('.modal__content').css({
            transform: 'scale(1)',
            opacity: '0'
        });


        setTimeout(function() {
            $('body').removeClass('no-scroll');
            modal.removeClass('show');
        }, 400);
    });

    $('.modal').on('click', function() {

        $('body').removeClass('no-scroll');
        $(this).removeClass('show');

    });

    $('.modal__content').on('click', function(event) {
        event.stopPropagation();
    });

    // MomentsSlider

    let momentsSlider = $("#momentsSlider");

    momentsSlider.slick({
        Infinity: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 800
    });

    // BurgerToggle




    $('#navToggle').on('click', function(event) {
        event.preventDefault();



        $(this).toggleClass('active');
        $('#nav').toggleClass('show');
    });

    $(window).on('resize', function() {

        $("body").removeClass('show-nav');
        $('#navToggle').removeClass('active');
        $('#nav').removeClass('show');

    });


    /* Move-up */

    $('.move-up').on('click', function(e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: 0

        }, 200);
    });

    // Header__logo Scroll

    $('#logo').on('click', function(e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: 0

        }, 200);
    });



});



AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });

var textArray=['World', 'My', 'Welcome', 'Something','Hello']
function myFunction() {
    var value = textArray.shift(); //Get the first item from the array
    textArray.push(value); //Push it back for the cycle to repeat.
    document.getElementById("part1").innerHTML=value;
}


        function myFunction1() {
            document.getElementById("part1").innerHTML="22.000tenge";
        }
        function myFunction2() {
            document.getElementById("part2").innerHTML="106.750tenge";
        }
        function myFunction3() {
            document.getElementById("part3").innerHTML="38.430tenge";
        }
        function myFunction4() {
            document.getElementById("part4").innerHTML="405.650tenge";
        }
        function myFunction5() {
            document.getElementById("part5").innerHTML="72.590tenge";
        }
        function myFunction6() {
            document.getElementById("part6").innerHTML="213.500tenge";
        }
        function myFunction7() {
            document.getElementById("part7").innerHTML="36.296tenge";
        }
        function myFunction8() {
            document.getElementById("part8").innerHTML="234.850tenge";
        }
        function myFunction9() {
            document.getElementById("part9").innerHTML="384.300tenge";
        }

        var curNum=0;
        var arrOfDialogs=['50$','welcome to my program','goodbye']
        function myFunciton1(){
        if(curNum<arrOfDialogs.length)
        document.getElementById('part1').innerHTML=arrOfDialogs[curNum++];
        }


        
//   less = {
//     env: "development",
//     async: false,
//     fileAsync: false,
//     poll: 1000,
//     functions: {},
//     dumpLineNumbers: "comments",
//     relativeUrls: false,
//     rootpath: ":/a.com/"
//   };

// src="less.js"
