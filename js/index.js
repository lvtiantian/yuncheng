$("#header").load("header.php",function(){
    login();
    if(window.sessionStorage.length!==0){
        $("#Login").hide();
    }
});
$("#footer").load("footer.php");
screen();
function screen(){
    var h=$(".img-slider li.active img").height();
    $(".img-slider").css("height",h);
    $("#banner b").css("top",h/2-24);
    $(".content-slider div").css("top",h);
   // $(".content-slider div").css("height","90px");
    $(".content-slider div").css("overflow","hidden");
    $("#banner").css("height",h+$(".content-slider div").height()+80);
}

var arr=[];
setInterval(function(){
    var iw=window.innerWidth;
    arr.push(iw);
    if(arr[arr.length-1]!==arr[arr.length-2]){
        screen();
        arr=[];
    }
},500);
function slider(){
    $(".img-slider li.active").animate({
        opacity:0
    },1000,function(){
        $(this).next().addClass("active");
        $(this).removeClass("active");
        $(".img-slider").append(this);
    });
    $(".img-slider li.active").next().animate({
        opacity:1
    },1000);

    $(".content-slider div.active").animate({
        opacity:0
    },1000,function(){
        $(this).next().addClass("active");
        $(this).removeClass("active");
        $(".content-slider").append(this);
    });
    $(".content-slider div.active").next().animate({
        opacity:1
    },1000);
}
function sliderPre(){
    $(".img-slider li.active").animate({
        opacity:0
    },1000,function(){
        $(".img-slider li:nth-child(4)").addClass("active");
        $(this).removeClass("active");
        $(this).before($(".img-slider li:nth-child(4)")[0]);
    });
    $(".img-slider li:nth-child(4)").animate({
        opacity:1
    },1000);

    $(".content-slider div.active").animate({
        opacity:0
    },1000,function(){
        $(".content-slider div:nth-child(4)").addClass("active");
        $(this).removeClass("active");
        $(this).before($(".content-slider div:nth-child(4)")[0]);
    });
    $(".content-slider div:nth-child(4)").animate({
        opacity:1
    },1000);
}
var timer=setInterval(slider,1000);
$("#banner b").on("mouseover",function(){
    $(this).css("opacity","1").css("cursor","pointer");
});
$("#banner b").on("mouseout",function(){
    $(this).css("opacity","0.5");
});
$("#banner b.left").on("click",function(){
    sliderPre();
});
$("#banner b.right").on("click",function(){
    slider();
});
$("#banner").on("mouseover",function(){
    clearInterval(timer);
})
$("#banner").on("mouseout",function(){
    timer=null;
    timer=setInterval(slider,1000);
});
$(".spot-intro li a").on("mouseover",function(){
    var index=$(this).parent().index(".spot-intro li")+1;
    $(".spot-intro li:nth-child("+index+") img").css("transform","scale(1.2)")
})
$(".spot-intro li a").on("mouseout",function(){
    var index=$(this).parent().index(".spot-intro li")+1;
    $(".spot-intro li:nth-child("+index+") img").css("transform","scale(1)")
})