/* Free Code Camp Zipline Project - Local Weather App
*  App loads weather for a default location and user can choose to use their own location 
*  to retrieve local weather. User can also switch between Celsius and Farenhiet. 
*/

$(document).ready(function() {
  // Initialize the app to load default weather stats 
  loadWeather("Dublin", "")
});
// User chooses their location via button below weather widget
$('.js-geolocation').click(function() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
      loadWeather(position.coords.latitude + ',' + position.coords.longitude);
      // Switch unit selector back to celsius default if currently farenheit
      if($('.farenheit').hasClass('selected')){ 
        $('.farenheit').removeClass('selected');
        $('.celsius').addClass('selected');
      } 
    });
  } else {
    $(".error").append('<p>Sorry your browser is not compatible.</p>');
    loadWeather("Dublin", "");
  }
});
// Using simpleWeather API to get weather for current location
function loadWeather(location, woeid) {
  $.simpleWeather({
    location: location,
    woeid: woeid,
    unit: 'c',
    success: function(weather) {
      console.log(weather);
      city = weather.city,
      tempVal = weather.temp;
      temp = weather.temp + '&deg;';
      wcode =
        '<img class="weathericon" src="https://dl.dropboxusercontent.com/u/16631776/images/weathericons/' +
        weather.code + '.svg">';
      wind = '<p>' + weather.wind.speed + '</p><p>' + weather.units.speed +
        '</p>';
      humidity = weather.humidity + ' %';
      $(".location").text(city);
      $(".temperature").html(temp);
      $(".climate_bg").html(wcode);
      $(".windspeed").html(wind);
      $(".humidity").text(humidity);
    },
    error: function(error) {
      $(".error").html('<p>' + error + '</p>');
    }
  });
}
// Change unit of degrees
$('.unit').click(function() {
  var tempToInt = parseInt(tempVal);
  if ($('.celsius').hasClass("selected")) {
    $('.celsius').removeClass("selected");
    $('.farenheit').addClass("selected");
    // Convert Celsius to Farenheit and add new value to temperature element
    var celsiusToFarenheit = (tempToInt * 9 / 5) + 32 + '&deg';
    $(".temperature").html(celsiusToFarenheit);
  } else {
    $('.farenheit').removeClass("selected");
    $('.celsius').addClass("selected");
    // Revert temperature back to default celsius value
    var celsius = tempToInt + '&deg';
    $(".temperature").html(celsius);
  }
});