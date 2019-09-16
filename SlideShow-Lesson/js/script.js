$('document').ready(function(){
    $(".theTarget").skippr();
});

// skipprの初期化

$(".theTarget").skipper({
    transition : 'fade',
    speed : 1000,
    easing : 'easeOutquart',
    navType : 'blocd',
    childrenElementType : 'div',
    arrows : true,
    autoPlay : false,
    autoPlayDuration : 5000,
    keyboardOnAlways : true,
    hidePrevious : false
});