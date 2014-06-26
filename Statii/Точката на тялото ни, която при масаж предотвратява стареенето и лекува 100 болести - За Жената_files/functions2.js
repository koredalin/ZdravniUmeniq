$(document).ready(function() {

    $("#become_reporter_wraper").hover(function(){
        $('#become_reporter_content').show();
    },function(){
        $('#become_reporter_content').hide();
    });

	$("#bomb .bomb_main .heading .close_btn").click(function() {
		$(this).parent().parent().parent().animate({width: "0px"}, 500);
        id = $('#bomba_id').val();
        setCookie('bomba_id',id,10);
    });

    $(".styled-select").children().first().hide();

      //  Tabs top news
      $('.news_tab').bind('click', function() {
            $.each($(".news_tab"),function(){
                $(this).next().hide();
                $(this).show();
            });
            $(this).hide();
            $(this).next().show();
             $(".news_slide").addClass("invisible");
             var Div = $(this).attr("lang");
             $("#" + Div).removeClass("invisible");
      });

      //  Tabs top news
      $('.upper_news_tab').bind('click', function() {
            $.each($(".upper_news_tab"),function(){
                $(this).next().hide();
                $(this).show();
            });
            $(this).hide();
            $(this).next().show();
             $(".upper_news_slide").addClass("invisible");
             var Div = $(this).attr("lang");
             $("#" + Div).removeClass("invisible");
      });

      //  Tabs program
      $('.program_tab').bind('click', function() {
            $.each($(".program_tab"),function(){
                $(this).next().hide();
                $(this).show();
            });
            $(this).hide();
            $(this).next().show();
             $(".program_slide").addClass("invisible");
             var Div = $(this).attr("lang");
             $("#" + Div).removeClass("invisible");
      });

      // Hover for comments
      $('.comments_wrap .column').hover(function() {
          $(this).find(".answer_holder").addClass("block");
      },
      function() {
          $(this).find(".answer_holder").removeClass("block");
      });

      $('.change_photo_p').hover(function() {
          $(this).find(".change_photo").css("background","url(/img/photo_over.png) no-repeat");
      },
      function() {
          $(this).find(".change_photo").css("background","url(/img/photo.png) no-repeat");
      });

      $('.change_vid_p').hover(function() {
          $(this).find(".change_vid").css("background","url(/img/play_over.png) no-repeat");
      },
      function() {
          $(this).find(".change_vid").css("background","url(/img/play.png) no-repeat");
      });

      $('.do_hover').hover(function() {
          $(this).find(".info_big").addClass("block");
      },
      function() {
          $(this).find(".info_big").removeClass("block");
      });

      $("#scroller").bind("click", function() {
                $(".sub_name").slideToggle(300);
      });
       $(".scroller2").bind("click", function() {
                $(".sub_name").slideToggle(300);
      });

        $(".sub_cats").bind("click", function() {
            var val = $(this).html();
            var rval = $(this).attr('lang');
            $("#scroller").html(val);
            $("#rval").val(rval);
            $(".sub_name").slideToggle(300);
        });


       $("#footer .items .item").hover(function() {
          $(this).children(":first").css("border-bottom","2px solid #70af0e");
        },function() {
          $(this).children(":first").css("border-bottom","2px solid #fff");
     });

      $(".scroll_to_form").click(function() {
         $('html, body').animate({
             scrollTop: $(".comment_it_wrap").offset().top - 50
         }, 2000);
      });



});
	var pik_top_k = 1;


    // Show weather
    function ShowWeather(){
        if ($("#wearher_ajax").is(':visible')){
            $("#wearher_ajax").fadeOut();
        } else {
            $("#wearher_ajax").fadeIn();
        }
    }

    function ShowWeatherAjax(name, pic, time, siteid){
        $("#wearher_ajax").fadeOut();
        $('#temp_pic').attr('src', pic);
        $('#time_href').attr('href', '/vremeto-v-'+siteid+'.html');
        $("#temp").html(time + " C");
        $("#temp_name").html(name);
    }

    function ChangeWeatherNew(id, city) {

        if(id && city) {
            $("#wearher_ajax").fadeOut();
            $('#weather .dinamic_hide_weather').hide();
            $('#weather_'+id).show();


            setCookie('sel_weather', city, (365 * 24 * 60 * 60 * 1000));
        }

    }



    function PikTopMove(move){
       count = $('.pik_top').length;
       if (move == 0)
       {
            pik_top_k = pik_top_k - 1;
            if (pik_top_k < 1){pik_top_k = count};
       }
       if (move == 1){
            pik_top_k = pik_top_k + 1;
            if (pik_top_k > count){pik_top_k = 1};
       }
       $('.pik_top').hide();
       $('#pik_top_'+pik_top_k).fadeIn();

    }


    var pik_top_k_v2_small = 1;
    function PikTopMoveSmall_v2(move)
    {
       count = $('.pik_top_v2_small').length;
       count = count - 1;
       if (move == 0)
       {
            pik_top_k_v2_small = pik_top_k_v2_small - 1;
            if (pik_top_k_v2_small < 1){pik_top_k_v2_small = count};
       }
       if (move == 1){
            pik_top_k_v2_small = pik_top_k_v2_small + 1;
            if (pik_top_k_v2_small > count){pik_top_k_v2_small = 1};
       }
       $('.pik_top_v2_small').hide();
       $('#pik_top_parent_small_'+pik_top_k_v2_small).fadeIn();


    }


    var pik_top_k_v2 = 1;
    function PikTopMove_v2(move)
    {
       count = $('.pik_top_v2').length;
       if (move == 0)
       {
            pik_top_k_v2 = pik_top_k_v2 - 1;
            if (pik_top_k_v2 < 1){pik_top_k_v2 = count};
       }
       if (move == 1){
            pik_top_k_v2 = pik_top_k_v2 + 1;
            if (pik_top_k_v2 > count){pik_top_k_v2 = 1};
       }
       $('.pik_top_v2').hide();
       $('#pik_top_parent_'+pik_top_k_v2).fadeIn();


    }

    function PikMoveVideos(){
        if ($('#pik_video_1').is(":visible") == true){
           $('#pik_video_1').hide();
           $('#pik_video_2').fadeIn();
        } else {
           $('#pik_video_1').fadeIn();
           $('#pik_video_2').hide();
        }
    }

  function PikMoveVideos2(){
        if ($('#pik_video2_1').is(":visible") == true){
           $('#pik_video2_1').hide();
           $('#pik_video2_2').fadeIn();
        } else {
           $('#pik_video2_1').fadeIn();
           $('#pik_video2_2').hide();
     }
  }

    function PikMovePhoto(){
        if ($('#pik_photo_1').is(":visible") == true){
           $('#pik_photo_1').hide();
           $('#pik_photo_2').fadeIn();
        } else {
           $('#pik_photo_1').fadeIn();
           $('#pik_photo_2').hide();
        }
    }

     function PikMovePhoto2(){
        if ($('#pik_photo_1_1').is(":visible") == true){
           $('#pik_photo_1_1').hide();
           $('#pik_photo_2_1').fadeIn();
        } else {
           $('#pik_photo_1_1').fadeIn();
           $('#pik_photo_2_1').hide();
        }
    }


