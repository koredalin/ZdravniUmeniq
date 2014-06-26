
$(window).load(function() {

        $.each($(".calculate"),function() {
                img_w = $(this).width();
                if(img_w < 330) {
                    $(this).css("margin","0");
                    $(this).parent().parent().parent().css("text-align","center");
                } else {

                }
        });

        h = $('#wrapper').height();
        $('.brand').height(h);

         // center popup
      //  center_popup();



        /* $(".calculate2").each(function(){

        img_w2 = $(this).children().width();
        if(img_w2 > 940) {
        $(this).css("margin-left","-250px");
        $(this).parent().parent().parent().css("text-align","center");
        } else {

        }
        console.log(img_w2) ;

        }); */

        /*  var img_w2 = $(".calculate2").width();
        if(img_w2 == 959) {
        $(".do_it2").css("text-align","") ;
        $(".calculate2").css("margin-left","-250px");
        }

        /*
        $.each($(".calculate2"),function() {
        img_w2 = $(this).width();
        if(img_w2 >= 959) {
        $(this).css("margin-left","-250px");
        $(this).parent().parent().parent().css("text-align","center");
        } else {

        }
        console.log(img_w2) ;
        });
        console.log(img_w2) ;       */

        /*  var img_w2 = $(".calculate2").width();
        if(img_w2 == 959) {
        $(".do_it2").css("text-align","") ;
        $(".calculate2").css("margin-left","-250px");
        }
        console.log(img_w2); */

});

var margin = 26;

function gall_hidd_width() {

    margin = 26;
    var children = 0;
    var hid_width = 0;
    $('.galleries .gallery_slides').each(function() {
            $(this).children('.footer_gal').each(function() {
                    $(this).css({'margin-left' : margin});
            });
            if(!$(this).hasClass('invisible')) {
                $(this).children('.footer_gal').children().each(function() {
                        children = children + 1;
                });
                hid_width = children * 101;
                $(this).children('.footer_gal').width(hid_width);
            }
    });
}

function PicGal(step, me) {
    if(step == 1) {
        if(Math.abs(margin) > $(me).prev().width() - 975) {

        } else {
            margin = margin - 910;
            //$(me).next().css({'margin-left' : margin});
            $(me).prev().animate({
                    marginLeft: margin
                }, 1000);
        }
    }
    else if(step == 0) {
        if(margin == 26) {

        } else {
            margin = margin + 910;
            if(margin == 0) {
                margin = 24;
                $(me).next().animate({
                        marginLeft: margin
                    }, 450);
            } else {
                $(me).next().animate({
                        marginLeft: margin
                    }, 1000);
            }
        }
    }
}

