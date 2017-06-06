// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery.turbolinks
//= require jquery_ujs
//= require bootstrap/alert
//= require  bootstrap/dropdown
//= require  autosize.min
//= require  jquery.countdown.min
//= require  wow.min
//= require_tree .


$(document).ready(function() {
  new WOW().init();
})

//------设定回到顶端按钮的触发行为------//

$(window).scroll(function() {
  if ($(this).scrollTop() > 1500) { // 指的是当屏幕滚动到1500px的高度时，所触发的行为
    $(".goTop").fadeIn(100); // 指的是按钮淡入显示的时间，100为0.1秒
  } else {
    $(".goTop").fadeOut(200); // 指的是按钮淡出显示的时间，200为0.2秒
  }

  $(".goTop").click( // 指的是当点击按钮时，所触发的动作
    function() {
      $('html,body').animate({ // 指的是将屏幕上移至高度为0的地方，700为上移速度
        scrollTop: 0
      }, 900);
    });
})


//通知信息自动消失
$(document).on('turbolinks:load', function() {
  // 收起通知
  slideUpAlert();
});
// 收起通知信息

function slideUpAlert() {
  // 消息停留2000毫秒（2秒），消失动画时间250毫秒

  $(".alert").delay(2000).slideUp(250, function() {
    $(this).remove();
  });
}

// 轮播效果


$(function(){
        // 初始化轮播
        $(".start-slide").click(function(){
            $("#intro").carousel('cycle');
        });
        // 停止轮播
        $(".pause-slide").click(function(){
            $("#intro").carousel('pause');
        });
        // 循环轮播到上一个项目
        $(".prev-slide").click(function(){
            $("#intro").carousel('prev');
        });
        // 循环轮播到下一个项目
        $(".next-slide").click(function(){
            $("#intro").carousel('next');
        });
        // 循环轮播到某个特定的帧
        $(".slide-one").click(function(){
            $("#intro").carousel(0);
        });
        $(".slide-two").click(function(){
            $("#intro").carousel(1);
        });
        $(".slide-three").click(function(){
            $("#intro").carousel(2);
        });
    });
