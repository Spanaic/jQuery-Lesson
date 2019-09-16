$(function(){
    $('.menu-trigger').on('click', function () {
        $(this).toggleClass('active');
        $('#sp-menu').fadeToggle();
        return false;
    });
});

// display: none;となっている＃sp-menuクラスを.fadeToggleメソッドで出現させている