$(function(){

    $('.menu-btn').click(function(){
        $(this).toggleClass('active');
        $('.menu').slideToggle();
    })


});

if($(window).width() < 700) {
    $(function(){
        $('.menu__item--sub').click(function(){
            $(this).toggleClass('active');
            $('.sub-menu').slideToggle();
        })

    });
}

