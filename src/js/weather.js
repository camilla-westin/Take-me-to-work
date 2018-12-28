var $ = require("jquery");
var moment = require("moment");

$(document).ready(function() {
    $.simpleWeather({
      location: 'Nacka, Stockholm',
      unit: 'c',
      success: function(weather) {
        if(weather.temp > 15) {
          $('body').animate({backgroundColor: '#F7AC57'}, 1500);
        } else {
          $('body').animate({backgroundColor: '#0091c2'}, 1500); 
        }
        html = '<h1 class="icon-'+weather.code+'"></h1>';
        html += '<h2>'+weather.temp+'&deg;</h2>';
        html += '<ul><li>'+weather.city+'</li>';
        html += '<li class="currently">'+weather.currently+'</li></ul>';
        
        var timestamp = moment(weather.updated);
        html += '<p class="updated">Updated '+moment(timestamp).fromNow()+'</p>';
    
        $("#weather").html(html);
      },
      error: function(error) {
        $("#weather").html('<p>'+error+'</p>');
      }
    });
  });