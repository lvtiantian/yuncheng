<?php header("Content-Type:text/html;charset=utf-8");?>
<div>
	<div class="title">
		<img src="img/logo.jpg">魅力运城
	</div>
	<ul class="nav">
		<li class="active"><a href="index.html">首&nbsp;页</a></li>
		<li><a href="spot.html">景&nbsp;点</a></li>
		<li><a href="food.html">特&nbsp;产</a></li>
		<li><a href="contact.html">同城会</a></li>
		<li><a href="personal.html">用户中心</a></li>
	</ul>
</div>
<div class="modal" style="display:none">
			<div class="modal-dialog">
				<div class="modal-content">
					<h3>用户登录</h3>
					<p>请保管好您的登录信息，以防丢失。</p>
					<form id="login-form">
						<div>
							<span>用户名:</span><input name="uname" id="uname" value="lvtian">
						</div>
						<div>
							<span>密&nbsp;&nbsp; 码:</span><input name="upwd" id="upwd" value="123456">
						</div>
						<button type="button" id="bt-login">登 录</button>
						<span>还没有账号，快去<a href="regist.html"> 注册 </a>吧</span>
						<b>&times;</b>
					</form>
				</div>
			</div>
		</div>
		<div class="tologin">
			<p>
			登录后才能发布信息哦！
			</p>
			<i></i>

		</div>
		<div id="Login">
			<ul>
				<li>
					<a href="login">登 录</a>
				</li>
				<li>
					<a href="regist.html">注 册</a>
				</li>
			</ul>
		</div>
		<div id="Totop">
			<img src="img/totop.png"/>
		</div>
