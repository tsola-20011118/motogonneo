
// $('.top-image').click(function () {
//     var le = $(this).offset().left - window.innerWidth;
//     var leto;
//     if (le == window.innerWidth * -5) {
//         leto = 0;
//     } else {
//         leto = $(this).offset().left - window.innerWidth
//     }
//     $(this).animate({
//         left: leto
//     });
// });


$('.header-apparel').hover(function () {
    if ($("#top-image-apparel").hasClass("current-img") == false) {
        $(".current-img").fadeOut(500)
        $(".current-img").removeClass("current-img")
        $("#top-image-apparel").addClass("current-img")
        $("#top-image-apparel").fadeIn(500)
        $(".top-images-title").animation(function () {
            borderTop: 100
        })
    }
});

$('.header-snap').hover(function () {
    if ($("#top-image-snap").hasClass("current-img") == false) {
        $(".current-img").fadeOut(500)
        $(".current-img").removeClass("current-img")
        $("#top-image-snap").addClass("current-img")
        $("#top-image-snap").fadeIn(500)
    }
});

$('.header-men').hover(function () {
    if ($("#top-image-men").hasClass("current-img") == false) {
        $(".current-img").fadeOut(500)
        $(".current-img").removeClass("current-img")
        $("#top-image-men").addClass("current-img")
        $("#top-image-men").fadeIn(500)
    }
});


$('.header-women').hover(function () {
    if ($("#top-image-women").hasClass("current-img") == false) {
        $(".current-img").fadeOut(500)
        $(".current-img").removeClass("current-img")
        $("#top-image-women").addClass("current-img")
        $("#top-image-women").fadeIn(500)
    }
});

$('.header-contact').hover(function () {
    if ($("#top-image-contact").hasClass("current-img") == false) {
        $(".current-img").fadeOut(500)
        $(".current-img").removeClass("current-img")
        $("#top-image-contact").addClass("current-img")
        $("#top-image-contact").fadeIn(500)
    }
});

$(".garalley1").hover(function(){
    $(".garalley1 div").fadeIn()
},
    function () {
        $(".garalley1 div").fadeOut()
    })

$(".garalley2").hover(function () {
    $(".garalley2 div").fadeIn()
},
    function () {
        $(".garalley2 div").fadeOut()
    })

$(".garalley3").hover(function () {
    $(".garalley3 div").fadeIn()
},
    function () {
        $(".garalley3 div").fadeOut()
    })

$(".garalley4").hover(function () {
    $(".garalley4 div").fadeIn()
},
    function () {
        $(".garalley4 div").fadeOut()
    })

$(".garalley5").hover(function () {
    $(".garalley5 div").fadeIn()
},
    function () {
        $(".garalley5 div").fadeOut()
    })

$(".garalley6").hover(function () {
    $(".garalley6 div").fadeIn()
},
    function () {
        $(".garalley6 div").fadeOut()
    })

$(".garalley7").hover(function () {
    $(".garalley7 div").fadeIn()
},
    function () {
        $(".garalley7 div").fadeOut()
    })

$(".garalley8").hover(function () {
    $(".garalley8 div").fadeIn()
},
    function () {
        $(".garalley8 div").fadeOut()
    })

$(".garalley9").hover(function () {
    $(".garalley9 div").fadeIn()
},
    function () {
        $(".garalley9 div").fadeOut()
    })

$(".garalley10").hover(function () {
    $(".garalley10 div").fadeIn()
},
    function () {
        $(".garalley10 div").fadeOut()
    })