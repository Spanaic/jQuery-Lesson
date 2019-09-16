// $(function() {
//     $('.box1').css({
//         // セレクターを指定してcssメソッドを使ってcssを編集する
//         'background-color': '#0000ff',
//         'height': '100px'
//         // クオーツで囲んだプロパティ:クオーツで囲んだ値,という書き方をする
//     });
// });
// // cssメソッドを使ってる。

// $('セレクタ').css('background-color': '##0000ff');
// // 変更点が一箇所の場合は一行にまとめて記述できる

// $(function(){
//     $('.box1').slideUp();
// });

// slideDownメソッドなど、文字の中間の大文字に注意

// $(function(){
//     $('.box1').show();
//     $('.box1').css({'background-color': '#0000ff'});
// });

// // $(function() {
// //     $('.box1').show();
// //     $('.box1').css({'background-color': '#0000ff'});
// // });

// $(function(){
//     $('.box1').hide();
// })

// $(function(){
//     $('.box1').slideDown();
//         $('.box1').css({
//             'background-color': '#0000FF',
//             'height': '100px',
//             'width': '200px'
//         });
//     $('.box1').slideUp().fadeIn(3000).fadeOut(3000);
//     // $('.box1').fadeIn(3000);
// });

$(function(){
    $('.box1').slideDown(function(){
        $('.box1').css({
            'background-color': '#0000ff',
            'height': '100px',
            'width': '200px'
        }).slideUp();
    });
});