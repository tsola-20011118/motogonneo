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

for (let step = 1; step < 1000; step++) {
    $(".garalley" + step).hover(function () {
        $(".garalley" + step +" div").fadeIn()
    },
        function () {
            $(".garalley" + step + " div").fadeOut()
        })
}