$(document).ready(function() {

        $('.l_tab').bind('click', function() {
                $(".main_link").removeClass("main_link");
                $(this).addClass("main_link");
        });

        //gallery taking width of hidden container
        var children = 0;
        var hid_width = 0;
        $('.galleries .gallery_slides').each(function() {
                if(!$(this).hasClass('invisible')) {
                    $(this).children('.footer_gal').children().each(function() {
                            children = children + 1;
                    });
                    hid_width = children * 101;
                    $(this).children('.footer_gal').width(hid_width);
                }
        });

        $(".user_box").hover(function() {
                $(this).find(".middle_part").stop(true,true).slideDown(300);
                $(this).find(".arr_down").addClass("arr_up");
            },function() {
                $(this).find(".middle_part").slideUp(300);
                $(this).find(".arr_down").removeClass("arr_up");
        });


        // $(".left_content .read_article p > img").css("width","434px");

        // Different color/animanion etc. effects
        $(".luck, .shop, .vid, .gall, .offers, .login, .user_box .settings, .horoscope, .register, .pojelania, .other_news, .sidebar .news_box .news_sidebar a, #footer .about_us a, .left_content .advieces_wrap .right_part a").hover(function() {
                $(this).stop(true,true).animate({color: '#d23e2b'},300);
                $(this).find("img").stop(true,true).animate({opacity: '0.6'},300);
            },function() {
                $(this).animate({color: '#636363'},300);
                $(this).find("img").animate({opacity: '1'},300);
        });
        $(".make_red").hover(function() {
                $(this).find(".name").stop(true,true).animate({color: '#d23e2b'},300);
                $(this).find("img").stop(true,true).animate({opacity: '0.6'},300);
            },function() {
                $(this).find(".name").animate({color: '#636363'},300);
                $(this).find("img").stop(true,true).animate({opacity: '1'},300);
        });

        $(".left_content .advices_box .slides_advices .box").hover(function() {
                $(this).find(".title").stop(true,true).animate({color: '#d23e2b'},300);
                $(this).append($("fix"));
                if ( $(this).hasClass("fix") ) {
                    $(this).find("img").stop(true,true).animate({opacity: '1'},300);
                } else {
                    $(this).find("img").stop(true,true).animate({opacity: '0.6'},300);
                }

            },function() {
                $(this).append($("fix"));
                if( $(this).hasClass("fix") ) {
                    $(this).find(".title").animate({color: '#fff'},300);
                    $(this).find("img").animate({opacity: '0.8'},300);
                } else {
                    $(this).find(".title").animate({color: '#656565'},300);
                    $(this).find("img").animate({opacity: '1'},300);
                }
        });

        $(".ribbon").hover(function() {
                $(this).stop(true,true).animate({top: '-10px'},300);
            },function() {
                $(this).animate({top: '-20px'},300);
        });

        $(".prev, .next").hover(function() {
                $(this).stop(true,true).animate({backgroundColor: '#de2b2b', borderTopColor: '#de2b2b', borderLeftColor: '#de2b2b', borderRightColor: '#de2b2b', borderBottomColor: '#de2b2b', 'border-top-style' : 'solid','border-bottom-style' : 'solid','border-left-style' : 'solid','border-right-style' : 'solid' },300);

            },function() {
                $(this).animate({backgroundColor: '#FDFDFD', borderTopColor: '#E6E6E6', borderLeftColor: '#E6E6E6', borderRightColor: '#E6E6E6', borderBottomColor: '#E6E6E6',  'border-top-style' : 'solid','border-bottom-style' : 'solid','border-left-style' : 'solid','border-right-style' : 'solid' },300);

        });

         $(".pagination_new a").hover(function() {
                $(this).stop(true,true).animate({backgroundColor: '#de2b2b', color: "#fff" },300);

            },function() {
                $(this).animate({backgroundColor: '#fff', color: "#656565" },300);
        });

        $(".prev_fix").hover(function() {

                $(this).children().stop(true,true).animate({backgroundColor: '#de2b2b' },300);
                $(this).children().css("background","url(/img_new/arr_prev_hover.png) no-repeat center center");
            },function() {
                $(this).children().animate({backgroundColor: '#FDFDFD' },300);
                $(this).children().css("background","url(/img_new/arr_prev.png) no-repeat center center");
        });

        $(".next_fix").hover(function() {
                $(this).children().stop(true,true).animate({backgroundColor: '#de2b2b' },300);
                $(this).children().css("background","url(/img_new/arr_next_hover.png) no-repeat center center");
            },function() {
                $(this).children().animate({backgroundColor: '#FDFDFD' },300);
                $(this).children().css("background","url(/img_new/arr_next.png) no-repeat center center");
        });

        /*  $(".left_content .little_gall .pages").hover(function() {
        $(this).css({"margin-top": '-1px',"line-height":"46px","font-weight":"normal"});
        },function() {
        $(this).css({"margin-top": '0', "line-height":"43px","font-weight":"bold"});
        }); */

        /*  $(".left_content .little_gall .images").hover(function() {
        $(this).stop(true,true).animate({opacity: '0.6'},300);
        },function() {
        $(this).animate({opacity: '1'},300);
        });  */
        $(".do_hover").hover(function() {
                $(this).find(".do_opacity").stop(true,true).animate({opacity: '0.6'},300);
                $(this).next().children(":last").animate({color: '#d23e2b'},300);
            },function() {
                $(this).find(".do_opacity").animate({opacity: '1'},300);
                $(this).next().children(":last").animate({color: '#656565'},300);
        });

        $(".do_hover3").hover(function() {
                $(this).children("img").stop(true,true).animate({opacity: '0.6'},300);
                $(this).find(".title").animate({color: '#d23e2b'},300);
            },function() {
                $(this).children("img").animate({opacity: '1'},300);
                $(this).find(".title").animate({color: '#656565'},300);
        });

        $(".galleries .gallery_slides .photos img").hover(function() {
                $(this).stop(true,true).animate({opacity: '0.6'},300);
            },function() {
                $(this).animate({opacity: '1'},300);
        });

        $(".sidebar .shop_box .offers_sidebar .column .name").hover(function() {
                $(this).stop(true,true).animate({color: '#d23e2b'},300);
                $(this).parent().prev().children().children(":first").stop(true,true).animate({opacity: '0.6'},300);
                $(this).parent().prev().children().children(":first").next().effect("shake", { times:3, distance:6, direction: "right" }, 150);
            },function() {
                $(this).append($("fix3"));
                if( $(this).hasClass("fix3") ) {
                    $(this).animate({color: '#fff'},300);
                    $(this).parent().prev().children().children(":first").stop(true,true).animate({opacity: '1'},300);
                } else {
                    $(this).animate({color: '#656565'},300);
                    $(this).parent().prev().children().children(":first").stop(true,true).animate({opacity: '1'},300);
                }
        });


        $(".do_hover2").hover(function() {
                $(this).parent().next().children(":first").stop(true,true).animate({color: '#d23e2b'},300);
                $(this).children("img").stop(true,true).animate({opacity: '0.6'},300);
                $(this).find(".promo").effect("shake", { times:3, distance:6, direction: "right" }, 150);
            },function() {
                $(this).append($("fix3"));
                if( $(this).hasClass("fix3") ) {
                    $(this).parent().next().children(":first").animate({color: '#fff'},300);
                    $(this).children("img").stop(true,true).animate({opacity: '1'},300);
                } else {
                    $(this).parent().next().children(":first").animate({color: '#656565'},300);
                    $(this).children("img").stop(true,true).animate({opacity: '1'},300);
                }
        });

        $(".left_content .news_section_tabs .column .main_title .title").hover(function() {
                $(this).animate({color: '#d23e2b'},300);
                $(this).parent().prev().children().stop(true,true).animate({opacity: '0.6'},300);
            },function() {
                $(this).animate({color: '#656565'},300);
                $(this).parent().prev().children().stop(true,true).animate({opacity: '1'},300);
        });

        $(".vid_column").hover(function() {
                $(this).find(".title").stop(true,true).animate({color: '#fff'},300);
                $(this).find("img").stop(true,true).animate({opacity: '0.6'},300);
            },function() {
                $(this).find(".title").animate({color: '#8f8f8f'},300);
                $(this).find("img").animate({opacity: '1'},300);
        });

        $("#footer .links_column .links").hover(function() {
                $(this).animate({color: '#d23e2b'},300);
            },function() {
                $(this).animate({color: '#535353'},300);
        });
        $(".left_content .search_box .shop_column").hover(function() {
                $(this).find(".title").animate({color: '#d23e2b'},300);
                $(this).find("img").stop(true,true).animate({opacity: '0.6'},300);
            },function() {
                $(this).find(".title").animate({color: '#656565'},300);
                $(this).find("img").stop(true,true).animate({opacity: '1'},300);
        });
        $(".hover_cat").hover(function() {
                $(this).parent().children(":first").addClass("active2");
            },function() {
                $(this).parent().children(":first").removeClass("active2");
        });

        $(".sidebar .fresh_news .column").hover(function() {
                $(this).find(".title a").animate({color: '#d23e2b'},300);
                $(this).find(".gal_icon").stop(true,true).animate({left: '0', width: '24px'},300);
                $(this).find(".vid_icon").stop(true,true).animate({left: '0', width: '24px'},300);
                $(this).find("img").stop(true,true).animate({opacity: '0.6'},300);
            },function() {
                $(this).find(".title a").animate({color: '#656565'},300);
                $(this).find(".gal_icon").animate({left: '0', width: '0'},300);
                $(this).find(".vid_icon").animate({left: '0', width: '0'},300);
                $(this).find("img").animate({opacity: '1'},300);
        });

        $(".left_content .search_box .column, .left_content .cook_advices .slides_cook .column").hover(function() {
                $(this).find(".title").animate({color: '#d23e2b'},300);
                $(this).find(".shape").stop(true,true).animate({left: '0', width: '24px'},300);
                $(this).find(".shape_pic").stop(true,true).animate({left: '0', width: '24px'},300);
                $(this).find(".shape_vid").stop(true,true).animate({left: '0', width: '24px'},300);
                $(this).find("img").stop(true,true).animate({opacity: '0.6'},300);
            },function() {
                $(this).find(".title").animate({color: '#656565'},300);
                $(this).find(".shape").animate({left: '0', width: '0'},300);
                $(this).find(".shape_pic").animate({left: '0', width: '0'},300);
                $(this).find(".shape_vid").animate({left: '0', width: '0'},300);
                $(this).find("img").animate({opacity: '1'},300);
        });

        $(".left_content .category_wrap .right_side .column").hover(function() {
                $(this).find("img").stop(true,true).animate({opacity: '0.6'},300);
                $(this).find(".title").stop(true,true).animate({color: '#d23e2b'},300);
            },function() {
                $(this).find("img").animate({opacity: '1'},300);
                $(this).find(".title").animate({color: '#656565'},300);
        });

        $(".left_content .tags .tag").hover(function() {
                $(this).find(".left_part").css("background","url(/img_new/tag_left_hover.png) no-repeat");
                $(this).find(".middle_part").css("background","url(/img_new/tag_middle_hover.png) repeat");
                $(this).find(".right_part").css("background","url(/img_new/tag_right_hover.png) no-repeat");
            },function() {
                $(this).find(".left_part").css("background","url(/img_new/tag_left.png) no-repeat");
                $(this).find(".middle_part").css("background","url(/img_new/tag_middle.png) repeat");
                $(this).find(".right_part").css("background","url(/img_new/tag_right.png) no-repeat");
        });

        $(".left_content .row .column").hover(function() {
                $(this).find(".title").stop(true,true).animate({color: '#de2b2b'},300);
                $(this).find("img").stop(true,true).animate({opacity: '0.6'},300);
            },function() {
                $(this).find(".title").animate({color: '#fff'},300);
                $(this).find("img").animate({opacity: '1'},300);
        });
        $(".sidebar .related_articles a").hover(function() {
                $(this).animate({color: '#de2b2b'},300);
            },function() {
                $(this).animate({color: '#fff'},300);
        });

        /* $(".sidebar .shop_box .offers_sidebar .column").hover(function () {
        $(this).effect("shake", { times:1, distance:5, direction: "right" }, 200);
        });  */

        // Submenu and subcats
        $(".show_sub").hover(function() {
                $(this).find(".submenu").stop(true,true).slideDown("fast");
                $(this).children(":first").stop(true,true).animate({color: '#fff', backgroundColor: "#de2f2f"},300);
            },function() {
                $(this).find(".submenu").slideUp("fast");
                $(this).children(":first").animate({color: '#000', backgroundColor: "#F8F8F8"},300);;
        });

        $(".show_sub_cats").hover(function() {
                $(this).find(".sub_more").stop(true,true).slideDown(300);
            },function() {
                $(this).find(".sub_more").slideUp(300);
        });
        var sub_more_w = $(".sub_more").width();
      //  $(".sub_more").css("width",sub_more_w + "px");
        var main_news_h = $(".main_news").height();
        $(".sidebar .fresh_news").css("height",main_news_h + "px");

        // Tabs
        $('.tab_one').bind('click', function() {
                $.each($(".tab_one"),function(){
                        $(this).next().hide();
                        $(this).show();
                });
                $(this).hide();
                $(this).next().show();
                $(".slides").addClass("invisible");
                var Div = $(this).attr("lang");
                $("#" + Div).removeClass("invisible");
        });

        $('.s_tab').bind('click', function() {
                $.each($(".s_tab"),function(){
                        $(this).next().hide();
                        $(this).show();
                });
                $(this).hide();
                $(this).next().show();
                $(".box1").addClass("invisible");
                var Div = $(this).attr("lang");
                $("#" + Div).removeClass("invisible");
        });

        $('.s_tab2').bind('click', function() {
                $.each($(".s_tab2"),function(){
                        $(this).next().hide();
                        $(this).show();
                });
                $(this).hide();
                $(this).next().show();
                $(".box2").addClass("invisible");
                var Div = $(this).attr("lang");
                $("#" + Div).removeClass("invisible");
        });

        $('.s_tab3').bind('click', function() {
                $.each($(".s_tab3"),function(){
                        $(this).next().hide();
                        $(this).show();
                });
                $(this).hide();
                $(this).next().show();
                $(".box3").addClass("invisible");
                var Div = $(this).attr("lang");
                $("#" + Div).removeClass("invisible");
        });

        $('.recepies_tab').bind('click', function() {
                $.each($(".recepies_tab"),function(){
                        $(this).next().hide();
                        $(this).show();
                });
                $(this).hide();
                $(this).next().show();
                $(".slides_recepes").addClass("invisible");
                var Div = $(this).attr("lang");
                $("#" + Div).removeClass("invisible");
                $.each($("."+Div+"_fix_src_rel"),function(index, value){
                   rel = $(value).attr("rel");
                   $(value).attr("src", rel);
                });
        });

        $('.advices_tab').bind('click', function() {
                $.each($(".advices_tab"),function(){
                        $(this).next().hide();
                        $(this).show();
                });
                $(this).hide();
                $(this).next().show();
                $(".slides_advices").addClass("invisible");
                var Div = $(this).attr("lang");
                $("#" + Div).removeClass("invisible");
                $.each($("."+Div+"_fix_src_rel2"),function(index, value){
                   rel = $(value).attr("rel");
                   $(value).attr("src", rel);
                })
        });


        $('.sidebar_news2').bind('click', function() {
                $.each($(".sidebar_news2"),function(){
                        $(this).next().hide();
                        $(this).show();
                });
                $(this).hide();
                $(this).next().show();
                $(".news_sidebar").addClass("invisible");
                var Div = $(this).attr("lang");
                $("#" + Div).removeClass("invisible");
                $.each($("."+Div+"_fix_src_nk"),function(index, value){
                   rel = $(value).attr("rel");
                   $(value).attr("src", rel);
                })

        });

        $('.video_tab').bind('click', function() {
                $.each($(".video_tab"),function(){
                        $(this).next().hide();
                        $(this).show();
                });
                $(this).hide();
                $(this).next().show();
                $(".slides_videos").addClass("invisible");
                var Div = $(this).attr("lang");
                $("#" + Div).removeClass("invisible");
                $.each($("."+Div+"_fix_src_rel3"),function(index, value){
                   rel = $(value).attr("rel");
                   $(value).attr("src", rel);
                })
        });

        $('.offers_tab').bind('click', function() {
                $.each($(".offers_tab"),function(){
                        $(this).next().hide();
                        $(this).show();
                });
                $(this).hide();
                $(this).next().show();
                $(".offers_sidebar").addClass("invisible");
                var Div = $(this).attr("lang");
                $("#" + Div).removeClass("invisible");
                $.each($(".hitoferti_fix_rel_src"),function(index, value){
                   rel = $(value).attr("rel");
                   $(value).attr("src", rel);
                })
        });


        $('.galleries_tab').bind('click', function() {
                $.each($(".galleries_tab"),function(){
                        $(this).next().hide();
                        $(this).show();
                });
                $(this).hide();
                $(this).next().show();
                $(".gallery_slides").addClass("invisible");
                var Div = $(this).attr("lang");
                var n=Div.split("_");
                $.each($(".rel_src_fix_"+n[2]),function(index, value){
                   rel = $(value).attr("rel");
                   $(value).attr("src", rel);
                });
                $("#" + Div).removeClass("invisible");
                gall_hidd_width();
        });

        $('.cook_tab').bind('click', function() {
                $.each($(".cook_tab"),function(){
                        $(this).next().hide();
                        $(this).show();
                });
                $(this).hide();
                $(this).next().show();
                $(".slides_cook").addClass("invisible");
                var Div = $(this).attr("lang");
                $("#" + Div).removeClass("invisible");
        });

        // show more cats -> recepies
        $('.more_cats').bind('click', function() {
                $.each($(".sidebar .top_buttons .btns_row2"),function(){
                        $(this).removeClass("invisible");
                });
                $(".show").removeClass("invisible");
                $(".more_cats").addClass("invisible");
        });

        $('.more_cats_dark').bind('click', function() {
                $.each($(".sidebar .top_buttons .btns_row"),function(){
                        $(this).removeClass("invisible");
                });
                $(".show").removeClass("invisible");
                $(".more_cats_dark").addClass("invisible");
        });


        $('.index_gall_load_img').bind('click', function() {
                $.each($(".index_gall_load_img_rel"),function(index, value){
                   rel = $(value).attr("rel");
                   $(value).attr("src", rel);
                })

        });




        function ClickOutsideCheck(e) {
            var el = e.target;
            var popup = $('.login_wrap:visible')[0];
            if(popup==undefined) return true;

            while (true){
                if (el == popup ) {
                    return true;
                } else if (el == document) {
                    $(".login_wrap").fadeOut(500);
                    $(".login_start").fadeOut(500);
                    return false;
                } else {
                    el = $(el).parent()[0];
                }
            }
        };

        function ClickOutsideCheck2(e) {
            var el = e.target;
            var popup = $('.reg_wrap:visible')[0];
            if(popup==undefined) return true;

            while (true){
                if (el == popup ) {
                    return true;
                } else if (el == document) {
                    $(".reg_wrap").fadeOut(500);
                    $(".login_start").fadeOut(500);
                    return false;
                } else {
                    el = $(el).parent()[0];
                }
            }
        };

        function ClickOutsideCheck3(e) {
            var el = e.target;
            var popup = $('.lucks:visible')[0];
            if(popup==undefined) return true;

            while (true){
                if (el == popup ) {
                    return true;
                } else if (el == document) {
                    $(".lucks").fadeOut(500);
                    $(".luck_popup").fadeOut(500);
                    return false;
                } else {
                    el = $(el).parent()[0];
                }
            }

        };

        function ClickOutsideCheck4(e) {
            var el = e.target;
            var popup = $('.recepie:visible')[0];
            if(popup==undefined) return true;

            while (true){
                if (el == popup ) {
                    return true;
                } else if (el == document) {
                    $(".recepie").fadeOut(500);
                    $(".recipe_popup").fadeOut(500);
                    return false;
                } else {
                    el = $(el).parent()[0];
                }
            }

        };


        $("body").bind("mousedown", function(e) {ClickOutsideCheck(e) });
        $("body").bind("mousedown", function(e) {ClickOutsideCheck2(e) });
        $("body").bind("mousedown", function(e) {ClickOutsideCheck3(e) });
        $("body").bind("mousedown", function(e) {ClickOutsideCheck4(e) });


        $(".forgot_pass").click(function() {
                $(this).next().slideToggle(300);
        });

        // News img slider
        if($("#gallery").length) {

            // Declare variables
            var totalImages = $("#gallery > li").length,
            imageWidth = $("#gallery > li:first").outerWidth(true),
            totalWidth = imageWidth * totalImages,
            visibleImages = Math.round($(".pic_holder").width() / imageWidth),
            visibleWidth = visibleImages * imageWidth,
            stopPosition = (visibleWidth - totalWidth);

            $("#gallery").width(totalWidth);

            $(".prev_arrow").click(function(){
                    if($("#gallery").position().left < 0 && !$("#gallery").is(":animated")){
                        $("#gallery").animate({left : "+=" + imageWidth + "px"});
                    }
                    return false;
            });

            $(".next_arrow").click(function(){
                    if($("#gallery").position().left > stopPosition && !$("#gallery").is(":animated")){
                        $("#gallery").animate({left : "-=" + imageWidth + "px"});
                        $('#gallery > li:first:visible').css('opacity','0.6');
                    }

                    return false;
            });
        }



});


