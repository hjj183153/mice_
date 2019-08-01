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
var $nav_ul=$('.navbar-nav.col-md-7.co-lg-7.nav-left');
console.log($nav_ul);
$nav_ul.click(function(){
  console.log(111);
  var $nav_li=$('.nav-item');
  console.log($nav_li);
  //$nav_li.attr('aria-expanded')=false;
  console.log(this.index);
  // if($nav_li){}
  //只能允许有一个li的aria-expanded为true
})