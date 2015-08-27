//掌上订单脚本文件

//login页面
$(".show-btn").click(function(){
	if(!$(this).hasClass("active")){
		$("#password").attr("type","text");
		$(this).addClass("active");
	}else{
		$(this).removeClass("active");
		$("#password").attr("type","password");
	}
})