// Change right tab news ot 7 seconds
var itvl = 0;
var mouse_over = true;
$(".news_box").live("mouseover", function() {
        mouse_over = false;
        window.clearInterval(itvl);
});
$(".news_box").live("mouseleave", function() {
        mouse_over = true;
        itvl=window.setInterval(function(){change_tabs()},5000);
});

if (mouse_over == true) {
    var curr = 1;
    itvl=window.setInterval(function(){change_tabs()},5000);
    function change_tabs() {
        curr = curr + 1;
        if (curr > 4){
            curr = 1;
        }
        //$('.chane_tab'+curr).trigger('click');
    }
} else {
    window.clearInterval(itvl);
}


// slider index news main
function change_slide(slideid) {
    $(".showed").addClass("invisible");
    $(".showed").removeClass("showed");
    $("#slide" + slideid).removeClass("invisible");
    $("#slide" + slideid).addClass("showed");
    $(".images").removeClass("active_anchor");
    $('#item'+slideid).addClass("active_anchor");
    $(".images").css({opacity:1});
    $('#item'+slideid).css({opacity:0.6});
}

function change_slide_ico(slideid) {
    $(".showed").stop(true,true).fadeOut(400);
    $(".showed").removeClass("showed");
    $("#slide" + slideid).stop(true,true).fadeIn(400);
    $("#slide" + slideid).addClass("showed");
    $(".images").removeClass("active_anchor");
    $('#item'+slideid).addClass("active_anchor");
    $(".images").css({opacity:1});
    $('#item'+slideid).css({opacity:0.6});
}

