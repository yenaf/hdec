$(function(){
    mainInit();
    //링크막아주기 넣기
    $(document).on('click','a[href="#"]',function(e){ e.preventDefault() }) 
 })
 
 function mainInit(){
   gnb_menu()
   top_btn()
   site_map()
   family_site()
   business()

   
 }

 //메뉴
 function gnb_menu(){
 
  let arrh=[330,330,290,190,0];
  let cnt=0;
  let $sub=$('#header .nav .gnb li ul');

   $sub.hide();

   $('#header .nav .gnb li').hover(function(){
    cnt=$(this).index();
    $sub.hide();
    $(this).find('.sub').show();
    $('.bg').stop().animate({height:arrh[cnt]},200);
   })

   $('#header').on('mouseleave',function(){
    $('.bg').stop().animate({height:0},300);
    $sub.hide();

})
 
 }


  //site map
  function site_map(){
    $('#header .all-menu').on('click',function(){
        $('.site-map').show();
    })

    $('.site-map .close').on('click',function(){
        $('.site-map').hide();
    })
 }


 //top_btn
 function top_btn(){
  let navOffset=$('.nav').offset().top;
  let top=0;

  $(window).on('scroll',function(){
    top=$(this).scrollTop()
    if(top>navOffset){
        $('.nav').addClass('fixed');
    }else{
        $('.nav').removeClass('fixed');
    }

    if(top>500){
        $('.topbtn').addClass('show');
    }else{
        $('.topbtn').removeClass('show');
    }
  })
 }

 //family_site
 function family_site(){
  $('#footer .family>a').on('click',function(){
    $('.family ul').slideToggle();
  })
 }

 function business(){
  let first,last,timer,interval=6000;
  let $conSlide=$('.main .business .conSlide');
  
  last=$('.main .business .conSlide article:last');
  $conSlide.prepend(last);
  $conSlide.css({left:'-=1380'});

  timer=setInterval(make,interval);
  function make(){
    $conSlide.animate({left:'-=1380'},800,function(){
      first=$('.main .business .conSlide article:first');
       $conSlide.append(first);
      $conSlide.css({left:'+=1380'});
  })
      
  }

    $('.prev').on('click',function(){
      $conSlide.animate({left:'+=1380'},800,function(){
        last=$('.main .business .conSlide article:last');
        $conSlide.prepend(last);
        $conSlide.css({left:'-=1380'});
      })
      clearInterval(timer)
      timer=setInterval(make,interval);
    })

    $('.next').on('click',function(){
      $conSlide.animate({left:'-=1380'},800,function(){
          first=$('.main .business .conSlide article:first');
           $conSlide.append(first);
          $conSlide.css({left:'+=1380'});
      })
      clearInterval(timer)
      timer=setInterval(make,interval);
    })
  }

