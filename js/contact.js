$("#header").load("header.php",function(){
	login();
	$("#header ul.nav li.active").removeClass("active");
	$("#header ul.nav li:nth-child(4)").addClass("active");
	if(window.sessionStorage.length!==0){
		$("#Login").hide();
	}
});
$("#footer").load("footer.php");
$.getJSON("data/select_msg.php",{uid:""},function(data){
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
$("#btnSend").click(function(){
	if(window.sessionStorage.length==0){
		$(".tologin").show();
	}else{
		var uid=window.sessionStorage.key(0);
		var uname=window.sessionStorage.getItem(uid);
		var title=$("input[name='title']").val();
		var mainText=$("textarea[name='mainText']").val();
		var date=new Date();
		var datenum=date.getTime();
		if(title==""){
			$('.modal-content p').html();
		}
		if(title!==""&&mainText!==""){
			$.post('data/add_msg.php',{uid:uid,title:title,mainText:mainText,date:datenum},function(text){
				if(text=='succ'){
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
					$(".content input").val("");
					$(".content textarea").val("");
				}
			})
		}
	}

});