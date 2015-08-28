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


//alert响应事件
//仅提示文字和单确认按钮
$(document).on('click','.alert-text',function () {
    $.alert('请输入用户名');
 });
 //提示标题、文字信息和单确认按钮
$(document).on('click', '.alert-text-title-callback',function () {
    $.alert('服务器正在抢修中...', '登陆异常', function () {
        $.alert('你点击了确认按钮')
    });
});
// 提示标题、文字信息和确认、取消按钮
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

 // 操作表事件
 $(document).on('click','.create-actions', function () {
      var buttons1 = [
        {
          text: '取消原因',
          onClick: function() {
            $.prompt('请输入取消原因', function (value) {
                $.alert('你的取消原因是 "' + value+'"');
            });
          }
        },
        {
          text: '双方沟通达成一致',
          onClick: function() {
            $.toast("已成功确认");
          }
        },
        {
          text: '双方沟通达成一致',
          onClick: function() {
            $.toast("已成功确认");
          }
        },
        {
          text: '其他',
          onClick: function() {
            $.alert("你选择了“其他“");
          }
        }
      ];
      var buttons2 = [
        {
          text: '取消',
        }
      ];
      var groups = [buttons1, buttons2];
      $.actions(groups);
  });

 // 对话确认框
 $(document).on('click','.prompt-ok', function () {
      $.prompt('你的名字是?', function (value) {
          $.alert('你的名字是 "' + value + '".你点了确认按钮');
      });
  });

