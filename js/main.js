
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
        $(".current-img").fadeOut(1000)
        $(".current-img").removeClass("current-img")
        $("#top-image-apparel").addClass("current-img")
        $("#top-image-apparel").fadeIn(1000)
    }
});

$('.header-snap').hover(function () {
    if ($("#top-image-snap").hasClass("current-img") == false) {
        $(".current-img").fadeOut(1000)
        $(".current-img").removeClass("current-img")
        $("#top-image-snap").addClass("current-img")
        $("#top-image-snap").fadeIn(1000)
    }
});

$('.header-men').hover(function () {
    if ($("#top-image-men").hasClass("current-img") == false) {
        $(".current-img").fadeOut(1000)
        $(".current-img").removeClass("current-img")
        $("#top-image-men").addClass("current-img")
        $("#top-image-men").fadeIn(1000)
    }
});


$('.header-women').hover(function () {
    if ($("#top-image-women").hasClass("current-img") == false) {
        $(".current-img").fadeOut(1000)
        $(".current-img").removeClass("current-img")
        $("#top-image-women").addClass("current-img")
        $("#top-image-women").fadeIn(1000)
    }
});

$('.header-contact').hover(function () {
    if ($("#top-image-contact").hasClass("current-img") == false) {
        $(".current-img").fadeOut(1000)
        $(".current-img").removeClass("current-img")
        $("#top-image-contact").addClass("current-img")
        $("#top-image-contact").fadeIn(1000)
    }
});


