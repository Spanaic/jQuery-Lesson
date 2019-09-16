// $(function(){
//     $('.bg1').on('click', function () {
//         $('.bg1').slideUp();
//     });
//     $('.bg2').on('click', function () {
//         $('.bg2').slideUp();
//     });
//     $('.bg3').on('click', function () {
//         $('.bg3').slideUp();
//     });
//     $('.bg4').on('click', function () {
//         $('.bg4').slideUp();
//     });
// })

// 上記のように書くと手間なのでthisを使って書いていく

$(function(){
    $('.box1').on('click', function () {
        $(this).slideUp();
    });
});

// thisはクリックされたファンクションを指す。
// box1に対してonメソッドを使うことで、クリックされたオブジェクトに同じ効果をもたらす


$(function(){
    $('button').on('click', function () {
        $('ul').children().css({'color': 'red'});
    });
});

// button要素をクリックしたら下のファンクションが有効になります
// ulタグの子要素（children）全てに影響します。cssの文字色を赤に変更しましょう

