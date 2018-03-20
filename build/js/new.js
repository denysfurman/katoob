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
});