function votePoll(id)
{
    var ans = $('#selected_answer_'+id).val();
        $.ajax
        ({
            type: "POST",
            url: '/poll/vote/'+id+'/'+ans,
            cache: false,
            success: function(html)
            {
                if(parseInt(html) == '2')
                {
                    alert("Моля, изберете отговор.");
                }
                else if(parseInt(html) == '1')
                {
                    viewResults(id);
                }
            }
        });
}

function viewResults(poll_id)
{
        $.ajax
        ({
            type: "GET",
            url: '/poll/loadAnswers/'+poll_id,
            cache: false,
            success: function(html)
            {
                $('#vote_button').hide();
                $('#results').html( html );
            }
        });

}

function likeComment(id, object_id)
{
    
    var current = parseInt( $('#like_'+id).html() );
        $.ajax
        ({
            type: "POST",
            data: 'id='+id+'&object_id='+object_id,
            url: '/comments/likeComment/',
            cache: false,
            success: function(resp)
            {
                if(parseInt(resp)==1)
                    $('#like_'+id).html(current+1);
            }
        });

}

function dislikeComment(id, object_id)
{
    var current = parseInt( $('#dislike_'+id).html() );
        $.ajax
        ({
            type: "POST",
            data: 'id='+id+'&object_id='+object_id,
            url: '/comments/dislikeComment/',
            cache: false,
            success: function(resp)
            {
                if(parseInt(resp)==1)
                    $('#dislike_'+id).html(current+1);
            }
        });
}

function replyComment(id, obj, obj_id)
{
            $.ajax({
                type: "POST",
                data: "id="+id+'&obj='+obj+'&obj_id='+obj_id,
                url: '/comments/replyComment/',
                cache: false,
                async : false,
                success: function(r)
                {
                    $('#reply_'+id).attr('onClick', 'hideReply('+id+');');
                    $('#answer_to_comment_'+id).html(r);
                    $('#answer_to_comment_'+id).slideDown(700);
                }
            });
}

function changeHoroscope(title, img, text)
{
	$('#hor_desc').html(text);
	$('#hor_title').html(title);
	$('#hor_img').attr('src', img);
}


function reportComment($id){
    $.ajax({
                type: "POST",
                url: '/comments/reportComment/'+$id,
                cache: false,
                async : false,
                success: function(r)
                {
                   alert("Успешно докладвахте за нередност");
                }
            });
}

function ShowRanklistTab(id) {
    $('.ranklist-display-class').hide();
    $('#ranklist_show_'+id).show();
}


function DellComment(id){
   $.ajax
                                        ({
                                            type: "POST",
                                            url: "/comments/delete/",
                                            data: "id="+id,
                                            cache: false,
                                            success: function(html)
                                            {
                                                $('#comment_'+id).fadeOut();
                                            }
                                        });
}



function setCookie(c_name,value,exdays)
    {
    var exdate=new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
    document.cookie=c_name + "=" + c_value;
    }

    function getCookie(c_name)
    {
    var i,x,y,ARRcookies=document.cookie.split(";");
    for (i=0;i<ARRcookies.length;i++)
    {
      x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
      y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
      x=x.replace(/^\s+|\s+$/g,"");
      if (x==c_name)
        {
        return unescape(y);
        }
      }
    }

function getCookie(c_name)
    {
    var i,x,y,ARRcookies=document.cookie.split(";");
    for (i=0;i<ARRcookies.length;i++)
    {
      x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
      y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
      x=x.replace(/^\s+|\s+$/g,"");
      if (x==c_name)
        {
        return unescape(y);
        }
      }
    }

function SubmitLocation(loc) {
    if(loc) {
        location.href = loc;
    }
}

function ToggleDiv(div) {
    if(div) {
      //  $('#'+div).stop(true,true).slideToggle();
    }
}
