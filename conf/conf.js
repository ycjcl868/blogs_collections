module.exports = {
	database: {
	  host:'localhost',
	  user:'root',
	  password:'XXXX',
	  database:'blogs',
	  port:3306,
	},
	mail:{
		sender:{
		  host: "smtp.qq.com", // 主机
		  secure: true, // 使用 SSL
		  port: 465, // SMTP 端口
		  auth: {
		    user: "45808948@qq.com", // 账号
		    pass: "XXXX" // 密码
		  }			
		},

		receiver:{
			to: "45808948@qq.com", // 收件列表
		}
	}
}