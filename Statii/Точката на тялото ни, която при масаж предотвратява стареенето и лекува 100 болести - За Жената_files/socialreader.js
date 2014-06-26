
var accessToken;
var working = getCookie('sreader_working');

/*var sr_when_publish = 2; // 1 - scrolled to #news_end_div ; 2 - on time ; 3 - on page open
var sr_seconds = 2; // if when_publish == 2
var inviteText = 'Разбери какво четат твоите приятелки';
var sr_url = document.URL;*/ 

	
	if(working == null || working == '')
	{
		setCookie('sreader_working', '1', 100);
	}
	
	// loading app and get user status
	/*
    window.fbAsyncInit = function() {
        FB.init({
          appId      : '112198378928272', // App ID
          channelUrl:'//zajenata.bg/socialreader/channel.html', // Channel File
          status:true, // check login status
          cookie:true, // enable cookies to allow the server to access the session
          xfbml:true  // parse XFBML
        });

		FB.getLoginStatus(function(response) {

			if (response.status === 'connected') {
	            uid = response.authResponse.userID;
	            accessToken = response.authResponse.accessToken;
	            
	            if(working == 1)
	            {
	            	if( sr_when_publish == 1 )
	            	{
	            		$(function () 
	            		{
	            			$('#news_end_div').waypoint(function (event, direction) 
	            			{
	            				post();
	            			});
	            		});		            		
	            	}
	            	else if( sr_when_publish == 2 )
	            	{
	            		sr_seconds = sr_seconds * 1000;
                        console.log(sr_seconds);
	            		setTimeout(function(){ post(); }, sr_seconds);
	            	}
	            	else if( sr_when_publish == 3 )
	            	{
	            		post();
	            	}
	            }
	  
	            
			}
			else if (response.status == 'not_authorized') 
			{
				
			}
			
		});
    };
    
    
      // Load the SDK Asynchronously
      (function(d){
        var js, id = 'facebook-jssdk'; if (d.getElementById(id)) {return;}
        js = d.createElement('script'); js.id = id; js.async = true;
        js.src = "//connect.facebook.net/en_US/all.js";
        d.getElementsByTagName('head')[0].appendChild(js);
      }(document));	
      
      $(document).ready(function() {
    	  
          // Сменя цветове при ховър
          $('.column_holder').hover(function() { 
              $(this).css("background","#929292");
              $(this).find(".story").css("color","#fff");
              $(this).find(".show_date").removeClass("invisible");
              $(this).find(".hide_time").addClass("invisible");
              $(this).find(".delete").css("color","#fff");
          },
          function() {
              $(this).css("background","");
              $(this).find(".story").css("color","#000");
              $(this).find(".show_date").addClass("invisible");
              $(this).find(".hide_time").removeClass("invisible");
              $(this).find(".delete").css("color","#3C69A1");
          });
          
          $('.make_blue').hover(function() { 
              $(this).css("background","#3c69a1");
              $(this).children().css("color","#fff");
              $(this).find(".make_grey").css("color","#e3e3e3");
          },
          function() {
              $(this).css("background","");
              $(this).children().css("color","");
              $(this).find(".make_grey").css("color","#6f6f6f");
          });
           
          $(".last").children(".border").addClass("invisible"); 
          
          // Показва събменюто и сменя изображенията
                              
        });
         // Затваря менюто ако се кликне извън него
        $(document).mouseup(function (e)
                {
                    var container = $(".submenu_logged_wrap");
                    if (container.has(e.target).length === 0)
                    {
                       if(container.is(':visible')) container.slideUp(300);
                       $(".arrow_up_big").removeClass("change_arrow");
                    }
    				
        });
    */
    function showUserPanel() 
    {
         var container = $(".submenu_logged_wrap");
         if (container.is(':visible')) {
             container.slideUp(300);
             $(".arrow_up_big").removeClass("change_arrow");
         } else {
             container.slideDown(300);
             $(".arrow_up_big").addClass("change_arrow");
         } 
     } 
        
    function showFrActivitiesOLD(uid, num)
    {
        $('.friend_activities').each(function(){
            if( $(this).is(":visible") )
                $(this).slideUp(500);
        });
        if( $("#friend_activities_"+num).is(":visible") == false )
        {
            $("#friend_activities_"+num).slideDown(500).html('<center><img src="/img/loading.gif"></center>');
            FB.api('/' + uid + '/news.reads', 'get', { access_token : accessToken }, function (response) {
                $('#friend_activities_'+num).load('/socialreader/test.php', { type:'friend', data:response, uid:uid, random:Math.floor((Math.random()*100000000)+1)});
            });
        }

    }
    
    function showFrActivities(uid)
    {
        $("#show_friends_activity").slideDown(500).html('<center><img src="/img/loading.gif"></center>');
	    
        FB.api('/' + uid + '/news.reads', 'get', { access_token : accessToken }, function (response) {
	        $('#show_friends_activity').load('/socialreader/test.php', { type:'friend', data:response, uid:uid, random:Math.floor((Math.random()*100000000)+1)});
	    });
        
    }      
      
    function post(type)
	{ 
    	if(type == 'news')
    	{
		    FB.api('/me/news.reads', 'post', { article:sr_url, access_token: accessToken }, function (response) {
		    	
		        if (!response || response.error) {
		        		console.log(response.error);
		        }
		        else {
		        	$.ajax({
		        		  type: 'POST',
		        		  url: '/socialreader/test.php',
		        		  data: 'article='+sr_url+'&uid='+uid+'&type=add_ac',
		        		  success: function(data)
		        		  {
		        			  
		        		  }
		        		});	 
					successPublishing(response.id);
		        }
		    });
    	}
    	else if(type == 'video')
    	{
    		
		    FB.api('/me/video.watches', 'post', { movie:sr_url, access_token: accessToken }, function (response) {
		    	
		        if (!response || response.error) {
		        	console.log(response.error);
		        }
		        else {
		        	$.ajax({
		        		  type: 'POST',
		        		  url: '/socialreader/test.php',
		        		  data: 'article='+sr_url+'&uid='+uid+'&type=add_ac',
		        		  success: function(data)
		        		  {
		        			  
		        		  }
		        		});	 
					successPublishing(response.id);
		        }
		    });
    	}
	}

    // loading friends
	function frOLD()
    {
        FB.api('/me/friends', 'get', { fields:'installed,name,picture'}, function (response) {
            $('#sreader_friend_list').load('/socialreader/test.php', { type:'friends', data:response,random:Math.floor((Math.random()*100000000)+1)});
        });    
    }
    
    function fr()
	{
        FB.api('/me/friends', 'get', { fields:'installed,name,picture'}, function (response) {
            $('#my_friends').load('/socialreader/test.php', { type:'friends', data:response,random:Math.floor((Math.random()*100000000)+1)});
        });	
	}	

	// loading my profile
	function profile()
	{	
        FB.api('/me/', 'get', { fields:'name,picture'}, function (response) {
            $('#sreader_profile').load('/socialreader/test.php', { type:'profile', working: working, data:response,random:Math.floor((Math.random()*100000000)+1)});
        });	
	}
	
	// loading friend activities
	function loadFrAct(id, num, pic, name)
	{
			$("#sreader_friend_over_image").attr('src', pic);
			$('#sreader_friend_act').html('<img src="img/loading.gif">');
			margin = (num-1)*73;
			$("#profile_img").css('margin-left', margin);
			$("#sreader_friend_div").fadeIn(500);
			
			setTimeout(function(){
		        FB.api('/' + id + '/news.reads', 'get', { access_token : accessToken }, function (response) {
		            $('#sreader_friend_act').load('/socialreader/test.php', { type:'friend', data:response, uid:id, name:name, random:Math.floor((Math.random()*100000000)+1)});
		        });				
			}, 1000);

	}	

	
	function hideFrAct()
	{
		$('#sreader_friend_div').fadeOut(500);
	}
	
	// delete application
	function revokeAuth() 
	{
	    FB.api('/me/permissions', 'delete', function (response) {
	        window.location.reload();
	    });
	}
	
	// delete news read
	function deleteReads(id) 
	{
	    FB.api("/" + id, 'DELETE', function (response) {

	        if (!response || response.error) {

	        }
	        else {
	            $("#sreader_li_" + id).fadeOut('slow');
	            $('#news_end_div').fadeOut('slow');
	        }
	    });
	}

	// load my activities
	function loadMyActivities()
	{
        
        //$('#my_friends').hide();
        //$('#my_act_button').show();
        
		if(  $(".my_activities").is(':visible') )
		{
			$(".my_activities").slideUp(500);
			$("#my_act_button").children('span').removeClass('sreader_gray').addClass('sreader_blue');
			$("#my_act_button").children('img').attr('src', '/img/arrow_little_blue.png');
		}
		else
		{
			if(  $(".my_options").is(':visible') )			
			{
				$("#my_opt_button").children('span').removeClass('sreader_gray').addClass('sreader_blue');
				$("#my_opt_button").children('img').attr('src', '/img/arrow_little_blue.png');
				$(".my_options").slideUp(500);
			}
			
			$(".my_activities").slideDown(500);
			$("#my_act_button").children('span').removeClass('sreader_blue').addClass('sreader_gray');
			$("#my_act_button").children('img').attr('src', '/img/arrow_little.png');			
	        FB.api('/me/news.reads', 'get', { access_token : accessToken }, function (response) {
	        	$(".my_activities").children(".column_holder").load('/socialreader/test.php', { type:'friend', data:response, me:'1', random:Math.floor((Math.random()*100000000)+1)});	
	        });
		}
	}
	function loadMyOptions()
	{
		if( $(".my_options").is(':visible') )
		{
			$(".my_options").slideUp(500);
			$("#my_opt_button").children('span').removeClass('sreader_gray').addClass('sreader_blue');
			$("#my_opt_button").children('img').attr('src', '/img/arrow_little_blue.png');			
		}
		else
		{
			$(".my_options").slideDown(500);
			$("#my_opt_button").children('span').removeClass('sreader_blue').addClass('sreader_gray');
			$("#my_opt_button").children('img').attr('src', '/img/arrow_little.png');		
			
			if(  $(".my_activities").is(':visible') )	
			{
				$(".my_activities").slideUp(500);	
				$("#my_act_button").children('span').removeClass('sreader_gray').addClass('sreader_blue');
				$("#my_act_button").children('img').attr('src', '/img/arrow_little_blue.png');				
			}
		}
	}
	
	function hideMyAct()
	{
		$("#sreader_my_act_div").fadeOut(500);
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

	function successPublishing(id)
	{    
		var news_title = $('#sreader_news_title').val();
        console.log(news_title);
		$('#news_end_div').load('/socialreader/test.php', { type:'success', news_title:news_title, id:id, random:Math.floor((Math.random()*100000000)+1)});
		
	}

	function inviteFriends() 
	{
	    FB.ui({ method:'apprequests',
	        message:inviteText, filters:['app_non_users']});
	}	

    function FBLogin()
    {
        FB.login(function(response) {
          if (response.authResponse) {
              if (response.perms) {
            	  document.location = 'http://www.zajenata.bg/fb_new.php?resp=';
                } else {
                	document.location = 'http://www.zajenata.bg/fb_new.php?resp=';
                }
              } else {
            	  window.location.reload();
              }
        }, {scope:'email,publish_actions'});
    }
    
    function changeSocialStatus()
    {
    	var on = getCookie('sreader_working');
    	if(on==0)
    	{
    		working = 1;
    		setCookie('sreader_working', '1', 100);
    		$("#sreader_social_status_text").html('Включено');
    		$(".on_off").addClass("on");
    	}
    	else
    	{
    		working = 0;
    		setCookie('sreader_working', '0', 100);
    		$("#sreader_social_status_text").html('Изключено');
    		$(".on_off").removeClass("on");
    	}
    }
    
    $(document).ready(function()
    { 
    	$("#set_my_profile_html").load('/socialreader/test.php', { type:'my_profile_html', random:Math.floor((Math.random()*100000000)+1)});
    	//$("#load_fr_html").load('/socialreader/test.php', { type:'load_fr_html', random:Math.floor((Math.random()*100000000)+1)});
    	setTimeout(function(){
    		profile();
    		fr();
    	}, 1500);

    });
    /*
    $(document).mouseup(function (e)
    		{
    		    var container = $("#sreader_friend_div");

    		    if (container.has(e.target).length === 0 && $("#sreader_friend_list").has(e.target).length === 0)
    		    {
    		        container.fadeOut(500);
    		    }
    });
    */                                                           
    
