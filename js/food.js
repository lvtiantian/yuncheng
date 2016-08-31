$("#header").load("header.php",function(){
	$("#header ul.nav li.active").removeClass("active");
	$("#header ul.nav li:nth-child(3)").addClass("active");
});
$("#footer").load("footer.php");
(function(){
	$("#content div.col-md-12").show().removeClass("odd").removeClass("even");
	$("#content div:nth-child(odd)").addClass("odd");
	$("#content div:nth-child(even)").addClass("even");
	var allcount=$("#content>div.col-md-12").length-1;
	showPage(allcount,"col-md-12");
})();
$("#title>li").on("click",function(e){
	var target= e.target;
	$("#title>li.active").removeClass("active");
	$("#content>div").removeClass("active");

	if(target.nodeName=="LI"){
		$(target).addClass("active");
		$("#content").show();
		$("#foodIntro").hide();
		if(this.innerHTML.slice(0,3)==="甜点类"){
			fenlei("sweet");
		}else if(this.innerHTML.slice(0,3)==="水果类"){
			fenlei("fruit");
		}else if(this.innerHTML.slice(0,3)==="小吃类") {
			fenlei("snack");
		}else if(this.innerHTML.slice(0,3)==="面食类") {
			fenlei("noodle");
		}else if(this.innerHTML.slice(0,4)==="所有美食") {
			fenlei("col-md-12");
			$("#content>div:last-child").show();
		}
	}else if(target.nodeName=="SPAN"){
		var li=$(target).parent().parent().parent();
		li.addClass("active");
		if($(target).parent().attr("class")=="wxzb"){
			$("#content").hide();
			$("#foodIntro[class='wxzb']").css("display","block");
			var imgHeight=$("#foodIntro .left div img").height();
			var ulHeight=$("#foodIntro .left ul ").height();
			$("#foodIntro .left ul").css("top",imgHeight);

			$("#foodIntro").css("height",imgHeight+ulHeight);
			$("#foodIntro .left").css("height",imgHeight+$("#foodIntro .left ul").height());
			imgMove();
		}
	}
});
function fenlei(elem){
	$("#content>div.col-md-12").removeClass("odd").removeClass("even");
	$("#content>div.col-md-12").hide();
	$("#content>div."+elem).show();
	var allcount=$("#content>div:visible").length;
	showPage(allcount,elem);
	$("#content>div."+elem+":odd").addClass("even");
	$("#content>div."+elem+":even").addClass("odd");
	$("#content>div.odd").each(function(){
		if($(this)[0].firstElementChild.nodeName!=="IMG"){
			$(this).append($(this)[0].firstElementChild);
		}
	});
	$("#content>div.even").each(function(){
		if($(this)[0].firstElementChild.nodeName!=="DIV"){
			$(this).append($(this)[0].firstElementChild);
		}
	});
}
function showPage(allcount,elem){
	$("#page").html("");
	var mcount=4;
	if(allcount>mcount){
		$("#content>div:last-child").show();
		for(var i=0;i<allcount;i++){
			if(i>=mcount){
				$("#page").html("");
				var page=Math.ceil(allcount/mcount);
				var frag=document.createDocumentFragment();
				for(var p=1;p<=page;p++){
					$(frag).append("<li>"+p+"</li>");
				}
				$("#page").append(frag);
				$("#content>div."+elem)[i].style.display="none";
			}
		}
		var count=$("#page li");
		for(var i=0;i<count.length;i++){
			$(count[0]).addClass("active");
			$(count[i]).click(function(){
				for(var j=0;j<allcount;j++){
					$("#content>div."+elem)[j].style.display="none";
				}
				var min=parseInt(this.innerHTML)*mcount-mcount;
				var max=(parseInt(this.innerHTML)*mcount)-1;
				for(var p=min;p<=max;p++){
					if(p<allcount){
						$("#content>div."+elem)[p].style.display="flex";
					}
				}
				$("#page .active").removeClass("active");
				$(this).addClass("active");
				$("#content>div:last-child").show();
			});
		}
		
	}

}

function imgMove(){
	var imgs=$("#foodIntro .left div>img");
	var i=0;
	var t=null;
	function banner_animate(){
		$(imgs[i]).animate({
			opacity:"0"
		},1000,function(){
			$(this).removeClass("active")
		});
		$("#foodIntro ul>li:nth-child("+(i+1)+")").removeClass("active");
		i++;
		if(i==3){
			i=0;
		}
		$(imgs[i]).animate({
			opacity:"1"
		},1000,function(){
			$(this).addClass("active");
		});
		$("#foodIntro .left ul>li:nth-child("+(i+1)+")").addClass("active");
	};
	t=setInterval(banner_animate,3000);
	$("#foodIntro .left").on("mouseover",function(){
		clearInterval(t);
		t=null;
	});
	$("#foodIntro .left").on("mouseout",function(){
		t=setInterval(banner_animate,3000);
	});

	$("#foodIntro .left ul").on("click","li",function(){
		clearInterval(t);
		t=null;
		i=$("#foodIntro .left ul li").index(this);
		$("#foodIntro .left div img.active").animate({
			opacity:"0"
		},1000,function(){
			$(this).removeClass("active");
		});
		$("#foodIntro .left div img:nth-child("+(i+1)+")").animate({
			opacity:"1"
		},1000,function(){
			$(this).addClass("active");
		});
		$("#foodIntro .left ul li.active").removeClass("active");
		$(this).addClass("active");
	});
}