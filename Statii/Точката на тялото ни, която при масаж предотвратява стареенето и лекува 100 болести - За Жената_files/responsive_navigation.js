function copyInSubmenu(html, href) {
	var anchorHtml = "<a style='float:left; width:100%; height:auto;' href='" + href + "'>" + html + "</a>";
	return anchorHtml;
}

function copyForTopNav(selector) {
	selector.children().each(function() {
		if($(this).hasClass('for-more')) {
			anchorHtml = $(this).html();
			anchorHref = $(this).attr('href');
			if(anchorHtml != 'Бомба') {
				anchorHtml = copyInSubmenu(anchorHtml, anchorHref);
				$('#navigation .more .main').append(anchorHtml);  
			}
			$(this).hide();
		}
	});
}

function copyForTopNavN(selector) {
	selector.children().each(function() {
		if($(this).hasClass('for-more-n')) {
			anchorHtml = $(this).html();
			anchorHref = $(this).attr('href');
			if(anchorHtml != 'Бомба') {
				anchorHtml = copyInSubmenu(anchorHtml, anchorHref);
				$('#navigation .more .main').append(anchorHtml);  
			}
			$(this).hide();
		}
	});
}


function copyForTopNavWidescreen(selector) {
	selector.children().each(function() {
		if($(this).hasClass('for-more-widescreen')) {
			anchorHtml = $(this).html();
			anchorHref = $(this).attr('href');
			anchorHtml = copyInSubmenu(anchorHtml, anchorHref);
			$(this).hide();
			$('#navigation .more .main').append(anchorHtml);
		}
	});
}

function copyForTopNav320(selector) {
	selector.children().each(function() {
		if($(this).hasClass('for-more320')) {
			anchorHtml = $(this).html();
			anchorHref = $(this).attr('href');
			if(anchorHtml != 'Бомба') { 
				anchorHtml = copyInSubmenu(anchorHtml, anchorHref);
				$('#navigation .more .main').append(anchorHtml); 
			}
			$(this).hide();
		}
	});
}

function copyForTopNav320N(selector) {
	selector.children().each(function() {
		if($(this).hasClass('for-more320-n')) {
			anchorHtml = $(this).html();
			anchorHref = $(this).attr('href');
			if(anchorHtml != 'Бомба') { 
				anchorHtml = copyInSubmenu(anchorHtml, anchorHref);
				$('#navigation .more .main').append(anchorHtml); 
			}
			$(this).hide();
		}
	});
}

function copyForSubmenu320(selector) {
	selector.children().each(function() {
		if($(this).hasClass('for-more320')) {
			anchorHtml = $(this).html();
			anchorHref = $(this).attr('href');
			anchorHtml = copyInSubmenu(anchorHtml, anchorHref);
			$(this).hide();
			$('#navigation .submenu .sub_more .main').append(anchorHtml);
		}
	});
}

function copyForSubmenu(selector) {
	selector.children().each(function() {
		if($(this).hasClass('for-more')) {
			anchorHtml = $(this).html();
			anchorHref = $(this).attr('href');
			anchorHtml = copyInSubmenu(anchorHtml, anchorHref);
			$(this).hide();
			$('#navigation .submenu .sub_more .main').append(anchorHtml);
		}
	});
}

function clearMore(selector) {
	selector.children('.anchor').each(function() {
		$(this).show();
	});
}

function clearMoreWithoutSome(selector) {
	selector.children('.anchor').each(function() {
		if($(this).hasClass('for-more')) {} else {
			$(this).show();
		}
	});
}

function clearMoreSub(selector) {
	var counter = 0;
	selector.children('.anchor').each(function() {
		if(counter < 12) {
			$(this).show();
			counter = counter + 1;
		}
	});
}

function setCubeSize() {
	var responsive_785 =false;
	var responsive_320 =false;


	var width = $(window).width();
	var topNav = $('.topnav');
	var submenu = $('.submenu');
	var count = false;

	if(width < 598) {
		//phone
		if(!responsive_320) {
			$('#navigation .more').removeClass('invisible2');   
			$('#navigation .more .main').html('');
			$('#navigation .submenu .sub_more .main').html('');
			responsive_320 = true;
			var anchorHtml, anchorHref;
			copyForTopNav320(topNav);
			copyForTopNav320N(submenu);
			copyForSubmenu320(submenu);
			$('#navigation .submenu').css("overflow", "visible");
		}
	} else {
		if((width > 597) && (width < 768)) {
			//tablet
			$('#navigation .more').removeClass('invisible2');   
			clearMoreWithoutSome(topNav);
			clearMore(submenu);
			responsive_320 = false;
		} 
	} 

	if ((width < 786) && (width > 597)) {
		//tablet
		if(!responsive_785){
			$('#navigation .more').removeClass('invisible2');   
			$('#navigation .more .main').html('');
			$('#navigation .submenu .sub_more .main').html('');
			responsive_785=true;
			var anchorHtml, anchorHref;
			copyForTopNav(topNav);
			copyForTopNavN(submenu);
			//copyForSubmenu(submenu);
			$('#navigation .submenu').css("overflow", "visible");

		}
	} else {
		if(width > 666) {
			//website
			clearMore(topNav);
			clearMore(submenu);
			responsive_785 = false;
			$('#navigation .more .main').html('');
			$('#navigation .submenu .sub_more .main').html('');
			copyForTopNavWidescreen(topNav);
			copyForTopNavWidescreen(submenu);
			$('#navigation .more').children('.main').children().each( function() {
				count++;
			});
			if(count != 0) $('#navigation .more').removeClass('invisible2'); else $('#navigation .more').addClass('invisible2');

		}
	}

	//  copyForTopNav(topNav);


}

function resized() {
	var count = 0;
	var width = $(window).width();    

}

$(document).ready(function() {

	$('#navigation .more .main').hide();
	$('#navigation .submenu .sub_more .main').hide();

	$('#navigation .more').click(function() {
		$('#navigation .more .main').stop(true, true).slideToggle();
	});

	$('#navigation .submenu .sub_more').click(function() {
		$('#navigation .submenu .sub_more .main').stop(true, true).slideToggle();
	});

	setCubeSize();

	$(window).bind('orientationchange resize', function(event){
		setCubeSize();
	});



});
