(function() {
	$(function() {
		var header = $(".clear-header"),
			collector = $("#collector"),
			DARK = 'dark-header',
			CLEAR = 'clear-header',
			OPENED = 'collector-opened',
			CLOSED = 'collector-closed',
			//NOT how you should do this either, but it will work for now.  I will show you some more things later. 
			init = function() {
				$(window).scroll(function() {
					var scroll = $(window).scrollTop();
					
					if (scroll >= 100) {
			            header.removeClass(CLEAR, 300).addClass(DARK, 300);
			        } else if(scroll >= 300) {
			        	collector.removeClass('collector-closed', 300).addClass("collector-opened", 300);
			        } else {
			            header.removeClass(DARK, 300).addClass(CLEAR, 300);
			            collector.removeClass("collector-opened", 300).addClass('collector-closed', 300);
			        }
				});
				var deg = 0;
				window.setInterval(function() {
				    deg += .1;
				    //we need the transform to work across all browsers. 
				    //$("#logo-rotate").css('-webkit-transform','rotate(' + deg + 'deg)');
				    //$("#logo-rotate").css('-moz-transform','rotate(' + deg + 'deg)');
				    //$("#logo-rotate").css('transform','rotate(' + deg + 'deg)');
				}, 50);
				//smoothScroll.init();
			}
		return init();
	});
	$(document).ready(function() {
		//i setup a variable here just in case i want to add more later. 
		var options = {
			moveFactor: 3
		}
		var optionsS = {
			dotColor: '#C9A7E6',
			lineColor: '#C9A7E6',
			directionX: 'center',
			density: 50000,
		
		}
 		
 		$('#particles').particleground(optionsS);
 		$('#particles').particleground('start');
		/*
		$(window).scroll(function() {
		   var hT = $('#particles-two').offset().top,
		       hH = $('#particles-two').outerHeight(),
		       wH = $(window).height(),
		       wS = $(this).scrollTop();
		    console.log((hT-wH) , wS);
		   if (wS > (hT+hH-wH)){
 				$('#particles-two').particleground(optionsS);
 				$('#particles-two').particleground('start');
 				return -1;
		   }
		});
 		*/
		//$('#home-background').mouseParallax(options);
		//$('body').height(3000);
	});
}).call(this);