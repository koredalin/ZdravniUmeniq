function firstItemElseAppend() {
    $('#left_column').appendTo('#content_main');
    $('.priority').appendTo('#left_column #content');
    $('.epicentar_class').appendTo('#left_column #content');
    $('.interview').appendTo('#left_column #content');
    $('.comment').appendTo('#left_column #content');
    $('.bg_today').appendTo('#left_column #content');
    $('.world_today').appendTo('#left_column #content');
    $('#banner1').appendTo('#left_column #content');
    $('.sport_today').appendTo('#left_column #content');
   // $('.video_today').appendTo('#left_column #content');
    $('.gallery').appendTo('#left_column #content');
   // $('.banner').appendTo('#left_column #content');
    $('.gallery_show').appendTo('#left_column #content');
    $('#banner2').appendTo('#left_column #content');
    $('.pied_world').appendTo('#left_column #content');
    $('.video_today').appendTo('#left_column #content');
    $('.technology_wrap').appendTo('#left_column #content');
    $('.pic_day_b').appendTo('#left_column #content');
    $('.programa').appendTo('#left_column #content');
    //$('#right_column').appendTo('#content_main');
}

function setCubeSizeCont() {
	var responsive_785 =false;


        var width = $(window).width();

        	if(width < 598) {
        		//reposition of items
        			$('#left_column').appendTo('#content_main');
	              //  $('.priority').appendTo('#left_column #content');
	              //  $('.epicentar_class').appendTo('#left_column #content');
    				$('.banner_top').appendTo('#left_column #content');

    				$('.interview').appendTo('#left_column #content');
    				$('.comment').appendTo('#left_column #content');
    				$('.bg_today').appendTo('#left_column #content');
    				$('.world_today').appendTo('#left_column #content');
    				$('#banner1').appendTo('#left_column #content');
    				$('.sport_today').appendTo('#left_column #content');
    			//	$('.gallery').appendTo('#left_column #content');
    				//$('.banner').appendTo('#left_column #content');
    				$('.gallery_show').appendTo('#left_column #content');
	                $('#banner2').appendTo('#left_column #content');
	                $('.pied_world').appendTo('#left_column #content');
	                $('.video_today').appendTo('#left_column #content');
	                $('.technology_wrap').appendTo('#left_column #content');
	                $('.pic_day_b').appendTo('#left_column #content');
    				$('.programa').appendTo('#left_column #content');
    				$('#right_column').appendTo('#content_main');


				$('#content_top .time').appendTo('');
				$('#content #content_main #left_column #content .sport_today .content .column .img').css("padding", "0");

				$('.first .image .inner_image .info .info_right .text').appendTo('.first .append320');


				//news list
	                var title = $('#content_main #left_column #content .list_news_column .right_part .title-list');
	                title.each(function() {
				        $(this).appendTo($(this).parent().parent());
					});
					var info = $('#content_main #left_column #content .list_news_column .right_part .info-list');
	                info.each(function() {
				        $(this).appendTo($(this).parent().parent());
					});
					var  img_holder = $('#content_main #left_column #content .list_news_column .img_holder');
	                img_holder.each(function() {
				        $(this).appendTo($(this).parent());
					});
					var  right_part = $('#content_main #left_column #content .list_news_column .right_part');
	                right_part.each(function() {
				        $(this).appendTo($(this).parent());
					});

        	}


	        if ((width < 786) && (width > 597)) {
	        	$('.first .append320 .text').appendTo('.first .image .inner_image .info .info_right');
	            if(!responsive_785){
	              //  $('.priority').appendTo('#content_main');
                  //  $('.banner_top').appendTo('#left_column #content');
	              //  $('.gallery').appendTo('#left_column #content');
	             /*   $('.interview').appendTo('#left_column #content');
   					 $('.comment').appendTo('#left_column #content');
    				 $('.bg_today').appendTo('#left_column #content');
    				 $('.world_today').appendTo('#left_column #content');
    				 $('#banner1').appendTo('#left_column #content');
    				 $('.sport_today').appendTo('#left_column #content');
    				// $('.video_today').appendTo('#left_column #content');
    				 $('.banner').appendTo('#left_column #content');
    				 $('.gallery_show').appendTo('#left_column #content');
                     $('#banner2').appendTo('#left_column #content');
                     $('.pied_world').appendTo('#left_column #content');
    				 $('.pic_day_b').appendTo('#left_column #content');
    				 $('.programa').appendTo('#left_column #content');
	                $('#left_column').appendTo('#content_main');
	                $('#right_column').appendTo('#content_main'); */


	                //news list
	                var title = $('#content_main #left_column #content .list_news_column .right_part .title-list');
	                title.each(function() {
				        $(this).appendTo($(this).parent().parent());
					});
					var info = $('#content_main #left_column #content .list_news_column .right_part .info-list');
	                info.each(function() {
				        $(this).appendTo($(this).parent().parent());
					});
					var  img_holder = $('#content_main #left_column #content .list_news_column .img_holder');
	                img_holder.each(function() {
				        $(this).appendTo($(this).parent());
					});
					var  right_part = $('#content_main #left_column #content .list_news_column .right_part');
	                right_part.each(function() {
				        $(this).appendTo($(this).parent());
					});



	                //sport_today
	                $('#content #content_main #left_column .sport_today .content .column_left .description').appendTo('#content #content_main #left_column .sport_today .content .column_left');
	            }
	        } else {
	             if (width > 786) {

	             	var title = $('#content_main #left_column #content .list_news_column .title-list');
	                title.each(function() {
				        $(this).appendTo($(this).parent().children('.right_part'));
					});
					var info = $('#content_main #left_column #content .list_news_column .info-list');
	                info.each(function() {
				        $(this).appendTo($(this).parent().children('.right_part'));
					});
					var text = $('#content_main #left_column #content .list_news_column .text-list');
	             	text.each(function() {
				        $(this).appendTo($(this).parent());
					});

				 }

				 if (width > 597) {
                     firstItemElseAppend();
				 }
	             //sport_today
	             $('#content #content_main #left_column .sport_today .content .column_left .extra_info').appendTo('#content #content_main #left_column .sport_today .content .column_left');
	        }

}

