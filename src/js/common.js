$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        nav: true,
        navText: []

    });

    $('.grid').masonry({
        itemSelector:'.grid__item',
        gutter: 40,
        columnWidth: 360
    });  
});

    