$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        nav: true,
        navText: []

    });

    $('.grid').masonry({
        itemSelector:'.grid__item',
        gutter: 35,
        columnWidth: 360
    });  

    $('.latest__preview').masonry({
        itemSelector:'.post-preview',
        gutter: 35,
        columnWidth: 360
    }); 
});

    