function change_slide_main(slideid) {

    console.log(slideid);
    $(".showed").addClass("invisible");
    $(".showed").removeClass("showed");
    $(".invisible").css("display", 'none');

    $("#slide" + slideid).fadeIn(800, function() {
            $("#slide" + slideid).removeClass("invisible");
            $("#slide" + slideid).addClass("showed");
            $(".images").removeClass("active_anchor");
            $('#item'+slideid).addClass("active_anchor");
            $(".images").css({opacity:1});
            $('#item'+slideid).css({opacity:0.6});
    });
    /*
    return;

    $("#slide" + slideid).fadeIn(800, function() {
    $(".showed").addClass("invisible");
    $(".showed").removeClass("showed");
    $(".invisible").css("display", 'none');
    $("#slide" + slideid).removeClass("invisible");
    $("#slide" + slideid).addClass("showed");
    $(".images").removeClass("active_anchor");
    $('#item'+slideid).addClass("active_anchor");
    $(".images").css({opacity:1});
    $('#item'+slideid).css({opacity:0.6});
    });*/

    /*$("#slide" + slideid).animate({

    }, 800,
    function() {
    $("#slide" + slideid).removeClass("invisible");
    $("#slide" + slideid).addClass("showed");
    $("#slide" + slideid).css("display", 'block');
    $(".images").removeClass("active_anchor");
    $('#item'+slideid).addClass("active_anchor");
    $(".images").css({opacity:1});
    $('#item'+slideid).css({opacity:0.6});
    });*/
}

