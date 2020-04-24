$(function(){
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
	$('#callback__form').submit(function(){
	    var $form = $(this);
	    $.post(
	        $form.attr('action'), // ссылка куда отправляем данные
	        $form.serialize()     // данные формы
	    );
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