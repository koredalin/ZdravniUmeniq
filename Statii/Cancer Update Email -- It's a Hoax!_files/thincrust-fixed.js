/*jslint sloppy: true, vars: true */
/*global require, window, navigator, document, importScripts, jQuery, setTimeout, clearTimeout, opera, define, console */

/*
CSS Guru: Bill 'Halp!' Mengers
Developer: Dan 'Codebeard' Miller

Fixed responsive template code... wait, what?
*/
    
define(['domready!', 'jquery', 'responsive', 'modernizr'], function (dom, $, r, Modernizr) {
    
    return {
        
        setupThincrustActions: function () {
                
			var getCurrTime = function() { var d = new Date(); return d.getTime(); }
			
            // menu open / close actions
			var menuDelayTimer = {};
			
			$('a.explore').on("mouseenter", {'delayTimer': menuDelayTimer}, function () {
				if ($('.topmenu-about-wrapper :visible').length === 0) {
					menuDelayTimer = setTimeout(function(){
						$('.topmenu-about-wrapper').show();
					}, 600);
				}
			});
            $('a.explore').on("mouseleave", {'delayTimer': menuDelayTimer}, function () {
                if ($('.topmenu-about-wrapper :visible').length === 0) {
                    $('.topmenu-about-wrapper').hide();
					clearTimeout(menuDelayTimer);
                }
            });
            
			$('.topmenu-about-wrapper').on("mouseleave", {'delayTimer': menuDelayTimer}, function () {
				$('.topmenu-about-wrapper').hide();
				clearTimeout(menuDelayTimer);
			});
			
            $('a.explore').click(function (e) {
				clearTimeout(menuDelayTimer);
				$('.topmenu-about-wrapper').toggle();
                e.preventDefault();
            });
			
			$('ul.topmenu a').off('click');
			$('ul.topmenu a').on('click',function(e) {
				var $target = $(e.target);
				
				if($target.hasClass('subLink')) {
					var $sectionTxt = $target.parent().parent().siblings('a').text();
					var $linkTxt = $target.text();
					$sectionTxt = $sectionTxt.replace(/\s\+/g,"");
					_gaq.push(['_trackEvent', 'thincrust', $sectionTxt, $linkTxt]);
				} else {
					var $sectionTxt = $target.text().replace(/\s\+/g,"");
					var $linkTxt = $sectionTxt + " Landing Page";
					_gaq.push(_gaq,['_trackEvent', 'thincrust', $sectionTxt, $linkTxt]);
				}
			});
			
        },
        setupSearchFunctions: function () {
			$('.search-logo').on('click',function(e) {
				if ($('.search-options:visible').length === 0) {
					$('.search-options').show();
				} else {
					$('.search-options').removeAttr('style');
				}
				e.stopPropagation();
			});
			
			$('#search-field').on('focus',function() {
				$('.search-options').show();
			});
			
			$('html').on('click',function (e) {
				$('.search-options').removeAttr('style');
			});
			
			// this is the 'anything but itself' bit
			$('.search-options, #search-field').on('click',function (e) {
				e.stopPropagation();
			});
			
            $('#jhmSiteSearch').on('submit',function() {
				$('#jhmSubSiteSearch :input#subsite-search-field').val($('#jhmSiteSearch :input#search-field').val());
				
				if ($('input[name=subSiteSearchFlag]:checked').val() === 'sitesearch') {
					$('#jhmSubSiteSearch').submit();
				} else {
					return true;
				}
				return false;
			});
        }
        
    };

});