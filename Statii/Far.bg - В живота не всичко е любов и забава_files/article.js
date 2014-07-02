$('document').ready(function() {
	loading.init({
		ajaxUrl: URL + 'article/xhrLoadArticles/',
		container_left: $('#list-left'),
		container_right: $('#list-right'),
		image_template: 'article-image-template',
		noimage_template: 'article-noimage-template',
		banner_template: 'banner-template',
		times: 2
	});
});

