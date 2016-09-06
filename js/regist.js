
uname .onfocus=function(){
	var b=this.nextElementSibling.nextElementSibling;
	b.style.display="inline-block";
	b.innerHTML="请输入6至16位的英文或数字";
	$(b).css("color","#323A45");
	$(this).next().html("*").removeClass("ok");
}
uname .onblur=function(){
	var b=this.nextElementSibling.nextElementSibling;
	if(this.validity.valueMissing){
		$(this).next().html("*").removeClass("ok");
		b.innerHTML="用户名不能为空";
		$(b).css("color","#f00");
	}else if(this.validity.patternMismatch){
		$(this).next().html("*").removeClass("ok");
		b.innerHTML="用户名输入有误";
		$(b).css("color","#f00");
	}else if(this.validity.valid){
		var me=this;
		uname=$(this).val();
		$.get("data/regist.php",{uname:uname},function(data){
			if(data=='erro'){
				$(b).css("color","#f00");
				b.innerHTML="该用户名已被注册";
			}else if(data=='succ'){
				$(b).hide();
				$(me).next().html("").addClass("ok");
			}
		})


	}
}
upwd .onfocus=function(){
	var b=this.nextElementSibling.nextElementSibling;
	b.style.display="inline-block";
	b.innerHTML="请输入6至12位的数字";
	$(b).css("color","#323A45");
	$(this).next().html("*").removeClass("ok");
}
upwd.onblur=function(){
	var b=this.nextElementSibling.nextElementSibling;
	if(this.validity.valueMissing){
		b.innerHTML="密码不能为空";
		$(b).css("color","#f00");
		$(this).next().html("*").removeClass("ok");
	}else if(this.validity.patternMismatch){
		b.innerHTML="密码输入有误";
		$(b).css("color","#f00");
		$(this).next().html("*").removeClass("ok");
	}else if(this.validity.valid){
		$(b).hide();
		$(this).next().html("").addClass("ok");
	}
}
repwd.onfocus=function(){
	var p=this.nextElementSibling.nextElementSibling;
	p.style.display="inline-block";
	p.innerHTML="请确认密码";
	$(this).next().html("*").removeClass("ok");
}
repwd.onblur=function(){
	var p=this.nextElementSibling.nextElementSibling;
	if($(this).val()!==$("#upwd").val()){
		$(p).html("两次密码输入不一致");
		$(p).css("color","#f00");

	}else if($(this).val()==$("#upwd").val()&&$(this).parent().prev().children(".vali_Info").css("display")=="none"){
		$(p).hide();
		$(this).next().html("").addClass("ok");
	}
}
$("#regist").on("click",function(){
		if($("#formList div p.vali_Info:visible").length==0){
			var uname=$("#uname").val();
			var upwd=$("#upwd").val();
			$.post("data/adduser.php",{uname:uname,upwd:upwd},function(text){
				$("#formList").hide();
				$(".success").html(text+"<a href='contact.html'> 回到同城会页面 </a>");
			})
		}


})