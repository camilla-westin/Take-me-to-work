var $ = require("jquery");

$(document).ready(function () {
    $.ajax({
        type:"GET",
        url:"https://api.sl.se/api2/realtimedeparturesV4.json?key=32a8e47d03c2482e8c3a31074afd5f53&siteid=4124&timewindow=5",
        dataType: 'json',
        success:function(data) {
            var busDepartures = data.ResponseData.Buses;
            $.each(busDepartures, function() {
                $('#bus-list').append('<li>' + this['LineNumber'] + ' ' + this['Destination'] + ' ' + this['DisplayTime'] + '</li>');
            });
        },
        error: function(e) {
        console.log("Nope not working..");
        }
    });
});