function arrowSlider2(event) {
    var current = $("#main_slider > a.active_anchor").attr("lang");
    if( event == 'prev' ) {

        if(current == 1) {
            current = 5;
        }else {
            current = parseInt(current) - 1;
        }

    } else {

        if(current == 5) {
            current = 1;
        }else {
            current = parseInt(current) + 1;
        }

    }
    //change_slide_main(current);
    change_slide_ico(current);
}

function arrowSliderJokes(event) {
    var current = $("#slider_jokes > div.showed").attr("lang");
    if( event == 'prev' ) {

        if(current == 1) {
            current = 3;
        }else {
            current = parseInt(current) - 1;
        }

    } else {

        if(current == 3) {
            current = 1;
        }else {
            current = parseInt(current) + 1;
        }

    }

    change_slide_ico(current);
}

function arrowSlider(event) {
    var current = $("#main_slider > a.active_anchor").attr("lang");
    if( event == 'prev' ) {

        if(current == 1) {
            current = 5;
        }else {
            current = parseInt(current) - 1;
        }

    } else {

        if(current == 5) {
            current = 1;
        }else {
            current = parseInt(current) + 1;
        }

    }
    //change_slide_main(current);
    change_slide(current);
}




function center_popup() {
    var screenWidth3 = $(window).width();
    var wrapperWidth3 = 600;
    var newWidth3 = screenWidth3 - wrapperWidth3;
    newWidth3 = newWidth3/2;
    newWidth3 = parseInt(newWidth3);
    $(".login_wrap").css({"left": newWidth3});
    $(".reg_wrap").css({"left": newWidth3});

    var screenWidth4 = $(window).width();
    var wrapperWidth4 = 756;
    var newWidth4 = screenWidth4 - wrapperWidth4;
    newWidth4 = newWidth4/2;
    newWidth4 = parseInt(newWidth4);
     $(".recepie").css({"margin-left":newWidth4+"px","margin-top":"100px"});
    $(".lucks").css({"margin-left":newWidth4+"px","margin-top":"100px"});

}

