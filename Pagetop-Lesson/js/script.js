$(function(){
    $('#back a').on('click', function () {
        $('body, html').animate({
            scrollTop:0
        }, 800);
        // 複雑なアニメーションを制御するために時間を制御したり、プロパティを指定したりするポケットを持っている
        // これから複雑なアニメーションの動きを設定するときに記述が増えてくるんじゃないかと思われる。
            return false;
            // functionの機能を中断させるための"return false"、この記述がないとjqueryの動作が止まらずトップにとどまったりしてしまうため記述される
    });
});