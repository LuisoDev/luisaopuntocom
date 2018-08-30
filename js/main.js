$(document).ready(function(){

	var banner = {
		padre: $('#banner'),
		numeroSlides: $('#banner').children('.slide').length,
		posicion: 1
	}

	var info = {
		padre: $('#info'),
		numeroSlides: $('#info').children('.slide').length,
		posicion: 1, 
		

	}

	info.padre.children('.slide').first().css({
		'left':0
	});

	banner.padre.children('.slide').first().css({
		'left':0
	});

	var altoBanner = function(){
		var alto = banner.padre.children('.slide').outerHeight();
		banner.padre.css({
			'height': alto + 'px'
		});

		console.log(alto);
	}
	var altoInfo = function(){
		var alto = info.padre.children('.active').outerHeight();
		
		info.padre.animate({
			'height': alto + 'px'
		});

		

		console.log(alto);
	}

	altoBanner();
	altoInfo();

	$(window).resize(function(){
		altoBanner();
		altoInfo();
	});

	//BANNER

	//boton siguiente
	$('#banner-next').on('click', function(e){
		e.preventDefault();

		if(banner.posicion < banner.numeroSlides){
			

			$('#banner .active').animate({
				'left': '-100%'
			})
			banner.padre.children().not('active').css({
				'left': '100%'
			});

			$('#banner .active').removeClass('active').next().addClass('active').animate({
				'left': '0'
			});

			$('#banner .active').prev().animate({
				'left': '-100%'
			})

			banner.posicion = banner.posicion + 1;
		}else {



			$('#banner .active').animate({
				'left': '-100%'
			})
			banner.padre.children().not('active').css({
				'left': '100%'
			});
			$('#banner .active').removeClass('active');
			banner.padre.children('.slide').first().addClass('active').animate({
				'left': 0
			});
			banner.posicion = 1;
		}

		
		
	});

	//baner anterior

	//boton siguiente
	$('#banner-prev').on('click', function(e){
		e.preventDefault();

		if(banner.posicion > 1 ){
			

			$('#banner .active').animate({
				'left': '+100%'
			})
			banner.padre.children().not('active').css({
				'left': '-100%'
			});

			$('#banner .active').removeClass('active').prev().addClass('active').animate({
				'left': '0'
			});

			$('#banner .active').next().animate({
				'left': '+100%'
			})

			banner.posicion = banner.posicion - 1;
		}else {



			$('#banner .active').animate({
				'left': '100%'
			})
			banner.padre.children().not('active').css({
				'left': '-100%'
			});
			$('#banner .active').removeClass('active');
			banner.padre.children('.slide').last().addClass('active').animate({
				'left': 0
			});
			banner.posicion = 3;
		}

		
		
	});


	//BANNER INFO

	//boton siguiente
	$('#info-next').on('click', function(e){
		e.preventDefault();

		if(info.posicion < info.numeroSlides){
			
			
			$('#info .active').animate({
				'left': '-100%'
			})
			info.padre.children().not('active').css({
				'left': '100%'
			});

			$('#info .active').removeClass('active').next().addClass('active').animate({
				'left': '0'
			});

			$('#info .active').prev().animate({
				'left': '-100%'
			})
			altoInfo();
			info.posicion = info.posicion + 1;
		}else {


			
			$('#info .active').animate({
				'left': '-100%'
			})
			info.padre.children().not('active').css({
				'left': '100%'
			});
			$('#info .active').removeClass('active');
			info.padre.children('.slide').first().addClass('active').animate({
				'left': 0
			});
			altoInfo();
			info.posicion = 1;
		}

		
		
	});

	//baner anterior

	//boton anterior
	$('#info-prev').on('click', function(e){
		e.preventDefault();

		if(info.posicion > 1 ){
			
			
			$('#info .active').animate({
				'left': '+100%'
			})
			info.padre.children().not('active').css({
				'left': '-100%'
			});

			$('#info .active').removeClass('active').prev().addClass('active').animate({
				'left': '0'
			});

			$('#info .active').next().animate({
				'left': '+100%'
			})
			altoInfo();
			info.posicion = info.posicion - 1;
		}else {



			$('#info .active').animate({
				'left': '100%'
			})
			info.padre.children().not('active').css({
				'left': '-100%'
			});
			$('#info .active').removeClass('active');
			info.padre.children('.slide').last().addClass('active').animate({
				'left': 0
			});
			altoInfo();
			info.posicion = 3;
		}

		
		
	});




});