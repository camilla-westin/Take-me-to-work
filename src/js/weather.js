var $ = require("jquery");
var moment = require("moment");

$(document).ready(function() {
    $.simpleWeather({
      location: 'Nacka, Stockholm',
      unit: 'c',
      success: function(weather) {
        if(weather.temp < 5) {
          $('body').addClass('cold');
        } else if (weather.temp < 15) {
            $('body').addClass('medium');
        } else {
          $('body').addClass('warm'); 
        }
        html = '<div class="icon icon-'+weather.code+'"></div>';
        html += '<h2>'+weather.temp+'&deg;</h2>';
        html += '<li class="currently">'+weather.currently+'</li></ul>';
    
        $("#weather").html(html);
      },
      error: function(error) {
        $("#weather").html('<p>'+error+'</p>');
      }
    });
  });