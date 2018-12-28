var $ = require("jquery");
var moment = require("moment");

$(document).ready(function() {
    $.simpleWeather({
      location: 'Nacka, Stockholm',
      unit: 'c',
      success: function(weather) {
        if(weather.temp < 1) {
          $('body').addClass('cold');
        } else if (weather.temp < 15) {
            $('body').addClass('medium');
        } else {
          $('body').addClass('warm'); 
        }
        html = '<h1 class="icon-'+weather.code+'"></h1>';
        html += '<h2>'+weather.temp+'&deg;</h2>';
        html += '<ul><li>'+weather.city+'</li>';
        html += '<li class="currently">'+weather.currently+'</li></ul>';
        
        //var timestamp = moment(weather.updated);
        //html += '<p class="updated">Updated '+moment(timestamp).fromNow()+'</p>';
    
        $("#weather").html(html);
      },
      error: function(error) {
        $("#weather").html('<p>'+error+'</p>');
      }
    });
  });