$("#header").load("header.php",function(){
	login();
	$("#header ul.nav li.active").removeClass("active");
	$("#header ul.nav li:nth-child(2)").addClass("active");
	if(window.sessionStorage.length!==0){
		$("#Login").hide();
	}
});
$("#footer").load("footer.php");
screen();
function screen(){
	var h=$("#main div.active").height();
	$("#main div[class!='active']").css("height",h);
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