// Scrolling effects with menu and logo
$(window).resize(function() {
        calculate_header();
        center_popup();
});

$(window).scroll(function(){
        calculate_header();
});

function calculate_header(){
    var screenWidth = $(window).width();
    var wrapperWidth = 980;
    var newWidth = screenWidth - wrapperWidth;
    newWidth = newWidth/2;
    newWidth = parseInt(newWidth);

    $(window).resize(function() {
            var screenWidth = $(window).width();
            var wrapperWidth = 987;
            var newWidth = screenWidth - wrapperWidth;
            newWidth = newWidth/2;
            newWidth = parseInt(newWidth);
    });
    var scrTop = $(window).scrollTop();
    if ( $(".menu_wrap").hasClass("remove_fixed_head") ) {

    } else {
        if ((scrTop > 101) ){
            if( $(".path_wrap").length > 0 ) {
                $(".menu_wrap").css({"position":"fixed","top":"-1px","left":newWidth});
                $(".path_wrap").css({"position":"fixed","padding-top":"5px","top":"39px","left":newWidth});
            } else {
                $(".menu_wrap").css({"position":"fixed","top":"-1px","left":newWidth,"padding-bottom":"10px"});
                $(".path_wrap").css({"position":"fixed","top":"70px","left":newWidth});
            }
            $(".hide_home").hide(300);
            $(".fancy_logo").show(300);

        } else{
            if( $(".path_wrap").length > 0 ) {
                $(".menu_wrap").css({"position":"","top":"","left":""});
                $(".path_wrap").css({"position":"","padding-top":"","top":"","left":""});
            } else {
                $(".menu_wrap").css({"position":"","top":"","left":"","padding-bottom":""});
                $(".path_wrap").css({"position":"","top":"","left":""});
            }
            $(".hide_home").show(300);
            $(".fancy_logo").hide(300);
        }
    }
}

