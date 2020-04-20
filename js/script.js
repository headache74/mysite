$(function(){
	//Форма заказа звонка
	$('.callback-button').click(function(){
		$('.callback__popup').fadeIn(400);
	});
	$('.callback__popup').click(function(event){
		if(event.target == this) {
			//$(this).hide();
			$(this).fadeOut(400);
		}
	});
	
	//Удалить
	//Карусель отзывов
	function changeReport (repImg, repName, repOrg, repTxt){
		$('.report__image').attr("src", repImg);
		$('.report__caption_name').text(repName);
		$('.report__caption_org').text(repOrg);
		$('.report__text').text(repTxt);
	}

	//Мобильное меню
	$('.header__menu_mob').click(function(){
		$('.popup').fadeIn(400);
		$('.popup__menu').fadeIn(400);
	});

	$('.popup__menu, .popup').click(function(){

			$('.popup').fadeOut(400);
	});
});