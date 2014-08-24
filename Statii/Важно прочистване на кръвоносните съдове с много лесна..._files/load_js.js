$(document).ready(function() {
populate_cities(function() {   populate_areas(function() { /*populate_quarters(); */ }); });
$('#country').change(function() {   populate_cities();      });
$('#area').change(function() {      populate_areas();       });
$('#citys').change(function() {  /*	populate_quarters();	*/	
});
function populate_cities(callback) {
	var country_id = $('#country').val();
	if(country_id) {
		$.getJSON("http://mall359.com/ajax/ajax_search.php?key=city&jsoncallback=?", { 'country_id' : country_id }, function(res) {
		var countries = res.data;
		$('#area').html('');
		for(var k in countries) {
			var opt = new Option(countries[k].name, countries[k].id);
			if($('#current_area').val() == countries[k].id) $(opt).attr('selected', 'true');
			if(!isNaN(parseInt(k))) $('#area').append(opt);
		}
		callback();
		});
	}
}
function populate_areas(callback) {
var city_id = $('#area').val();
	if(city_id) {
		$.getJSON("http://mall359.com/ajax/ajax_search.php?key=area&jsoncallback=?", { 'city_id' : city_id }, function(res) {
		var countries = res.data;
		$('#citys').html('');
		for(var k in countries) {
			var opt = new Option(countries[k].name, countries[k].id);
			if($('#current_city').val() == countries[k].id) $(opt).attr('selected', 'true');
			if(!isNaN(parseInt(k))) $('#citys').append(opt);
		}
		if(callback != null) callback();
		});
	}
else{
$('#citys option').first().attr('selected','selected')
}
}
});