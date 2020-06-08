// (function(){
	
	function Lxys(){
			var userAgent = navigator.userAgent;
			console.log(userAgent)
			var html = document.querySelector('html');
			html.className = "";
			var width = window.innerWidth;
			
			if(userAgent.indexOf("iPhone")!=-1){
				html.classList.add("iphone");
			}else if(userAgent.indexOf("iPad")!=-1){
				html.classList.add("ipad");
			}else if(userAgent.indexOf("Android")!=-1){
				html.classList.add("android");
			}else{
				html.classList.add("pc");
			}
			
			//window.innerWidth,可以获取窗口的宽度，所以可以
			//根据窗口的宽度，来设定html的样式(lt640,lt960,lt1200,gt640,gt960,gt1200)
			if(width<640){
				html.classList.add("lt640");
				html.classList.add("lt960");
				html.classList.add("lt1200");
			}else if(width<960){
				html.classList.add("gt640");
				html.classList.add("lt960");
				html.classList.add("lt1200");
			}else if(width<1200){
				html.classList.add("gt640");
				html.classList.add("gt960");
				html.classList.add("lt1200");
			}else{
				html.classList.add("gt640");
				html.classList.add("gt960");
				html.classList.add("gt1200");
			}
			
	}
	
	Lxys();
	
	window.onresize = function(){
		Lxys();
		setRem();
	}
	

	function setRem(){
			var width = window.innerWidth;
			var danwei = width/37.5;
			var html = document.querySelector("html");
			html.style.fontSize = danwei + "px";
		}
		
// })()
	