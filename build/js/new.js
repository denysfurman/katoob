$(function() {

    $('.account__teacher__wrap .open_hidden_open_block').click(function(){
        $('.hidden_open_block').fadeOut();
        $(this).next('.hidden_open_block').slideToggle();


        return false;
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

    $('.open_text_panel').click(function(){
        $(this).parents(".add-lesson__file").sibling('.add_text_hidden').fadeIn();
        return false;
    });

    var editor = window.pell.init({
        element: document.getElementById('pell'),
        defaultParagraphSeparator: 'p',
        styleWithCSS: false,

        onChange: function (html) {
            // document.getElementById('text-output').innerHTML = html
            // document.getElementById('html-output').textContent = html
            //console.log(html);
        }
    })
});



(function($){
    $(window).on("load",function(){

        $.mCustomScrollbar.defaults.theme="inset"; //set "inset" as the default theme
        $.mCustomScrollbar.defaults.scrollButtons.enable=true; //enable scrolling buttons by default



        $(".outer,.nestedm,.custom_scroll").mCustomScrollbar();



    });
})(jQuery);
