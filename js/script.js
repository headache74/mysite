$(function(){

	function closePopup() 
	{
		$('.callback__popup').fadeOut(400);
	}
	$(document).ready(function(){
		$("#callback__phone").mask("+7 (999) 99-99-999");
	});	
	//Форма заказа звонка
	$('.callback-button').click(function(){
		$('.callback__popup').fadeIn(400);
	});
	$('.callback__popup, .callback__form_close-btn').click(function(event){
		if(event.target == this) {
			//$(this).hide();
			$('.callback__popup').fadeOut(400);
		}
	});
	//Отправка формы
	$('form').submit(function(event){
		var name = $('#callback__name').val();
	    var form = $(this);
	    $.post(
	        form.attr('action'), // ссылка куда отправляем данные
	        form.serialize()     // данные формы
	    );

	    $('.callback__form_hide').css({
	    	'display': 'none',
		});
		$('.callback__form').css({
	    	'height': '80px',
		});
		var thanks_message = $('<div></div>');
		thanks_message.text('Спасибо, ' + name + ', я свяжусь с Вами в течение 15 минут');
		thanks_message.appendTo($('.callback__form'));
		setInterval(closePopup, 3000);

	    // отключаем действие по умолчанию
	    return false;
	});

	//Мобильное меню
	$('.header__menu_mob').click(function(){
		$('.popup').fadeIn(400);
		$('.popup__menu').fadeIn(400);
	});

	$('.popup__menu, .popup, .popup__menu_close-btn').click(function(){

			$('.popup').fadeOut(400);
	});
});