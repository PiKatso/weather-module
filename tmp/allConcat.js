var apiKey = "5f95d5cb2eaab529f3feef06efee2aed";

$(function(){
  $('#weather-location').click(function() {
    var city = $('#location').val();
    $('.showWeather').text("The city you have chosen is " + city + ".");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
      $('.showWeather').append(response.main.humidity);
    });
  })
});