// Search drop down
function showHideSelect() {
    if($(".select").hasClass("active")){
        $(".select").removeClass("active");
        $(".s_list").slideUp();
    } else {
        $(".select").addClass("active");
        $(".s_list").slideDown();
    }
}

function setSelection(sel,i) {
    var selection = sel;
    $(".select").removeClass("active");
    $(".s_list").slideUp();
    $("#hid_s").val(selection);
    if(i) {
        $("#hid_si").val(i);
    }
    $("#curr_s").html(selection);
}

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
    $('#time_href').attr('href', '/static/weather/'+siteid);
    $("#temp").html(time + "<img src='/img_new/temp.png' alt='' />");
    $("#temp_name").html(name);
}

function login()
{
    FB.login(function(response) {
            if (response.authResponse) {
                if (response.perms) {
                    // user is logged in and granted some permissions.
                    // perms is a comma separated list of granted permissions

                    document.location = 'http://www.zajenata.bg/fb_new.php?resp=';
                } else {
                    // user is logged in, but did not grant any permissions
                    document.location = 'http://www.zajenata.bg/fb_new.php?resp=';
                }
            } else {
                // user is not logged in
            }
        }, {scope:'email, publish_actions'});
}
function logout()
{
    $(".fb-login").load("/ajax/logout.php");
}

