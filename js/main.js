/*--------------------------------------
		CUSTOM FUNCTION WRITE HERE		
--------------------------------------*/
"use strict";
jQuery(document).on('ready', function() {
	/* ---------------------------------------
			STICKY HEADER
	--------------------------------------- */
	if(jQuery('.tg-navigationarea').length > 0){
		jQuery(window).on('scroll', function(){
			if(jQuery(this).scrollTop() > 200){
				jQuery('body').addClass('tg-fixedme');
			} else {
				jQuery('body').removeClass('tg-fixedme');
			}
		});
	}
	/* -------------------------------------
			SCROLL NAV
	-------------------------------------- */
	var body = jQuery('body');
	if(body.hasClass('tg-home')){
		body.addClass("home");
		jQuery(window).on('scroll', function() {
			var scroll = jQuery(window).scrollTop();
			if (scroll >= 10) {
				jQuery(".tg-navigationarea").addClass("single-page-nav");
			}else {
				jQuery(".tg-navigationarea").removeClass("single-page-nav");
			}
		});
	}
	var _tg_navigationarea = jQuery('.tg-navigationarea');
	_tg_navigationarea.singlePageNav({
		updateHash: false,
		offset: 100,
		filter: ':not(.external)',
	});
	/* -------------------------------------
			SCROLL TO SECTION
	-------------------------------------- */
	var _tg_btnsectionscroll = jQuery('.tg-btnsectionscroll');
	_tg_btnsectionscroll.on('click', function(event) {
		event.preventDefault();
		console.log('clicked');
		var offset = -220;
		jQuery('html, body').animate({
			scrollTop: jQuery("#tg-main").offset().top + offset
		}, 2000);
	});
	/* -------------------------------------
			SCROLL TO TOP
	-------------------------------------- */
	var _tg_btnscroltotop = jQuery("#tg-btnscroltotop");
	_tg_btnscroltotop.on('click', function(){
		var _scrollUp = jQuery('html, body');
		_scrollUp.animate({ scrollTop: 0 }, 'slow');
	});
	/* -------------------------------------
			HOME BANNER SLIDER				
	-------------------------------------- */
	var _tg_homeslider = jQuery('#tg-homeslider');
	_tg_homeslider.pogoSlider({
		pauseOnHover: false,
		autoplay: true,
		generateNav: false,
		displayProgess: false,
		autoplayTimeout: 6000,
		targetHeight: 445,
		responsive: true,
		onSlideStart: (function(){
			var _slideslength = jQuery('.pogoSlider-slide').length;
			var _currentSlide = this.currentSlideIndex + 1;
			jQuery('#tg-totalslides').text(_slideslength);
			jQuery('#tg-currentslide').text(_currentSlide);
		}),
	}).data('plugin_pogoSlider');
	/* -------------------------------------
			COUNTER
	-------------------------------------- */
	var _tg_counters = jQuery('#tg-statisticscounters');
	_tg_counters.appear(function () {
		var _tg_counter = jQuery('.tg-counter > h3 > span');
		_tg_counter.countTo();
	});
	/* -------------------------------------
			TREATMENT SLIDER
	-------------------------------------- */
	var _tg_treatmentslider = jQuery('#tg-treatmentslider');
	if(_tg_treatmentslider.hasClass('tg-treatments')){
		_tg_treatmentslider.owlCarousel({
			items: 1,
			nav:false,
			loop:true,
			dots: true,
			autoplay: false,
			dotsClass: 'tg-sliderdots',
		});
	}
	/* --------------------------------------
			Google Map
	-------------------------------------- */
	var gmapStyles = [
		{"featureType": "poi", "elementType": "labels", "stylers": [{ "visibility": "off" }]},
		{"featureType": "poi", "elementType": "geometry.fill", "stylers": [{ "visibility": "off" }]},
		{"featureType": "transit", "elementType": "labels.text", "stylers": [{ "visibility": "off" }]},
		{"featureType": "road", "elementType": "labels.text", "stylers": [{ "visibility": "on" }]},
		{"featureType": "road", "elementType": "geometry", "stylers": [{ "color": "#7b7b7b" }]},
		{"featureType": "road", "elementType": "labels.text", "stylers": [{ "color": "#7b7b7b" }]},
		{"featureType": "road", "elementType": "labels.text", "stylers": [{ "color": "#7b7b7b" }]},
		{"featureType": "road", "elementType": "labels.text.stroke", "stylers": [{ "visibility": "off" }]},
		{"featureType": "road.local", "elementType": "geometry.fill", "stylers": [{ "color": "#7b7b7b" }]},
		{"featureType": "road.highway", "elementType": "labels", "stylers": [{ "visibility": "off" }]},
		{"featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }]},
		{"featureType": "road.arterial", "elementType": "geometry.fill", "stylers": [{ "color": "#2b2b2b" }]},
		{"featureType": "road.arterial", "elementType": "geometry.stroke", "stylers": [{ "color": "#2b2b2b" }]},
		{"featureType": "road.arterial", "elementType": "geometry.fill", "stylers": [{ "color": "#2b2b2b" }]},
		{"featureType": "water", "elementType": "geometry", "stylers": [{ "visibility": "on" }]},
		{"featureType": "water", "elementType": "labels.text", "stylers": [{ "color": "#2b2b2b" }]},
		{"featureType": "water", "elementType": "labels.text.stroke", "stylers": [{ "color": "#2b2b2b" }]},
		{"featureType": "water", "elementType": "labels", "stylers": [{"visibility": "on"},{"color": "#2b2b2b"}]},
		{"featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#333" }]},
		{"featureType": "administrative", "elementType": "labels", "stylers": [{ "color": "#333" }]},
		{"featureType": "administrative.locality", "elementType": "labels.text.stroke", "stylers": [{ "color": "#333" }]},
		{"featureType": "transit.line", "stylers": [ { "visibility": "off" }]},
		{"featureType": "landscape.natural", "stylers": [ { "visibility": "off" }]},
		{"featureType": "landscape.natural", "stylers": [ { "visibility": "on" },{ "color": "#2b2b2b" }]},
		{"featureType": "administrative.province", "elementType": "geometry", "stylers": [{ "color": "#2b2b2b" }]},
		{"elementType": "geometry.fill", "stylers": [ { "color": "#2b2b2b" }]},
		{"featureType": "poi", "elementType": "geometry", "stylers": [{ "visibility": "off" }]},
		{"featureType": "administrative.land_parcel", "elementType": "labels.text.fill", "stylers": [{ "visibility": "off" }]},
		{"featureType": "landscape", "elementType": "labels.text", "stylers": [{ "visibility": "off" }]},
		{"featureType": "administrative", "elementType": "labels", "stylers": [{ "visibility": "off" }]},
	]
	if(jQuery('#tg-locationmap').length > 0){
		var _tg_locationmap = jQuery('#tg-locationmap');
		_tg_locationmap.gmap3({
			marker: {
				address: '1600 Elizabeth St, Melbourne, Victoria, Australia',
				options: {
					title: 'Spa And Beauty Saloon'
				}
			},
			map: {
				options: {
					zoom: 12,
					styles: gmapStyles,
					scaleControl: true,
					scrollwheel: false,
					mapTypeControl: false,
					disableDefaultUI: true,
					navigationControl: false,
					streetViewControl: false,
					disableDoubleClickZoom: true,
				}
			}
		});
	}
	/* -------------------------------------
			TESTIMONIALS SLIDER
	-------------------------------------- */
	function testimonialsSlider(){
		var _tg_homesliderfull = jQuery("#tg-testimonialsslider");
		var _tg_homesliderthumbnails = jQuery("#tg-testimonialtumbnailslider");
		var syncedSecondary = true;
		var slidesPerPage = 6;
		_tg_homesliderfull.owlCarousel({
			items : 1,
			loop: true,
			nav: false,
			dots: false,
			autoplay: true,
			slideSpeed : 2000,
			responsiveRefreshRate : 200,
			navText: [
				'<i class="icon-chevron-left"></i>',
				'<i class="icon-chevron-right"></i>',
			],
		}).on('changed.owl.carousel', syncPosition);
		_tg_homesliderthumbnails.on('initialized.owl.carousel', function () {
			_tg_homesliderthumbnails.find(".owl-item").eq(0).addClass("current");
		})
		.owlCarousel({
			nav: false,
			margin: 10,
			dots: false,
			smartSpeed: 200,
			slideSpeed : 500,
			items : slidesPerPage,
			slideBy: slidesPerPage,
			responsiveRefreshRate : 100
		}).on('changed.owl.carousel', syncPosition2);
		function syncPosition(el) {
			var count = el.item.count-1;
			var current = Math.round(el.item.index - (el.item.count/2) - .5);
			if(current < 0) {
				current = count;
			}
			if(current > count) {
				current = 0;
			}
			_tg_homesliderthumbnails.find(".owl-item").removeClass("current").eq(current).addClass("current");
			var onscreen = _tg_homesliderthumbnails.find('.owl-item.active').length - 1;
			var start = _tg_homesliderthumbnails.find('.owl-item.active').first().index();
			var end = _tg_homesliderthumbnails.find('.owl-item.active').last().index();
			if (current > end) {
				_tg_homesliderthumbnails.data('owl.carousel').to(current, 100, true);
			}
			if (current < start) {
				_tg_homesliderthumbnails.data('owl.carousel').to(current - onscreen, 100, true);
			}
		}
		function syncPosition2(el) {
			if(syncedSecondary) {
				var number = el.item.index;
				_tg_homesliderfull.data('owl.carousel').to(number, 100, true);
			}
		}
		_tg_homesliderthumbnails.on("click", ".owl-item", function(e){
			e.preventDefault();
			var number = $(this).index();
			_tg_homesliderfull.data('owl.carousel').to(number, 300, true);
		});
	}
	testimonialsSlider();
	/* -------------------------------------
			CLIENT SLIDER
	-------------------------------------- */
	var _tg_clientslider = jQuery('#tg-clientslider');
	if(_tg_clientslider.hasClass('tg-clients')){
		_tg_clientslider.owlCarousel({
			nav:false,
			loop:true,
			margin:30,
			dots: false,
			autoplay: true,
			dotsClass: 'tg-sliderdots',
			responsiveClass:true,
			responsive:{
				0:{
					items:1,
				},
				640:{
					items:2,
				},
				768:{
					items:3,
				},
				1000:{
					items:4,
				}
			}
		});
	}
	/* -------------------------------------
			PHOTO SWIPE
	-------------------------------------- */
	var initPhotoSwipeFromDOM = function(gallerySelector) {
		var parseThumbnailElements = function(el) {
			var thumbElements = el.childNodes, numNodes = thumbElements.length, items = [], figureEl, linkEl, size, item;
			for(var i = 0; i < numNodes; i++) {
				figureEl = thumbElements[i];
				if(figureEl.nodeType !== 1) {
					continue;
				}
				linkEl = figureEl.children[0]; // <a> element
				size = linkEl.getAttribute('data-size').split('x');
				item = {
					src: linkEl.getAttribute('href'),
					w: parseInt(size[0], 10),
					h: parseInt(size[1], 10)
				};
				if(figureEl.children.length > 1) {
					item.title = figureEl.children[1].innerHTML; 
				}
				if(linkEl.children.length > 0) {
					item.msrc = linkEl.children[0].getAttribute('src');
				}
				item.el = figureEl;
				items.push(item);
			}
			return items;
		};
		var closest = function closest(el, fn) {
			return el && ( fn(el) ? el : closest(el.parentNode, fn) );
		};
		var onThumbnailsClick = function(e) {
			e = e || window.event;
			e.preventDefault ? e.preventDefault() : e.returnValue = false;
			var eTarget = e.target || e.srcElement;
			var clickedListItem = closest(eTarget, function(el) {
				return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
			});
			if(!clickedListItem) {
				return;
			}
			var clickedGallery = clickedListItem.parentNode, childNodes = clickedListItem.parentNode.childNodes, numChildNodes = childNodes.length, nodeIndex = 0, index;
			for (var i = 0; i < numChildNodes; i++) {
				if(childNodes[i].nodeType !== 1) { 
					continue; 
				}
				if(childNodes[i] === clickedListItem) {
					index = nodeIndex;
					break;
				}
				nodeIndex++;
			}
			if(index >= 0) {
				openPhotoSwipe( index, clickedGallery );
			}
			return false;
		};
		var photoswipeParseHash = function() {
			var hash = window.location.hash.substring(1),
			params = {};
			if(hash.length < 5) {
				return params;
			}
			var vars = hash.split('&');
			for (var i = 0; i < vars.length; i++) {
				if(!vars[i]) {
					continue;
				}
				var pair = vars[i].split('=');
				if(pair.length < 2) {
					continue;
				}
				params[pair[0]] = pair[1];
			}
			if(params.gid) {
				params.gid = parseInt(params.gid, 10);
			}
			return params;
		};
		var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
			var pswpElement = document.querySelectorAll('.pswp')[0], gallery, options, items;
			items = parseThumbnailElements(galleryElement);
			options = {
				galleryUID: galleryElement.getAttribute('data-pswp-uid'),
				getThumbBoundsFn: function(index) {
					var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
					pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
					rect = thumbnail.getBoundingClientRect(); 
					return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
				}
			};
			if(fromURL) {
				if(options.galleryPIDs) {
					for(var j = 0; j < items.length; j++) {
						if(items[j].pid == index) {
							options.index = j;
							break;
						}
					}
				} else {
					options.index = parseInt(index, 10) - 1;
				}
			} else {
				options.index = parseInt(index, 10);
			}
			if( isNaN(options.index) ) {
				return;
			}
			if(disableAnimation) {
				options.showAnimationDuration = 0;
			}
			gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
			gallery.init();
		};
		var galleryElements = document.querySelectorAll( gallerySelector );
		for(var i = 0, l = galleryElements.length; i < l; i++) {
			galleryElements[i].setAttribute('data-pswp-uid', i+1);
			galleryElements[i].onclick = onThumbnailsClick;
		}
		var hashData = photoswipeParseHash();
		if(hashData.pid && hashData.gid) {
			openPhotoSwipe( hashData.pid ,  galleryElements[ hashData.gid - 1 ], true, true );
		}
	};
	initPhotoSwipeFromDOM('.my-gallery');
});