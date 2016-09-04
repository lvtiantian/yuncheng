$("#header").load("header.php",function(){
	$("#header ul.nav li.active").removeClass("active");
	$("#header ul.nav li:nth-child(4)").addClass("active");
});
$("#footer").load("footer.php");
$("#Login ul li a").click(function(e){
	var target=e.target;
	if($(target).attr("href")=="login"){
		e.preventDefault();
		$(".modal").show();
	}
});
$("#bt-login").on("click",function(){
	var requestData = $('#login-form').serialize();
	$.post('data/login.php',requestData,function(data,msg,xhr){
		if(data.msg!=='SUCC'){
			$('.modal-content p').html(data.reason);
		}else{
			$(".modal").hide();
			$("#Login").hide();
			var uname=data.uname;
			$("#btnSend").click(function(){
				var title=$("input[name='title']").val();
				var mainText=$("textarea[name='mainText']").val();
				var date=new Date();
				var datenum=date.getTime();
				if(title!==""&&mainText!==""){
					$.post('data/msgadd.php',{uname:uname,title:title,mainText:mainText,date:datenum},function(text){
						if(text=='succ'){
							var y=date.getFullYear();
							var M=date.getMonth()+1;
							var d=date.getDate();
							var h=date.getHours();
							var m=date.getMinutes();
							var s=date.getSeconds();
							date=`${y}-${M}-${d} ${h}:${m}:${s}`;
							$("#msgShow").append(`
							<div class="col-md-12">
								<ul class="photo">
									<li><img src="img/user_01.jpg"/></li>
								</ul>
								<div>
									<ul class="myMsg">
										<li class="col-md-12">
											<span>标 题: </span><div>${title}</div>
										</li>
										<li class="col-md-12">
											<span>内 容: </span><div>${mainText}</div>
										</li>
										<li class="col-md-12">
											<span>发布时间: </span><div>${date}</div>
										</li>
										<li class="col-md-12">
											<a href="#">有用(<span>0</span>)</a>
											<a href="#">回复(<span>0</span>)</a>
										</li>
									</ul>
								</div>
							</div>
							`);
						}
					})
				}
			});
		}
	})
});
