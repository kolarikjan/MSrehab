$(document).ready(function () {

    // Homepage banner
    $('#owl-homepageBanner').owlCarousel({
        center: true,
        items:1,
        loop:true,
        margin:1,
        nav:true,
        dots:true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        navText: ["<img src='img/banner-prev.png'>", "<img src='img/banner-next.png'>"]
    });

});