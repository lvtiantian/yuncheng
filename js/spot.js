$("#header").load("header.php",function(){
	$("#header ul.nav li.active").removeClass("active");
	$("#header ul.nav li:nth-child(2)").addClass("active");
});
$("#footer").load("footer.php");
screen();
function screen(){
	var h=$("#main div.active").height();
	$("#main div[class!='active']").css("height",h);
	//$("#main div[class!='active'] img").css("width","100%");
}
var arr=[];
setInterval(function(){
	var iw=window.innerWidth;
	arr.push(iw);
	if(arr[arr.length-1]!==arr[arr.length-2]){
		screen();
		arr=[];
	}
},500);
var width=$("#main>div.active").width();
var height=$("#main div.active").height();
$("#main>div").on("click",function(){
	$("#main div").css("height",height);
	//$("#main div img").css("height","100%");
	if($("#main div.current").length==0&&!$(this).hasClass("active")){
		$(this).children("p").fadeOut(1000);
		$("#main>div.active").children("p").fadeIn(1000);
		$("#main>div.active").animate({
			width:"5%"
		},1000,function(){
			$(this).removeClass("active");
		});
		$(this).addClass("current").animate({
			width:width
		},1000,function(){
			$(this).addClass("active").removeClass("current");
		});
	}
})