$(document).ready(function () {

        $('.scrollbar1').jScrollPane({
                scrollbarWidth: 6 ,
                showArrows: true,
                autoReinitialise: true
        });


        $(".styled_2").selectbox();


        var h1_el = $("#h1_title_wrap");
        var h1_height = $('.h1_title_abs').height();

        var position = h1_el.position();
        $('.h1_title_abs').css('top', position.top+'px');
        $('.h1_title_abs').css('left', h1_el.offset().left+'px');
        $('#h1_title_wrap').css('height', h1_height+'px');
        $('.h1_title_abs').fadeIn();



});

function w3_createCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
}

function w3_readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function w3_eraseCookie(name) {
    createCookie(name,"",-1);
}

function GetLucks(i) {
    $.post('/lucks/index', {ajax:1,show:i}, function(r) {
            $('#lucks_tab').html(r);
    });
}

function GetLoveMeter() {

    var name1 = ($('#position1').val())? $('#position1').val() : 0;
    var name2 = ($('#position2').val())? $('#position2').val() : 0;

    $.post('/extras/lovemeter', {ajax:1,name1:name1,name2:name2}, function(r) {
            $('#lucks_tab').html(r);
    });
}

function getLuckyNumber(){
    $.ajax({
            type: "POST",
            url: '/ajaxtabs/lucky_number/',
            cache: false,
            success: function(html){
                $("#lucks_tab").html(html);
            }
    });
}

function GetCatsWish() {
    $.post('/lucks/GetCatsWish', {ajax:1}, function(r) {
            $('#lucks_tab').html(r);
    });
}

function GetNames() {
    $.post('/lucks/GetNames', {ajax:1}, function(r) {
            $('#lucks_tab').html(r);
    });
}

function ChangeWeatherNew(id, city) {

    if(id && city) {
        $("#wearher_ajax").fadeOut();
        $('#weather .dinamic_hide_weather').hide();
        $('#weather_'+id).show();


        setCookie('sel_weather', city, (365 * 24 * 60 * 60 * 1000));
    }

}

function doOpen(url, h, w) {
      
   var wFeatures = "toolbar=0,statusbar=1,resizable=1,scrollbars=1,menubar=0,location=1,directories=0";
   if(navigator.userAgent.indexOf('Chrome') != -1){
      wFeatures = "scrollbar=yes";
   }
   pu_window=  window.open('about:blank','wmPu',wFeatures +  ',height='+h+',width='+w);

   var regex = new RegExp(/rv:[2-9]/);
    if (regex.exec(navigator.userAgent)) {
        pu_window.ljPop = function (jsm_url) {

            if (regex.exec(navigator.userAgent)) { // Gecko 2+
                this.window.open('about:blank').close();
            }
            this.document.location.href = url;
        };
        pu_window.ljPop(url);
    }
    else {
        pu_window.document.location.href = url;
    }
    setTimeout(window.focus);
    window.focus();

    if(pu_window) {
        pu_window.blur();
        puShown = true;
     }

    return pu_window;
}

function ShowPopunder(days) {

    var link = $('#popunder_link').text();

    if(link && days) {
        
        var cname = 'zajenata_1_popunder';
        
        var popUnder = w3_readCookie(cname);
        if (!popUnder) {
            //w3_createCookie(cname, 1, days);            
            jQuery.popunder('http://google.bg');
            //$.popunder(link);
            //window.open("http://google.com/",'win2','status=no,toolbar=no,scrollbars=yes,titlebar=no,menubar=no,resizable=yes,width=1024,height=7000,directories=no,location=no');
        }
        
    }
    
    
}