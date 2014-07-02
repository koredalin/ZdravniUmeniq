require.config({
	baseUrl: 'http://www.hopkinsmedicine.org/lib/js/',
	waitSeconds: 30,
	paths: {
		responsive: '',
		jquery: 'jquery-1.8.3.min',
		search: '../template_engine.cfm?template=searchhbs',
		resjs: 'thincrust-fixed',
		ems: '../template_engine.cfm?template=responsiveems',
		modernizr: 'modernizr.min',
		'template-essentials':'../../sebin/n/t/template-essentials',
		modalHome:'jquery.modalHome.min',
		photobooks:'photobooks.min'
	},
	shim: { 
		modernizr: { exports: 'Modernizr' },
		modalHome: {
			deps: ['jquery'],
			exports: 'modalHome'
		},
		photobooks: {
			deps: ['modalHome'],
			exports: 'photobooks'
		},
		'template-essentials': {
			deps: ['jquery'],
			exports: 'template-essentials'
		}
	}
});

define('responsive', function () {
	
});

require(['domready!', 'jquery', 'resjs'], function (dom, $, resjs) {
	resjs.setupThincrustActions();
});