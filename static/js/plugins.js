/*global $ */
/*======================================================================
  hover drop down menu
*/
$("document").ready(function () {
    "use strict";
    $(".dropdown").mouseenter(function () {
        
        $(this).children(".dropdown-menu").slideDown(800);
    });
    $(".dropdown").mouseleave(function () {
        $(this).children(".dropdown-menu").slideUp();
    });
    
    $(".nav-bar a").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
    });
    
    
//Animate Social media facebook and youtube 
    $('.media1, .media2').mouseenter(function () {
        $(this).animate({'marginRight': '90px'}, 1200);
    });
    $('.media1, .media2').mouseleave(function () {
        $(this).animate({'marginRight': '0px'}, 1200);
    });
});




/*======================================================================
 collection */

$(document).ready(function () {
    "use strict";
// Animate collection info photos on hover 
    $(".info").mouseenter(function () {
        $(this).animate({marginTop: "0px", borderRadius: "20px"}, 800);
    });
    $(".info").mouseleave(function () {
        $(this).animate({marginTop: "180px", borderRadius: "0px"}, 800);
    });
});

// Animate hand and awwor down to move every 0.5  second
setInterval(function () {
    "use strict";
    $('.animate-hand').slideUp('500', function () {
        $('.animate-hand').slideDown('500');
    });
}, 1000);
            
setInterval(function () {
    "use strict";
    $('.down2').slideUp('500', function () {
        $('.down2').slideDown('500');
    });
}, 1000);



/*======================================================================
  practical information
*/

$('.heading').click(function () {
    "use strict";
    $(this).next('div').slideToggle(700);
    $("div.information").not($(this).next()).slideUp(700);
});



// Scroll up code
$(window).scroll(function () {
    "use strict";
    if ($(this).scrollTop() >= 500) {
        $(".scroll_top").fadeIn(500);
    } else {
        $(".scroll_top").fadeOut(500);
    }
   
});

//this function shouldn't be inside the function scroll or we will have error scroll 
$(".scroll_top").click(function () {
    "use strict";
    $("body, html").animate({scrollTop: 0}, 600);
});


// Overlay loading page code "Loading...."
$(window).load(function () {
    "use strict";
    $('body').css("overflow", "auto");
    $(".loading-overlay .spinner").fadeOut(500, function () {
        $(this).parent().fadeOut(500);
    });

});



// compatibility IE Mobile

if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement('style');
    msViewportStyle.appendChild(
        document.createTextNode(
            '@-ms-viewport{width:auto!important}'
        )
    );
    document.querySelector('head').appendChild(msViewportStyle);
}
