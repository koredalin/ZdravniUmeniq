$(document).ready(function(){
		
$('#bpos').change( function(){
    
       var bpos = $("#bpos option:selected").val();
       
       $.ajax({
      
             url: 'MAXadmin/ajax.php',
            type: 'POST',
        dataType: 'json',  
            data: ({id: bpos, act:'show_menu'}),
         success: function(msg){
        	 
        	 $('#bpos_menus_ae').hide();
        	 $('#bpos_menus').html(msg); 
         }
        
      
    })//-->end ajax
  })//--> end option.click
 

});//--> end document



function _init_slider(carousel) {
	$('#slider-nav a').bind('click', function() {
		var index = $(this).parent().find('a').index(this);
		carousel.scroll( index + 1);
		return false;
	});
};

function _active_slide(carousel, item, idx, state) {
	var index = idx-1;
	$('#slider-nav a').removeClass('active');
	$('#slider-nav a').eq(index).addClass('active');
};

function _init_more_products(carousel) {
	$('.more-nav .next').bind('click', function() {
		carousel.next();
		return false;
	});
	
	$('.more-nav .prev').bind('click', function() {
		carousel.prev();
		return false;
	});
};

$(document).ready(function() {
	$("#slider-holder ul").jcarousel({
		scroll: 1,
		auto: 6,
		wrap: 'both',
		initCallback: _init_slider,
		itemFirstInCallback: _active_slide,
		buttonNextHTML: null,
		buttonPrevHTML: null
	});
	
	$(".more-products-holder ul").jcarousel({
		scroll: 2,
		auto: 5,
		wrap: 'both',
		initCallback: _init_more_products,
		buttonNextHTML: null,
		buttonPrevHTML: null
	});
});
