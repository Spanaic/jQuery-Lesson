// $(function(){
//     $('.box1').mouseover(function () {
//         $('.box1').css({'background-color': '#0000FF'});
//     });

//     $('.box1').mouseout(function () {
//         $('.box1').css({'background-color': '#FF0000'});
//     });
// });


// cssファイルにクラスを設定しして、cssの切り替えにクラスを用いる


// $(function(){
//     $('.box1').mouseover(function () {
//         $('.box1').addClass('box1-ext');
//     });

//     $('.box1').mouseout(function () {
//         $('.box1').removeClass('box1-ext');
//     });
// });

// セレクタ内は”.”をつけてセレクタ名を用いるが、class名を入れる場合は"."は含まない

$(function(){
    $('.box1').on('click', function () {
        $('.box1').addClass('box1-ext');
    });

    $('.box1').mouseout(function () {
        $('.box1').removeClass('box1-ext');
    });
});

// onメソッド内のイベントを指定するときも''クオテーションで囲む


