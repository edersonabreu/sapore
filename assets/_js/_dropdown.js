/*
////////////////////////////////////////////////////////
	Dropdown 
////////////////////////////////////////////////////////
*/
	/*
	////////////////////////////////////////////////////////
		Actions 
	////////////////////////////////////////////////////////
	*/
		//Open Dropdown
		$('.dropdown .dp-btn').on('click', function(){
			if($('.dropdown').hasClass('extended')){
				$('.dropdown').removeClass('extended');
			}else{
				$('.dropdown').addClass('extended');
			}
		});

		//Change button value to item selected
		$('.dropdown .dp-ls .dp-ls-item').on('click', function(){
			var item_val = $(this).text();
			$('.dropdown .dp-btn .dp-status').html(item_val);
			$('.dropdown').removeClass('extended');
		});

/*
////////////////////////////////////////////////////////
	//Dropdown 
////////////////////////////////////////////////////////
*/