// var mail = require('./modules/sendMail');
// mail.sendMail('Hello','Hello',function(result){
// 	console.log(result);
// })

var cheerio = require("cheerio");
var download = require('./modules/download');  //爬取博客
var stored = require('./modules/mysql');	   //存储
var email = require('./modules/sendMail');	   //发邮件

var CronJob = require('cron').CronJob;


function refreshUrl(wUrl,url){
	if(url.indexOf('http') >= 0){
		return url;
	}else{
		return wUrl + url;
	}
}

new CronJob('* * * * *',function(){
		console.log('定时器开启');
	// 奇舞团 http://www.75team.com
	download.download('http://www.75team.com',function(result){
		var url = 'http://www.75team.com';
		var bloger = '奇舞团';
		if (result.info) {
			var $ = cheerio.load(result.info);
			var title = $('h1.title').eq(0).text().trim();
			var link = refreshUrl(url,$('h1.title>a').eq(0).attr('href'));
			// console.log(title);
			// console.log(link);
			
			stored.stored(title,bloger,function(result){
				if(result.status == 1){
					download.download(link,function(result){
						if (result.info) {
							var $ = cheerio.load(result.info);	
							// console.log(result.info);				
							var content = $('#page-post').html();

							//处理图片
							$('img').each(function(i,item){
								var src = refreshUrl(url,$('img').eq(i).attr('src'));
								$('img').eq(i).attr('src',src);
							})

							// console.log(content);
							email.sendMail('「'+bloger+'」 '+title,content,function(result){
								console.log(result);
							})			
						}		
					})

				}
			})
		}else{
			console.log("error");
		} 
	})

	// 淘宝UED http://www.aliued.com
	download.download('http://www.aliued.com',function(result){
		var url = 'http://www.aliued.com';
		var bloger = '淘宝UED';
		if (result.info) {
			var $ = cheerio.load(result.info);
			var title = $('div.listbox_bot').eq(0).find('a').eq(0).text().trim();
			var link = refreshUrl(url,$('div.listbox_bot').eq(0).find('a').attr('href'));
			// console.log(title);
			// console.log(link);
			// download.download(link,function(result){
			// 	if (result.info) {
			// 		var $ = cheerio.load(result.info);	
			// 		// console.log(result.info);				
			// 		var content = $('.post_content').html();

			// 		//处理图片
			// 		$('img').each(function(i,item){
			// 			var src = refreshUrl(url,$('img').eq(i).attr('src'));
			// 			$('img').eq(i).attr('src',src);
			// 		})

			// 		console.log(content);
			// 		email.sendMail('「淘宝UED」 '+title,content,function(result){
			// 			console.log(result);
			// 		})			
			// 	}		
			// })		
			
			stored.stored(title,bloger,function(result){
				if(result.status == 1){
					download.download(link,function(result){
						if (result.info) {
							var $ = cheerio.load(result.info);	
							// console.log(result.info);				
							var content = $('.post_content').html();

							//处理图片
							$('img').each(function(i,item){
								var src = refreshUrl(url,$('img').eq(i).attr('src'));
								$('img').eq(i).attr('src',src);
							})

							// console.log(content);
							email.sendMail('「'+bloger+'」 '+title,content,function(result){
								console.log(result);
							})			
						}		
					})		

				}
			})
		}else{
			console.log("error");
		} 
	})


	// 阿里U一点UED http://www.aliued.cn
	download.download('http://www.aliued.cn',function(result){
		var url = 'http://www.aliued.cn';
		var bloger = '阿里U一点UED';
		if (result.info) {
			var $ = cheerio.load(result.info);
			var title = $('div.a-info').eq(0).find('a').eq(0).text().trim();
			var link = refreshUrl(url,$('div.a-info').eq(0).find('a').attr('href'));
			// console.log(title);
			// console.log(link);
			// download.download(link,function(result){
			// 	if (result.info) {
			// 		var $ = cheerio.load(result.info);	
			// 		// console.log(result.info);				
			// 		var content = $('.main').html();

			// 		//处理图片
			// 		$('img').each(function(i,item){
			// 			var src = refreshUrl(url,$('img').eq(i).attr('src'));
			// 			$('img').eq(i).attr('src',src);
			// 		})

			// 		console.log(content);
			// 		email.sendMail('「'+bloger+'」 '+title,content,function(result){
			// 			console.log(result);
			// 		})			
			// 	}		
			// })		
			stored.stored(title,bloger,function(result){
				if(result.status == 1){
					download.download(link,function(result){
						if (result.info) {
							var $ = cheerio.load(result.info);	
							// console.log(result.info);				
							var content = $('.main').html();

							//处理图片
							$('img').each(function(i,item){
								var src = refreshUrl(url,$('img').eq(i).attr('src'));
								$('img').eq(i).attr('src',src);
							})

							// console.log(content);
							email.sendMail('「'+bloger+'」 '+title,content,function(result){
								console.log(result);
							})			
						}		
					})		
				}
			})
		}else{
			console.log("error");
		} 
	})



	// 腾讯alloyteam http://www.alloyteam.com
	download.download('http://www.alloyteam.com',function(result){
		var url = 'http://www.alloyteam.com';
		var bloger = '腾讯alloyteam';
		if (result.info) {
			var $ = cheerio.load(result.info);
			var title = $('.articlemenu').find('li').eq(0).find('a').eq(1).text().trim();
			var link = refreshUrl(url,$('.articlemenu').find('li').eq(0).find('a').eq(1).attr('href'));
			// console.log(title);
			// console.log(link);
			// download.download(link,function(result){
			// 	if (result.info) {
			// 		var $ = cheerio.load(result.info);	
			// 		// console.log(result.info);				
			// 		var content = $('#content').html();

			// 		//处理图片
			// 		$('img').each(function(i,item){
			// 			var src = refreshUrl(url,$('img').eq(i).attr('src'));
			// 			$('img').eq(i).attr('src',src);
			// 		})

			// 		console.log(content);
			// 		email.sendMail('「'+bloger+'」 '+title,content,function(result){
			// 			console.log(result);
			// 		})			
			// 	}		
			// })		
			stored.stored(title,bloger,function(result){
				if(result.status == 1){
					download.download(link,function(result){
						if (result.info) {
							var $ = cheerio.load(result.info);	
							// console.log(result.info);				
							var content = $('#content').html();

							//处理图片
							$('img').each(function(i,item){
								var src = refreshUrl(url,$('img').eq(i).attr('src'));
								$('img').eq(i).attr('src',src);
							})

							// console.log(content);
							email.sendMail('「'+bloger+'」 '+title,content,function(result){
								console.log(result);
							})			
						}		
					})		
				}
			})
		}else{
			console.log("error");
		} 
	})


	// 阿里mux体验 http://mux.alimama.com
	download.download('http://mux.alimama.com',function(result){
		var url = 'http://mux.alimama.com';
		var bloger = '阿里mux体验';
		if (result.info) {
			var $ = cheerio.load(result.info);
			var title = $('h3.title').eq(0).find('a').text().trim();
			var link = refreshUrl(url,$('h3.title').eq(0).find('a').attr('href'));
			// console.log(title);
			// console.log(link);
			// download.download(link,function(result){
			// 	if (result.info) {
			// 		var $ = cheerio.load(result.info);	
			// 		// console.log(result.info);				
			// 		var content = $('#main').html();

			// 		//处理图片
			// 		$('img').each(function(i,item){
			// 			var src = refreshUrl(url,$('img').eq(i).attr('src'));
			// 			$('img').eq(i).attr('src',src);
			// 		})

			// 		// console.log(content);
			// 		email.sendMail('「'+bloger+'」 '+title,content,function(result){
			// 			console.log(result);
			// 		})			
			// 	}		
			// })		
			stored.stored(title,bloger,function(result){
				if(result.status == 1){
					download.download(link,function(result){
						if (result.info) {
							var $ = cheerio.load(result.info);	
							// console.log(result.info);				
							var content = $('#main').html();

							//处理图片
							$('img').each(function(i,item){
								var src = refreshUrl(url,$('img').eq(i).attr('src'));
								$('img').eq(i).attr('src',src);
							})

							// console.log(content);
							email.sendMail('「'+bloger+'」 '+title,content,function(result){
								console.log(result);
							})			
						}		
					})		
				}
			})
		}else{
			console.log("error");
		} 
	})


},null,true,null);
