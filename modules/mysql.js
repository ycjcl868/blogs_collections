var mysql = require('mysql');
var config = require('../conf/conf');

var connection = mysql.createConnection(config.database);
connection.connect();

module.exports = {
	stored: function(title,bloger,fun){
		var date = new Date();
		var time = date.getTime()/1000;
		var date = new Date( time * 1000 );//.转换成毫秒  
   		var time = date.getFullYear() + "-" + (date.getMonth() < 10 ? '0' + (date.getMonth()+1) : (date.getMonth()+1)) + "-" + (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) ;  
   		connection.query('SELECT * FROM content WHERE title = ?',title,function(err,results){
   			if(results.length === 0){
		   		connection.query('INSERT INTO content (id, title, bloger ,latestDate) VALUES (NULL, ?, ?, ?)',[title,bloger,time],function(err,results){
				  if(results.affectedRows){
				    fun({status:1});
				  }else{
				  	fun({status:0});
				  }
				});  
   			}else{
   				fun({status:0});
   			}
 			
   		})

	}
}



