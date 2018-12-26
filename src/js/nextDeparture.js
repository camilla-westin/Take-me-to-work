var $ = require("jquery");

$(document).ready(function () {
    $.ajax({
        type:"GET",
        url:"https://api.sl.se/api2/realtimedeparturesV4.json?key=32a8e47d03c2482e8c3a31074afd5f53&siteid=9192&timewindow=5",
        dataType: 'json',
        success:function(feed) {
            console.log(feed);
        },
        error: function(e) {
        console.log("Nope not working..");
        }
    });
});