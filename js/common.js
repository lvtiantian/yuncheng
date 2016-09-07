
$("#Totop").click(function(e){
    e.preventDefault();
    window.scrollTo(0,0);
});
function login(){
    $("#Login ul li a").click(function(e){
        var target=e.target;
        if($(target).attr("href")=="login"){
            e.preventDefault();
            $(".tologin").hide();
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
				alert("登录成功");
                var uname=data.uname;
                var key=data.user_id;
                window.sessionStorage.setItem(key,uname);
            }
        })
    });
}
