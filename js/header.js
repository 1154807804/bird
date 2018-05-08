$(function(){
	$(".firstPage h1").hover(function(){
		$(this).next('ul').show();
	},function(){
		$(this).next('ul').hide();
	})
	$(".firstPage ul").hover(function(){
		$(this).show()
	},function(){
		$(this).hide()
	})
})