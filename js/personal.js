$("#header").load("header.php",function(){
	$("#header ul.nav li.active").removeClass("active");
	$("#header ul.nav li:nth-child(5)").addClass("active");
	getInfo();
});
$("#footer").load("footer.php");
function getInfo(){
	if(window.sessionStorage.length!==0){
		$("#Login").hide();
		var uid=window.sessionStorage.key(0);
		$.getJSON("data/select_user.php",{uid:uid},function(data){
			$("#main input[name='uname']").val(data.user_name);
			$("#main input[name='upwd']").val(data.user_pwd);
			$("#main p button").click(function(){
				if($("#main input[name='uname']").val()==data.user_name&&$("#main input[name='upwd']").val()==data.user_pwd){
					alert("您没有修改数据哦！");
				}else{
					var uname=$("#main input[name='uname']").val();
					var upwd=$("#main input[name='upwd']").val();
					$.post('data/update_user.php',{uid:uid,uname:uname,upwd:upwd},function(text){
						if(text=='succ'){
							alert("修改成功");
							$("#main p:nth-child(2)").html("我的姓名："+uname);
							$("#main p:nth-child(3)").html("我的密码：******");
							$("#main input").hide();
							$("#main button").hide();
							window.sessionStorage.clear();
							window.sessionStorage.setItem(uid,uname);
						}else{
							alert("糟糕，出错了");
						}
					})
				}
			})
		})
	}else{
		alert("还没有登录，请先登录吧");
		login();
	}
}