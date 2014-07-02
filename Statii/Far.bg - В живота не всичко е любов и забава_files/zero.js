// converting form element to json
function ConvertFormToJSON(form) {
    var array = jQuery(form).serializeArray();
    var json = {};

    jQuery.each(array, function() {
        json[this.name] = this.value || '';
    });

    return json;
}

// display error mesage
function displayError(err) {
    $('#errMsg').text(err);
    $('#dialogErr').dialog();
}

// serach
var search = {
	init: function(config) {
		this.config = config;
		this.bindEvents();
	},
	bindEvents: function() {
		var self = this;
		
		// search event
		self.config.search.on('click', function(e) {
			if (self.config.form.is(':visible')) {
				self.config.form.hide('slide',{direction:'right'},200);
			} else {
				self.config.form.show('slide',{direction:'right'},200);
			}
		});
	}
};

// loading
var loading = {
	init: function(config) {
		this.config = config;
		
		this.e_scroll = true; // enable/disable scroll event
		this.times = this.config.times; // how many times trigger scroll event
		this.trigger = 0; // current trigger count
		// get page
		this.page = location.search.split('page=')[1];
		if (!this.page) {this.page = 1;}
		
		//set templates source
		this.image_template = document.getElementById(this.config.image_template).innerHTML;
		this.noimage_template = document.getElementById(this.config.noimage_template).innerHTML;
		
		this.bindEvents();
	},
	bindEvents: function() {
		var self = this;
		
		if (self.config.fixed) {
			var element = self.config.fixed.position();
			var ele_top = element.top;
			var ele_left = element.left;
			var ele_fixed = false;
		}
		
		$(window).scroll(function() {
			if (self.config.fixed) {
				var current_top = $(window).scrollTop();
				console.log(ele_top+'-'+current_top);
				if (ele_top-current_top <= 0) {
					console.log(ele_top+'-'+current_top);
					if (ele_fixed === false) {
						self.config.fixed.css('position', 'fixed');
						self.config.fixed.css('top', 0);
						self.config.fixed.css('left', ele_left);
						ele_fixed = true;
					}
				} else if (ele_fixed === true) {
					self.config.fixed.css('position','');
					self.config.fixed.css('top', '');
					self.config.fixed.css('left', '');
					ele_fixed = false;
				}
			}
			
			if (self.e_scroll) {
				if ($(window).scrollTop() + $(window).height() >= $(document).height() - 50) { // trigger at 50px from bottom of page
					self.e_scroll = false;
					self.trigger++;
					if (self.trigger <= self.times) {
						$('.loading').show();
						
						var param = 'page='+self.page+'&load='+self.trigger;
						if (typeof category_id != 'undefined') {
							param += '&cid='+category_id;
						}
						if (typeof top_id != 'undefined') {
							param += '&tid='+top_id;
						}
						if (typeof pin_id != 'undefined') {
							param += '&pin='+pin_id;
						}
						if (typeof search_text != 'undefined') {
							param += '&s='+search_text;
						}
						if (typeof search_body != 'undefined') {
							param += '&t='+search_body;
						}
						
						$.post(self.config.ajaxUrl, param, function(results) {
							self.results = results;
							setTimeout(function() {self.display();}, 500);
						}, 'json');
					}
				}
			}
		});
		
	},
	display: function() {
		var self = this;
		var template_left = '';
		var template_right = '';
		var banner = '';
		
		if (self.config.banner_template) {
			banner = document.getElementById(this.config.banner_template).innerHTML;
		}
		
		var cc = 0;
		for (var row in self.results['data']) {
			cc++;
			
			if (self.results['data'][row].image_src) {
				if (row && cc % 2) {
					template_left += self.render(self.image_template, self.results['data'][row]);
				} else if (row && !(cc % 2)) {
					template_right += self.render(self.image_template, self.results['data'][row]);
				}
			} else {
				if (row && cc % 2) {
					template_left += self.render(self.noimage_template, self.results['data'][row]);
				} else if (row && !(cc % 2)) {
					template_right += self.render(self.noimage_template, self.results['data'][row]);
				}
			}
			
			if (cc == 5 && banner) {
				template_left += banner;
			} else if (cc == 10 && banner) {
				template_right += banner;
			}
		}
		
		$('.loading').hide();
		
		//write templates to containers
		self.config.container_left.append(template_left);
		self.config.container_right.append(template_right);
		
		//important
		FB.XFBML.parse(document.getElementById(self.config.container_left));
		FB.XFBML.parse(document.getElementById(self.config.container_right));
		
		if (self.results['count'] < 11) {
			var left = document.getElementById('left-page-template').innerHTML;
			self.config.container_left.append(left);
			return;
		} else {
			if (self.trigger == self.times) {
				var left = document.getElementById('left-page-template').innerHTML;
				var right = document.getElementById('right-page-template').innerHTML;
				self.config.container_left.append(left);
				self.config.container_right.append(right);
			} else {
				self.e_scroll = true;
			}
		}
	},
	render: function (tmpl, arg) {
		var reg;
		for (var key in arg) {
			reg = new RegExp('%' + key + '%',"gi");
			tmpl = tmpl.replace(reg, arg[key]);
		}
		return tmpl;
	}
};

var fixed = {
	init: function(config) {
		this.config = config;
		this.window = $(window);
		this.top = this.config.element.position().top;
		
		this.bindEvents();
	},
	bindEvents: function() {
		var self = this;
		
		self.window.scroll(function() {
			self.offset();
			if (self.window.scrollTop() > self.top) {
				var margin = (self.config.page_width/2)-self.config.element_width;
				self.config.element.addClass("fixed-position");
				self.config.element.css("top", self.config.top);
				self.config.element.css("margin-left", margin);
			} else {
				self.config.element.removeClass("fixed-position");
				self.config.element.css("top", "");
				self.config.element.css("margin-left", "");
			}
		});
	},
	offset: function() {
		var offset = this.config.element.position();
		if (this.top < offset.top)
			this.top = offset.top;
	}
}