$(function(){

	$('.navHead li').on('mouseover',function(){
		$(this).children('a').css('color','#14adc4');
		$(this).children('.navSection').show();
	});

	$('.navHead li').on('mouseout',function(){
		$(this).children('a').css('color','#e6e3e3');
		$(this).children('.navSection').hide();
	});

	$('.navSection').hover(function(){
		$(this).siblings('a').css('color','#14adc4');
	},function(){
		$(this).siblings('a').css('color','#e6e3e3');
	})


})