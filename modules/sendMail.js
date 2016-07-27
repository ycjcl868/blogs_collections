var nodemailer = require("nodemailer");
var smtpTransport = require('nodemailer-smtp-transport');
var config = require('../conf/conf.js');

module.exports = {
	sendMail:function(title,content,fun){
		// 开启一个 SMTP 连接池
		var transport = nodemailer.createTransport(config.mail.sender);
		 
		// 设置邮件内容
		var mailOptions = {
		  from: "Blog_Kylin <45808948@qq.com>", // 发件地址
		  to: "45808948@qq.com", // 收件列表
		  subject: title, // 标题
		  html: content // html 内容
		}
		 
		// 发送邮件
		transport.sendMail(mailOptions, function(error, response) {
		  if (error) {
		   	fun({status:0,info:error});
		  } else {
		    fun({status:1,info:response});
		  }
		  transport.close(); // 如果没用，关闭连接池
		});		
	}

}