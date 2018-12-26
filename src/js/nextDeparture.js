var $ = require("jquery");

$.ajax({
    type:"GET",
    url:"http://api.sl.se/api2/realtimedeparturesV4.json?key=32a8e47d03c2482e8c3a31074afd5f53&siteid=9192&timewindow=10",
    async: false,
    contentType: "application/json",
    dataType: "jsonp",
    jsonp: 'callback',
    jsonpCallback: 'jsonp_callback',
    success:function(feed) {
        console.log(feed);
    },
    error: function(e) {
       console.log("Nope not working..");
    }
});
