var $ = require("jquery");

$(document).ready(function () {
    $.ajax({
        type:"GET",
        url:"https://api.sl.se/api2/deviations.json?key=eba7171c8a14444b8ce179d37d0f7ceb&transportMode=bus&lineNumber=471,444,446",
        dataType: 'json',
        success:function(data) {
            var message = data.ResponseData;
            $.each(message, function() {
                $('#disturbance-info').append('<li><h3>' + this['Header'] + '</h3><div class="details">' + this['Details'] + '</div></li>');
            });
        },
        error: function(e) {
        console.log("Nope not working..");
        }
    });
});