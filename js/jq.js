$(function(){
	//banner图左右按钮
    (function(){
    	var i=0;
    var length=$('.banner .banner_first').length;
    $('.banArr .prev').click(function () {
       i--;
        if(i<0){
            i=length-1;
        }
        $('.banner .banner_first').eq(i).fadeIn(300)
            .siblings('.banner_first').hide(10);
        $('.midpoints>span').eq(i).addClass('now').siblings().removeClass('now');
    });
    $('.banArr .next').click(function(){
        i++;
        if(i>length-1){
            i=0;
        }
        $('.banner .banner_first').eq(i).fadeIn(300)
            .siblings('.banner_first').fadeOut('fast');
        $('.midpoints>span').eq(i).addClass('now').siblings().removeClass('now');
    });
    })();
    
	//主要产品
	(function(){
		var j=0;
    var len=$('.productcontents>.neirong1').length;
    var lbtn=$('.prodcontent_1>.prodcontent_1fir');
    //主要产品轮播左侧按钮
    $('.line .prev').click(function () {
        j--;
        if(j<0){
           j=len-1;
        }
        lbtn.removeClass('now').eq(j).addClass('now');
        $('.productcontents>.neirong1').hide().eq(j).fadeIn(1000);
        $('.productcontents .left_content,.neirong1right').removeClass('animated fadeInRight')
            .addClass('animated fadeInLeft');

    });
    //主要产品轮播右侧按钮
    $('.line .next').click(function () {
        j++;
        if(j>len-1){
            j=0;
        }
        lbtn.removeClass('now').eq(j).addClass('now');
        $('.productcontents>.neirong1').hide().eq(j).fadeIn(1000);
        $('.productcontents .neirong1left,.neirong1right').removeClass('animated fadeInLeft')
            .addClass('animated fadeInRight');
    })
    //主要产品轮播单个选择
    lbtn.click(function () {
        var a=$(this).index();
        if(a>j){
            $('.productcontents .neirong1left,.neirong1right').removeClass('animated fadeInLeft')
                .addClass('animated fadeInRight');
            lbtn.removeClass('now').eq(j).addClass('now');
        }else if(a<j){
            $('.productcontents .neirong1left,.neirong1right').removeClass('animated fadeInRight')
                .addClass('animated fadeInLeft');
            lbtn.removeClass('now').eq(j).addClass('now');
        }
        j=a;
        lbtn.removeClass('now').eq(j).addClass('now');
        $('.productcontents>.neirong1').hide().eq(j).fadeIn(1000);
    })
	})();
	
	 //业务范围显示隐藏
	 (function(){
	 	$('.servicecont .mistake_icon').click(function () {
       $(this).parent().siblings().slideToggle(500);
       $(this).parents('.servicecont1').siblings()
           .children('.servicecont1bot').slideUp(300);
       $(this).toggleClass('mistake').parents('.servicecont1')
           .siblings().find('.mistake_icon').removeClass('mistake');
   })
    $('.servicecont1top .servicecont1topcen').click(function () {
        $(this).parent().siblings().slideToggle(500);
        $(this).parents('.servicecont1').siblings()
            .children('.servicecont1bot').slideUp(300);
       $(this).siblings('.mistake_icon').toggleClass('mistake').parents('.servicecont1')
           .siblings().find('.mistake_icon').removeClass('mistake');
    })
    //团队介绍
    var tSpan=$('.teamcontent .banArr .mid .points .midpoints span');
	var tPrev=$('.teamcontent .banArr .prev');
	var tNext=$('.teamcontent .banArr .next');
	var tMove=$('.teamcontent .teamcont .teamtu');
	var ww=$('.teamcont .teamtu .teamimg1').width();
	var len=$('.teamcont .teamtu .teamimg1').length;
	var index=0;
	var fa=true;
	var timer=null;
	var timer1=null;
	function next(){
		if(fa){
			fa=false;
			index++;
			if(index>len-1){
				index=1;
				tMove.css({left:0});
			}
			move();
		}
	}
	function move(){
		tMove.animate({left:-index*ww},1000,"backIn",function(){
			fa=true;
		});
		if(index>=len-1){
			tSpan.removeClass('now2').eq(0).addClass('now2');
		}else{
			tSpan.removeClass('now2').eq(index).addClass('now2');
		}
	}
	//点击下一张
	tNext.click(function(){
		clearInterval(timer);
		next();
		
	});
	//点击上一张
	tPrev.click(function(){
		clearInterval(timer);
		if(fa){
			fa=false;
			index--;
			if(index<0){
				index=len-2;
				tMove.css({left:-(len-1)*ww});
			}
			move();
		}
	});
	
	tSpan.hover(function(){
		var that=this;
		clearTimeout(timer1);
		timer1=setTimeout(function(){
			index=$(that).index();
			move();
		},200);
	});
	
	timer=setInterval(next,3000);
	$('.teamArr').hover(function(){
		clearInterval(timer);
	},function(){
		timer=setInterval(next,3000);
	});
	 })();
    //返回顶部
    (function(){
    	$(window).scroll(function(){
        	if($(window).scrollTop()>=1000){
            	$('.return_top').fadeIn(300);
        	}else{
            	$('.return_top').fadeOut(300);
        	}
    	});
   	 	$('.top').click(function () {
        	$('html,body').animate({'scrollTop':'0px'},800)
    	})
    })();
    

})
	
	
	
	
