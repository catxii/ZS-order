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

$(document).on('click','.alert-text',function () {
    $.alert('请输入用户名');
 });
 
$(document).on('click', '.alert-text-title-callback',function () {
    $.alert('服务器正在抢修中...', '登陆异常', function () {
        $.alert('你点击了确认按钮')
    });
});

 $(document).on('click','.confirm-title-ok-cancel', function () {
  $.confirm('删除信息不能恢复', '提示信息', 
    function () {
      $.alert('你点击了确定按钮');
    },
    function () {
      $.alert('你点击了取消按钮');
    }
  );
});
