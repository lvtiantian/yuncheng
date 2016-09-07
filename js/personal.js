$("#header").load("header.php",function(){
	$("#header ul.nav li.active").removeClass("active");
	$("#header ul.nav li:nth-child(5)").addClass("active");
	if(window.sessionStorage.length!==0){
		$("#Login").hide();
		var uid=window.sessionStorage.key(0);
		console.log("uid");
	}else{
		alert("您还没有登录哦！");
	}
});
$("#footer").load("footer.php");