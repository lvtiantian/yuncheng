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
							$("#main p:nth-child(2)").html(`我的姓名：${uname}
								<input name="uname" type="text" value='${uname}'/>
							`);
							$("#main p:nth-child(3)").html(`我的密码：******
								<input name="upwd" type="password" value='${upwd}/>
							`);
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
$("#main div:first-child").show();
$("#title li a").click(function(e){
	$("#title li a.active").removeClass("active");
	$(this).addClass("active");
	$("#main div").hide();
	e.preventDefault();
	var i=$(this).parent().index("#title li")+1;
	$("#main div:nth-child("+i+")").show();
});
var uid=window.sessionStorage.key(0);
$("#title li:first-child a").click(function(){
	var uname=window.sessionStorage.getItem(uid);
	var upwd=$("#main input[name='upwd']").val();
	console.log(upwd);
	$("#main p:nth-child(2)").html(`我的姓名：<br>
	<input name="uname" type="text" value="${uname}"/>
							`);
	$("#main p:nth-child(3)").html(`我的密码：<br>
	<input name="upwd" type="password" value="${upwd}"/>
							`);
	$("#main input").show();
	$("#main button").show();
});
//$("#title li:nth-child(2) a").click(function(){
$.getJSON("data/select_msg.php",{uid:uid},function(data){
	var i=1;
	$(data).each(function(){
		var date=new Date(parseInt(this.date));
		var y=date.getFullYear();
		var M=date.getMonth()+1;
		var d=date.getDate();
		var h=date.getHours();
		if(h<10){
			h="0"+h;
		}
		var m=date.getMinutes();
		if(m<10){
			m="0"+m;
		}
		var s=date.getSeconds();
		if(s<10){
			s="0"+s;
		}
		var date=`${y}-${M}-${d}<br/>${h}:${m}:${s}`;
		$(".msg tbody").append(`
		<tr>
		<td>${i}</td>
		<td>${this.msg_title}</td>
		<td>${this.msg_content}</td>
		<td>${date}</td>
		<td><a href=''>删 除</a></td>
		</tr>
						`);
		i++;
	});
	$(".msg tbody tr td:last-child a").click(function(e){
		e.preventDefault();
		var me=this;
		if(confirm("确认删除该条消息吗？")){
			var title=$(this).parent().parent().children("td:nth-child(2)").html();
			$.post("data/delete_msg.php",{uid:uid,title:title},function(text){
				if(text=="succ"){
					$(me).parent().parent().remove();
				}else{
					alert("糟糕，删除失败！");
				}
			})
		}
	});
	//});
})