$(window).load(function() {
	$('.fb_iframe_widget').attr('mobile', 'false');

	$('#content_main #right_column .retro .content .img').children().children('img').css({'max-width' : '100%'});
	$('#content_main #right_column .greed .content .img').children().children('img').css({'max-width' : '100%'});
	$('#content_main #right_column .greed .content .img').children().children('img').css({'max-width' : '100%'});
});

$(document).ready(function() {



	$('.live_score_tab').bind('click', function() {
    	$.each($(".live_score_tab"),function(){
        	$(this).next().hide();
            $(this).show();
        });
            $(this).hide();
            $(this).next().show();
            $(".live_score_slide").addClass("invisible");
            var Div = $(this).attr("lang");
            $("#" + Div).removeClass("invisible");
    });

	var new_sub_name;
    var old_sub_name;
	var sub_name = $('#content_main #right_column .live_score .content .top .left_column .sub_name');
	//sub_name.hide();

	$('#content_main #right_column .live_score .content .top .left_column .sub_button').click(function() {
    	// sub_name.slideToggle();
    });

  /*  $('#content_main #right_column .live_score .content .top .left_column .sub_name .sub_cats').click(function() {
    	new_sub_name = $(this).html();
    	temp_sub_name = $('#content_main #right_column .live_score .content .top .left_column .name .name_content').html();
    	console.log(new_sub_name);
    	console.log(temp_sub_name);
    	$('#content_main #right_column .live_score .content .top .left_column .name .name_content').html(new_sub_name);
    	//console.log(temp_sub_name);
    	old_sub_name = "<div class='left w100 sub_cats'>" + temp_sub_name + "</div>";
    	sub_name.append(old_sub_name);
    	$(this).hide();
    	old_sub_name = '';
	}); */


    var x_count = false;

    $('.item .x320').click(function() {
    	if($(this).parent().next().is(':hidden')) {
    		$(this).find('.text').html('Затвори');
            $(this).children().children().attr("src","/img/x2.png");
			$(this).parent().next().show();
		} else {
			$(this).find('.text').html('Отвори');
            $(this).children().children().attr("src","/img/x.png");
			$(this).parent().next().hide();
		}
    });

     setCubeSizeCont();

     var pathname = window.location.pathname;
     
	$(window).bind('orientationchange resize', function(event){
	   console.log(pathname);
	   if(pathname != '/users/login_app' && pathname != '/users/login' && pathname != '/users/register') setCubeSizeCont();
	});

    $('#footer .items .item').each(function(i) {
        if( i % 4 == 2 ) {
            $(this).css("border","1px solid ");
        }
    });

});
