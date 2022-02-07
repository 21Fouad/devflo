//navbar scroll
let homeHeight = $('.home').outerHeight();
$(window).scroll(function () { 
    let windowScroll = $(window).scrollTop();

    if (windowScroll >= homeHeight) {
        $('.navbar').css({
            transition: 'all 2s',
            backgroundColor:'black'
        });
        $('.btn-up').fadeIn(2000);
    }
    else {
        $('.navbar').css({
            transition: 'all 2s',
            backgroundColor:'transparent'
        });
        $('.btn-up').fadeOut(1000);
    }
    
});

//loading page
$(document).ready(function () {
    $('.load').fadeOut(3000, function (){
        $('body').css('overflow', 'auto')
    });
});

//btn-up
$('.btn-up').click(function () {
    $('body,html').animate({
        scrollTop:0
    },1000)
});