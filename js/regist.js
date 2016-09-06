
uname .onfocus=function(){
	var b=this.nextElementSibling.nextElementSibling;
	b.style.display="inline-block";
	b.innerHTML="10个字符以内的字母、数字和下划线的组合";
	$(b).css("color","#323A45");
}
uname .onblur=function(){
	var b=this.nextElementSibling.nextElementSibling;
	if(this.validity.valueMissing){
		b.innerHTML="用户名不能为空";
		$(b).css("color","#f00");
	}else if(this.validity.patternMismatch){
		b.innerHTML="用户名输入有误";
	}else if(this.validity.valid){
		$(b).hide();
		$(this).next().html("").addClass("ok");
	}
}
upwd .onfocus=function(){
	var b=this.nextElementSibling.nextElementSibling;
	b.style.display="inline-block";
	b.innerHTML="请输入6至12位的数字";
}
upwd.onblur=function(){
	var b=this.nextElementSibling.nextElementSibling;
	if(this.validity.valueMissing){
		b.innerHTML="密码不能为空";
	}else if(this.validity.patternMismatch){
		b.innerHTML="密码输入有误";
	}else if(this.validity.valid){
		b.innerHTML="密码正确";
	}
}