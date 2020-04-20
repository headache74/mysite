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
	
	//Слайдер большой
	cur_pos_left = 0;
	cur_pos_right = 0;
	$('.btn-arrow__left').click(function(){
		switch(cur_pos_right) {
		    case 0:
		    	$('.portfolio__examples_4').css({
					'right': '0',	
					'transform':'translateX(0%)',
				});
				$('.portfolio__examples_3').css({
					'right':'50%',
					'transform':'translateX(50%)',
				});
				$('.portfolio__examples_2').css({
					'left':'0px',
					'transform':'translateX(0%)',
				});
				$('.portfolio__examples_1').css({
					'left':'-50%',
					'transform':'translateX(+50%)',	
				});
				cur_pos_left = 1;
				break;
			case 1:
				$('.portfolio__examples_3').css({
					'right': '0',	
					'transform':'translateX(0%)',
				});
				$('.portfolio__examples_2').css({
					'left':'50%',
					'transform':'translateX(-50%)',
				});
				$('.portfolio__examples_1').css({
					'left':'0px',
					'transform':'translateX(0%)',
				});
				$('.portfolio__examples_0').css({
					'left':'-50%',
					'transform':'translateX(+50%)',	
				});
				cur_pos_left = 0;
				cur_pos_right = 0;
				break;
		}
	});
	
	$('.btn-arrow__right').click(function(){
		// $('.reports__body_left').fadeOut(400);
		switch(cur_pos_left) {
		    case 0:
				$('.portfolio__examples_3').css({
					'right':'-50%',
					'transform':'translateX(-50%)',
				});
				$('.portfolio__examples_2').css({
					'left':'100%',
					'transform':'translateX(-100%)',
				});
				$('.portfolio__examples_1').css({
					'left':'50%',
					'transform':'translateX(-50%)',	
				});
				$('.portfolio__examples_0').css({
					'left': '0',	
					'transform':'translateX(0%)',
				});
				cur_pos_right = 1;
				break;
			case 1:
				$('.portfolio__examples_4').css({
					'right':'-50%',
					'transform':'translateX(-50%)',
				});
				$('.portfolio__examples_3').css({
					'right':'0',
					'transform':'translateX(0%)',
				});
				$('.portfolio__examples_2').css({
					'left':'50%',
					'transform':'translateX(-50%)',	
				});
				$('.portfolio__examples_1').css({
					'left': '0',	
					'transform':'translateX(0%)',
				});
				cur_pos_right = 0;
				cur_pos_left = 0;
				break;
		  default:
		    break;
		}		
	});

    $('.slider__radio_left').click(function(){
    		switch(cur_pos_right) {
		    case 0:
		    	$('.portfolio__examples_4').css({
					'right': '49%',	
					'transform':'translateX(100%)',
				});
				$('.portfolio__examples_3').css({
					'right':'101%',
					'transform':'translateX(150%)',
				});
				$('.portfolio__examples_2').css({
					'left':'-49%',
					'transform':'translateX(100%)',
				});
				$('.portfolio__examples_1').css({
					'left':'-50%',
					'transform':'translateX(+50%)',	
				});
				cur_pos_left = 1;
				break;
			case 1:
				$('.portfolio__examples_3').css({
					'right': '0',	
					'transform':'translateX(0%)',
				});
				$('.portfolio__examples_2').css({
					'left':'50%',
					'transform':'translateX(-50%)',
				});
				$('.portfolio__examples_1').css({
					'left':'0px',
					'transform':'translateX(0%)',
				});
				$('.portfolio__examples_0').css({
					'left':'-50%',
					'transform':'translateX(+50%)',	
				});
				cur_pos_left = 0;
				cur_pos_right = 0;
				break;
			}
    });

    $('.slider__radio_right').click(function(){
    		switch(cur_pos_right) {
		    case 0:
		    	$('.portfolio__examples_4').css({
					'right': '-51%',	
					'transform':'translateX(-100%)',
				});
				$('.portfolio__examples_3').css({
					'right':'-51%',
					'transform':'translateX(-100%)',
				});
				$('.portfolio__examples_2').css({
					'left':'152%',
					'transform':'translateX(-200%)',
				});
				$('.portfolio__examples_1').css({
					'left':'100%',
					'transform':'translateX(-150%)',
				});
				$('.portfolio__examples_0').css({
					'left':'49%',
					'transform':'translateX(-100%)',	
				});
				cur_pos_left = 1;
				break;
			case 1:
				$('.portfolio__examples_3').css({
					'right': '0',	
					'transform':'translateX(0%)',
				});
				$('.portfolio__examples_2').css({
					'left':'50%',
					'transform':'translateX(-50%)',
				});
				$('.portfolio__examples_1').css({
					'left':'0px',
					'transform':'translateX(0%)',
				});
				$('.portfolio__examples_0').css({
					'left':'-50%',
					'transform':'translateX(+50%)',	
				});
				cur_pos_left = 0;
				cur_pos_right = 0;
				break;
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