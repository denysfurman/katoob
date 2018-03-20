$(document).ready(function(){

	window.onscroll = function() {
		var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		var arrowToTop = document.querySelector( '.arrow-up' );
		var scrollDistance = window.innerHeight;
		// show-hide arrow-up btn
		if ( scrollTop > scrollDistance ){
			arrowToTop.classList.add( 'arrow-up_active' );
		} else {
			arrowToTop.classList.remove( 'arrow-up_active' );
		}
	}

	// wrap table in base text
	if($('.base__text table').length != 0){
		var table = $('.base__text table');
		table.wrap('<div class="table_wrap"></div>');
	}

	//main-slider init
	if($('.main-slider__content').length != 0){
		$('.main-slider__content').slick({
			dots: true,
			fade: true,
			appendArrows: '.main-slider',
		});
	}

	//popular posts slide init
	if($('.popular-posts__content').length != 0){
		$('.popular-posts__content').slick({
			dots: true,
			appendArrows: '.popular-posts_arrows',
			infinite: false,
		});
	}

	// append slick-dots of popular posts
	$('.popular-posts .slick-dots').livequery(function(){
		$('.popular-posts_nav').append($(this));
	});

	// custom select
	if($('select').length != 0){
		$('select').selectize({
			create: true,
			sortField: {field: 'text'}
		});
	}

	// teacher vertical slider
	if($('.teacher-dropdown__content').length != 0){
		$('.teacher-dropdown__content').slick({
			vertical: true,
			slidesToShow: 2,
			slidesToScroll: 1
		});
	}

	// show teacher popup
	// if($('.courses__col').length != 0){
	// 	$('.courses__col').each(function(){
	// 		$(this).find('.teacher-block__btn').click(function(){
	// 			$('.teacher-dropdown').removeClass('teacher-dropdown_active');
	// 			$(this).next().addClass('teacher-dropdown_active');
	// 		});
	// 	});
	// }

	// close teacher popup
	// if($('.teacher-dropdown__close').length != 0){
	// 	$('.teacher-dropdown__close').click(function(){
	// 		$('.teacher-dropdown').removeClass('teacher-dropdown_active');
	// 	});
	// }

	// click to top
	if($('.arrow-up').length != 0){
		$(".arrow-up").click(function() {
		  $("html, body").animate({ scrollTop: 0 }, 1000);
		  return false;
		});
	}

	if ($(window).width() < 767){
		// phone search show-hide
		if($('.search__btn').length != 0){
			$('.search__btn').click(function(){
				$('.search').addClass('search_active');
			});
		}

		$(document).mouseup(function (e) {
		    var container = $(".search");
		    if (container.has(e.target).length === 0){
		        container.removeClass('search_active');
		    }
		});

		// phone menu show-hide
		$('.menu-btn').click(function(){
			$('.navigation_header').slideToggle();
		});
	}

	// datepicker
	if ($('.form__text_date').length != 0){
		$('.form__text_date').datepicker();
	}

	// certificates dropdown
	$('.certificates__btn').on('click', function(){
		$(this).parents('tr').next().toggleClass('active');
		$(this).toggleClass('active');
		//certificates slide init
		// setTimeout(function(){
		console.log($(this).parents('tr').next().find('.certificates-dropdown__images'));
			if($(this).parents('tr').next().find('.certificates-dropdown__images').length != 0){
				$(this).parents('tr').next().find('.certificates-dropdown__images').slick({
					dots: true,
					infinite: false,
				});
				$('.certificates-dropdown .slick-dots').livequery(function(){
					$(this).insertAfter($(this).parents('tr').find('.certificates-dropdown_arrows'));
				});
				$('.certificates-dropdown__images').livequery(function(){
					$(this).parents('tr').find('.certificates-dropdown_arrows').prepend($(this).parents('tr').find('.slick-prev'));
				});
				$('.certificates-dropdown__images').livequery(function(){
					$(this).parents('tr').find('.certificates-dropdown_arrows').prepend($(this).parents('tr').find('.slick-next'));
				});
			}
		// }, 100);
	});
	var options = {
		controls: ['play-large', 'progress', 'current-time']
	};
	plyr.setup('.download__vid', options);
	plyr.setup('.download__audio', options);

	// select all
	if ($('.single-nav__select').length != 0 ){
		$('.single-nav__select').on('click', function(){
			$('.download__item_other .form__checkbox').prop('checked', true);
		});
		$('.single-nav__select').on('click', function(){
			$('.download__item_photo .form__checkbox').prop('checked', true);
		});
	}

	//
	$('.sign__btn').click(function(){
		$('.sign-dropdown').addClass('active');
	});

	$(document).mouseup(function (e) {
	    var container = $(".sign-dropdown");
	    if (container.has(e.target).length === 0){
	        container.removeClass('active');
	    }
	});

	// lessons body show-hide
	$(document).on('click', '.lessons__main-title', function(){
		$(this).toggleClass('lessons__main-title_active');
		$(this).next().slideToggle();
	});

	// test page custom select
	$('.test-chosen__label').click(function(){
		$(this).next().addClass('active');
		if($('.test-chosen__content').length != 0){
			$('.test-chosen__content').slick({
				vertical: true,
				slidesToShow: 4,
				slidesToScroll: 1,
				infinite: false
			});
		}
	});
	$('.test-chosen .form__radios label').click(function(){
		var radioText = $(this).text();
		$(this).parents('.test-chosen').find('.test-chosen__label').text(radioText);
	});

	$(document).on('click', '.test-chosen__close', function(){
		$(this).parents('.test-chosen__dropdown').removeClass('active');
	});

	// global show blocks
	$('.global__btn').click(function(){
		$(this).addClass('hide');
		$(this).parents('.global__block').find('.row').addClass('active');
	});

	//drop table
	$('.drop-btn').click(function(){
		$(this).parents('tr').next().toggleClass('active');
		$(this).toggleClass('active');
	});

	// autocomplete
	if ($('#autocomplete').length !== 0){
		var autocomplete = document.getElementById('autocomplete');
		setTimeout(function(){
			function initAutocomplete() {
			    // Create the autocomplete object, restricting the search to geographical
			    // location types.
			    autocomplete = new google.maps.places.Autocomplete(
			        (autocomplete),
			        {types: ['geocode']});

			    // When the user selects an address from the dropdown, populate the address
			    // fields in the form.
			    autocomplete.addListener('place_changed', fillInAddress);
			    var place = autocomplete.getPlace();
			}
			initAutocomplete();
		}, 500);
		var componentForm = {
			street_number: 'short_name',
			route: 'long_name',
			locality: 'long_name',
			administrative_area_level_1: 'short_name',
			country: 'long_name',
			postal_code: 'short_name'
		};
		function fillInAddress() {
		  // Get the place details from the autocomplete object.
		  var place = autocomplete.getPlace();
		  // Get each component of the address from the place details
		  // and fill the corresponding field on the form.
		  // for (var i = 0; i < place.address_components.length; i++) {
		  //   var addressType = place.address_components[i].types[0];
		  //   if (addressType == "country") {
		  //   	console.log(document.getElementById("countryCode"))
		  //     document.getElementById("countryCode").value = place.address_components[i].short_name;
		  //   }
		  // }
		}
	}


});