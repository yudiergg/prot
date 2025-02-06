/* 
 *   jQuery Sticky Plugin 1.0.1
 *   https://github.com/garethdn/jquery-sticky
 *
 *   Copyright 2013, Bruno Tarmann & Gareth Nolan
 *   http://tarmann.com.br
 *   http://ie.linkedin.com/in/garethnolan/

 *   Based on jQuery Boilerplate by Zeno Rocha with the help of Addy Osmani
 *   http://jqueryboilerplate.com
 *
 *   Licensed under the MIT license:
 *   http://www.opensource.org/licenses/MIT
 */

;(function ( $, window, document, undefined ) {

	var pluginName = "sticky";
	var defaults = {
		stickyClass: 'sdui-sticky-content',
        anchorClass: 'sdui-sticky-content-anchor',
        activeClass: 'is-active',
        buffer: 0
	};

	function Plugin ( element, options ) {
		this.element = element;

		this.settings = $.extend( {}, defaults, options );
		this._defaults = defaults;
		this._name = pluginName;
		this.init();
	}

	Plugin.prototype = {
		init: function () {
			$(this.element).addClass(this.settings.stickyClass);

			this.elementWidth = $(this.element).width();
			this.elementHeight = $(this.element).outerHeight();
			this.elementAnchor = this.createAnchor();
			this.elementParentH = $(this.element).parent().outerHeight();

			this.bindEvents();
		},

		bindEvents: function () {
			var self = this;

			$(window).scroll( function () {
				self.refreshPosition();
			});
		},

		createAnchor: function () {
			return $('<div>').addClass(this.settings.anchorClass).insertBefore(this.element);
		},
		
		refreshPosition: function () {
			var scrollTop = $(window).scrollTop(),
				elementAnchorTop = this.elementAnchor.offset().top,
				footerTop = $('footer').offset().top, // footer 위치 가져오기
				windowHeight = $(window).height();
			
			console.log('scroll', scrollTop, 'Anchor', elementAnchorTop, '콘텐츠높이', this.elementParentH, '브라우저높이', windowHeight, '고정높이', this.elementHeight, 'footer', footerTop);
		
			if ((scrollTop + this.settings.buffer) < elementAnchorTop) {
				this.releaseElement();
			} else if ((scrollTop + this.settings.buffer + this.elementHeight) > footerTop) {
				this.releaseElement(); // 🔥 footer에 닿으면 해제
			} else if ((scrollTop + this.settings.buffer) < (elementAnchorTop + this.elementParentH - (windowHeight - this.elementHeight + this.settings.buffer))) {
				this.fixElement();
			} else {
				this.afterElement();
			}
		}
,

		fixElement: function () {
			$(this.element).css({ 
            	position: 'fixed',
            	top: this.settings.buffer + 'px',
            	'z-index': 1000,
            	'width': this.elementWidth
            }).addClass(this.settings.activeClass);

            $(this.elementAnchor).height(this.elementHeight);
		},

		releaseElement: function () {
			$(this.element).css({ 
            	position: 'relative',
            	top: ''
            }).removeClass(this.settings.activeClass);

            $(this.elementAnchor).height(0);
		},

		afterElement: function () {
			$(this.element).css({ 
            	position: 'absolute',
            	top: 'auto',
				bottom: 0,
            	'z-index': 1000,
            	'width': this.elementWidth
				
            }).addClass(this.settings.activeClass);

            $(this.elementAnchor).height(this.elementHeight);
		}
	};

	$.fn[ pluginName ] = function ( options ) {
		return this.each(function() {
			if ( !$.data( this, "plugin_" + pluginName ) ) {
				$.data( this, "plugin_" + pluginName, new Plugin( this, options ) );
			}
		});
	};

})( jQuery, window, document );