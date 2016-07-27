var http = require("http");

// Utility function that downloads a URL and invokes
// callback with the data.
// 

module.exports = {
	download:function(url,fun){
	  http.get(url, function(res) {
	    var data = "";
	    res.on('data', function (chunk) {
	      data += chunk;
	    });
	    res.on("end", function() {
	      fun({status:1,info:data});
	    });
	  }).on("error", function() {
	    fun({status:0,info:null});
	  });
	},

}





