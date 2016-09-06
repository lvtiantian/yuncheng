$("#header").load("header.php",function(){
	$("#header ul.nav li.active").removeClass("active");
	$("#header ul.nav li:nth-child(4)").addClass("active");
});
$("#footer").load("footer.php");
$("#Login ul li a").click(function(e){
	var target=e.target;
	if($(target).attr("href")=="login"){
		e.preventDefault();
		$(".tologin").hide();
		$(".modal").show();
	}
});
$.getJSON("data/select_msg.php",function(data){
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
		date=`${y}-${M}-${d} ${h}:${m}:${s}`;
		$("#msgShow").append(`
			<div class="col-md-12">
				<ul class="photo">
					<li><img src="img/user_01.jpg"/></li>
					<li>${this.user_name}</li>
				</ul>
				<div>
					<ul class="myMsg">
					<li class="col-md-12">
						<span>标 题: </span><div>${this.msg_title}</div>
					</li>
					<li class="col-md-12">
					<span>内 容: </span><div>${this.msg_content}</div>
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
	})
});
$("#btnSend").on("click",function(){
	if(window.sessionStorage.length==0){
		$(".tologin").show();
	};
})
$("#bt-login").on("click",function(){
	var requestData = $('#login-form').serialize();
	$.post('data/login.php',requestData,function(data,msg,xhr){
		if(data.msg!=='SUCC'){
			$('.modal-content p').html(data.reason);
		}else{
			$(".modal").hide();
			$("#Login").hide();
			var uname=data.uname;
			window.sessionStorage.setItem(data.user_id,uname);
			$("#btnSend").click(function(){
				var title=$("input[name='title']").val();
				var mainText=$("textarea[name='mainText']").val();
				var date=new Date();
				var datenum=date.getTime();
				if(title==""){
					$('.modal-content p').html()
				}
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
									<li>${uname}</li>
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
