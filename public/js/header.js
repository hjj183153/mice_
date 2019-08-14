// 设置轮播图
var mySwiper=new Swiper('.swiper-container',{
  direction:'horizontal',//水平切换
  loop:true,//开启循环模式
  navigation:{
    nextEl:'.swiper-button-next',
    prevEl:'.swiper-button-prev',
  },
  // 如果需要前进后退按钮
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // 如果需要滚动条
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  //设置自动切换            
  autoplay:{
    delay:4000,
  },
})
//设置下拉菜单一次只能显示一个
var $nav_link=$('.nav-link[aria-expanded]');
var $drop_menu=$('ul.dropdown-menu');
$nav_link.click(function(){
  console.log($(this).next("ul.dropdown-menu").css("display"));
  
  if($(this).next("ul.dropdown-menu").css("display")=="block"){//如果显示
    $(this).next("ul.dropdown-menu").css("display","none");
  }else{//如果隐藏
    $(this).next("ul.dropdown-menu").addClass("selected");
    //console.log($("ul.dropdown-menu:not(.selected)"));
    $("ul.dropdown-menu:not(.selected)").css("display","none");
    $(this).next("ul.dropdown-menu").css("display","block").removeClass("selected");
    //$(this).next("ul.dropdown-menu")
  }
  
})
