$(function() {
    //scroll
    $('.scroll-pane').jScrollPane({showArrows: true});
    //account_teacher table
    $('.account__teacher__wrap .open_hidden_open_block').click(function(){

        $(this).next('.hidden_open_block').slideToggle();
    });

    $('.hidden_open_block .close').click(function(){
        $('.hidden_open_block').slideUp();
    });

    $('.button_color').click(function(){
        $(this).next('.change_color').fadeIn();
        return false;
    });

    $('.change_color .close').click(function(){
        $(this).parents('.change_color').fadeOut();

    });


    $('.change_color li a').click(function(){
        $(this).parents(".change_color").find("li").find("a").removeClass("active");
        $(this).addClass("active");
        return false;

    });
});