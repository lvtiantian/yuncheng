$("#header").load("header.php",function(){
	$("#header ul.nav li.active").removeClass("active");
	$("#header ul.nav li:nth-child(5)").addClass("active");
});
$("#footer").load("footer.php");