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

	//Мобильное меню
	$('.header__menu_mob').click(function(){
		$('.popup').fadeIn(400);
		$('.popup__menu').fadeIn(400);
	});

	$('.popup__menu, .popup, .popup__menu_close-btn').click(function(){

			$('.popup').fadeOut(400);
	});
});