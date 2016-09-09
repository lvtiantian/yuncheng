function login(){
    $("#Totop img").on("click",function(){
    window.scrollTo(0,0);
    });
    $("#Login ul li a").click(function(e){
        var target=e.target;
        if($(target).attr("href")=="login"){
            e.preventDefault();
            $(".tologin").hide();
            $(".modal").show();
            $("#login-form b").click(function(){
                $(".modal").hide();
            })
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
				alert("登录成功");
                var uname=data.uname;
                var key=data.user_id;
                window.sessionStorage.setItem(key,uname);
            }
        })
    });
    $("#header .nav li:last-child a").click(function(e){
        if(window.sessionStorage.length==0){
            e.preventDefault();
            alert("还没有登录，不能查看个人信息");
        }
    })
}
