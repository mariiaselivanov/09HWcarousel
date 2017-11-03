$(document).ready(function(){
    $('.spoiler_links').click(function(){
        $(this).parent().children('div.spoiler_body').toggle('normal');
        return false;
    });
});

//Tyoma Ryzhov [9:26 PM]
$(document).ready(function(){
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        margin: 0,
        nav: false,
        loop: true,
        navText: [ ' ', ' ' ],
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:true,
                loop:false
            }
        }
    })
});