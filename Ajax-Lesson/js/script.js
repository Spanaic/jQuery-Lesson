$(function(){
    $('#btn').on('click', function () {
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather?q=" + $('#cityname').val() + "&units=metric&appid=caf587bcee15de705fbdd2a3b8f41c68",
            dataType: "jsonp",

            // ajaxのAPIキーを入力する。データ型を指定する。基本的にはJSON形式
        }).done(function (data){
            $('#place').text(data.name);
            $('#temp_max').text(data.main.temp_max);
            $('#temp_min').text(data.main.temp_min);
            $('#humidity').text(data.main.humidity);
            // idを表す＃を記述することを忘れずに！
            $('#speed').text(data.wind.speed);
            $('#weather').text(data.weather[0].main);
            $('#img').attr("src","http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
            $('#img').attr("alt",data.weather[0].main);
        }).fail(function (data){
            alert('通信に失敗しました。');
        });
    });
});

// $(function(){
//     $('#btn').on('click', function() {
//       // 入力された都市名でWebAPIに天気情報をリクエスト
//       $.ajax({
//         url: "http://api.openweathermap.org/data/2.5/weather?q=" + $('#cityname').val() + "&units=metric&appid=caf587bcee15de705fbdd2a3b8f41c68",
//         dataType : 'jsonp',
//       }).done(function (data){
//           //通信成功
//           // 位置
//           $('#place').text(data.name);
//           // 最高気温
//           $('#temp_max').text(data.main.temp_max);
//           // 最低気温
//           $('#temp_min').text(data.main.temp_min);
//           //　湿度
//           $('#humidity').text(data.main.humidity);
//           //　風速
//           $('#speed').text(data.wind.speed);
//           // 天気
//           $('#weather').text(data.weather[0].main);
//           // 天気アイコン
//           $('img').attr("src","http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
//           $('img').attr("alt",data.weather[0].main);
//       }).fail(function (data) {
//          //通信失敗
//   　　　　alert('通信に失敗しました。');
//       });
//     });
//   });