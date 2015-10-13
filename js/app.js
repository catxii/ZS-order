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


 $(document).on('click','.button-warning', function () {
   $.showPreloader();
    setTimeout(function () {
        $.hidePreloader();
    }, 1000);
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

//订单滑动效果
$(function() {
  function swiperAction(){
    for(var i=0;i < $(".swiper-container").length;i++){
      var index = i+1;
      $(".swiper-container"+index).swiper({
        pagination : '.swiper-container'+index+' .swiper-pagination'
      });
    }
  }
  swiperAction();
  $(document).on('click','.tab-link',function(){
    swiperAction();
  })
});


// 添加'refresh'监听器
  //下拉刷新页面
  $(document).on("pageInit", "#page-ptr", function(e, id, page) {
    var $content = $(page).find(".content").on('refresh', function(e) {
      // 模拟2s的加载过程
      setTimeout(function() {
        var cardHTML = '<div class="card">' +
          '<div class="card-header">标题</div>' +
          '<div class="card-content">' +
          '<div class="card-content-inner">内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容' +
          '</div>' +
          '</div>' +
          '</div>';

        $content.find('.card-container').prepend(cardHTML);
        // 加载完毕需要重置
        $.pullToRefreshDone($content);
      }, 2000);
    });
  });


  //调取时间

  $("#datetime-picker").datetimePicker({
    toolbarTemplate: '<header class="bar bar-nav">\
    <button class="button button-link pull-right close-picker">确定</button>\
    <h1 class="title">选择日期和时间</h1>\
    </header>'
  });
