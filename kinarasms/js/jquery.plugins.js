/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Ã‚Â© 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

// getNonColSpanIndex()
(function($){ 
	$.fn.getNonColSpanIndex = function() {
	    if(! $(this).is('td') && ! $(this).is('th'))
	        return -1;
	
	    var allCells = this.parent('tr').children();
	    var normalIndex = allCells.index(this);
	    var nonColSpanIndex = 0;
	
	    allCells.each(
	        function(i, item)
	        {
	            if(i == normalIndex)
	                return false;
	
	            var colspan = $(this).attr('colspan');
	            colspan = colspan ? parseInt(colspan) : 1;
	            nonColSpanIndex += colspan;
	        }
	    );
	
	    return nonColSpanIndex;
	};
})(jQuery);

// deloClear plugin
(function($){ 

$.fn.deloClear = function(options) {  

	var defaults = {  
		preColor: '#A0A0A0',  
		postColor: '#222222',
		fieldDef: [ 'Enter first name' ]
	};  
	var options = $.extend( defaults, options );

	return this.each(function() {
		var obj	=	$(this);
		obj.find('input:text,textarea').each(function(){
			var field		=	$(this);
			var defaulto	=	$(this).val();
			if( $.inArray( defaulto, options.fieldDef ) != -1 ) {
				field.attr( 'rel', defaulto );
				field.css({ 'color': options.preColor });
				field.addClass('defaultValue');
			} else {
				field.attr( 'rel', 'false' );
			}
			defaulto	=	field.attr( 'rel' );
			field.focus(function(){
				if( field.val() == defaulto || field.val() == '' ) {
					field.val( '' );
					field.css({ 'color': options.postColor });
				} else {
					return false;
				}
			});
			field.blur(function(){
				if( field.val() == '' ) {
					if( defaulto != 'false' ) {
						field.val( defaulto )
					}
					field.css({ 'color': options.preColor });
				} else {
					field.removeClass('defaultValue');
					return false
				}
			});
			field.keyup(function(){
				if( field.val().length > 2 ) {
					if( field.val() == '' ) {
						if( defaulto != 'false' ) {
							field.val( defaulto )
						}
						field.css({ 'color': options.preColor });
					} else {
						field.removeClass('defaultValue');
						return false
					}
				}
			})
		});
		obj.submit(function(){
			$('.defaultValue').val('');
		});
	});  
};  

})(jQuery);

// ColorBox v1.3.19.3 - jQuery lightbox plugin
// (c) 2011 Jack Moore - jacklmoore.com
// License: http://www.opensource.org/licenses/mit-license.php
(function ($, document, window) {
	var
	// Default settings object.	
	// See http://jacklmoore.com/colorbox for details.
	defaults = {
		transition: "elastic",
		speed: 300,
		width: false,
		initialWidth: "600",
		innerWidth: false,
		maxWidth: false,
		height: false,
		initialHeight: "450",
		innerHeight: false,
		maxHeight: false,
		scalePhotos: true,
		scrolling: true,
		inline: false,
		html: false,
		iframe: false,
		fastIframe: true,
		photo: false,
		href: false,
		title: false,
		rel: false,
		opacity: 0.9,
		preloading: true,

		current: "image {current} of {total}",
		previous: "previous",
		next: "next",
		close: "close",
		xhrError: "This content failed to load.",
		imgError: "This image failed to load.",

		open: false,
		returnFocus: true,
		reposition: true,
		loop: true,
		slideshow: false,
		slideshowAuto: true,
		slideshowSpeed: 2500,
		slideshowStart: "start slideshow",
		slideshowStop: "stop slideshow",
		onOpen: false,
		onLoad: false,
		onComplete: false,
		onCleanup: false,
		onClosed: false,
		overlayClose: true,		
		escKey: true,
		arrowKey: true,
		top: false,
		bottom: false,
		left: false,
		right: false,
		fixed: false,
		data: undefined
	},
	
	// Abstracting the HTML and event identifiers for easy rebranding
	colorbox = 'colorbox',
	prefix = 'cbox',
	boxElement = prefix + 'Element',
	
	// Events	
	event_open = prefix + '_open',
	event_load = prefix + '_load',
	event_complete = prefix + '_complete',
	event_cleanup = prefix + '_cleanup',
	event_closed = prefix + '_closed',
	event_purge = prefix + '_purge',
	
	// Special Handling for IE
	isIE = !$.support.opacity && !$.support.style, // IE7 & IE8
	isIE6 = isIE && !window.XMLHttpRequest, // IE6
	event_ie6 = prefix + '_IE6',

	// Cached jQuery Object Variables
	$overlay,
	$box,
	$wrap,
	$content,
	$topBorder,
	$leftBorder,
	$rightBorder,
	$bottomBorder,
	$related,
	$window,
	$loaded,
	$loadingBay,
	$loadingOverlay,
	$title,
	$current,
	$slideshow,
	$next,
	$prev,
	$close,
	$groupControls,
	
	// Variables for cached values or use across multiple functions
	settings,
	interfaceHeight,
	interfaceWidth,
	loadedHeight,
	loadedWidth,
	element,
	index,
	photo,
	open,
	active,
	closing,
	loadingTimer,
	publicMethod,
	div = "div",
	init;

	// ****************
	// HELPER FUNCTIONS
	// ****************
	
	// Convience function for creating new jQuery objects
	function $tag(tag, id, css) {
		var element = document.createElement(tag);

		if (id) {
			element.id = prefix + id;
		}

		if (css) {
			element.style.cssText = css;
		}

		return $(element);
	}

	// Determine the next and previous members in a group.
	function getIndex(increment) {
		var 
		max = $related.length, 
		newIndex = (index + increment) % max;
		
		return (newIndex < 0) ? max + newIndex : newIndex;
	}

	// Convert '%' and 'px' values to integers
	function setSize(size, dimension) {
		return Math.round((/%/.test(size) ? ((dimension === 'x' ? $window.width() : $window.height()) / 100) : 1) * parseInt(size, 10));
	}
	
	// Checks an href to see if it is a photo.
	// There is a force photo option (photo: true) for hrefs that cannot be matched by this regex.
	function isImage(url) {
		return settings.photo || /\.(gif|png|jpe?g|bmp|ico)((#|\?).*)?$/i.test(url);
	}
	
	// Assigns function results to their respective properties
	function makeSettings() {
		var i,
			data = $.data(element, colorbox);
		
		if (data == null) {
			settings = $.extend({}, defaults);
			if (console && console.log) {
				console.log('Error: cboxElement missing settings object')
			}
		} else {
			settings = $.extend({}, data);    		
		}
		
		for (i in settings) {
			if ($.isFunction(settings[i]) && i.slice(0, 2) !== 'on') { // checks to make sure the function isn't one of the callbacks, they will be handled at the appropriate time.
				settings[i] = settings[i].call(element);
			}
		}
		
		settings.rel = settings.rel || element.rel || 'nofollow';
		settings.href = settings.href || $(element).attr('href');
		settings.title = settings.title || element.title;
		
		if (typeof settings.href === "string") {
			settings.href = $.trim(settings.href);
		}
	}

	function trigger(event, callback) {
		$.event.trigger(event);
		if (callback) {
			callback.call(element);
		}
	}

	// Slideshow functionality
	function slideshow() {
		var
		timeOut,
		className = prefix + "Slideshow_",
		click = "click." + prefix,
		start,
		stop,
		clear;
		
		if (settings.slideshow && $related[1]) {
			start = function () {
				$slideshow
					.text(settings.slideshowStop)
					.unbind(click)
					.bind(event_complete, function () {
						if (settings.loop || $related[index + 1]) {
							timeOut = setTimeout(publicMethod.next, settings.slideshowSpeed);
						}
					})
					.bind(event_load, function () {
						clearTimeout(timeOut);
					})
					.one(click + ' ' + event_cleanup, stop);
				$box.removeClass(className + "off").addClass(className + "on");
				timeOut = setTimeout(publicMethod.next, settings.slideshowSpeed);
			};
			
			stop = function () {
				clearTimeout(timeOut);
				$slideshow
					.text(settings.slideshowStart)
					.unbind([event_complete, event_load, event_cleanup, click].join(' '))
					.one(click, function () {
						publicMethod.next();
						start();
					});
				$box.removeClass(className + "on").addClass(className + "off");
			};
			
			if (settings.slideshowAuto) {
				start();
			} else {
				stop();
			}
		} else {
			$box.removeClass(className + "off " + className + "on");
		}
	}

	function launch(target) {
		if (!closing) {
			
			element = target;
			
			makeSettings();
			
			$related = $(element);
			
			index = 0;
			
			if (settings.rel !== 'nofollow') {
				$related = $('.' + boxElement).filter(function () {
					var data = $.data(this, colorbox), 
						relRelated;

					if (data) {
						relRelated =  data.rel || this.rel;
					}
					
					return (relRelated === settings.rel);
				});
				index = $related.index(element);
				
				// Check direct calls to ColorBox.
				if (index === -1) {
					$related = $related.add(element);
					index = $related.length - 1;
				}
			}
			
			if (!open) {
				open = active = true; // Prevents the page-change action from queuing up if the visitor holds down the left or right keys.
				
				$box.show();
				
				if (settings.returnFocus) {
					$(element).blur().one(event_closed, function () {
						$(this).focus();
					});
				}
				
				// +settings.opacity avoids a problem in IE when using non-zero-prefixed-string-values, like '.5'
				$overlay.css({"opacity": +settings.opacity, "cursor": settings.overlayClose ? "pointer" : "auto"}).show();
				
				// Opens inital empty ColorBox prior to content being loaded.
				settings.w = setSize(settings.initialWidth, 'x');
				settings.h = setSize(settings.initialHeight, 'y');
				publicMethod.position();
				
				if (isIE6) {
					$window.bind('resize.' + event_ie6 + ' scroll.' + event_ie6, function () {
						$overlay.css({width: $window.width(), height: $window.height(), top: $window.scrollTop(), left: $window.scrollLeft()});
					}).trigger('resize.' + event_ie6);
				}
				
				trigger(event_open, settings.onOpen);
				
				$groupControls.add($title).hide();
				
				$close.html(settings.close).show();
			}
			
			publicMethod.load(true);
		}
	}

	// ColorBox's markup needs to be added to the DOM prior to being called
	// so that the browser will go ahead and load the CSS background images.
	function appendHTML() {
		if (!$box && document.body) {
			init = false;

			$window = $(window);
			$box = $tag(div).attr({id: colorbox, 'class': isIE ? prefix + (isIE6 ? 'IE6' : 'IE') : ''}).hide();
			$overlay = $tag(div, "Overlay", isIE6 ? 'position:absolute' : '').hide();
			$wrap = $tag(div, "Wrapper");
			$content = $tag(div, "Content").append(
				$loaded = $tag(div, "LoadedContent", 'width:0; height:0; overflow:hidden'),
				$loadingOverlay = $tag(div, "LoadingOverlay").add($tag(div, "LoadingGraphic")),
				$title = $tag(div, "Title"),
				$current = $tag(div, "Current"),
				$next = $tag(div, "Next"),
				$prev = $tag(div, "Previous"),
				$slideshow = $tag(div, "Slideshow").bind(event_open, slideshow),
				$close = $tag(div, "Close")
			);
			
			$wrap.append( // The 3x3 Grid that makes up ColorBox
				$tag(div).append(
					$tag(div, "TopLeft"),
					$topBorder = $tag(div, "TopCenter"),
					$tag(div, "TopRight")
				),
				$tag(div, false, 'clear:left').append(
					$leftBorder = $tag(div, "MiddleLeft"),
					$content,
					$rightBorder = $tag(div, "MiddleRight")
				),
				$tag(div, false, 'clear:left').append(
					$tag(div, "BottomLeft"),
					$bottomBorder = $tag(div, "BottomCenter"),
					$tag(div, "BottomRight")
				)
			).find('div div').css({'float': 'left'});
			
			$loadingBay = $tag(div, false, 'position:absolute; width:9999px; visibility:hidden; display:none');
			
			$groupControls = $next.add($prev).add($current).add($slideshow);

			$(document.body).append($overlay, $box.append($wrap, $loadingBay));
		}
	}

	// Add ColorBox's event bindings
	function addBindings() {
		if ($box) {
			if (!init) {
				init = true;

				// Cache values needed for size calculations
				interfaceHeight = $topBorder.height() + $bottomBorder.height() + $content.outerHeight(true) - $content.height();//Subtraction needed for IE6
				interfaceWidth = $leftBorder.width() + $rightBorder.width() + $content.outerWidth(true) - $content.width();
				loadedHeight = $loaded.outerHeight(true);
				loadedWidth = $loaded.outerWidth(true);
				
				// Setting padding to remove the need to do size conversions during the animation step.
				$box.css({"padding-bottom": interfaceHeight, "padding-right": interfaceWidth});

				// Anonymous functions here keep the public method from being cached, thereby allowing them to be redefined on the fly.
				$next.click(function () {
					publicMethod.next();
				});
				$prev.click(function () {
					publicMethod.prev();
				});
				$close.click(function () {
					publicMethod.close();
				});
				$overlay.click(function () {
					if (settings.overlayClose) {
						publicMethod.close();
					}
				});
				
				// Key Bindings
				$(document).bind('keydown.' + prefix, function (e) {
					var key = e.keyCode;
					if (open && settings.escKey && key === 27) {
						e.preventDefault();
						publicMethod.close();
					}
					if (open && settings.arrowKey && $related[1]) {
						if (key === 37) {
							e.preventDefault();
							$prev.click();
						} else if (key === 39) {
							e.preventDefault();
							$next.click();
						}
					}
				});

				$('.' + boxElement, document).live('click', function (e) {
					// ignore non-left-mouse-clicks and clicks modified with ctrl / command, shift, or alt.
					// See: http://jacklmoore.com/notes/click-events/
					if (!(e.which > 1 || e.shiftKey || e.altKey || e.metaKey)) {
						e.preventDefault();
						launch(this);
					}
				});
			}
			return true;
		}
		return false;
	}

	// Don't do anything if ColorBox already exists.
	if ($.colorbox) {
		return;
	}

	// Append the HTML when the DOM loads
	$(appendHTML);


	// ****************
	// PUBLIC FUNCTIONS
	// Usage format: $.fn.colorbox.close();
	// Usage from within an iframe: parent.$.fn.colorbox.close();
	// ****************
	
	publicMethod = $.fn[colorbox] = $[colorbox] = function (options, callback) {
		var $this = this;
		
		options = options || {};
		
		appendHTML();

		if (addBindings()) {
			if (!$this[0]) {
				if ($this.selector) { // if a selector was given and it didn't match any elements, go ahead and exit.
					return $this;
				}
				// if no selector was given (ie. $.colorbox()), create a temporary element to work with
				$this = $('<a/>');
				options.open = true; // assume an immediate open
			}
			
			if (callback) {
				options.onComplete = callback;
			}
			
			$this.each(function () {
				$.data(this, colorbox, $.extend({}, $.data(this, colorbox) || defaults, options));
			}).addClass(boxElement);
			
			if (($.isFunction(options.open) && options.open.call($this)) || options.open) {
				launch($this[0]);
			}
		}
		
		return $this;
	};

	publicMethod.position = function (speed, loadedCallback) {
		var 
		top = 0, 
		left = 0, 
		offset = $box.offset(),
		scrollTop, 
		scrollLeft;
		
		$window.unbind('resize.' + prefix);

		// remove the modal so that it doesn't influence the document width/height        
		$box.css({top: -9e4, left: -9e4});

		scrollTop = $window.scrollTop();
		scrollLeft = $window.scrollLeft();

		if (settings.fixed && !isIE6) {
			offset.top -= scrollTop;
			offset.left -= scrollLeft;
			$box.css({position: 'fixed'});
		} else {
			top = scrollTop;
			left = scrollLeft;
			$box.css({position: 'absolute'});
		}

		// keeps the top and left positions within the browser's viewport.
		if (settings.right !== false) {
			left += Math.max($window.width() - settings.w - loadedWidth - interfaceWidth - setSize(settings.right, 'x'), 0);
		} else if (settings.left !== false) {
			left += setSize(settings.left, 'x');
		} else {
			left += Math.round(Math.max($window.width() - settings.w - loadedWidth - interfaceWidth, 0) / 2);
		}
		
		if (settings.bottom !== false) {
			top += Math.max($window.height() - settings.h - loadedHeight - interfaceHeight - setSize(settings.bottom, 'y'), 0);
		} else if (settings.top !== false) {
			top += setSize(settings.top, 'y');
		} else {
			top += Math.round(Math.max($window.height() - settings.h - loadedHeight - interfaceHeight, 0) / 2);
		}

		$box.css({top: offset.top, left: offset.left});

		// setting the speed to 0 to reduce the delay between same-sized content.
		speed = ($box.width() === settings.w + loadedWidth && $box.height() === settings.h + loadedHeight) ? 0 : speed || 0;
		
		// this gives the wrapper plenty of breathing room so it's floated contents can move around smoothly,
		// but it has to be shrank down around the size of div#colorbox when it's done.  If not,
		// it can invoke an obscure IE bug when using iframes.
		$wrap[0].style.width = $wrap[0].style.height = "9999px";
		
		function modalDimensions(that) {
			$topBorder[0].style.width = $bottomBorder[0].style.width = $content[0].style.width = that.style.width;
			$content[0].style.height = $leftBorder[0].style.height = $rightBorder[0].style.height = that.style.height;
		}
		
		$box.dequeue().animate({width: settings.w + loadedWidth, height: settings.h + loadedHeight, top: top, left: left}, {
			duration: speed,
			complete: function () {
				modalDimensions(this);
				
				active = false;
				
				// shrink the wrapper down to exactly the size of colorbox to avoid a bug in IE's iframe implementation.
				$wrap[0].style.width = (settings.w + loadedWidth + interfaceWidth) + "px";
				$wrap[0].style.height = (settings.h + loadedHeight + interfaceHeight) + "px";
				
				if (settings.reposition) {
					setTimeout(function () {  // small delay before binding onresize due to an IE8 bug.
						$window.bind('resize.' + prefix, publicMethod.position);
					}, 1);
				}

				if (loadedCallback) {
					loadedCallback();
				}
			},
			step: function () {
				modalDimensions(this);
			}
		});
	};

	publicMethod.resize = function (options) {
		if (open) {
			options = options || {};
			
			if (options.width) {
				settings.w = setSize(options.width, 'x') - loadedWidth - interfaceWidth;
			}
			if (options.innerWidth) {
				settings.w = setSize(options.innerWidth, 'x');
			}
			$loaded.css({width: settings.w});
			
			if (options.height) {
				settings.h = setSize(options.height, 'y') - loadedHeight - interfaceHeight;
			}
			if (options.innerHeight) {
				settings.h = setSize(options.innerHeight, 'y');
			}
			if (!options.innerHeight && !options.height) {
				$loaded.css({height: "auto"});
				settings.h = $loaded.height();
			}
			$loaded.css({height: settings.h});
			
			publicMethod.position(settings.transition === "none" ? 0 : settings.speed);
		}
	};

	publicMethod.prep = function (object) {
		if (!open) {
			return;
		}
		
		var callback, speed = settings.transition === "none" ? 0 : settings.speed;
		
		$loaded.remove();
		$loaded = $tag(div, 'LoadedContent').append(object);
		
		function getWidth() {
			settings.w = settings.w || $loaded.width();
			settings.w = settings.mw && settings.mw < settings.w ? settings.mw : settings.w;
			return settings.w;
		}
		function getHeight() {
			settings.h = settings.h || $loaded.height();
			settings.h = settings.mh && settings.mh < settings.h ? settings.mh : settings.h;
			return settings.h;
		}
		
		$loaded.hide()
		.appendTo($loadingBay.show())// content has to be appended to the DOM for accurate size calculations.
		.css({width: getWidth(), overflow: settings.scrolling ? 'auto' : 'hidden'})
		.css({height: getHeight()})// sets the height independently from the width in case the new width influences the value of height.
		.prependTo($content);
		
		$loadingBay.hide();
		
		// floating the IMG removes the bottom line-height and fixed a problem where IE miscalculates the width of the parent element as 100% of the document width.
		//$(photo).css({'float': 'none', marginLeft: 'auto', marginRight: 'auto'});
		
		$(photo).css({'float': 'none'});
		
		// Hides SELECT elements in IE6 because they would otherwise sit on top of the overlay.
		if (isIE6) {
			$('select').not($box.find('select')).filter(function () {
				return this.style.visibility !== 'hidden';
			}).css({'visibility': 'hidden'}).one(event_cleanup, function () {
				this.style.visibility = 'inherit';
			});
		}
		
		callback = function () {
			var preload, 
				i, 
				total = $related.length, 
				iframe, 
				frameBorder = 'frameBorder', 
				allowTransparency = 'allowTransparency', 
				complete, 
				src, 
				img, 
				data;
			
			if (!open) {
				return;
			}
			
			function removeFilter() {
				if (isIE) {
					$box[0].style.removeAttribute('filter');
				}
			}
			
			complete = function () {
				clearTimeout(loadingTimer);
				$loadingOverlay.hide();
				trigger(event_complete, settings.onComplete);
			};
			
			if (isIE) {
				//This fadeIn helps the bicubic resampling to kick-in.
				if (photo) {
					$loaded.fadeIn(100);
				}
			}
			
			$title.html(settings.title).add($loaded).show();
			
			if (total > 1) { // handle grouping
				if (typeof settings.current === "string") {
					$current.html(settings.current.replace('{current}', index + 1).replace('{total}', total)).show();
				}
				
				$next[(settings.loop || index < total - 1) ? "show" : "hide"]().html(settings.next);
				$prev[(settings.loop || index) ? "show" : "hide"]().html(settings.previous);
				
				if (settings.slideshow) {
					$slideshow.show();
				}
				
				// Preloads images within a rel group
				if (settings.preloading) {
					preload = [
						getIndex(-1),
						getIndex(1)
					];
					while (i = $related[preload.pop()]) {
						data = $.data(i, colorbox);
						
						if (data && data.href) {
							src = data.href;
							if ($.isFunction(src)) {
								src = src.call(i);
							}
						} else {
							src = i.href;
						}

						if (isImage(src)) {
							img = new Image();
							img.src = src;
						}
					}
				}
			} else {
				$groupControls.hide();
			}
			
			if (settings.iframe) {
				iframe = $tag('iframe')[0];
				
				if (frameBorder in iframe) {
					iframe[frameBorder] = 0;
				}
				if (allowTransparency in iframe) {
					iframe[allowTransparency] = "true";
				}
				// give the iframe a unique name to prevent caching
				iframe.name = prefix + (+new Date());
				if (settings.fastIframe) {
					complete();
				} else {
					$(iframe).one('load', complete);
				}
				iframe.src = settings.href;
				if (!settings.scrolling) {
					iframe.scrolling = "no";
				}
				$(iframe).addClass(prefix + 'Iframe').appendTo($loaded).one(event_purge, function () {
					iframe.src = "//about:blank";
				});
			} else {
				complete();
			}
			
			if (settings.transition === 'fade') {
				$box.fadeTo(speed, 1, removeFilter);
			} else {
				removeFilter();
			}
		};
		
		if (settings.transition === 'fade') {
			$box.fadeTo(speed, 0, function () {
				publicMethod.position(0, callback);
			});
		} else {
			publicMethod.position(speed, callback);
		}
	};

	publicMethod.load = function (launched) {
		var href, setResize, prep = publicMethod.prep;
		
		active = true;
		
		photo = false;
		
		element = $related[index];
		
		if (!launched) {
			makeSettings();
		}
		
		trigger(event_purge);
		
		trigger(event_load, settings.onLoad);
		
		settings.h = settings.height ?
				setSize(settings.height, 'y') - loadedHeight - interfaceHeight :
				settings.innerHeight && setSize(settings.innerHeight, 'y');
		
		settings.w = settings.width ?
				setSize(settings.width, 'x') - loadedWidth - interfaceWidth :
				settings.innerWidth && setSize(settings.innerWidth, 'x');
		
		// Sets the minimum dimensions for use in image scaling
		settings.mw = settings.w;
		settings.mh = settings.h;
		
		// Re-evaluate the minimum width and height based on maxWidth and maxHeight values.
		// If the width or height exceed the maxWidth or maxHeight, use the maximum values instead.
		if (settings.maxWidth) {
			settings.mw = setSize(settings.maxWidth, 'x') - loadedWidth - interfaceWidth;
			settings.mw = settings.w && settings.w < settings.mw ? settings.w : settings.mw;
		}
		if (settings.maxHeight) {
			settings.mh = setSize(settings.maxHeight, 'y') - loadedHeight - interfaceHeight;
			settings.mh = settings.h && settings.h < settings.mh ? settings.h : settings.mh;
		}
		
		href = settings.href;
		
		loadingTimer = setTimeout(function () {
			$loadingOverlay.show();
		}, 100);
		
		if (settings.inline) {
			// Inserts an empty placeholder where inline content is being pulled from.
			// An event is bound to put inline content back when ColorBox closes or loads new content.
			$tag(div).hide().insertBefore($(href)[0]).one(event_purge, function () {
				$(this).replaceWith($loaded.children());
			});
			prep($(href));
		} else if (settings.iframe) {
			// IFrame element won't be added to the DOM until it is ready to be displayed,
			// to avoid problems with DOM-ready JS that might be trying to run in that iframe.
			prep(" ");
		} else if (settings.html) {
			prep(settings.html);
		} else if (isImage(href)) {
			$(photo = new Image())
			.addClass(prefix + 'Photo')
			.error(function () {
				settings.title = false;
				prep($tag(div, 'Error').html(settings.imgError));
			})
			.load(function () {
				var percent;
				photo.onload = null; //stops animated gifs from firing the onload repeatedly.
				
				if (settings.scalePhotos) {
					setResize = function () {
						photo.height -= photo.height * percent;
						photo.width -= photo.width * percent;	
					};
					if (settings.mw && photo.width > settings.mw) {
						percent = (photo.width - settings.mw) / photo.width;
						setResize();
					}
					if (settings.mh && photo.height > settings.mh) {
						percent = (photo.height - settings.mh) / photo.height;
						setResize();
					}
				}
				
				if (settings.h) {
					photo.style.marginTop = Math.max(settings.h - photo.height, 0) / 2 + 'px';
				}
				
				if ($related[1] && (settings.loop || $related[index + 1])) {
					photo.style.cursor = 'pointer';
					photo.onclick = function () {
						publicMethod.next();
					};
				}
				
				if (isIE) {
					photo.style.msInterpolationMode = 'bicubic';
				}
				
				setTimeout(function () { // A pause because Chrome will sometimes report a 0 by 0 size otherwise.
					prep(photo);
				}, 1);
			});
			
			setTimeout(function () { // A pause because Opera 10.6+ will sometimes not run the onload function otherwise.
				photo.src = href;
			}, 1);
		} else if (href) {
			$loadingBay.load(href, settings.data, function (data, status, xhr) {
				prep(status === 'error' ? $tag(div, 'Error').html(settings.xhrError) : $(this).contents());
			});
		}
	};
		
	// Navigates to the next page/image in a set.
	publicMethod.next = function () {
		if (!active && $related[1] && (settings.loop || $related[index + 1])) {
			index = getIndex(1);
			publicMethod.load();
		}
	};
	
	publicMethod.prev = function () {
		if (!active && $related[1] && (settings.loop || index)) {
			index = getIndex(-1);
			publicMethod.load();
		}
	};

	// Note: to use this within an iframe use the following format: parent.$.fn.colorbox.close();
	publicMethod.close = function () {
		if (open && !closing) {
			
			closing = true;
			
			open = false;
			
			trigger(event_cleanup, settings.onCleanup);
			
			$window.unbind('.' + prefix + ' .' + event_ie6);
			
			$overlay.fadeTo(200, 0);
			
			$box.stop().fadeTo(300, 0, function () {
				 
				$box.add($overlay).css({'opacity': 1, cursor: 'auto'}).hide();
				
				trigger(event_purge);
				
				$loaded.remove();
				
				setTimeout(function () {
					closing = false;
					trigger(event_closed, settings.onClosed);
				}, 1);
			});
		}
	};

	// Removes changes ColorBox made to the document, but does not remove the plugin
	// from jQuery.
	publicMethod.remove = function () {
		$([]).add($box).add($overlay).remove();
		$box = null;
		$('.' + boxElement)
			.removeData(colorbox)
			.removeClass(boxElement)
			.die();
	};

	// A method for fetching the current element ColorBox is referencing.
	// returns a jQuery object.
	publicMethod.element = function () {
		return $(element);
	};

	publicMethod.settings = defaults;

}(jQuery, document, this));

/*!
 * jQuery Form Plugin
 * version: 3.18 (28-SEP-2012)
 * @requires jQuery v1.5 or later
 *
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Project repository: https://github.com/malsup/form
 * Dual licensed under the MIT and GPL licenses:
 *    http://malsup.github.com/mit-license.txt
 *    http://malsup.github.com/gpl-license-v2.txt
 */
/*global ActiveXObject alert */
;(function($) {
"use strict";

/*
    Usage Note:
    -----------
    Do not use both ajaxSubmit and ajaxForm on the same form.  These
    functions are mutually exclusive.  Use ajaxSubmit if you want
    to bind your own submit handler to the form.  For example,

    $(document).ready(function() {
        $('#myForm').on('submit', function(e) {
            e.preventDefault(); // <-- important
            $(this).ajaxSubmit({
                target: '#output'
            });
        });
    });

    Use ajaxForm when you want the plugin to manage all the event binding
    for you.  For example,

    $(document).ready(function() {
        $('#myForm').ajaxForm({
            target: '#output'
        });
    });
    
    You can also use ajaxForm with delegation (requires jQuery v1.7+), so the
    form does not have to exist when you invoke ajaxForm:

    $('#myForm').ajaxForm({
        delegation: true,
        target: '#output'
    });
    
    When using ajaxForm, the ajaxSubmit function will be invoked for you
    at the appropriate time.
*/

/**
 * Feature detection
 */
var feature = {};
feature.fileapi = $("<input type='file'/>").get(0).files !== undefined;
feature.formdata = window.FormData !== undefined;

/**
 * ajaxSubmit() provides a mechanism for immediately submitting
 * an HTML form using AJAX.
 */
$.fn.ajaxSubmit = function(options) {
    /*jshint scripturl:true */

    // fast fail if nothing selected (http://dev.jquery.com/ticket/2752)
    if (!this.length) {
        log('ajaxSubmit: skipping submit process - no element selected');
        return this;
    }
    
    var method, action, url, $form = this;

    if (typeof options == 'function') {
        options = { success: options };
    }

    method = this.attr('method');
    action = this.attr('action');
    url = (typeof action === 'string') ? $.trim(action) : '';
    url = url || window.location.href || '';
    if (url) {
        // clean url (don't include hash vaue)
        url = (url.match(/^([^#]+)/)||[])[1];
    }

    options = $.extend(true, {
        url:  url,
        success: $.ajaxSettings.success,
        type: method || 'GET',
        iframeSrc: /^https/i.test(window.location.href || '') ? 'javascript:false' : 'about:blank'
    }, options);

    // hook for manipulating the form data before it is extracted;
    // convenient for use with rich editors like tinyMCE or FCKEditor
    var veto = {};
    this.trigger('form-pre-serialize', [this, options, veto]);
    if (veto.veto) {
        log('ajaxSubmit: submit vetoed via form-pre-serialize trigger');
        return this;
    }

    // provide opportunity to alter form data before it is serialized
    if (options.beforeSerialize && options.beforeSerialize(this, options) === false) {
        log('ajaxSubmit: submit aborted via beforeSerialize callback');
        return this;
    }

    var traditional = options.traditional;
    if ( traditional === undefined ) {
        traditional = $.ajaxSettings.traditional;
    }
    
    var elements = [];
    var qx, a = this.formToArray(options.semantic, elements);
    if (options.data) {
        options.extraData = options.data;
        qx = $.param(options.data, traditional);
    }

    // give pre-submit callback an opportunity to abort the submit
    if (options.beforeSubmit && options.beforeSubmit(a, this, options) === false) {
        log('ajaxSubmit: submit aborted via beforeSubmit callback');
        return this;
    }

    // fire vetoable 'validate' event
    this.trigger('form-submit-validate', [a, this, options, veto]);
    if (veto.veto) {
        log('ajaxSubmit: submit vetoed via form-submit-validate trigger');
        return this;
    }

    var q = $.param(a, traditional);
    if (qx) {
        q = ( q ? (q + '&' + qx) : qx );
    }    
    if (options.type.toUpperCase() == 'GET') {
        options.url += (options.url.indexOf('?') >= 0 ? '&' : '?') + q;
        options.data = null;  // data is null for 'get'
    }
    else {
        options.data = q; // data is the query string for 'post'
    }

    var callbacks = [];
    if (options.resetForm) {
        callbacks.push(function() { $form.resetForm(); });
    }
    if (options.clearForm) {
        callbacks.push(function() { $form.clearForm(options.includeHidden); });
    }

    // perform a load on the target only if dataType is not provided
    if (!options.dataType && options.target) {
        var oldSuccess = options.success || function(){};
        callbacks.push(function(data) {
            var fn = options.replaceTarget ? 'replaceWith' : 'html';
            $(options.target)[fn](data).each(oldSuccess, arguments);
        });
    }
    else if (options.success) {
        callbacks.push(options.success);
    }

    options.success = function(data, status, xhr) { // jQuery 1.4+ passes xhr as 3rd arg
        var context = options.context || this ;    // jQuery 1.4+ supports scope context 
        for (var i=0, max=callbacks.length; i < max; i++) {
            callbacks[i].apply(context, [data, status, xhr || $form, $form]);
        }
    };

    // are there files to upload?
    var fileInputs = $('input:file:enabled[value]', this); // [value] (issue #113)
    var hasFileInputs = fileInputs.length > 0;
    var mp = 'multipart/form-data';
    var multipart = ($form.attr('enctype') == mp || $form.attr('encoding') == mp);

    var fileAPI = feature.fileapi && feature.formdata;
    log("fileAPI :" + fileAPI);
    var shouldUseFrame = (hasFileInputs || multipart) && !fileAPI;

    var jqxhr;

    // options.iframe allows user to force iframe mode
    // 06-NOV-09: now defaulting to iframe mode if file input is detected
    if (options.iframe !== false && (options.iframe || shouldUseFrame)) {
        // hack to fix Safari hang (thanks to Tim Molendijk for this)
        // see:  http://groups.google.com/group/jquery-dev/browse_thread/thread/36395b7ab510dd5d
        if (options.closeKeepAlive) {
            $.get(options.closeKeepAlive, function() {
                jqxhr = fileUploadIframe(a);
            });
        }
        else {
            jqxhr = fileUploadIframe(a);
        }
    }
    else if ((hasFileInputs || multipart) && fileAPI) {
        jqxhr = fileUploadXhr(a);
    }
    else {
        jqxhr = $.ajax(options);
    }

    $form.removeData('jqxhr').data('jqxhr', jqxhr);

    // clear element array
    for (var k=0; k < elements.length; k++)
        elements[k] = null;

    // fire 'notify' event
    this.trigger('form-submit-notify', [this, options]);
    return this;

    // utility fn for deep serialization
    function deepSerialize(extraData){
        var serialized = $.param(extraData).split('&');
        var len = serialized.length;
        var result = {};
        var i, part;
        for (i=0; i < len; i++) {
            part = serialized[i].split('=');
            result[decodeURIComponent(part[0])] = decodeURIComponent(part[1]);
        }
        return result;
    }

     // XMLHttpRequest Level 2 file uploads (big hat tip to francois2metz)
    function fileUploadXhr(a) {
        var formdata = new FormData();

        for (var i=0; i < a.length; i++) {
            formdata.append(a[i].name, a[i].value);
        }

        if (options.extraData) {
            var serializedData = deepSerialize(options.extraData);
            for (var p in serializedData)
                if (serializedData.hasOwnProperty(p))
                    formdata.append(p, serializedData[p]);
        }

        options.data = null;

        var s = $.extend(true, {}, $.ajaxSettings, options, {
            contentType: false,
            processData: false,
            cache: false,
            type: method || 'POST'
        });
        
        if (options.uploadProgress) {
            // workaround because jqXHR does not expose upload property
            s.xhr = function() {
                var xhr = jQuery.ajaxSettings.xhr();
                if (xhr.upload) {
                    xhr.upload.onprogress = function(event) {
                        var percent = 0;
                        var position = event.loaded || event.position; /*event.position is deprecated*/
                        var total = event.total;
                        if (event.lengthComputable) {
                            percent = Math.ceil(position / total * 100);
                        }
                        options.uploadProgress(event, position, total, percent);
                    };
                }
                return xhr;
            };
        }

        s.data = null;
            var beforeSend = s.beforeSend;
            s.beforeSend = function(xhr, o) {
                o.data = formdata;
                if(beforeSend)
                    beforeSend.call(this, xhr, o);
        };
        return $.ajax(s);
    }

    // private function for handling file uploads (hat tip to YAHOO!)
    function fileUploadIframe(a) {
        var form = $form[0], el, i, s, g, id, $io, io, xhr, sub, n, timedOut, timeoutHandle;
        var useProp = !!$.fn.prop;
        var deferred = $.Deferred();

        if ($(':input[name=submit],:input[id=submit]', form).length) {
            // if there is an input with a name or id of 'submit' then we won't be
            // able to invoke the submit fn on the form (at least not x-browser)
            alert('Error: Form elements must not have name or id of "submit".');
            deferred.reject();
            return deferred;
        }
        
        if (a) {
            // ensure that every serialized input is still enabled
            for (i=0; i < elements.length; i++) {
                el = $(elements[i]);
                if ( useProp )
                    el.prop('disabled', false);
                else
                    el.removeAttr('disabled');
            }
        }

        s = $.extend(true, {}, $.ajaxSettings, options);
        s.context = s.context || s;
        id = 'jqFormIO' + (new Date().getTime());
        if (s.iframeTarget) {
            $io = $(s.iframeTarget);
            n = $io.attr('name');
            if (!n)
                 $io.attr('name', id);
            else
                id = n;
        }
        else {
            $io = $('<iframe name="' + id + '" src="'+ s.iframeSrc +'" />');
            $io.css({ position: 'absolute', top: '-1000px', left: '-1000px' });
        }
        io = $io[0];


        xhr = { // mock object
            aborted: 0,
            responseText: null,
            responseXML: null,
            status: 0,
            statusText: 'n/a',
            getAllResponseHeaders: function() {},
            getResponseHeader: function() {},
            setRequestHeader: function() {},
            abort: function(status) {
                var e = (status === 'timeout' ? 'timeout' : 'aborted');
                log('aborting upload... ' + e);
                this.aborted = 1;
                // #214
                if (io.contentWindow.document.execCommand) {
                    try { // #214
                        io.contentWindow.document.execCommand('Stop');
                    } catch(ignore) {}
                }
                $io.attr('src', s.iframeSrc); // abort op in progress
                xhr.error = e;
                if (s.error)
                    s.error.call(s.context, xhr, e, status);
                if (g)
                    $.event.trigger("ajaxError", [xhr, s, e]);
                if (s.complete)
                    s.complete.call(s.context, xhr, e);
            }
        };

        g = s.global;
        // trigger ajax global events so that activity/block indicators work like normal
        if (g && 0 === $.active++) {
            $.event.trigger("ajaxStart");
        }
        if (g) {
            $.event.trigger("ajaxSend", [xhr, s]);
        }

        if (s.beforeSend && s.beforeSend.call(s.context, xhr, s) === false) {
            if (s.global) {
                $.active--;
            }
            deferred.reject();
            return deferred;
        }
        if (xhr.aborted) {
            deferred.reject();
            return deferred;
        }

        // add submitting element to data if we know it
        sub = form.clk;
        if (sub) {
            n = sub.name;
            if (n && !sub.disabled) {
                s.extraData = s.extraData || {};
                s.extraData[n] = sub.value;
                if (sub.type == "image") {
                    s.extraData[n+'.x'] = form.clk_x;
                    s.extraData[n+'.y'] = form.clk_y;
                }
            }
        }
        
        var CLIENT_TIMEOUT_ABORT = 1;
        var SERVER_ABORT = 2;

        function getDoc(frame) {
            var doc = frame.contentWindow ? frame.contentWindow.document : frame.contentDocument ? frame.contentDocument : frame.document;
            return doc;
        }
        
        // Rails CSRF hack (thanks to Yvan Barthelemy)
        var csrf_token = $('meta[name=csrf-token]').attr('content');
        var csrf_param = $('meta[name=csrf-param]').attr('content');
        if (csrf_param && csrf_token) {
            s.extraData = s.extraData || {};
            s.extraData[csrf_param] = csrf_token;
        }

        // take a breath so that pending repaints get some cpu time before the upload starts
        function doSubmit() {
            // make sure form attrs are set
            var t = $form.attr('target'), a = $form.attr('action');

            // update form attrs in IE friendly way
            form.setAttribute('target',id);
            if (!method) {
                form.setAttribute('method', 'POST');
            }
            if (a != s.url) {
                form.setAttribute('action', s.url);
            }

            // ie borks in some cases when setting encoding
            if (! s.skipEncodingOverride && (!method || /post/i.test(method))) {
                $form.attr({
                    encoding: 'multipart/form-data',
                    enctype:  'multipart/form-data'
                });
            }

            // support timout
            if (s.timeout) {
                timeoutHandle = setTimeout(function() { timedOut = true; cb(CLIENT_TIMEOUT_ABORT); }, s.timeout);
            }
            
            // look for server aborts
            function checkState() {
                try {
                    var state = getDoc(io).readyState;
                    log('state = ' + state);
                    if (state && state.toLowerCase() == 'uninitialized')
                        setTimeout(checkState,50);
                }
                catch(e) {
                    log('Server abort: ' , e, ' (', e.name, ')');
                    cb(SERVER_ABORT);
                    if (timeoutHandle)
                        clearTimeout(timeoutHandle);
                    timeoutHandle = undefined;
                }
            }

            // add "extra" data to form if provided in options
            var extraInputs = [];
            try {
                if (s.extraData) {
                    for (var n in s.extraData) {
                        if (s.extraData.hasOwnProperty(n)) {
                           // if using the $.param format that allows for multiple values with the same name
                           if($.isPlainObject(s.extraData[n]) && s.extraData[n].hasOwnProperty('name') && s.extraData[n].hasOwnProperty('value')) {
                               extraInputs.push(
                               $('<input type="hidden" name="'+s.extraData[n].name+'">').attr('value',s.extraData[n].value)
                                   .appendTo(form)[0]);
                           } else {
                               extraInputs.push(
                               $('<input type="hidden" name="'+n+'">').attr('value',s.extraData[n])
                                   .appendTo(form)[0]);
                           }
                        }
                    }
                }

                if (!s.iframeTarget) {
                    // add iframe to doc and submit the form
                    $io.appendTo('body');
                    if (io.attachEvent)
                        io.attachEvent('onload', cb);
                    else
                        io.addEventListener('load', cb, false);
                }
                setTimeout(checkState,15);
                form.submit();
            }
            finally {
                // reset attrs and remove "extra" input elements
                form.setAttribute('action',a);
                if(t) {
                    form.setAttribute('target', t);
                } else {
                    $form.removeAttr('target');
                }
                $(extraInputs).remove();
            }
        }

        if (s.forceSync) {
            doSubmit();
        }
        else {
            setTimeout(doSubmit, 10); // this lets dom updates render
        }

        var data, doc, domCheckCount = 50, callbackProcessed;

        function cb(e) {
            if (xhr.aborted || callbackProcessed) {
                return;
            }
            try {
                doc = getDoc(io);
            }
            catch(ex) {
                log('cannot access response document: ', ex);
                e = SERVER_ABORT;
            }
            if (e === CLIENT_TIMEOUT_ABORT && xhr) {
                xhr.abort('timeout');
                deferred.reject(xhr, 'timeout');
                return;
            }
            else if (e == SERVER_ABORT && xhr) {
                xhr.abort('server abort');
                deferred.reject(xhr, 'error', 'server abort');
                return;
            }

            if (!doc || doc.location.href == s.iframeSrc) {
                // response not received yet
                if (!timedOut)
                    return;
            }
            if (io.detachEvent)
                io.detachEvent('onload', cb);
            else    
                io.removeEventListener('load', cb, false);

            var status = 'success', errMsg;
            try {
                if (timedOut) {
                    throw 'timeout';
                }

                var isXml = s.dataType == 'xml' || doc.XMLDocument || $.isXMLDoc(doc);
                log('isXml='+isXml);
                if (!isXml && window.opera && (doc.body === null || !doc.body.innerHTML)) {
                    if (--domCheckCount) {
                        // in some browsers (Opera) the iframe DOM is not always traversable when
                        // the onload callback fires, so we loop a bit to accommodate
                        log('requeing onLoad callback, DOM not available');
                        setTimeout(cb, 250);
                        return;
                    }
                    // let this fall through because server response could be an empty document
                    //log('Could not access iframe DOM after mutiple tries.');
                    //throw 'DOMException: not available';
                }

                //log('response detected');
                var docRoot = doc.body ? doc.body : doc.documentElement;
                xhr.responseText = docRoot ? docRoot.innerHTML : null;
                xhr.responseXML = doc.XMLDocument ? doc.XMLDocument : doc;
                if (isXml)
                    s.dataType = 'xml';
                xhr.getResponseHeader = function(header){
                    var headers = {'content-type': s.dataType};
                    return headers[header];
                };
                // support for XHR 'status' & 'statusText' emulation :
                if (docRoot) {
                    xhr.status = Number( docRoot.getAttribute('status') ) || xhr.status;
                    xhr.statusText = docRoot.getAttribute('statusText') || xhr.statusText;
                }

                var dt = (s.dataType || '').toLowerCase();
                var scr = /(json|script|text)/.test(dt);
                if (scr || s.textarea) {
                    // see if user embedded response in textarea
                    var ta = doc.getElementsByTagName('textarea')[0];
                    if (ta) {
                        xhr.responseText = ta.value;
                        // support for XHR 'status' & 'statusText' emulation :
                        xhr.status = Number( ta.getAttribute('status') ) || xhr.status;
                        xhr.statusText = ta.getAttribute('statusText') || xhr.statusText;
                    }
                    else if (scr) {
                        // account for browsers injecting pre around json response
                        var pre = doc.getElementsByTagName('pre')[0];
                        var b = doc.getElementsByTagName('body')[0];
                        if (pre) {
                            xhr.responseText = pre.textContent ? pre.textContent : pre.innerText;
                        }
                        else if (b) {
                            xhr.responseText = b.textContent ? b.textContent : b.innerText;
                        }
                    }
                }
                else if (dt == 'xml' && !xhr.responseXML && xhr.responseText) {
                    xhr.responseXML = toXml(xhr.responseText);
                }

                try {
                    data = httpData(xhr, dt, s);
                }
                catch (e) {
                    status = 'parsererror';
                    xhr.error = errMsg = (e || status);
                }
            }
            catch (e) {
                log('error caught: ',e);
                status = 'error';
                xhr.error = errMsg = (e || status);
            }

            if (xhr.aborted) {
                log('upload aborted');
                status = null;
            }

            if (xhr.status) { // we've set xhr.status
                status = (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) ? 'success' : 'error';
            }

            // ordering of these callbacks/triggers is odd, but that's how $.ajax does it
            if (status === 'success') {
                if (s.success)
                    s.success.call(s.context, data, 'success', xhr);
                deferred.resolve(xhr.responseText, 'success', xhr);
                if (g)
                    $.event.trigger("ajaxSuccess", [xhr, s]);
            }
            else if (status) {
                if (errMsg === undefined)
                    errMsg = xhr.statusText;
                if (s.error)
                    s.error.call(s.context, xhr, status, errMsg);
                deferred.reject(xhr, 'error', errMsg);
                if (g)
                    $.event.trigger("ajaxError", [xhr, s, errMsg]);
            }

            if (g)
                $.event.trigger("ajaxComplete", [xhr, s]);

            if (g && ! --$.active) {
                $.event.trigger("ajaxStop");
            }

            if (s.complete)
                s.complete.call(s.context, xhr, status);

            callbackProcessed = true;
            if (s.timeout)
                clearTimeout(timeoutHandle);

            // clean up
            setTimeout(function() {
                if (!s.iframeTarget)
                    $io.remove();
                xhr.responseXML = null;
            }, 100);
        }

        var toXml = $.parseXML || function(s, doc) { // use parseXML if available (jQuery 1.5+)
            if (window.ActiveXObject) {
                doc = new ActiveXObject('Microsoft.XMLDOM');
                doc.async = 'false';
                doc.loadXML(s);
            }
            else {
                doc = (new DOMParser()).parseFromString(s, 'text/xml');
            }
            return (doc && doc.documentElement && doc.documentElement.nodeName != 'parsererror') ? doc : null;
        };
        var parseJSON = $.parseJSON || function(s) {
            /*jslint evil:true */
            return window['eval']('(' + s + ')');
        };

        var httpData = function( xhr, type, s ) { // mostly lifted from jq1.4.4

            var ct = xhr.getResponseHeader('content-type') || '',
                xml = type === 'xml' || !type && ct.indexOf('xml') >= 0,
                data = xml ? xhr.responseXML : xhr.responseText;

            if (xml && data.documentElement.nodeName === 'parsererror') {
                if ($.error)
                    $.error('parsererror');
            }
            if (s && s.dataFilter) {
                data = s.dataFilter(data, type);
            }
            if (typeof data === 'string') {
                if (type === 'json' || !type && ct.indexOf('json') >= 0) {
                    data = parseJSON(data);
                } else if (type === "script" || !type && ct.indexOf("javascript") >= 0) {
                    $.globalEval(data);
                }
            }
            return data;
        };

        return deferred;
    }
};

/**
 * ajaxForm() provides a mechanism for fully automating form submission.
 *
 * The advantages of using this method instead of ajaxSubmit() are:
 *
 * 1: This method will include coordinates for <input type="image" /> elements (if the element
 *    is used to submit the form).
 * 2. This method will include the submit element's name/value data (for the element that was
 *    used to submit the form).
 * 3. This method binds the submit() method to the form for you.
 *
 * The options argument for ajaxForm works exactly as it does for ajaxSubmit.  ajaxForm merely
 * passes the options argument along after properly binding events for submit elements and
 * the form itself.
 */
$.fn.ajaxForm = function(options) {
    options = options || {};
    options.delegation = options.delegation && $.isFunction($.fn.on);
    
    // in jQuery 1.3+ we can fix mistakes with the ready state
    if (!options.delegation && this.length === 0) {
        var o = { s: this.selector, c: this.context };
        if (!$.isReady && o.s) {
            log('DOM not ready, queuing ajaxForm');
            $(function() {
                $(o.s,o.c).ajaxForm(options);
            });
            return this;
        }
        // is your DOM ready?  http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
        log('terminating; zero elements found by selector' + ($.isReady ? '' : ' (DOM not ready)'));
        return this;
    }

    if ( options.delegation ) {
        $(document)
            .off('submit.form-plugin', this.selector, doAjaxSubmit)
            .off('click.form-plugin', this.selector, captureSubmittingElement)
            .on('submit.form-plugin', this.selector, options, doAjaxSubmit)
            .on('click.form-plugin', this.selector, options, captureSubmittingElement);
        return this;
    }

    return this.ajaxFormUnbind()
        .bind('submit.form-plugin', options, doAjaxSubmit)
        .bind('click.form-plugin', options, captureSubmittingElement);
};

// private event handlers    
function doAjaxSubmit(e) {
    /*jshint validthis:true */
    var options = e.data;
    if (!e.isDefaultPrevented()) { // if event has been canceled, don't proceed
        e.preventDefault();
        $(this).ajaxSubmit(options);
    }
}
    
function captureSubmittingElement(e) {
    /*jshint validthis:true */
    var target = e.target;
    var $el = $(target);
    if (!($el.is(":submit,input:image"))) {
        // is this a child element of the submit el?  (ex: a span within a button)
        var t = $el.closest(':submit');
        if (t.length === 0) {
            return;
        }
        target = t[0];
    }
    var form = this;
    form.clk = target;
    if (target.type == 'image') {
        if (e.offsetX !== undefined) {
            form.clk_x = e.offsetX;
            form.clk_y = e.offsetY;
        } else if (typeof $.fn.offset == 'function') {
            var offset = $el.offset();
            form.clk_x = e.pageX - offset.left;
            form.clk_y = e.pageY - offset.top;
        } else {
            form.clk_x = e.pageX - target.offsetLeft;
            form.clk_y = e.pageY - target.offsetTop;
        }
    }
    // clear form vars
    setTimeout(function() { form.clk = form.clk_x = form.clk_y = null; }, 100);
}


// ajaxFormUnbind unbinds the event handlers that were bound by ajaxForm
$.fn.ajaxFormUnbind = function() {
    return this.unbind('submit.form-plugin click.form-plugin');
};

/**
 * formToArray() gathers form element data into an array of objects that can
 * be passed to any of the following ajax functions: $.get, $.post, or load.
 * Each object in the array has both a 'name' and 'value' property.  An example of
 * an array for a simple login form might be:
 *
 * [ { name: 'username', value: 'jresig' }, { name: 'password', value: 'secret' } ]
 *
 * It is this array that is passed to pre-submit callback functions provided to the
 * ajaxSubmit() and ajaxForm() methods.
 */
$.fn.formToArray = function(semantic, elements) {
    var a = [];
    if (this.length === 0) {
        return a;
    }

    var form = this[0];
    var els = semantic ? form.getElementsByTagName('*') : form.elements;
    if (!els) {
        return a;
    }

    var i,j,n,v,el,max,jmax;
    for(i=0, max=els.length; i < max; i++) {
        el = els[i];
        n = el.name;
        if (!n) {
            continue;
        }

        if (semantic && form.clk && el.type == "image") {
            // handle image inputs on the fly when semantic == true
            if(!el.disabled && form.clk == el) {
                a.push({name: n, value: $(el).val(), type: el.type });
                a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
            }
            continue;
        }

        v = $.fieldValue(el, true);
        if (v && v.constructor == Array) {
            if (elements) 
                elements.push(el);
            for(j=0, jmax=v.length; j < jmax; j++) {
                a.push({name: n, value: v[j]});
            }
        }
        else if (feature.fileapi && el.type == 'file' && !el.disabled) {
            if (elements) 
                elements.push(el);
            var files = el.files;
            if (files.length) {
                for (j=0; j < files.length; j++) {
                    a.push({name: n, value: files[j], type: el.type});
                }
            }
            else {
                // #180
                a.push({ name: n, value: '', type: el.type });
            }
        }
        else if (v !== null && typeof v != 'undefined') {
            if (elements) 
                elements.push(el);
            a.push({name: n, value: v, type: el.type, required: el.required});
        }
    }

    if (!semantic && form.clk) {
        // input type=='image' are not found in elements array! handle it here
        var $input = $(form.clk), input = $input[0];
        n = input.name;
        if (n && !input.disabled && input.type == 'image') {
            a.push({name: n, value: $input.val()});
            a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
        }
    }
    return a;
};

/**
 * Serializes form data into a 'submittable' string. This method will return a string
 * in the format: name1=value1&amp;name2=value2
 */
$.fn.formSerialize = function(semantic) {
    //hand off to jQuery.param for proper encoding
    return $.param(this.formToArray(semantic));
};

/**
 * Serializes all field elements in the jQuery object into a query string.
 * This method will return a string in the format: name1=value1&amp;name2=value2
 */
$.fn.fieldSerialize = function(successful) {
    var a = [];
    this.each(function() {
        var n = this.name;
        if (!n) {
            return;
        }
        var v = $.fieldValue(this, successful);
        if (v && v.constructor == Array) {
            for (var i=0,max=v.length; i < max; i++) {
                a.push({name: n, value: v[i]});
            }
        }
        else if (v !== null && typeof v != 'undefined') {
            a.push({name: this.name, value: v});
        }
    });
    //hand off to jQuery.param for proper encoding
    return $.param(a);
};

/**
 * Returns the value(s) of the element in the matched set.  For example, consider the following form:
 *
 *  <form><fieldset>
 *      <input name="A" type="text" />
 *      <input name="A" type="text" />
 *      <input name="B" type="checkbox" value="B1" />
 *      <input name="B" type="checkbox" value="B2"/>
 *      <input name="C" type="radio" value="C1" />
 *      <input name="C" type="radio" value="C2" />
 *  </fieldset></form>
 *
 *  var v = $(':text').fieldValue();
 *  // if no values are entered into the text inputs
 *  v == ['','']
 *  // if values entered into the text inputs are 'foo' and 'bar'
 *  v == ['foo','bar']
 *
 *  var v = $(':checkbox').fieldValue();
 *  // if neither checkbox is checked
 *  v === undefined
 *  // if both checkboxes are checked
 *  v == ['B1', 'B2']
 *
 *  var v = $(':radio').fieldValue();
 *  // if neither radio is checked
 *  v === undefined
 *  // if first radio is checked
 *  v == ['C1']
 *
 * The successful argument controls whether or not the field element must be 'successful'
 * (per http://www.w3.org/TR/html4/interact/forms.html#successful-controls).
 * The default value of the successful argument is true.  If this value is false the value(s)
 * for each element is returned.
 *
 * Note: This method *always* returns an array.  If no valid value can be determined the
 *    array will be empty, otherwise it will contain one or more values.
 */
$.fn.fieldValue = function(successful) {
    for (var val=[], i=0, max=this.length; i < max; i++) {
        var el = this[i];
        var v = $.fieldValue(el, successful);
        if (v === null || typeof v == 'undefined' || (v.constructor == Array && !v.length)) {
            continue;
        }
        if (v.constructor == Array)
            $.merge(val, v);
        else
            val.push(v);
    }
    return val;
};

/**
 * Returns the value of the field element.
 */
$.fieldValue = function(el, successful) {
    var n = el.name, t = el.type, tag = el.tagName.toLowerCase();
    if (successful === undefined) {
        successful = true;
    }

    if (successful && (!n || el.disabled || t == 'reset' || t == 'button' ||
        (t == 'checkbox' || t == 'radio') && !el.checked ||
        (t == 'submit' || t == 'image') && el.form && el.form.clk != el ||
        tag == 'select' && el.selectedIndex == -1)) {
            return null;
    }

    if (tag == 'select') {
        var index = el.selectedIndex;
        if (index < 0) {
            return null;
        }
        var a = [], ops = el.options;
        var one = (t == 'select-one');
        var max = (one ? index+1 : ops.length);
        for(var i=(one ? index : 0); i < max; i++) {
            var op = ops[i];
            if (op.selected) {
                var v = op.value;
                if (!v) { // extra pain for IE...
                    v = (op.attributes && op.attributes['value'] && !(op.attributes['value'].specified)) ? op.text : op.value;
                }
                if (one) {
                    return v;
                }
                a.push(v);
            }
        }
        return a;
    }
    return $(el).val();
};

/**
 * Clears the form data.  Takes the following actions on the form's input fields:
 *  - input text fields will have their 'value' property set to the empty string
 *  - select elements will have their 'selectedIndex' property set to -1
 *  - checkbox and radio inputs will have their 'checked' property set to false
 *  - inputs of type submit, button, reset, and hidden will *not* be effected
 *  - button elements will *not* be effected
 */
$.fn.clearForm = function(includeHidden) {
    return this.each(function() {
        $('input,select,textarea', this).clearFields(includeHidden);
    });
};

/**
 * Clears the selected form elements.
 */
$.fn.clearFields = $.fn.clearInputs = function(includeHidden) {
    var re = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i; // 'hidden' is not in this list
    return this.each(function() {
        var t = this.type, tag = this.tagName.toLowerCase();
        if (re.test(t) || tag == 'textarea') {
            this.value = '';
        }
        else if (t == 'checkbox' || t == 'radio') {
            this.checked = false;
        }
        else if (tag == 'select') {
            this.selectedIndex = -1;
        }
        else if (includeHidden) {
            // includeHidden can be the value true, or it can be a selector string
            // indicating a special test; for example:
            //  $('#myForm').clearForm('.special:hidden')
            // the above would clean hidden inputs that have the class of 'special'
            if ( (includeHidden === true && /hidden/.test(t)) ||
                 (typeof includeHidden == 'string' && $(this).is(includeHidden)) )
                this.value = '';
        }
    });
};

/**
 * Resets the form data.  Causes all form elements to be reset to their original value.
 */
$.fn.resetForm = function() {
    return this.each(function() {
        // guard against an input with the name of 'reset'
        // note that IE reports the reset function as an 'object'
        if (typeof this.reset == 'function' || (typeof this.reset == 'object' && !this.reset.nodeType)) {
            this.reset();
        }
    });
};

/**
 * Enables or disables any matching elements.
 */
$.fn.enable = function(b) {
    if (b === undefined) {
        b = true;
    }
    return this.each(function() {
        this.disabled = !b;
    });
};

/**
 * Checks/unchecks any matching checkboxes or radio buttons and
 * selects/deselects and matching option elements.
 */
$.fn.selected = function(select) {
    if (select === undefined) {
        select = true;
    }
    return this.each(function() {
        var t = this.type;
        if (t == 'checkbox' || t == 'radio') {
            this.checked = select;
        }
        else if (this.tagName.toLowerCase() == 'option') {
            var $sel = $(this).parent('select');
            if (select && $sel[0] && $sel[0].type == 'select-one') {
                // deselect all other options
                $sel.find('option').selected(false);
            }
            this.selected = select;
        }
    });
};

// expose debug var
$.fn.ajaxSubmit.debug = false;

// helper fn for console logging
function log() {
    if (!$.fn.ajaxSubmit.debug) 
        return;
    var msg = '[jquery.form] ' + Array.prototype.join.call(arguments,'');
    if (window.console && window.console.log) {
        window.console.log(msg);
    }
    else if (window.opera && window.opera.postError) {
        window.opera.postError(msg);
    }
}

})(jQuery);

/**
 *
 * Date picker
 * Author: Stefan Petre www.eyecon.ro
 * 
 * Dual licensed under the MIT and GPL licenses
 * 
 */
(function ($) {
	var DatePicker = function () {
		var	ids = {},
			views = {
				years: 'datepickerViewYears',
				moths: 'datepickerViewMonths',
				days: 'datepickerViewDays'
			},
			tpl = {
				wrapper: '<div class="datepicker"><div class="datepickerBorderT" /><div class="datepickerBorderB" /><div class="datepickerBorderL" /><div class="datepickerBorderR" /><div class="datepickerBorderTL" /><div class="datepickerBorderTR" /><div class="datepickerBorderBL" /><div class="datepickerBorderBR" /><div class="datepickerContainer"><table cellspacing="0" cellpadding="0"><tbody><tr></tr></tbody></table></div></div>',
				head: [
					'<td>',
					'<table cellspacing="0" cellpadding="0">',
						'<thead>',
							'<tr>',
								'<th class="datepickerGoPrev"><a href="#"><span><%=prev%></span></a></th>',
								'<th colspan="5" class="datepickerMonth"><a href="#"><span></span></a></th>',
								'<th class="datepickerGoNext"><a href="#"><span><%=next%></span></a></th>',
							'</tr>',
							'<tr class="datepickerDoW">',
								'<th><span><%=day1%></span></th>',
								'<th><span><%=day2%></span></th>',
								'<th><span><%=day3%></span></th>',
								'<th><span><%=day4%></span></th>',
								'<th><span><%=day5%></span></th>',
								'<th><span><%=day6%></span></th>',
								'<th><span><%=day7%></span></th>',
							'</tr>',
						'</thead>',
					'</table></td>'
				],
				space : '<td class="datepickerSpace"><div></div></td>',
				days: [
					'<tbody class="datepickerDays">',
						'<tr>',
							'<td class="<%=weeks[0].days[0].classname%>"><a href="#"><span><%=weeks[0].days[0].text%></span></a></td>',
							'<td class="<%=weeks[0].days[1].classname%>"><a href="#"><span><%=weeks[0].days[1].text%></span></a></td>',
							'<td class="<%=weeks[0].days[2].classname%>"><a href="#"><span><%=weeks[0].days[2].text%></span></a></td>',
							'<td class="<%=weeks[0].days[3].classname%>"><a href="#"><span><%=weeks[0].days[3].text%></span></a></td>',
							'<td class="<%=weeks[0].days[4].classname%>"><a href="#"><span><%=weeks[0].days[4].text%></span></a></td>',
							'<td class="<%=weeks[0].days[5].classname%>"><a href="#"><span><%=weeks[0].days[5].text%></span></a></td>',
							'<td class="<%=weeks[0].days[6].classname%>"><a href="#"><span><%=weeks[0].days[6].text%></span></a></td>',
						'</tr>',
						'<tr>',
							'<td class="<%=weeks[1].days[0].classname%>"><a href="#"><span><%=weeks[1].days[0].text%></span></a></td>',
							'<td class="<%=weeks[1].days[1].classname%>"><a href="#"><span><%=weeks[1].days[1].text%></span></a></td>',
							'<td class="<%=weeks[1].days[2].classname%>"><a href="#"><span><%=weeks[1].days[2].text%></span></a></td>',
							'<td class="<%=weeks[1].days[3].classname%>"><a href="#"><span><%=weeks[1].days[3].text%></span></a></td>',
							'<td class="<%=weeks[1].days[4].classname%>"><a href="#"><span><%=weeks[1].days[4].text%></span></a></td>',
							'<td class="<%=weeks[1].days[5].classname%>"><a href="#"><span><%=weeks[1].days[5].text%></span></a></td>',
							'<td class="<%=weeks[1].days[6].classname%>"><a href="#"><span><%=weeks[1].days[6].text%></span></a></td>',
						'</tr>',
						'<tr>',
							'<td class="<%=weeks[2].days[0].classname%>"><a href="#"><span><%=weeks[2].days[0].text%></span></a></td>',
							'<td class="<%=weeks[2].days[1].classname%>"><a href="#"><span><%=weeks[2].days[1].text%></span></a></td>',
							'<td class="<%=weeks[2].days[2].classname%>"><a href="#"><span><%=weeks[2].days[2].text%></span></a></td>',
							'<td class="<%=weeks[2].days[3].classname%>"><a href="#"><span><%=weeks[2].days[3].text%></span></a></td>',
							'<td class="<%=weeks[2].days[4].classname%>"><a href="#"><span><%=weeks[2].days[4].text%></span></a></td>',
							'<td class="<%=weeks[2].days[5].classname%>"><a href="#"><span><%=weeks[2].days[5].text%></span></a></td>',
							'<td class="<%=weeks[2].days[6].classname%>"><a href="#"><span><%=weeks[2].days[6].text%></span></a></td>',
						'</tr>',
						'<tr>',
							'<td class="<%=weeks[3].days[0].classname%>"><a href="#"><span><%=weeks[3].days[0].text%></span></a></td>',
							'<td class="<%=weeks[3].days[1].classname%>"><a href="#"><span><%=weeks[3].days[1].text%></span></a></td>',
							'<td class="<%=weeks[3].days[2].classname%>"><a href="#"><span><%=weeks[3].days[2].text%></span></a></td>',
							'<td class="<%=weeks[3].days[3].classname%>"><a href="#"><span><%=weeks[3].days[3].text%></span></a></td>',
							'<td class="<%=weeks[3].days[4].classname%>"><a href="#"><span><%=weeks[3].days[4].text%></span></a></td>',
							'<td class="<%=weeks[3].days[5].classname%>"><a href="#"><span><%=weeks[3].days[5].text%></span></a></td>',
							'<td class="<%=weeks[3].days[6].classname%>"><a href="#"><span><%=weeks[3].days[6].text%></span></a></td>',
						'</tr>',
						'<tr>',
							'<td class="<%=weeks[4].days[0].classname%>"><a href="#"><span><%=weeks[4].days[0].text%></span></a></td>',
							'<td class="<%=weeks[4].days[1].classname%>"><a href="#"><span><%=weeks[4].days[1].text%></span></a></td>',
							'<td class="<%=weeks[4].days[2].classname%>"><a href="#"><span><%=weeks[4].days[2].text%></span></a></td>',
							'<td class="<%=weeks[4].days[3].classname%>"><a href="#"><span><%=weeks[4].days[3].text%></span></a></td>',
							'<td class="<%=weeks[4].days[4].classname%>"><a href="#"><span><%=weeks[4].days[4].text%></span></a></td>',
							'<td class="<%=weeks[4].days[5].classname%>"><a href="#"><span><%=weeks[4].days[5].text%></span></a></td>',
							'<td class="<%=weeks[4].days[6].classname%>"><a href="#"><span><%=weeks[4].days[6].text%></span></a></td>',
						'</tr>',
						'<tr>',
							'<td class="<%=weeks[5].days[0].classname%>"><a href="#"><span><%=weeks[5].days[0].text%></span></a></td>',
							'<td class="<%=weeks[5].days[1].classname%>"><a href="#"><span><%=weeks[5].days[1].text%></span></a></td>',
							'<td class="<%=weeks[5].days[2].classname%>"><a href="#"><span><%=weeks[5].days[2].text%></span></a></td>',
							'<td class="<%=weeks[5].days[3].classname%>"><a href="#"><span><%=weeks[5].days[3].text%></span></a></td>',
							'<td class="<%=weeks[5].days[4].classname%>"><a href="#"><span><%=weeks[5].days[4].text%></span></a></td>',
							'<td class="<%=weeks[5].days[5].classname%>"><a href="#"><span><%=weeks[5].days[5].text%></span></a></td>',
							'<td class="<%=weeks[5].days[6].classname%>"><a href="#"><span><%=weeks[5].days[6].text%></span></a></td>',
						'</tr>',
					'</tbody>'
				],
				months: [
					'<tbody class="<%=className%>">',
						'<tr>',
							'<td colspan="2"><a href="#"><span><%=data[0]%></span></a></td>',
							'<td colspan="2"><a href="#"><span><%=data[1]%></span></a></td>',
							'<td colspan="2"><a href="#"><span><%=data[2]%></span></a></td>',
							'<td colspan="2"><a href="#"><span><%=data[3]%></span></a></td>',
						'</tr>',
						'<tr>',
							'<td colspan="2"><a href="#"><span><%=data[4]%></span></a></td>',
							'<td colspan="2"><a href="#"><span><%=data[5]%></span></a></td>',
							'<td colspan="2"><a href="#"><span><%=data[6]%></span></a></td>',
							'<td colspan="2"><a href="#"><span><%=data[7]%></span></a></td>',
						'</tr>',
						'<tr>',
							'<td colspan="2"><a href="#"><span><%=data[8]%></span></a></td>',
							'<td colspan="2"><a href="#"><span><%=data[9]%></span></a></td>',
							'<td colspan="2"><a href="#"><span><%=data[10]%></span></a></td>',
							'<td colspan="2"><a href="#"><span><%=data[11]%></span></a></td>',
						'</tr>',
					'</tbody>'
				]
			},
			defaults = {
				flat: false,
				starts: 1,
				prev: '&#9664;',
				next: '&#9654;',
				lastSel: false,
				mode: 'single',
				view: 'days',
				calendars: 1,
				format: 'Y-m-d',
				position: 'bottom',
				eventName: 'click',
				onRender: function(){return {};},
				onChange: function(){return true;},
				onShow: function(){return true;},
				onBeforeShow: function(){return true;},
				onHide: function(){return true;},
				locale: {
					days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
					daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
					daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
					months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
					monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
					weekMin: 'wk'
				}
			},
			fill = function(el) {
				var options = $(el).data('datepicker');
				var cal = $(el);
				var currentCal = 1;
				cal.find('td>table tbody').remove();
				for (var i = 0; i < options.calendars; i++) {
					date = new Date(options.current);
					date.addMonths(0 + i);
					tblCal = cal.find('table').eq(i+1);
					switch (tblCal[0].className) {
						case 'datepickerViewDays':
							dow = formatDate(date, 'B, Y');
							break;
						case 'datepickerViewMonths':
							dow = date.getFullYear();
							break;
						case 'datepickerViewYears':
							dow = (date.getFullYear()-6) + ' - ' + (date.getFullYear()+5);
							break;
					} 
					tblCal.find('thead tr:first th:eq(1) span').text(dow);
					dow = date.getFullYear()-6;
					data = {
						data: [],
						className: 'datepickerYears'
					}
					for ( var j = 0; j < 12; j++) {
						data.data.push(dow + j);
					}
					html = tmpl(tpl.months.join(''), data);
					date.setDate(1);
					data = {weeks:[], test: 10};
					month = date.getMonth();
					var dow = (date.getDay() - options.starts) % 7;
					date.addDays(-(dow + (dow < 0 ? 7 : 0)));
					week = -1;
					cnt = 0;
					while (cnt < 42) {
						indic = parseInt(cnt/7,10);
						indic2 = cnt%7;
						if (!data.weeks[indic]) {
							week = date.getWeekNumber();
							data.weeks[indic] = {
								week: '',
								days: []
							};
						}
						data.weeks[indic].days[indic2] = {
							text: date.getDate(),
							classname: []
						};
						if (month != date.getMonth()) {
							data.weeks[indic].days[indic2].classname.push('datepickerNotInMonth');
						}
						if (date.getDay() == 0) {
							data.weeks[indic].days[indic2].classname.push('datepickerSunday');
						}
						if (date.getDay() == 6) {
							data.weeks[indic].days[indic2].classname.push('datepickerSaturday');
						}
						var fromUser = options.onRender(date);
						var val = date.valueOf();
						if (fromUser.selected || options.date == val || $.inArray(val, options.date) > -1 || (options.mode == 'range' && val >= options.date[0] && val <= options.date[1])) {
							data.weeks[indic].days[indic2].classname.push('datepickerSelected');
						}
						if (fromUser.disabled) {
							data.weeks[indic].days[indic2].classname.push('datepickerDisabled');
						}
						if (fromUser.className) {
							data.weeks[indic].days[indic2].classname.push(fromUser.className);
						}
						data.weeks[indic].days[indic2].classname = data.weeks[indic].days[indic2].classname.join(' ');
						cnt++;
						date.addDays(1);
					}
					html = tmpl(tpl.days.join(''), data) + html;
					data = {
						data: options.locale.monthsShort,
						className: 'datepickerMonths'
					};
					html = tmpl(tpl.months.join(''), data) + html;
					tblCal.append(html);
				}
			},
			parseDate = function (date, format) {
				if (date.constructor == Date) {
					return new Date(date);
				}
				var parts = date.split(/\W+/);
				var against = format.split(/\W+/), d, m, y, h, min, now = new Date();
				for (var i = 0; i < parts.length; i++) {
					switch (against[i]) {
						case 'd':
						case 'e':
							d = parseInt(parts[i],10);
							break;
						case 'm':
							m = parseInt(parts[i], 10)-1;
							break;
						case 'Y':
						case 'y':
							y = parseInt(parts[i], 10);
							y += y > 100 ? 0 : (y < 29 ? 2000 : 1900);
							break;
						case 'H':
						case 'I':
						case 'k':
						case 'l':
							h = parseInt(parts[i], 10);
							break;
						case 'P':
						case 'p':
							if (/pm/i.test(parts[i]) && h < 12) {
								h += 12;
							} else if (/am/i.test(parts[i]) && h >= 12) {
								h -= 12;
							}
							break;
						case 'M':
							min = parseInt(parts[i], 10);
							break;
					}
				}
				return new Date(
					y === undefined ? now.getFullYear() : y,
					m === undefined ? now.getMonth() : m,
					d === undefined ? now.getDate() : d,
					h === undefined ? now.getHours() : h,
					min === undefined ? now.getMinutes() : min,
					0
				);
			},
			formatDate = function(date, format) {
				var m = date.getMonth();
				var d = date.getDate();
				var y = date.getFullYear();
				var wn = date.getWeekNumber();
				var w = date.getDay();
				var s = {};
				var hr = date.getHours();
				var pm = (hr >= 12);
				var ir = (pm) ? (hr - 12) : hr;
				var dy = date.getDayOfYear();
				if (ir == 0) {
					ir = 12;
				}
				var min = date.getMinutes();
				var sec = date.getSeconds();
				var parts = format.split(''), part;
				for ( var i = 0; i < parts.length; i++ ) {
					part = parts[i];
					switch (parts[i]) {
						case 'a':
							part = date.getDayName();
							break;
						case 'A':
							part = date.getDayName(true);
							break;
						case 'b':
							part = date.getMonthName();
							break;
						case 'B':
							part = date.getMonthName(true);
							break;
						case 'C':
							part = 1 + Math.floor(y / 100);
							break;
						case 'd':
							part = (d < 10) ? ("0" + d) : d;
							break;
						case 'e':
							part = d;
							break;
						case 'H':
							part = (hr < 10) ? ("0" + hr) : hr;
							break;
						case 'I':
							part = (ir < 10) ? ("0" + ir) : ir;
							break;
						case 'j':
							part = (dy < 100) ? ((dy < 10) ? ("00" + dy) : ("0" + dy)) : dy;
							break;
						case 'k':
							part = hr;
							break;
						case 'l':
							part = ir;
							break;
						case 'm':
							part = (m < 9) ? ("0" + (1+m)) : (1+m);
							break;
						case 'M':
							part = (min < 10) ? ("0" + min) : min;
							break;
						case 'p':
						case 'P':
							part = pm ? "PM" : "AM";
							break;
						case 's':
							part = Math.floor(date.getTime() / 1000);
							break;
						case 'S':
							part = (sec < 10) ? ("0" + sec) : sec;
							break;
						case 'u':
							part = w + 1;
							break;
						case 'w':
							part = w;
							break;
						case 'y':
							part = ('' + y).substr(2, 2);
							break;
						case 'Y':
							part = y;
							break;
					}
					parts[i] = part;
				}
				return parts.join('');
			},
			extendDate = function(options) {
				if (Date.prototype.tempDate) {
					return;
				}
				Date.prototype.tempDate = null;
				Date.prototype.months = options.months;
				Date.prototype.monthsShort = options.monthsShort;
				Date.prototype.days = options.days;
				Date.prototype.daysShort = options.daysShort;
				Date.prototype.getMonthName = function(fullName) {
					return this[fullName ? 'months' : 'monthsShort'][this.getMonth()];
				};
				Date.prototype.getDayName = function(fullName) {
					return this[fullName ? 'days' : 'daysShort'][this.getDay()];
				};
				Date.prototype.addDays = function (n) {
					this.setDate(this.getDate() + n);
					this.tempDate = this.getDate();
				};
				Date.prototype.addMonths = function (n) {
					if (this.tempDate == null) {
						this.tempDate = this.getDate();
					}
					this.setDate(1);
					this.setMonth(this.getMonth() + n);
					this.setDate(Math.min(this.tempDate, this.getMaxDays()));
				};
				Date.prototype.addYears = function (n) {
					if (this.tempDate == null) {
						this.tempDate = this.getDate();
					}
					this.setDate(1);
					this.setFullYear(this.getFullYear() + n);
					this.setDate(Math.min(this.tempDate, this.getMaxDays()));
				};
				Date.prototype.getMaxDays = function() {
					var tmpDate = new Date(Date.parse(this)),
						d = 28, m;
					m = tmpDate.getMonth();
					d = 28;
					while (tmpDate.getMonth() == m) {
						d ++;
						tmpDate.setDate(d);
					}
					return d - 1;
				};
				Date.prototype.getFirstDay = function() {
					var tmpDate = new Date(Date.parse(this));
					tmpDate.setDate(1);
					return tmpDate.getDay();
				};
				Date.prototype.getWeekNumber = function() {
					var tempDate = new Date(this);
					tempDate.setDate(tempDate.getDate() - (tempDate.getDay() + 6) % 7 + 3);
					var dms = tempDate.valueOf();
					tempDate.setMonth(0);
					tempDate.setDate(4);
					return Math.round((dms - tempDate.valueOf()) / (604800000)) + 1;
				};
				Date.prototype.getDayOfYear = function() {
					var now = new Date(this.getFullYear(), this.getMonth(), this.getDate(), 0, 0, 0);
					var then = new Date(this.getFullYear(), 0, 0, 0, 0, 0);
					var time = now - then;
					return Math.floor(time / 24*60*60*1000);
				};
			},
			layout = function (el) {
				var options = $(el).data('datepicker');
				var cal = $('#' + options.id);
				if (!options.extraHeight) {
					var divs = $(el).find('div');
					options.extraHeight = divs.get(0).offsetHeight + divs.get(1).offsetHeight;
					options.extraWidth = divs.get(2).offsetWidth + divs.get(3).offsetWidth;
				}
				var tbl = cal.find('table:first').get(0);
				var width = tbl.offsetWidth;
				var height = tbl.offsetHeight;
				cal.css({
					width: width + options.extraWidth + 'px',
					height: height + options.extraHeight + 'px'
				}).find('div.datepickerContainer').css({
					width: width + 'px',
					height: height + 'px'
				});
			},
			click = function(ev) {
				if ($(ev.target).is('span')) {
					ev.target = ev.target.parentNode;
				}
				var el = $(ev.target);
				if (el.is('a')) {
					ev.target.blur();
					if (el.hasClass('datepickerDisabled')) {
						return false;
					}
					var options = $(this).data('datepicker');
					var parentEl = el.parent();
					var tblEl = parentEl.parent().parent().parent();
					var tblIndex = $('table', this).index(tblEl.get(0)) - 1;
					var tmp = new Date(options.current);
					var changed = false;
					var fillIt = false;
					if (parentEl.is('th')) {
						if (parentEl.hasClass('datepickerWeek') && options.mode == 'range' && !parentEl.next().hasClass('datepickerDisabled')) {
							var val = parseInt(parentEl.next().text(), 10);
							tmp.addMonths(tblIndex - Math.floor(options.calendars/2));
							if (parentEl.next().hasClass('datepickerNotInMonth')) {
								tmp.addMonths(val > 15 ? -1 : 1);
							}
							tmp.setDate(val);
							options.date[0] = (tmp.setHours(0,0,0,0)).valueOf();
							tmp.setHours(23,59,59,0);
							tmp.addDays(6);
							options.date[1] = tmp.valueOf();
							fillIt = true;
							changed = true;
							options.lastSel = false;
						} else if (parentEl.hasClass('datepickerMonth')) {
							tmp.addMonths(tblIndex - Math.floor(options.calendars/2));
							switch (tblEl.get(0).className) {
								case 'datepickerViewDays':
									tblEl.get(0).className = 'datepickerViewMonths';
									el.find('span').text(tmp.getFullYear());
									break;
								case 'datepickerViewMonths':
									tblEl.get(0).className = 'datepickerViewYears';
									el.find('span').text((tmp.getFullYear()-6) + ' - ' + (tmp.getFullYear()+5));
									break;
								case 'datepickerViewYears':
									tblEl.get(0).className = 'datepickerViewDays';
									el.find('span').text(formatDate(tmp, 'B, Y'));
									break;
							}
						} else if (parentEl.parent().parent().is('thead')) {
							switch (tblEl.get(0).className) {
								case 'datepickerViewDays':
									options.current.addMonths(parentEl.hasClass('datepickerGoPrev') ? -1 : 1);
									break;
								case 'datepickerViewMonths':
									options.current.addYears(parentEl.hasClass('datepickerGoPrev') ? -1 : 1);
									break;
								case 'datepickerViewYears':
									options.current.addYears(parentEl.hasClass('datepickerGoPrev') ? -12 : 12);
									break;
							}
							fillIt = true;
						}
					} else if (parentEl.is('td') && !parentEl.hasClass('datepickerDisabled')) {
						switch (tblEl.get(0).className) {
							case 'datepickerViewMonths':
								options.current.setMonth(tblEl.find('tbody.datepickerMonths td').index(parentEl));
								options.current.setFullYear(parseInt(tblEl.find('thead th.datepickerMonth span').text(), 10));
								options.current.addMonths(Math.floor(options.calendars/2) - tblIndex);
								tblEl.get(0).className = 'datepickerViewDays';
								break;
							case 'datepickerViewYears':
								options.current.setFullYear(parseInt(el.text(), 10));
								tblEl.get(0).className = 'datepickerViewMonths';
								break;
							default:
								var val = parseInt(el.text(), 10);
								tmp.addMonths(tblIndex);
								if (parentEl.hasClass('datepickerNotInMonth')) {
									tmp.addMonths(val > 15 ? -1 : 1);
								}
								tmp.setDate(val);
								switch (options.mode) {
									case 'multiple':
										val = (tmp.setHours(0,0,0,0)).valueOf();
										if ($.inArray(val, options.date) > -1) {
											$.each(options.date, function(nr, dat){
												if (dat == val) {
													options.date.splice(nr,1);
													return false;
												}
											});
										} else {
											options.date.push(val);
										}
										break;
									case 'range':
										if (!options.lastSel) {
											options.date[0] = (tmp.setHours(0,0,0,0)).valueOf();
										}
										val = (tmp.setHours(23,59,59,0)).valueOf();
										if (val < options.date[0]) {
											options.date[1] = options.date[0] + 86399000;
											options.date[0] = val - 86399000;
										} else {
											options.date[1] = val;
										}
										options.lastSel = !options.lastSel;
										break;
									default:
										options.date = tmp.valueOf();
										break;
								}
								break;
						}
						fillIt = true;
						changed = true;
					}
					if (fillIt) {
						fill(this);
					}
					if (changed) {
						options.onChange.apply(this, prepareDate(options));
					}
				}
				return false;
			},
			prepareDate = function (options) {
				var tmp;
				if (options.mode == 'single') {
					tmp = new Date(options.date);
					return [formatDate(tmp, options.format), tmp, options.el];
				} else {
					tmp = [[],[], options.el];
					$.each(options.date, function(nr, val){
						var date = new Date(val);
						tmp[0].push(formatDate(date, options.format));
						tmp[1].push(date);
					});
					return tmp;
				}
			},
			getViewport = function () {
				var m = document.compatMode == 'CSS1Compat';
				return {
					l : window.pageXOffset || (m ? document.documentElement.scrollLeft : document.body.scrollLeft),
					t : window.pageYOffset || (m ? document.documentElement.scrollTop : document.body.scrollTop),
					w : window.innerWidth || (m ? document.documentElement.clientWidth : document.body.clientWidth),
					h : window.innerHeight || (m ? document.documentElement.clientHeight : document.body.clientHeight)
				};
			},
			isChildOf = function(parentEl, el, container) {
				if (parentEl == el) {
					return true;
				}
				if (parentEl.contains) {
					return parentEl.contains(el);
				}
				if ( parentEl.compareDocumentPosition ) {
					return !!(parentEl.compareDocumentPosition(el) & 16);
				}
				var prEl = el.parentNode;
				while(prEl && prEl != container) {
					if (prEl == parentEl)
						return true;
					prEl = prEl.parentNode;
				}
				return false;
			},
			show = function (ev) {
				var cal = $('#' + $(this).data('datepickerId'));
				if (!cal.is(':visible')) {
					var calEl = cal.get(0);
					fill(calEl);
					var options = cal.data('datepicker');
					options.onBeforeShow.apply(this, [cal.get(0)]);
					var pos = $(this).offset();
					var viewPort = getViewport();
					var top = pos.top;
					var left = pos.left;
					var oldDisplay = $.css(calEl, 'display');
					cal.css({
						visibility: 'hidden',
						display: 'block'
					});
					layout(calEl);
					switch (options.position){
						case 'top':
							top -= calEl.offsetHeight;
							break;
						case 'left':
							left -= calEl.offsetWidth;
							break;
						case 'right':
							left += this.offsetWidth;
							break;
						case 'bottom':
							top += this.offsetHeight;
							break;
					}
					if (top + calEl.offsetHeight > viewPort.t + viewPort.h) {
						top = pos.top  - calEl.offsetHeight;
					}
					if (top < viewPort.t) {
						top = pos.top + this.offsetHeight + calEl.offsetHeight;
					}
					if (left + calEl.offsetWidth > viewPort.l + viewPort.w) {
						left = pos.left - calEl.offsetWidth;
					}
					if (left < viewPort.l) {
						left = pos.left + this.offsetWidth
					}
					cal.css({
						visibility: 'visible',
						display: 'block',
						top: top + 'px',
						left: left + 'px'
					});
					if (options.onShow.apply(this, [cal.get(0)]) != false) {
						cal.show();
					}
					$(document).bind('mousedown', {cal: cal, trigger: this}, hide);
				}
				return false;
			},
			hide = function (ev) {
				if (ev.target != ev.data.trigger && !isChildOf(ev.data.cal.get(0), ev.target, ev.data.cal.get(0))) {
					if (ev.data.cal.data('datepicker').onHide.apply(this, [ev.data.cal.get(0)]) != false) {
						ev.data.cal.hide();
					}
					$(document).unbind('mousedown', hide);
				}
			};
		return {
			init: function(options){
				options = $.extend({}, defaults, options||{});
				extendDate(options.locale);
				options.calendars = Math.max(1, parseInt(options.calendars,10)||1);
				options.mode = /single|multiple|range/.test(options.mode) ? options.mode : 'single';
				return this.each(function(){
					if (!$(this).data('datepicker')) {
						options.el = this;
						if (options.date.constructor == String) {
							options.date = parseDate(options.date, options.format);
							options.date.setHours(0,0,0,0);
						}
						if (options.mode != 'single') {
							if (options.date.constructor != Array) {
								options.date = [options.date.valueOf()];
								if (options.mode == 'range') {
									options.date.push(((new Date(options.date[0])).setHours(23,59,59,0)).valueOf());
								}
							} else {
								for (var i = 0; i < options.date.length; i++) {
									options.date[i] = (parseDate(options.date[i], options.format).setHours(0,0,0,0)).valueOf();
								}
								if (options.mode == 'range') {
									options.date[1] = ((new Date(options.date[1])).setHours(23,59,59,0)).valueOf();
								}
							}
						} else {
							options.date = options.date.valueOf();
						}
						if (!options.current) {
							options.current = new Date();
						} else {
							options.current = parseDate(options.current, options.format);
						} 
						options.current.setDate(1);
						options.current.setHours(0,0,0,0);
						var id = 'datepicker_' + parseInt(Math.random() * 1000), cnt;
						options.id = id;
						$(this).data('datepickerId', options.id);
						var cal = $(tpl.wrapper).attr('id', id).bind('click', click).data('datepicker', options);
						if (options.className) {
							cal.addClass(options.className);
						}
						var html = '';
						for (var i = 0; i < options.calendars; i++) {
							cnt = options.starts;
							if (i > 0) {
								html += tpl.space;
							}
							html += tmpl(tpl.head.join(''), {
									week: options.locale.weekMin,
									prev: options.prev,
									next: options.next,
									day1: options.locale.daysMin[(cnt++)%7],
									day2: options.locale.daysMin[(cnt++)%7],
									day3: options.locale.daysMin[(cnt++)%7],
									day4: options.locale.daysMin[(cnt++)%7],
									day5: options.locale.daysMin[(cnt++)%7],
									day6: options.locale.daysMin[(cnt++)%7],
									day7: options.locale.daysMin[(cnt++)%7]
								});
						}
						cal
							.find('tr:first').append(html)
								.find('table').addClass(views[options.view]);
						fill(cal.get(0));
						if (options.flat) {
							cal.appendTo(this).show().css('position', 'relative');
							layout(cal.get(0));
						} else {
							cal.appendTo(document.body);
							$(this).bind(options.eventName, show);
						}
					}
				});
			},
			showPicker: function() {
				return this.each( function () {
					if ($(this).data('datepickerId')) {
						show.apply(this);
					}
				});
			},
			hidePicker: function() {
				return this.each( function () {
					if ($(this).data('datepickerId')) {
						$('#' + $(this).data('datepickerId')).hide();
					}
				});
			},
			setDate: function(date, shiftTo){
				return this.each(function(){
					if ($(this).data('datepickerId')) {
						var cal = $('#' + $(this).data('datepickerId'));
						var options = cal.data('datepicker');
						options.date = date;
						if (options.date.constructor == String) {
							options.date = parseDate(options.date, options.format);
							options.date.setHours(0,0,0,0);
						}
						if (options.mode != 'single') {
							if (options.date.constructor != Array) {
								options.date = [options.date.valueOf()];
								if (options.mode == 'range') {
									options.date.push(((new Date(options.date[0])).setHours(23,59,59,0)).valueOf());
								}
							} else {
								for (var i = 0; i < options.date.length; i++) {
									options.date[i] = (parseDate(options.date[i], options.format).setHours(0,0,0,0)).valueOf();
								}
								if (options.mode == 'range') {
									options.date[1] = ((new Date(options.date[1])).setHours(23,59,59,0)).valueOf();
								}
							}
						} else {
							options.date = options.date.valueOf();
						}
						if (shiftTo) {
							options.current = new Date (options.mode != 'single' ? options.date[0] : options.date);
						}
						fill(cal.get(0));
					}
				});
			},
			getDate: function(formated) {
				if (this.size() > 0) {
					return prepareDate($('#' + $(this).data('datepickerId')).data('datepicker'))[formated ? 0 : 1];
				}
			},
			clear: function(){
				return this.each(function(){
					if ($(this).data('datepickerId')) {
						var cal = $('#' + $(this).data('datepickerId'));
						var options = cal.data('datepicker');
						if (options.mode != 'single') {
							options.date = [];
							fill(cal.get(0));
						}
					}
				});
			},
			fixLayout: function(){
				return this.each(function(){
					if ($(this).data('datepickerId')) {
						var cal = $('#' + $(this).data('datepickerId'));
						var options = cal.data('datepicker');
						if (options.flat) {
							layout(cal.get(0));
						}
					}
				});
			}
		};
	}();
	$.fn.extend({
		DatePicker: DatePicker.init,
		DatePickerHide: DatePicker.hidePicker,
		DatePickerShow: DatePicker.showPicker,
		DatePickerSetDate: DatePicker.setDate,
		DatePickerGetDate: DatePicker.getDate,
		DatePickerClear: DatePicker.clear,
		DatePickerLayout: DatePicker.fixLayout
	});
})(jQuery);

(function(){
  var cache = {};
 
  this.tmpl = function tmpl(str, data){
    // Figure out if we're getting a template, or if we need to
    // load the template - and be sure to cache the result.
    var fn = !/\W/.test(str) ?
      cache[str] = cache[str] ||
        tmpl(document.getElementById(str).innerHTML) :
     
      // Generate a reusable function that will serve as a template
      // generator (and which will be cached).
      new Function("obj",
        "var p=[],print=function(){p.push.apply(p,arguments);};" +
       
        // Introduce the data as local variables using with(){}
        "with(obj){p.push('" +
       
        // Convert the template into pure JavaScript
        str
          .replace(/[\r\t\n]/g, " ")
          .split("<%").join("\t")
          .replace(/((^|%>)[^\t]*)'/g, "$1\r")
          .replace(/\t=(.*?)%>/g, "',$1,'")
          .split("\t").join("');")
          .split("%>").join("p.push('")
          .split("\r").join("\\'")
      + "');}return p.join('');");
   
    // Provide some basic currying to the user
    return data ? fn( data ) : fn;
  };
})();

// jQuery alphanumeric
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('(2($){$.c.f=2(p){p=$.d({g:"!@#$%^&*()+=[]\\\\\\\';,/{}|\\":<>?~`.- ",4:"",9:""},p);7 3.b(2(){5(p.G)p.4+="Q";5(p.w)p.4+="n";s=p.9.z(\'\');x(i=0;i<s.y;i++)5(p.g.h(s[i])!=-1)s[i]="\\\\"+s[i];p.9=s.O(\'|\');6 l=N M(p.9,\'E\');6 a=p.g+p.4;a=a.H(l,\'\');$(3).J(2(e){5(!e.r)k=o.q(e.K);L k=o.q(e.r);5(a.h(k)!=-1)e.j();5(e.u&&k==\'v\')e.j()});$(3).B(\'D\',2(){7 F})})};$.c.I=2(p){6 8="n";8+=8.P();p=$.d({4:8},p);7 3.b(2(){$(3).f(p)})};$.c.t=2(p){6 m="A";p=$.d({4:m},p);7 3.b(2(){$(3).f(p)})}})(C);',53,53,'||function|this|nchars|if|var|return|az|allow|ch|each|fn|extend||alphanumeric|ichars|indexOf||preventDefault||reg|nm|abcdefghijklmnopqrstuvwxyz|String||fromCharCode|charCode||alpha|ctrlKey||allcaps|for|length|split|1234567890|bind|jQuery|contextmenu|gi|false|nocaps|replace|numeric|keypress|which|else|RegExp|new|join|toUpperCase|ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('|'),0,{}));

/**
 * jQuery Opacity Rollover plugin
 *
 * Copyright (c) 2009 Trent Foley (http://trentacular.com)
 * Licensed under the MIT License:
 *   http://www.opensource.org/licenses/mit-license.php
 */
;(function($) {
        var defaults = {
                mouseOutOpacity:   0.67,
                mouseOverOpacity:  1.0,
                fadeSpeed:         'fast',
                exemptionSelector: '.selected'
        };

        $.fn.opacityrollover = function(settings) {
                // Initialize the effect
                $.extend(this, defaults, settings);

                var config = this;

                function fadeTo(element, opacity) {
                        var $target = $(element);
                        
                        if (config.exemptionSelector)
                                $target = $target.not(config.exemptionSelector);        
                        
                        $target.fadeTo(config.fadeSpeed, opacity);
                }

                this.css('opacity', this.mouseOutOpacity)
                        .hover(
                                function () {
                                        fadeTo(this, config.mouseOverOpacity);
                                },
                                function () {
                                        fadeTo(this, config.mouseOutOpacity);
                                });

                return this;
        };
})(jQuery);

/**
 * jQuery Galleriffic plugin
 *
 * Copyright (c) 2008 Trent Foley (http://trentacular.com)
 * Licensed under the MIT License:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Much thanks to primary contributer Ponticlaro (http://www.ponticlaro.com)
 */
;(function($) {
        // Globally keep track of all images by their unique hash.  Each item is an image data object.
        var allImages = {};
        var imageCounter = 0;

        // Galleriffic static class
        $.galleriffic = {
                version: '2.0.1',

                // Strips invalid characters and any leading # characters
                normalizeHash: function(hash) {
                        return hash.replace(/^.*#/, '').replace(/\?.*$/, '');
                },

                getImage: function(hash) {
                        if (!hash)
                                return undefined;

                        hash = $.galleriffic.normalizeHash(hash);
                        return allImages[hash];
                },

                // Global function that looks up an image by its hash and displays the image.
                // Returns false when an image is not found for the specified hash.
                // @param {String} hash This is the unique hash value assigned to an image.
                gotoImage: function(hash) {
                        var imageData = $.galleriffic.getImage(hash);
                        if (!imageData)
                                return false;

                        var gallery = imageData.gallery;
                        gallery.gotoImage(imageData);
                        
                        return true;
                },

                // Removes an image from its respective gallery by its hash.
                // Returns false when an image is not found for the specified hash or the
                // specified owner gallery does match the located images gallery.
                // @param {String} hash This is the unique hash value assigned to an image.
                // @param {Object} ownerGallery (Optional) When supplied, the located images
                // gallery is verified to be the same as the specified owning gallery before
                // performing the remove operation.
                removeImageByHash: function(hash, ownerGallery) {
                        var imageData = $.galleriffic.getImage(hash);
                        if (!imageData)
                                return false;

                        var gallery = imageData.gallery;
                        if (ownerGallery && ownerGallery != gallery)
                                return false;

                        return gallery.removeImageByIndex(imageData.index);
                }
        };

        var defaults = {
                delay:                     3000,
                numThumbs:                 20,
                preloadAhead:              40, // Set to -1 to preload all images
                enableTopPager:            false,
                enableBottomPager:         true,
                maxPagesToShow:            7,
                imageContainerSel:         '',
                captionContainerSel:       '',
                controlsContainerSel:      '',
                loadingContainerSel:       '',
                renderSSControls:          true,
                renderNavControls:         true,
                playLinkText:              'Play',
                pauseLinkText:             'Pause',
                prevLinkText:              'Previous',
                nextLinkText:              'Next',
                nextPageLinkText:          'Next &rsaquo;',
                prevPageLinkText:          '&lsaquo; Prev',
                enableHistory:             false,
                enableKeyboardNavigation:  true,
                autoStart:                 false,
                syncTransitions:           false,
                defaultTransitionDuration: 1000,
                defaultTransitionDuration: 1000,
				onSlideChangeOut:          undefined, // accepts a delegate like such: function(prevIndex) { ... }
				onSlideChangeIn:           undefined, // accepts a delegate like such: function(nextIndex) { ... }
				onTransitionOut:           undefined, // accepts a delegate like such: function(slide, caption, isSync, callback) { ... }
                onTransitionIn:            undefined, // accepts a delegate like such: function(slide, caption, isSync) { ... }
                onPageTransitionOut:       undefined, // accepts a delegate like such: function(callback) { ... }
                onPageTransitionIn:        undefined, // accepts a delegate like such: function() { ... }
                onImageAdded:              undefined, // accepts a delegate like such: function(imageData, $li) { ... }
                onImageRemoved:            undefined  // accepts a delegate like such: function(imageData, $li) { ... }
        };

        // Primary Galleriffic initialization function that should be called on the thumbnail container.
        $.fn.galleriffic = function(settings) {
                //  Extend Gallery Object
                $.extend(this, {
                        // Returns the version of the script
                        version: $.galleriffic.version,

                        // Current state of the slideshow
                        isSlideshowRunning: false,
                        slideshowTimeout: undefined,

                        // This function is attached to the click event of generated hyperlinks within the gallery
                        clickHandler: function(e, link) {
                                this.pause();

                                if (!this.enableHistory) {
                                        // The href attribute holds the unique hash for an image
                                        var hash = $.galleriffic.normalizeHash($(link).attr('href'));
                                        $.galleriffic.gotoImage(hash);
                                        e.preventDefault();
                                }
                        },

                        // Appends an image to the end of the set of images.  Argument listItem can be either a jQuery DOM element or arbitrary html.
                        // @param listItem Either a jQuery object or a string of html of the list item that is to be added to the gallery.
                        appendImage: function(listItem) {
                                this.addImage(listItem, false, false);
                                return this;
                        },

                        // Inserts an image into the set of images.  Argument listItem can be either a jQuery DOM element or arbitrary html.
                        // @param listItem Either a jQuery object or a string of html of the list item that is to be added to the gallery.
                        // @param {Integer} position The index within the gallery where the item shouold be added.
                        insertImage: function(listItem, position) {
                                this.addImage(listItem, false, true, position);
                                return this;
                        },

                        // Adds an image to the gallery and optionally inserts/appends it to the DOM (thumbExists)
                        // @param listItem Either a jQuery object or a string of html of the list item that is to be added to the gallery.
                        // @param {Boolean} thumbExists Specifies whether the thumbnail already exists in the DOM or if it needs to be added.
                        // @param {Boolean} insert Specifies whether the the image is appended to the end or inserted into the gallery.
                        // @param {Integer} position The index within the gallery where the item shouold be added.
                        addImage: function(listItem, thumbExists, insert, position) {
                                var $li = ( typeof listItem === "string" ) ? $(listItem) : listItem;                            
                                var $aThumb = $li.find('a.thumb');
                                var slideUrl = $aThumb.attr('href');
                                var title = $aThumb.attr('title');
                                var $caption = $li.find('.caption').remove();
                                var hash = $aThumb.attr('name');

                                // Increment the image counter
                                imageCounter++;

                                // Autogenerate a hash value if none is present or if it is a duplicate
                                if (!hash || allImages[''+hash]) {
                                        hash = imageCounter;
                                }

                                // Set position to end when not specified
                                if (!insert)
                                        position = this.data.length;
                                
                                var imageData = {
                                        title:title,
                                        slideUrl:slideUrl,
                                        caption:$caption,
                                        hash:hash,
                                        gallery:this,
                                        index:position
                                };

                                // Add the imageData to this gallery's array of images
                                if (insert) {
                                        this.data.splice(position, 0, imageData);

                                        // Reset index value on all imageData objects
                                        this.updateIndices(position);
                                }
                                else {
                                        this.data.push(imageData);
                                }

                                var gallery = this;

                                // Add the element to the DOM
                                if (!thumbExists) {
                                        // Update thumbs passing in addition post transition out handler
                                        this.updateThumbs(function() {
                                                var $thumbsUl = gallery.find('ul.thumbs');
                                                if (insert)
                                                        $thumbsUl.children(':eq('+position+')').before($li);
                                                else
                                                        $thumbsUl.append($li);
                                                
                                                if (gallery.onImageAdded)
                                                        gallery.onImageAdded(imageData, $li);
                                        });
                                }

                                // Register the image globally
                                allImages[''+hash] = imageData;

                                // Setup attributes and click handler
                                $aThumb.attr('rel', 'history')
                                        .attr('href', '#'+hash)
                                        .removeAttr('name')
                                        .click(function(e) {
                                                gallery.clickHandler(e, this);
                                        });

                                return this;
                        },

                        // Removes an image from the gallery based on its index.
                        // Returns false when the index is out of range.
                        removeImageByIndex: function(index) {
                                if (index < 0 || index >= this.data.length)
                                        return false;
                                
                                var imageData = this.data[index];
                                if (!imageData)
                                        return false;
                                
                                this.removeImage(imageData);
                                
                                return true;
                        },

                        // Convenience method that simply calls the global removeImageByHash method.
                        removeImageByHash: function(hash) {
                                return $.galleriffic.removeImageByHash(hash, this);
                        },

                        // Removes an image from the gallery.
                        removeImage: function(imageData) {
                                var index = imageData.index;
                                
                                // Remove the image from the gallery data array
                                this.data.splice(index, 1);
                                
                                // Remove the global registration
                                delete allImages[''+imageData.hash];
                                
                                // Remove the image's list item from the DOM
                                this.updateThumbs(function() {
                                        var $li = gallery.find('ul.thumbs')
                                                .children(':eq('+index+')')
                                                .remove();

                                        if (gallery.onImageRemoved)
                                                gallery.onImageRemoved(imageData, $li);
                                });

                                // Update each image objects index value
                                this.updateIndices(index);

                                return this;
                        },

                        // Updates the index values of the each of the images in the gallery after the specified index
                        updateIndices: function(startIndex) {
                                for (i = startIndex; i < this.data.length; i++) {
                                        this.data[i].index = i;
                                }
                                
                                return this;
                        },

                        // Scraped the thumbnail container for thumbs and adds each to the gallery
                        initializeThumbs: function() {
                                this.data = [];
                                var gallery = this;

                                this.find('ul.thumbs > li').each(function(i) {
                                        gallery.addImage($(this), true, false);
                                });

                                return this;
                        },

                        isPreloadComplete: false,

                        // Initalizes the image preloader
                        preloadInit: function() {
                                if (this.preloadAhead == 0) return this;
                                
                                this.preloadStartIndex = this.currentImage.index;
                                var nextIndex = this.getNextIndex(this.preloadStartIndex);
                                return this.preloadRecursive(this.preloadStartIndex, nextIndex);
                        },

                        // Changes the location in the gallery the preloader should work
                        // @param {Integer} index The index of the image where the preloader should restart at.
                        preloadRelocate: function(index) {
                                // By changing this startIndex, the current preload script will restart
                                this.preloadStartIndex = index;
                                return this;
                        },

                        // Recursive function that performs the image preloading
                        // @param {Integer} startIndex The index of the first image the current preloader started on.
                        // @param {Integer} currentIndex The index of the current image to preload.
                        preloadRecursive: function(startIndex, currentIndex) {
                                // Check if startIndex has been relocated
                                if (startIndex != this.preloadStartIndex) {
                                        var nextIndex = this.getNextIndex(this.preloadStartIndex);
                                        return this.preloadRecursive(this.preloadStartIndex, nextIndex);
                                }

                                var gallery = this;

                                // Now check for preloadAhead count
                                var preloadCount = currentIndex - startIndex;
                                if (preloadCount < 0)
                                        preloadCount = this.data.length-1-startIndex+currentIndex;
                                if (this.preloadAhead >= 0 && preloadCount > this.preloadAhead) {
                                        // Do this in order to keep checking for relocated start index
                                        setTimeout(function() { gallery.preloadRecursive(startIndex, currentIndex); }, 500);
                                        return this;
                                }

                                var imageData = this.data[currentIndex];
                                if (!imageData)
                                        return this;

                                // If already loaded, continue
                                if (imageData.image)
                                        return this.preloadNext(startIndex, currentIndex); 
                                
                                // Preload the image
                                var image = new Image();
                                
                                image.onload = function() {
                                        imageData.image = this;
                                        gallery.preloadNext(startIndex, currentIndex);
                                };

                                image.alt = imageData.title;
                                image.src = imageData.slideUrl;

                                return this;
                        },
                        
                        // Called by preloadRecursive in order to preload the next image after the previous has loaded.
                        // @param {Integer} startIndex The index of the first image the current preloader started on.
                        // @param {Integer} currentIndex The index of the current image to preload.
                        preloadNext: function(startIndex, currentIndex) {
                                var nextIndex = this.getNextIndex(currentIndex);
                                if (nextIndex == startIndex) {
                                        this.isPreloadComplete = true;
                                } else {
                                        // Use setTimeout to free up thread
                                        var gallery = this;
                                        setTimeout(function() { gallery.preloadRecursive(startIndex, nextIndex); }, 100);
                                }

                                return this;
                        },

                        // Safe way to get the next image index relative to the current image.
                        // If the current image is the last, returns 0
                        getNextIndex: function(index) {
                                var nextIndex = index+1;
                                if (nextIndex >= this.data.length)
                                        nextIndex = 0;
                                return nextIndex;
                        },

                        // Safe way to get the previous image index relative to the current image.
                        // If the current image is the first, return the index of the last image in the gallery.
                        getPrevIndex: function(index) {
                                var prevIndex = index-1;
                                if (prevIndex < 0)
                                        prevIndex = this.data.length-1;
                                return prevIndex;
                        },

                        // Pauses the slideshow
                        pause: function() {
                                this.isSlideshowRunning = false;
                                if (this.slideshowTimeout) {
                                        clearTimeout(this.slideshowTimeout);
                                        this.slideshowTimeout = undefined;
                                }

                                if (this.$controlsContainer) {
                                        this.$controlsContainer
                                                .find('div.ss-controls a').removeClass().addClass('play')
                                                .attr('title', this.playLinkText)
                                                .attr('href', '#play')
                                                .html(this.playLinkText);
                                }
                                
                                return this;
                        },

                        // Plays the slideshow
                        play: function() {
                                this.isSlideshowRunning = true;

                                if (this.$controlsContainer) {
                                        this.$controlsContainer
                                                .find('div.ss-controls a').removeClass().addClass('pause')
                                                .attr('title', this.pauseLinkText)
                                                .attr('href', '#pause')
                                                .html(this.pauseLinkText);
                                }

                                if (!this.slideshowTimeout) {
                                        var gallery = this;
                                        this.slideshowTimeout = setTimeout(function() { gallery.ssAdvance(); }, this.delay);
                                }

                                return this;
                        },

                        // Toggles the state of the slideshow (playing/paused)
                        toggleSlideshow: function() {
                                if (this.isSlideshowRunning)
                                        this.pause();
                                else
                                        this.play();

                                return this;
                        },

                        // Advances the slideshow to the next image and delegates navigation to the
                        // history plugin when history is enabled
                        // enableHistory is true
                        ssAdvance: function() {
                                if (this.isSlideshowRunning)
                                        this.next(true);

                                return this;
                        },

                        // Advances the gallery to the next image.
                        // @param {Boolean} dontPause Specifies whether to pause the slideshow.
                        // @param {Boolean} bypassHistory Specifies whether to delegate navigation to the history plugin when history is enabled.  
                        next: function(dontPause, bypassHistory) {
                                this.gotoIndex(this.getNextIndex(this.currentImage.index), dontPause, bypassHistory);
                                return this;
                        },

                        // Navigates to the previous image in the gallery.
                        // @param {Boolean} dontPause Specifies whether to pause the slideshow.
                        // @param {Boolean} bypassHistory Specifies whether to delegate navigation to the history plugin when history is enabled.
                        previous: function(dontPause, bypassHistory) {
                                this.gotoIndex(this.getPrevIndex(this.currentImage.index), dontPause, bypassHistory);
                                return this;
                        },

                        // Navigates to the next page in the gallery.
                        // @param {Boolean} dontPause Specifies whether to pause the slideshow.
                        // @param {Boolean} bypassHistory Specifies whether to delegate navigation to the history plugin when history is enabled.
                        nextPage: function(dontPause, bypassHistory) {
                                var page = this.getCurrentPage();
                                var lastPage = this.getNumPages() - 1;
                                if (page < lastPage) {
                                        var startIndex = page * this.numThumbs;
                                        var nextPage = startIndex + this.numThumbs;
                                        this.gotoIndex(nextPage, dontPause, bypassHistory);
                                }

                                return this;
                        },

                        // Navigates to the previous page in the gallery.
                        // @param {Boolean} dontPause Specifies whether to pause the slideshow.
                        // @param {Boolean} bypassHistory Specifies whether to delegate navigation to the history plugin when history is enabled.
                        previousPage: function(dontPause, bypassHistory) {
                                var page = this.getCurrentPage();
                                if (page > 0) {
                                        var startIndex = page * this.numThumbs;
                                        var prevPage = startIndex - this.numThumbs;                             
                                        this.gotoIndex(prevPage, dontPause, bypassHistory);
                                }
                                
                                return this;
                        },

                        // Navigates to the image at the specified index in the gallery
                        // @param {Integer} index The index of the image in the gallery to display.
                        // @param {Boolean} dontPause Specifies whether to pause the slideshow.
                        // @param {Boolean} bypassHistory Specifies whether to delegate navigation to the history plugin when history is enabled.
                        gotoIndex: function(index, dontPause, bypassHistory) {
                                if (!dontPause)
                                        this.pause();
                                
                                if (index < 0) index = 0;
                                else if (index >= this.data.length) index = this.data.length-1;
                                
                                var imageData = this.data[index];
                                
                                if (!bypassHistory && this.enableHistory)
                                        $.historyLoad(String(imageData.hash));  // At the moment, historyLoad only accepts string arguments
                                else
                                        this.gotoImage(imageData);

                                return this;
                        },

                        // This function is garaunteed to be called anytime a gallery slide changes.
                        // @param {Object} imageData An object holding the image metadata of the image to navigate to.
                       gotoImage: function(imageData) {
							var index = imageData.index;
			
							var tomod = index % this.numThumbs;
							var doslidein = (tomod <= this.numThumbs) && (tomod >= 0);
							doslidein = doslidein && (Math.floor(index / this.numThumbs) == Math.floor(this.currentImage.index / this.numThumbs));
			
							if (this.onSlideChangeOut)
								this.onSlideChangeOut(this.currentImage.index);
			
							this.currentImage = imageData;
							this.preloadRelocate(index);
							
							this.refresh();
							
							if (this.onSlideChangeIn)
								if (doslidein)
									this.onSlideChangeIn(this.currentImage.index);
								else
									this.find('ul.thumbs').children().eq(this.currentImage.index).css({'opacity' : 1});
							
							return this;
						},

                        // Returns the default transition duration value.  The value is halved when not
                        // performing a synchronized transition.
                        // @param {Boolean} isSync Specifies whether the transitions are synchronized.
                        getDefaultTransitionDuration: function(isSync) {
                                if (isSync)
                                        return this.defaultTransitionDuration;
                                return this.defaultTransitionDuration / 2;
                        },

                        // Rebuilds the slideshow image and controls and performs transitions
                        refresh: function() {
                                var imageData = this.currentImage;
                                if (!imageData)
                                        return this;

                                var index = imageData.index;

                                // Update Controls
                                if (this.$controlsContainer) {
                                        this.$controlsContainer
                                                .find('div.nav-controls a.prev').attr('href', '#'+this.data[this.getPrevIndex(index)].hash).end()
                                                .find('div.nav-controls a.next').attr('href', '#'+this.data[this.getNextIndex(index)].hash);
                                }

                                var previousSlide = this.$imageContainer.find('span.current').addClass('previous').removeClass('current');
                                var previousCaption = 0;

                                if (this.$captionContainer) {
                                        previousCaption = this.$captionContainer.find('span.current').addClass('previous').removeClass('current');
                                }

                                // Perform transitions simultaneously if syncTransitions is true and the next image is already preloaded
                                var isSync = this.syncTransitions && imageData.image;

                                // Flag we are transitioning
                                var isTransitioning = true;
                                var gallery = this;

                                var transitionOutCallback = function() {
                                        // Flag that the transition has completed
                                        isTransitioning = false;

                                        // Remove the old slide
                                        previousSlide.remove();

                                        // Remove old caption
                                        if (previousCaption)
                                                previousCaption.remove();

                                        if (!isSync) {
                                                if (imageData.image && imageData.hash == gallery.data[gallery.currentImage.index].hash) {
                                                        gallery.buildImage(imageData, isSync);
                                                } else {
                                                        // Show loading container
                                                        if (gallery.$loadingContainer) {
                                                                gallery.$loadingContainer.show();
                                                        }
                                                }
                                        }
                                };

                                if (previousSlide.length == 0) {
                                        // For the first slide, the previous slide will be empty, so we will call the callback immediately
                                        transitionOutCallback();
                                } else {
                                        if (this.onTransitionOut) {
                                                this.onTransitionOut(previousSlide, previousCaption, isSync, transitionOutCallback);
                                        } else {
                                                previousSlide.fadeTo(this.getDefaultTransitionDuration(isSync), 0.0, transitionOutCallback);
                                                if (previousCaption)
                                                        previousCaption.fadeTo(this.getDefaultTransitionDuration(isSync), 0.0);
                                        }
                                }

                                // Go ahead and begin transitioning in of next image
                                if (isSync)
                                        this.buildImage(imageData, isSync);

                                if (!imageData.image) {
                                        var image = new Image();
                                        
                                        // Wire up mainImage onload event
                                        image.onload = function() {
                                                imageData.image = this;

                                                // Only build image if the out transition has completed and we are still on the same image hash
                                                if (!isTransitioning && imageData.hash == gallery.data[gallery.currentImage.index].hash) {
                                                        gallery.buildImage(imageData, isSync);
                                                }
                                        };

                                        // set alt and src
                                        image.alt = imageData.title;
                                        image.src = imageData.slideUrl;
                                }

                                // This causes the preloader (if still running) to relocate out from the currentIndex
                                this.relocatePreload = true;

                                return this.syncThumbs();
                        },

                        // Called by the refresh method after the previous image has been transitioned out or at the same time
                        // as the out transition when performing a synchronous transition.
                        // @param {Object} imageData An object holding the image metadata of the image to build.
                        // @param {Boolean} isSync Specifies whether the transitions are synchronized.
                        buildImage: function(imageData, isSync) {
                                var gallery = this;
                                var nextIndex = this.getNextIndex(imageData.index);

                                // Construct new hidden span for the image
                                var newSlide = this.$imageContainer
                                        .append('<span class="image-wrapper current"><a class="advance-link" rel="history" href="#'+this.data[nextIndex].hash+'" title="'+imageData.title+'">&nbsp;</a></span>')
                                        .find('span.current').css('opacity', '0');
                                
                                newSlide.find('a')
                                        .append(imageData.image)
                                        .click(function(e) {
                                                gallery.clickHandler(e, this);
                                        });
                                
                                var newCaption = 0;
                                if (this.$captionContainer) {
                                        // Construct new hidden caption for the image
                                        newCaption = this.$captionContainer
                                                .append('<span class="image-caption current"></span>')
                                                .find('span.current').css('opacity', '0')
                                                .append(imageData.caption);
                                }

                                // Hide the loading conatiner
                                if (this.$loadingContainer) {
                                        this.$loadingContainer.hide();
                                }

                                // Transition in the new image
                                if (this.onTransitionIn) {
                                        this.onTransitionIn(newSlide, newCaption, isSync);
                                } else {
                                        newSlide.fadeTo(this.getDefaultTransitionDuration(isSync), 1.0);
                                        if (newCaption)
                                                newCaption.fadeTo(this.getDefaultTransitionDuration(isSync), 1.0);
                                }
                                
                                if (this.isSlideshowRunning) {
                                        if (this.slideshowTimeout)
                                                clearTimeout(this.slideshowTimeout);

                                        this.slideshowTimeout = setTimeout(function() { gallery.ssAdvance(); }, this.delay);
                                }

                                return this;
                        },

                        // Returns the current page index that should be shown for the currentImage
                        getCurrentPage: function() {
                                return Math.floor(this.currentImage.index / this.numThumbs);
                        },

                        // Applies the selected class to the current image's corresponding thumbnail.
                        // Also checks if the current page has changed and updates the displayed page of thumbnails if necessary.
                        syncThumbs: function() {
                                var page = this.getCurrentPage();
                                if (page != this.displayedPage)
                                        this.updateThumbs();

                                // Remove existing selected class and add selected class to new thumb
                                var $thumbs = this.find('ul.thumbs').children();
                                $thumbs.filter('.selected').removeClass('selected');
                                $thumbs.eq(this.currentImage.index).addClass('selected');

                                return this;
                        },

                        // Performs transitions on the thumbnails container and updates the set of
                        // thumbnails that are to be displayed and the navigation controls.
                        // @param {Delegate} postTransitionOutHandler An optional delegate that is called after
                        // the thumbnails container has transitioned out and before the thumbnails are rebuilt.
                        updateThumbs: function(postTransitionOutHandler) {
                                var gallery = this;
                                var transitionOutCallback = function() {
                                        // Call the Post-transition Out Handler
                                        if (postTransitionOutHandler)
                                                postTransitionOutHandler();
                                        
                                        gallery.rebuildThumbs();

                                        // Transition In the thumbsContainer
                                        if (gallery.onPageTransitionIn)
                                                gallery.onPageTransitionIn();
                                        else
                                                gallery.show();
                                };

                                // Transition Out the thumbsContainer
                                if (this.onPageTransitionOut) {
                                        this.onPageTransitionOut(transitionOutCallback);
                                } else {
                                        this.hide();
                                        transitionOutCallback();
                                }

                                return this;
                        },

                        // Updates the set of thumbnails that are to be displayed and the navigation controls.
                        rebuildThumbs: function() {
                                var needsPagination = this.data.length > this.numThumbs;

                                // Rebuild top pager
                                if (this.enableTopPager) {
                                        var $topPager = this.find('div.top');
                                        if ($topPager.length == 0)
                                                $topPager = this.prepend('<div class="top pagination"></div>').find('div.top');
                                        else
                                                $topPager.empty();

                                        if (needsPagination)
                                                this.buildPager($topPager);
                                }

                                // Rebuild bottom pager
                                if (this.enableBottomPager) {
                                        var $bottomPager = this.find('div.bottom');
                                        if ($bottomPager.length == 0)
                                                $bottomPager = this.append('<div class="bottom pagination"></div>').find('div.bottom');
                                        else
                                                $bottomPager.empty();

                                        if (needsPagination)
                                                this.buildPager($bottomPager);
                                }

                                var page = this.getCurrentPage();
                                var startIndex = page*this.numThumbs;
                                var stopIndex = startIndex+this.numThumbs-1;
                                if (stopIndex >= this.data.length)
                                        stopIndex = this.data.length-1;

                                // Show/Hide thumbs
                                var $thumbsUl = this.find('ul.thumbs');
                                $thumbsUl.find('li').each(function(i) {
                                        var $li = $(this);
                                        if (i >= startIndex && i <= stopIndex) {
                                                $li.show();
                                        } else {
                                                $li.hide();
                                        }
                                });

                                this.displayedPage = page;

                                // Remove the noscript class from the thumbs container ul
                                $thumbsUl.removeClass('noscript');
                                
                                return this;
                        },

                        // Returns the total number of pages required to display all the thumbnails.
                        getNumPages: function() {
                                return Math.ceil(this.data.length/this.numThumbs);
                        },

                        // Rebuilds the pager control in the specified matched element.
                        // @param {jQuery} pager A jQuery element set matching the particular pager to be rebuilt.
                        buildPager: function(pager) {
                                var gallery = this;
                                var numPages = this.getNumPages();
                                var page = this.getCurrentPage();
                                var startIndex = page * this.numThumbs;
                                var pagesRemaining = this.maxPagesToShow - 1;
                                
                                var pageNum = page - Math.floor((this.maxPagesToShow - 1) / 2) + 1;
                                if (pageNum > 0) {
                                        var remainingPageCount = numPages - pageNum;
                                        if (remainingPageCount < pagesRemaining) {
                                                pageNum = pageNum - (pagesRemaining - remainingPageCount);
                                        }
                                }

                                if (pageNum < 0) {
                                        pageNum = 0;
                                }

                                // Prev Page Link
                                if (page > 0) {
                                        var prevPage = startIndex - this.numThumbs;
                                        pager.append('<a rel="history" href="#'+this.data[prevPage].hash+'" title="'+this.prevPageLinkText+'">'+this.prevPageLinkText+'</a>');
                                }

                                // Create First Page link if needed
                                if (pageNum > 0) {
                                        this.buildPageLink(pager, 0, numPages);
                                        if (pageNum > 1)
                                                pager.append('<span class="ellipsis">&hellip;</span>');
                                        
                                        pagesRemaining--;
                                }

                                // Page Index Links
                                while (pagesRemaining > 0) {
                                        this.buildPageLink(pager, pageNum, numPages);
                                        pagesRemaining--;
                                        pageNum++;
                                }

                                // Create Last Page link if needed
                                if (pageNum < numPages) {
                                        var lastPageNum = numPages - 1;
                                        if (pageNum < lastPageNum)
                                                pager.append('<span class="ellipsis">&hellip;</span>');

                                        this.buildPageLink(pager, lastPageNum, numPages);
                                }

                                // Next Page Link
                                var nextPage = startIndex + this.numThumbs;
                                if (nextPage < this.data.length) {
                                        pager.append('<a rel="history" href="#'+this.data[nextPage].hash+'" title="'+this.nextPageLinkText+'">'+this.nextPageLinkText+'</a>');
                                }

                                pager.find('a').click(function(e) {
                                        gallery.clickHandler(e, this);
                                });

                                return this;
                        },

                        // Builds a single page link within a pager.  This function is called by buildPager
                        // @param {jQuery} pager A jQuery element set matching the particular pager to be rebuilt.
                        // @param {Integer} pageNum The page number of the page link to build.
                        // @param {Integer} numPages The total number of pages required to display all thumbnails.
                        buildPageLink: function(pager, pageNum, numPages) {
                                var pageLabel = pageNum + 1;
                                var currentPage = this.getCurrentPage();
                                if (pageNum == currentPage)
                                        pager.append('<span class="current">'+pageLabel+'</span>');
                                else if (pageNum < numPages) {
                                        var imageIndex = pageNum*this.numThumbs;
                                        pager.append('<a rel="history" href="#'+this.data[imageIndex].hash+'" title="'+pageLabel+'">'+pageLabel+'</a>');
                                }
                                
                                return this;
                        }
                });

                // Now initialize the gallery
                $.extend(this, defaults, settings);
                
                // Verify the history plugin is available
                if (this.enableHistory && !$.historyInit)
                        this.enableHistory = false;
                
                // Select containers
                if (this.imageContainerSel) this.$imageContainer = $(this.imageContainerSel);
                if (this.captionContainerSel) this.$captionContainer = $(this.captionContainerSel);
                if (this.loadingContainerSel) this.$loadingContainer = $(this.loadingContainerSel);

                // Initialize the thumbails
                this.initializeThumbs();
                
                if (this.maxPagesToShow < 3)
                        this.maxPagesToShow = 3;

                this.displayedPage = -1;
                this.currentImage = this.data[0];
                var gallery = this;

                // Hide the loadingContainer
                if (this.$loadingContainer)
                        this.$loadingContainer.hide();

                // Setup controls
                if (this.controlsContainerSel) {
                        this.$controlsContainer = $(this.controlsContainerSel).empty();
                        
                        if (this.renderSSControls) {
                                if (this.autoStart) {
                                        this.$controlsContainer
                                                .append('<div class="ss-controls"><a href="#pause" class="pause" title="'+this.pauseLinkText+'">'+this.pauseLinkText+'</a></div>');
                                } else {
                                        this.$controlsContainer
                                                .append('<div class="ss-controls"><a href="#play" class="play" title="'+this.playLinkText+'">'+this.playLinkText+'</a></div>');
                                }

                                this.$controlsContainer.find('div.ss-controls a')
                                        .click(function(e) {
                                                gallery.toggleSlideshow();
                                                e.preventDefault();
                                                return false;
                                        });
                        }
                
                        if (this.renderNavControls) {
                                this.$controlsContainer
                                        .append('<div class="nav-controls"><a class="prev" rel="history" title="'+this.prevLinkText+'">'+this.prevLinkText+'</a><a class="next" rel="history" title="'+this.nextLinkText+'">'+this.nextLinkText+'</a></div>')
                                        .find('div.nav-controls a')
                                        .click(function(e) {
                                                gallery.clickHandler(e, this);
                                        });
                        }
                }

                var initFirstImage = !this.enableHistory || !location.hash;
                if (this.enableHistory && location.hash) {
                        var hash = $.galleriffic.normalizeHash(location.hash);
                        var imageData = allImages[hash];
                        if (!imageData)
                                initFirstImage = true;
                }

                // Setup gallery to show the first image
                if (initFirstImage)
                        this.gotoIndex(0, false, true);

                // Setup Keyboard Navigation
                if (this.enableKeyboardNavigation) {
                        $(document).keydown(function(e) {
                                var key = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;
                                switch(key) {
                                        case 32: // space
                                                gallery.next();
                                                e.preventDefault();
                                                break;
                                        case 33: // Page Up
                                                gallery.previousPage();
                                                e.preventDefault();
                                                break;
                                        case 34: // Page Down
                                                gallery.nextPage();
                                                e.preventDefault();
                                                break;
                                        case 35: // End
                                                gallery.gotoIndex(gallery.data.length-1);
                                                e.preventDefault();
                                                break;
                                        case 36: // Home
                                                gallery.gotoIndex(0);
                                                e.preventDefault();
                                                break;
                                        case 37: // left arrow
                                                gallery.previous();
                                                e.preventDefault();
                                                break;
                                        case 39: // right arrow
                                                gallery.next();
                                                e.preventDefault();
                                                break;
                                }
                        });
                }

                // Auto start the slideshow
                if (this.autoStart)
                        this.play();

                // Kickoff Image Preloader after 1 second
                setTimeout(function() { gallery.preloadInit(); }, 1000);

                return this;
        };
})(jQuery);

/*
    json2.js
    2012-10-08

    Public Domain.

    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

    See http://www.JSON.org/js.html


    This code should be minified before deployment.
    See http://javascript.crockford.com/jsmin.html

    USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
    NOT CONTROL.


    This file creates a global JSON object containing two methods: stringify
    and parse.

        JSON.stringify(value, replacer, space)
            value       any JavaScript value, usually an object or array.

            replacer    an optional parameter that determines how object
                        values are stringified for objects. It can be a
                        function or an array of strings.

            space       an optional parameter that specifies the indentation
                        of nested structures. If it is omitted, the text will
                        be packed without extra whitespace. If it is a number,
                        it will specify the number of spaces to indent at each
                        level. If it is a string (such as '\t' or '&nbsp;'),
                        it contains the characters used to indent at each level.

            This method produces a JSON text from a JavaScript value.

            When an object value is found, if the object contains a toJSON
            method, its toJSON method will be called and the result will be
            stringified. A toJSON method does not serialize: it returns the
            value represented by the name/value pair that should be serialized,
            or undefined if nothing should be serialized. The toJSON method
            will be passed the key associated with the value, and this will be
            bound to the value

            For example, this would serialize Dates as ISO strings.

                Date.prototype.toJSON = function (key) {
                    function f(n) {
                        // Format integers to have at least two digits.
                        return n < 10 ? '0' + n : n;
                    }

                    return this.getUTCFullYear()   + '-' +
                         f(this.getUTCMonth() + 1) + '-' +
                         f(this.getUTCDate())      + 'T' +
                         f(this.getUTCHours())     + ':' +
                         f(this.getUTCMinutes())   + ':' +
                         f(this.getUTCSeconds())   + 'Z';
                };

            You can provide an optional replacer method. It will be passed the
            key and value of each member, with this bound to the containing
            object. The value that is returned from your method will be
            serialized. If your method returns undefined, then the member will
            be excluded from the serialization.

            If the replacer parameter is an array of strings, then it will be
            used to select the members to be serialized. It filters the results
            such that only members with keys listed in the replacer array are
            stringified.

            Values that do not have JSON representations, such as undefined or
            functions, will not be serialized. Such values in objects will be
            dropped; in arrays they will be replaced with null. You can use
            a replacer function to replace those with JSON values.
            JSON.stringify(undefined) returns undefined.

            The optional space parameter produces a stringification of the
            value that is filled with line breaks and indentation to make it
            easier to read.

            If the space parameter is a non-empty string, then that string will
            be used for indentation. If the space parameter is a number, then
            the indentation will be that many spaces.

            Example:

            text = JSON.stringify(['e', {pluribus: 'unum'}]);
            // text is '["e",{"pluribus":"unum"}]'


            text = JSON.stringify(['e', {pluribus: 'unum'}], null, '\t');
            // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

            text = JSON.stringify([new Date()], function (key, value) {
                return this[key] instanceof Date ?
                    'Date(' + this[key] + ')' : value;
            });
            // text is '["Date(---current time---)"]'


        JSON.parse(text, reviver)
            This method parses a JSON text to produce an object or array.
            It can throw a SyntaxError exception.

            The optional reviver parameter is a function that can filter and
            transform the results. It receives each of the keys and values,
            and its return value is used instead of the original value.
            If it returns what it received, then the structure is not modified.
            If it returns undefined then the member is deleted.

            Example:

            // Parse the text. Values that look like ISO date strings will
            // be converted to Date objects.

            myData = JSON.parse(text, function (key, value) {
                var a;
                if (typeof value === 'string') {
                    a =
/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
                    if (a) {
                        return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
                            +a[5], +a[6]));
                    }
                }
                return value;
            });

            myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
                var d;
                if (typeof value === 'string' &&
                        value.slice(0, 5) === 'Date(' &&
                        value.slice(-1) === ')') {
                    d = new Date(value.slice(5, -1));
                    if (d) {
                        return d;
                    }
                }
                return value;
            });


    This is a reference implementation. You are free to copy, modify, or
    redistribute.
*/

/*jslint evil: true, regexp: true */

/*members "", "\b", "\t", "\n", "\f", "\r", "\"", JSON, "\\", apply,
    call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
    lastIndex, length, parse, prototype, push, replace, slice, stringify,
    test, toJSON, toString, valueOf
*/


// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.

if (typeof JSON !== 'object') {
    JSON = {};
}

(function () {
    'use strict';

    function f(n) {
        // Format integers to have at least two digits.
        return n < 10 ? '0' + n : n;
    }

    if (typeof Date.prototype.toJSON !== 'function') {

        Date.prototype.toJSON = function (key) {

            return isFinite(this.valueOf())
                ? this.getUTCFullYear()     + '-' +
                    f(this.getUTCMonth() + 1) + '-' +
                    f(this.getUTCDate())      + 'T' +
                    f(this.getUTCHours())     + ':' +
                    f(this.getUTCMinutes())   + ':' +
                    f(this.getUTCSeconds())   + 'Z'
                : null;
        };

        String.prototype.toJSON      =
            Number.prototype.toJSON  =
            Boolean.prototype.toJSON = function (key) {
                return this.valueOf();
            };
    }

    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap,
        indent,
        meta = {    // table of character substitutions
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"' : '\\"',
            '\\': '\\\\'
        },
        rep;


    function quote(string) {

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.

        escapable.lastIndex = 0;
        return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
            var c = meta[a];
            return typeof c === 'string'
                ? c
                : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
        }) + '"' : '"' + string + '"';
    }


    function str(key, holder) {

// Produce a string from holder[key].

        var i,          // The loop counter.
            k,          // The member key.
            v,          // The member value.
            length,
            mind = gap,
            partial,
            value = holder[key];

// If the value has a toJSON method, call it to obtain a replacement value.

        if (value && typeof value === 'object' &&
                typeof value.toJSON === 'function') {
            value = value.toJSON(key);
        }

// If we were called with a replacer function, then call the replacer to
// obtain a replacement value.

        if (typeof rep === 'function') {
            value = rep.call(holder, key, value);
        }

// What happens next depends on the value's type.

        switch (typeof value) {
        case 'string':
            return quote(value);

        case 'number':

// JSON numbers must be finite. Encode non-finite numbers as null.

            return isFinite(value) ? String(value) : 'null';

        case 'boolean':
        case 'null':

// If the value is a boolean or null, convert it to a string. Note:
// typeof null does not produce 'null'. The case is included here in
// the remote chance that this gets fixed someday.

            return String(value);

// If the type is 'object', we might be dealing with an object or an array or
// null.

        case 'object':

// Due to a specification blunder in ECMAScript, typeof null is 'object',
// so watch out for that case.

            if (!value) {
                return 'null';
            }

// Make an array to hold the partial results of stringifying this object value.

            gap += indent;
            partial = [];

// Is the value an array?

            if (Object.prototype.toString.apply(value) === '[object Array]') {

// The value is an array. Stringify every element. Use null as a placeholder
// for non-JSON values.

                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }

// Join all of the elements together, separated with commas, and wrap them in
// brackets.

                v = partial.length === 0
                    ? '[]'
                    : gap
                    ? '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']'
                    : '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }

// If the replacer is an array, use it to select the members to be stringified.

            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    if (typeof rep[i] === 'string') {
                        k = rep[i];
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            } else {

// Otherwise, iterate through all of the keys in the object.

                for (k in value) {
                    if (Object.prototype.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }

// Join all of the member texts together, separated with commas,
// and wrap them in braces.

            v = partial.length === 0
                ? '{}'
                : gap
                ? '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}'
                : '{' + partial.join(',') + '}';
            gap = mind;
            return v;
        }
    }

// If the JSON object does not yet have a stringify method, give it one.

    if (typeof JSON.stringify !== 'function') {
        JSON.stringify = function (value, replacer, space) {

// The stringify method takes a value and an optional replacer, and an optional
// space parameter, and returns a JSON text. The replacer can be a function
// that can replace values, or an array of strings that will select the keys.
// A default replacer method can be provided. Use of the space parameter can
// produce text that is more easily readable.

            var i;
            gap = '';
            indent = '';

// If the space parameter is a number, make an indent string containing that
// many spaces.

            if (typeof space === 'number') {
                for (i = 0; i < space; i += 1) {
                    indent += ' ';
                }

// If the space parameter is a string, it will be used as the indent string.

            } else if (typeof space === 'string') {
                indent = space;
            }

// If there is a replacer, it must be a function or an array.
// Otherwise, throw an error.

            rep = replacer;
            if (replacer && typeof replacer !== 'function' &&
                    (typeof replacer !== 'object' ||
                    typeof replacer.length !== 'number')) {
                throw new Error('JSON.stringify');
            }

// Make a fake root object containing our value under the key of ''.
// Return the result of stringifying the value.

            return str('', {'': value});
        };
    }


// If the JSON object does not yet have a parse method, give it one.

    if (typeof JSON.parse !== 'function') {
        JSON.parse = function (text, reviver) {

// The parse method takes a text and an optional reviver function, and returns
// a JavaScript value if the text is a valid JSON text.

            var j;

            function walk(holder, key) {

// The walk method is used to recursively walk the resulting structure so
// that modifications can be made.

                var k, v, value = holder[key];
                if (value && typeof value === 'object') {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            }


// Parsing happens in four stages. In the first stage, we replace certain
// Unicode characters with escape sequences. JavaScript handles many characters
// incorrectly, either silently deleting them, or treating them as line endings.

            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return '\\u' +
                        ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                });
            }

// In the second stage, we run the text against regular expressions that look
// for non-JSON patterns. We are especially concerned with '()' and 'new'
// because they can cause invocation, and '=' because it can cause mutation.
// But just to be safe, we want to reject all unexpected forms.

// We split the second stage into 4 regexp operations in order to work around
// crippling inefficiencies in IE's and Safari's regexp engines. First we
// replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
// replace all simple value tokens with ']' characters. Third, we delete all
// open brackets that follow a colon or comma or that begin the text. Finally,
// we look to see that the remaining characters are only whitespace or ']' or
// ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.

            if (/^[\],:{}\s]*$/
                    .test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
                        .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
                        .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

// In the third stage we use the eval function to compile the text into a
// JavaScript structure. The '{' operator is subject to a syntactic ambiguity
// in JavaScript: it can begin a block or an object literal. We wrap the text
// in parens to eliminate the ambiguity.

                j = eval('(' + text + ')');

// In the optional fourth stage, we recursively walk the new structure, passing
// each name/value pair to a reviver function for possible transformation.

                return typeof reviver === 'function'
                    ? walk({'': j}, '')
                    : j;
            }

// If the text is not JSON parseable, then a SyntaxError is thrown.

            throw new SyntaxError('JSON.parse');
        };
    }
}());


(function(a,b){

	// EASINGS
	jQuery.easing["jswing"]=jQuery.easing["swing"];jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b+c;return-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b+c;return d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b+c;return-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b*b+c;return d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return b==0?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){if(b==0)return c;if(b==e)return c+d;if((b/=e/2)<1)return d/2*Math.pow(2,10*(b-1))+c;return d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){if((b/=e/2)<1)return-d/2*(Math.sqrt(1-b*b)-1)+c;return d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e/2)==2)return c+d;if(!g)g=e*.3*1.5;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);if(b<1)return-.5*h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+c;return h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)*.5+d+c},easeInBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;if((b/=e/2)<1)return d/2*b*b*(((f*=1.525)+1)*b-f)+c;return d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){if((b/=e)<1/2.75){return d*7.5625*b*b+c}else if(b<2/2.75){return d*(7.5625*(b-=1.5/2.75)*b+.75)+c}else if(b<2.5/2.75){return d*(7.5625*(b-=2.25/2.75)*b+.9375)+c}else{return d*(7.5625*(b-=2.625/2.75)*b+.984375)+c}},easeInOutBounce:function(a,b,c,d,e){if(b<e/2)return jQuery.easing.easeInBounce(a,b*2,0,d,e)*.5+c;return jQuery.easing.easeOutBounce(a,b*2-e,0,d,e)*.5+d*.5+c}})		
	
	
	// WAIT FOR IMAGES
	/*
	* waitForImages 1.4
	* -----------------
	* Provides a callback when all images have loaded in your given selector.
	* http://www.alexanderdickson.com/
	*
	*
	* Copyright (c) 2011 Alex Dickson
	* Licensed under the MIT licenses.
	* See website for more info.
	*
	*/
	a.waitForImages={hasImageProperties:["backgroundImage","listStyleImage","borderImage","borderCornerImage"]};a.expr[":"].uncached=function(b){var c=document.createElement("img");c.src=b.src;return a(b).is('img[src!=""]')&&!c.complete};a.fn.waitForImages=function(b,c,d){if(a.isPlainObject(arguments[0])){c=b.each;d=b.waitForAll;b=b.finished}b=b||a.noop;c=c||a.noop;d=!!d;if(!a.isFunction(b)||!a.isFunction(c)){throw new TypeError("An invalid callback was supplied.")}return this.each(function(){var e=a(this),f=[];if(d){var g=a.waitForImages.hasImageProperties||[],h=/url\((['"]?)(.*?)\1\)/g;e.find("*").each(function(){var b=a(this);if(b.is("img:uncached")){f.push({src:b.attr("src"),element:b[0]})}a.each(g,function(a,c){var d=b.css(c);if(!d){return true}var e;while(e=h.exec(d)){f.push({src:e[2],element:b[0]})}})})}else{e.find("img:uncached").each(function(){f.push({src:this.src,element:this})})}var i=f.length,j=0;if(i==0){b.call(e[0])}a.each(f,function(d,f){var g=new Image;a(g).bind("load error",function(a){j++;c.call(f.element,j,i,a.type=="load");if(j==i){b.call(e[0]);return false}});g.src=f.src})})}
	
	
	// CSS ANIMATE
	/**************************************\
	 *  cssAnimate 1.1.5 for jQuery       *
	 *  (c) 2012 - Clemens Damke          *
	 *  Licensed under MIT License        *
	 *  Works with jQuery >=1.4.3         *
	/**************************************/
	var b = ["Webkit", "Moz", "O", "Ms", "Khtml", ""];
	var c = ["borderRadius", "boxShadow", "userSelect", "transformOrigin", "transformStyle", "transition", "transitionDuration", "transitionProperty", "transitionTimingFunction", "backgroundOrigin", "backgroundSize", "animation", "filter", "zoom", "columns", "perspective", "perspectiveOrigin", "appearance"];
	a.fn.cssSetQueue = function (b, c) {
		v = this;
		var d = v.data("cssQueue") ? v.data("cssQueue") : [];
		var e = v.data("cssCall") ? v.data("cssCall") : [];
		var f = 0;
		var g = {};
		a.each(c, function (a, b) {
			g[a] = b
		});
		while (1) {
			if (!e[f]) {
				e[f] = g.complete;
				break
			}
			f++
		}
		g.complete = f;
		d.push([b, g]);
		v.data({
			cssQueue : d,
			cssRunning : true,
			cssCall : e
		})
	};
	a.fn.cssRunQueue = function () {
		v = this;
		var a = v.data("cssQueue") ? v.data("cssQueue") : [];
		if (a[0])
			v.cssEngine(a[0][0], a[0][1]);
		else
			v.data("cssRunning", false);
		a.shift();
		v.data("cssQueue", a)
	};
	a.cssMerge = function (b, c, d) {
		a.each(c, function (c, e) {
			a.each(d, function (a, d) {
				b[d + c] = e
			})
		});
		return b
	};
	a.fn.cssAnimationData = function (a, b) {
		var c = this;
		var d = c.data("cssAnimations");
		if (!d)
			d = {};
		if (!d[a])
			d[a] = [];
		d[a].push(b);
		c.data("cssAnimations", d);
		return d[a]
	};
	a.fn.cssAnimationRemove = function () {
		var b = this;
		if (b.data("cssAnimations") != undefined) {
			var c = b.data("cssAnimations");
			var d = b.data("identity");
			a.each(c, function (a, b) {
				c[a] = b.splice(d + 1, 1)
			});
			b.data("cssAnimations", c)
		}
	};
	a.css3D = function (c) {
		a("body").data("cssPerspective", isFinite(c) ? c : c ? 1e3 : 0).cssOriginal(a.cssMerge({}, {
				TransformStyle : c ? "preserve-3d" : "flat"
			}, b))
	};
	a.cssPropertySupporter = function (d) {
		a.each(c, function (c, e) {
			if (d[e])
				a.each(b, function (a, b) {
					var c = e.substr(0, 1);
					d[b + c[b ? "toUpperCase" : "toLowerCase"]() + e.substr(1)] = d[e]
				})
		});
		return d
	};
	a.cssAnimateSupport = function () {
		var c = false;
		a.each(b, function (a, b) {
			c = document.body.style[b + "AnimationName"] !== undefined ? true : c
		});
		return c
	};
	a.fn.cssEngine = function (c, d) {
		function e(a) {
			return String(a).replace(/([A-Z])/g, "-$1").toLowerCase()
		}
		var f = this;
		var f = this;
		if (typeof d.complete == "number")
			f.data("cssCallIndex", d.complete);
		var g = {
			linear : "linear",
			swing : "ease",
			easeIn : "ease-in",
			easeOut : "ease-out",
			easeInOut : "ease-in-out"
		};
		var h = {};
		var i = a("body").data("cssPerspective");
		if (c.transform)
			a.each(b, function (a, b) {
				var d = b + (b ? "T" : "t") + "ransform";
				var g = f.cssOriginal(e(d));
				var j = c.transform;
				if (!g || g == "none")
					h[d] = "scale(1)";
				c[d] = (i && !/perspective/gi.test(j) ? "perspective(" + i + ") " : "") + j
			});
		c = a.cssPropertySupporter(c);
		var j = [];
		a.each(c, function (a, b) {
			j.push(e(a))
		});
		var k = false;
		var l = [];
		var m = [];
		if (j != undefined) {
			for (var n = 0; n < j.length; n++) {
				l.push(String(d.duration / 1e3) + "s");
				var o = g[d.easing];
				m.push(o ? o : d.easing)
			}
			l = f.cssAnimationData("dur", l.join(", ")).join(", ");
			m = f.cssAnimationData("eas", m.join(", ")).join(", ");
			var p = f.cssAnimationData("prop", j.join(", "));
			f.data("identity", p.length - 1);
			p = p.join(", ");
			var q = {
				TransitionDuration : l,
				TransitionProperty : p,
				TransitionTimingFunction : m
			};
			var r = {};
			r = a.cssMerge(r, q, b);
			var s = c;
			a.extend(r, c);
			if (r.display == "callbackHide")
				k = true;
			else if (r.display)
				h["display"] = r.display;
			f.cssOriginal(h)
		}
		setTimeout(function () {
			f.cssOriginal(r);
			var b = f.data("runningCSS");
			b = !b ? s : a.extend(b, s);
			f.data("runningCSS", b);
			setTimeout(function () {
				f.data("cssCallIndex", "a");
				if (k)
					f.cssOriginal("display", "none");
				f.cssAnimationRemove();
				if (d.queue)
					f.cssRunQueue();
				if (typeof d.complete == "number") {
					f.data("cssCall")[d.complete].call(f);
					f.data("cssCall")[d.complete] = 0
				} else
					d.complete.call(f)
			}, d.duration)
		}, 0)
	};
	a.str2Speed = function (a) {
		return isNaN(a) ? a == "slow" ? 1e3 : a == "fast" ? 200 : 600 : a
	};
	a.fn.cssAnimate = function (b, c, d, e) {
		var f = this;
		var g = {
			duration : 0,
			easing : "swing",
			complete : function () {},
			queue : true
		};
		var h = {};
		h = typeof c == "object" ? c : {
			duration : c
		};
		h[d ? typeof d == "function" ? "complete" : "easing" : 0] = d;
		h[e ? "complete" : 0] = e;
		h.duration = a.str2Speed(h.duration);
		a.extend(g, h);
		if (a.cssAnimateSupport()) {
			f.each(function (c, d) {
				d = a(d);
				if (g.queue) {
					var e = !d.data("cssRunning");
					d.cssSetQueue(b, g);
					if (e)
						d.cssRunQueue()
				} else
					d.cssEngine(b, g)
			})
		} else
			f.animate(b, g);
		return f
	};
	a.cssPresetOptGen = function (a, b) {
		var c = {};
		c[a ? typeof a == "function" ? "complete" : "easing" : 0] = a;
		c[b ? "complete" : 0] = b;
		return c
	};
	a.fn.cssFadeTo = function (b, c, d, e) {
		var f = this;
		opt = a.cssPresetOptGen(d, e);
		var g = {
			opacity : c
		};
		opt.duration = b;
		if (a.cssAnimateSupport()) {
			f.each(function (b, d) {
				d = a(d);
				if (d.data("displayOriginal") != d.cssOriginal("display") && d.cssOriginal("display") != "none")
					d.data("displayOriginal", d.cssOriginal("display") ? d.cssOriginal("display") : "block");
				else
					d.data("displayOriginal", "block");
				g.display = c ? d.data("displayOriginal") : "callbackHide";
				d.cssAnimate(g, opt)
			})
		} else
			f.fadeTo(b, opt);
		return f
	};
	a.fn.cssFadeOut = function (b, c, d) {
		if (a.cssAnimateSupport()) {
			if (!this.cssOriginal("opacity"))
				this.cssOriginal("opacity", 1);
			this.cssFadeTo(b, 0, c, d)
		} else
			this.fadeOut(b, c, d);
		return this
	};
	a.fn.cssFadeIn = function (b, c, d) {
		if (a.cssAnimateSupport()) {
			if (this.cssOriginal("opacity"))
				this.cssOriginal("opacity", 0);
			this.cssFadeTo(b, 1, c, d)
		} else
			this.fadeIn(b, c, d);
		return this
	};
	a.cssPx2Int = function (a) {
		return a.split("p")[0] * 1
	};
	a.fn.cssStop = function () {
		var c = this,
		d = 0;
		c.data("cssAnimations", false).each(function (e, f) {
			f = a(f);
			var g = {
				TransitionDuration : "0s"
			};
			var h = f.data("runningCSS");
			var i = {};
			if (h)
				a.each(h, function (b, c) {
					c = isFinite(a.cssPx2Int(c)) ? a.cssPx2Int(c) : c;
					var d = [0, 1];
					var e = {
						color : ["#000", "#fff"],
						background : ["#000", "#fff"],
						"float" : ["none", "left"],
						clear : ["none", "left"],
						border : ["none", "0px solid #fff"],
						position : ["absolute", "relative"],
						family : ["Arial", "Helvetica"],
						display : ["none", "block"],
						visibility : ["hidden", "visible"],
						transform : ["translate(0,0)", "scale(1)"]
					};
					a.each(e, function (a, c) {
						if ((new RegExp(a, "gi")).test(b))
							d = c
					});
					i[b] = d[0] != c ? d[0] : d[1]
				});
			else
				h = {};
			g = a.cssMerge(i, g, b);
			f.cssOriginal(g);
			setTimeout(function () {
				var b = a(c[d]);
				b.cssOriginal(h).data({
					runningCSS : {},
					cssAnimations : {},
					cssQueue : [],
					cssRunning : false
				});
				if (typeof b.data("cssCallIndex") == "number")
					b.data("cssCall")[b.data("cssCallIndex")].call(b);
				b.data("cssCall", []);
				d++
			}, 0)
		});
		return c
	};
	a.fn.cssDelay = function (a) {
		return this.cssAnimate({}, a)
	};
	if (a.fn.cssOriginal != undefined)
		a.fn.css = a.fn.cssOriginal;
	a.fn.cssOriginal = a.fn.css;
	
	
	// SWIPE FUNCTION
	/**
	 * jQuery Plugin to obtain touch gestures from iPhone, iPod Touch and iPad, should also work with Android mobile phones (not tested yet!)
	 * Common usage: wipe images (left and right to show the previous or next image)
	 * 
	 * @author Andreas Waltl, netCU Internetagentur (http://www.netcu.de)
	 * @version 1.1.1 (9th December 2010) - fix bug (older IE's had problems)
	 * @version 1.1 (1st September 2010) - support wipe up and wipe down
	 * @version 1.0 (15th July 2010)
	 */
	a.fn.swipe=function(b){if(!this)return false;var c={fingers:1,threshold:75,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,click:null,triggerOnTouchEnd:true,allowPageScroll:"auto"};var d="left";var e="right";var f="up";var g="down";var h="none";var i="horizontal";var j="vertical";var k="auto";var l="start";var m="move";var n="end";var o="cancel";var p="ontouchstart"in window,q=p?"touchstart":"mousedown",r=p?"touchmove":"mousemove",s=p?"touchend":"mouseup",t="touchcancel";var u="start";if(b.allowPageScroll==undefined&&(b.swipe!=undefined||b.swipeStatus!=undefined))b.allowPageScroll=h;if(b)a.extend(c,b);return this.each(function(){function J(){var a=I();if(a<=45&&a>=0)return d;else if(a<=360&&a>=315)return d;else if(a>=135&&a<=225)return e;else if(a>45&&a<135)return g;else return f}function I(){var a=y.x-z.x;var b=z.y-y.y;var c=Math.atan2(b,a);var d=Math.round(c*180/Math.PI);if(d<0)d=360-Math.abs(d);return d}function H(){return Math.round(Math.sqrt(Math.pow(z.x-y.x,2)+Math.pow(z.y-y.y,2)))}function G(a,b){if(c.allowPageScroll==h){a.preventDefault()}else{var l=c.allowPageScroll==k;switch(b){case d:if(c.swipeLeft&&l||!l&&c.allowPageScroll!=i)a.preventDefault();break;case e:if(c.swipeRight&&l||!l&&c.allowPageScroll!=i)a.preventDefault();break;case f:if(c.swipeUp&&l||!l&&c.allowPageScroll!=j)a.preventDefault();break;case g:if(c.swipeDown&&l||!l&&c.allowPageScroll!=j)a.preventDefault();break}}}function F(a,b){if(c.swipeStatus)c.swipeStatus.call(v,a,b,direction||null,distance||0);if(b==o){if(c.click&&(x==1||!p)&&(isNaN(distance)||distance==0))c.click.call(v,a,a.target)}if(b==n){if(c.swipe){c.swipe.call(v,a,direction,distance)}switch(direction){case d:if(c.swipeLeft)c.swipeLeft.call(v,a,direction,distance);break;case e:if(c.swipeRight)c.swipeRight.call(v,a,direction,distance);break;case f:if(c.swipeUp)c.swipeUp.call(v,a,direction,distance);break;case g:if(c.swipeDown)c.swipeDown.call(v,a,direction,distance);break}}}function E(a){x=0;y.x=0;y.y=0;z.x=0;z.y=0;A.x=0;A.y=0}function D(a){a.preventDefault();distance=H();direction=J();if(c.triggerOnTouchEnd){u=n;if((x==c.fingers||!p)&&z.x!=0){if(distance>=c.threshold){F(a,u);E(a)}else{u=o;F(a,u);E(a)}}else{u=o;F(a,u);E(a)}}else if(u==m){u=o;F(a,u);E(a)}b.removeEventListener(r,C,false);b.removeEventListener(s,D,false)}function C(a){if(u==n||u==o)return;var b=p?a.touches[0]:a;z.x=b.pageX;z.y=b.pageY;direction=J();if(p){x=a.touches.length}u=m;G(a,direction);if(x==c.fingers||!p){distance=H();if(c.swipeStatus)F(a,u,direction,distance);if(!c.triggerOnTouchEnd){if(distance>=c.threshold){u=n;F(a,u);E(a)}}}else{u=o;F(a,u);E(a)}}function B(a){var d=p?a.touches[0]:a;u=l;if(p){x=a.touches.length}distance=0;direction=null;if(x==c.fingers||!p){y.x=z.x=d.pageX;y.y=z.y=d.pageY;if(c.swipeStatus)F(a,u)}else{E(a)}b.addEventListener(r,C,false);b.addEventListener(s,D,false)}var b=this;var v=a(this);var w=null;var x=0;var y={x:0,y:0};var z={x:0,y:0};var A={x:0,y:0};try{this.addEventListener(q,B,false);this.addEventListener(t,E)}catch(K){}})}	

})(jQuery);

/**************************************************************************
 * jquery.themepunch.kenburn.js - jQuery Plugin for kenburn Slider
 * @version: 1.3 (19.0.2012)
 * @requires jQuery v1.4 or later 
 * @author THEMEPUNCH
**************************************************************************/


(function($,undefined){	
	
	
	
	////////////////////////////
	// THE PLUGIN STARTS HERE //
	////////////////////////////
	
	$.fn.extend({
	
		
		// OUR PLUGIN HERE :)
		kenburn: function(options) {
	
		
			
		////////////////////////////////
		// SET DEFAULT VALUES OF ITEM //
		//////////////////////////////// 
		var defaults = {	
			width: 876, // width of banner
			height: 300, // height of banner						
			thumbWidth:90,
			thumbHeight:50,
			thumbAmount:6,
			thumbSpaces:4,
			thumbPadding:4,
			thumbStyle:"bullet",		// bullet, image,thumb,none
			bulletXOffset:0,
			bulletYOffset:0,
			shadow:'true',			
			timer:2000,
			touchenabled:"on",
			pauseOnRollOverThumbs:'off',
			pauseOnRollOverMain:'on',
			preloadedSlides:50,
			googleFonts:'PT+Sans+Narrow:400,700',
			googleFontJS:'http://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js',
			debug:"no"
			
		};
		
			options = $.extend({}, $.fn.kenburn.defaults, options);
		
				WebFontConfig = {
						google: { families: [ options.googleFonts ] },
						active: function() { jQuery('body').data('googlefonts','loaded');},
						inactive: function() { jQuery('body').data('googlefonts','loaded');}
					};
				
					
			return this.each(function() {
							
				
				var opt=options;
				if (opt.bulletXOffset==undefined) opt.bulletXOffset=0;
				if (opt.bulletYOffset==undefined) opt.bulletYOffset=0;
				
				// GOOGLE FONT HANDLING
				if (opt.googleFonts!=undefined && opt.googleFonts.length>0) {
					var wf = document.createElement('script');
					wf.src = opt.googleFontJS;
					wf.type = 'text/javascript';
					wf.async = 'true';
					var s = document.getElementsByTagName('script')[0];
					s.parentNode.insertBefore(wf, s);
					jQuery('body').data('googlefonts','wait');
				} else {
					jQuery('body').data('googlefonts','loaded');
				}
				
				
				opt.savedTimer=opt.timer;
				var top_container=$(this);
				
				// DEBUGGING INFORMATIONS HERE
				if (opt.debug==="on")
					$('body').append('<div class="khinfo" style="background:#fff;color:#000;width:300px;height:250px;position:fixed;left:10px;top:10px;"></div>');
				
				
				top_container.css({'width':opt.width+"px",'height':opt.height+"px"});
				
				top_container.append('<div class="kenburn-preloader"></div>');
				$('body').find('.khinfo').html('Start Slider');
				
				prepareSlidesContainer(top_container,opt);
				$('body').find('.khinfo').html('Prepared Container');
				
				prepareSlides(top_container,opt);
				$('body').find('.khinfo').html('Prepared Preloaded Slides');
				
				prepareShadows(top_container,opt);		
				$('body').find('.khinfo').html('Prepared Shadows');
				
				
								
				$('body').find('.khinfo').html('Waiting for Images...');
				opt.loadedImages=0;
				top_container.waitForImages(
					function() {   
						$('body').find('.khinfo').html('Preloaded Images has been loaded');
						var waitForWF = setInterval(function() {
										
											
												
												
												$('body').find('.khinfo').html('Waiting for Google Fonts');
											
											// IF THE GOOGLE FONT IS LOADED WE CAN START TO ROTATE THE IMAGES
											if ($('body').data('googlefonts') != undefined && $('body').data('googlefonts')=="loaded") {
											
												// CREATE THE THUMBNAILS HERE
												if (opt.thumbStyle=="image" || opt.thumbStyle=="both" || opt.thumbStyle=="thumb")
													createThumbnails(top_container,opt);				
												 
												if (opt.thumbStyle=="bullet" || opt.thumbStyle=="both")
													createBullets(top_container,opt);
													
													
												$('body').find('.khinfo').html('Google Fonts are here');
												clearInterval(waitForWF);
												startRotation(top_container,opt);
												$('body').find('.khinfo').html('Rotation Started');
												prepareRestSlides(top_container,opt);										
											}
										},10);				
					}, 
					function() {
						$('body').find('.khinfo').html(opt.loadedImages+'. Image has been Loaded');
						opt.loadedImages=opt.loadedImages+1;
					});
				
				
				
				startTimer(top_container,opt);
					
				// TOUCH ENABLED SCROLL
				if (opt.touchenabled=="on")
						
						top_container.swipe( {data:top_container, 
										swipeLeft:function() 
												{ 
													var newitem = top_container.data('currentSlide');	
													if (newitem.index()<opt.maxitem-1) {
														var next=top_container.find('ul li:eq('+(newitem.index()+1)+')');
													} else {
														var next=top_container.find('ul li:first');
													}
													swapBanner(newitem,next,top_container,opt);
												}, 
										swipeRight:function() 
												{
													var newitem = top_container.data('currentSlide');	
													if (newitem.index()>0) {
														var next=top_container.find('ul li:eq('+(newitem.index()-1)+')');
													} else {
														var next=top_container.find('ul li:eq('+(opt.maxitem-1)+')');
													}
													swapBanner(newitem,next,top_container,opt);
												}, 
									allowPageScroll:"auto"} );
			
			})
	}
})
		

		///////////////////////////////
		//  --  LOCALE FUNCTIONS -- //
		///////////////////////////////
		
					
					///////////////////////////////////////////
					//	--	Set the Containers of Slides --	 //
					///////////////////////////////////////////
					
					
					function prepareSlides(top,opt) {
						top.find('iframe').attr("frameborder",0);						
						top.find('ul').wrap('<div class="slide_mainmask" style="z-index:10;position:absolute;top:'+(opt.padtop)+'px;left:'+(opt.padleft)+'px;width:'+opt.width+'px;height:'+opt.height+'px;overflow:hidden"></div>');
						top.find('ul .slide_mainmask').css({'opacity':'0.0'});
						
						opt.maxitem=0;
						top.find('ul >li').each(function(i) {
							opt.maxitem=opt.maxitem+1;
							var $this=$(this);
							var img = $this.find('img:first');
							img.data('src',img.attr('src'));
							img.attr('src',"");
						});
						
						for (var i=0;i<opt.preloadedSlides;i++) {
								prepareSlide(top,opt,i);
						}
						if (opt.timerShow=="on")
							top.find('.slide_mainmask').append('<div class="kb-timer"></div>');
					}
					
					
					////////////////////////////////////
					// Prepare THe Rest of the Slides //
					///////////////////////////////////
					function prepareRestSlides(top,opt) {
						for (var i=opt.preloadedSlides;i<opt.maxitem;i++) {
								prepareSlide(top,opt,i);
								
						}
					}
					
					
					//////////////////////////////
					// PREPARE SLIDE ONE BY ONE //
					//////////////////////////////
					function prepareSlide(top,opt,nr) {						
						
						top.find('ul >li').each(function(i) {
							if (i==nr) {
										var $this = $(this);
										$this.find('.creative_layer').wrap('<div class="layer_container" style="position:absolute;left:0px;top:0px;width:'+opt.width+'px;height:'+opt.height+'px"></div>');
										$this.wrapInner('<div class="slide_container" style="z-index:10;position:absolute;top:0px;left:0px;width:'+opt.width+'px;height:'+opt.height+'px;overflow:hidden"><div class="parallax_container" style="position:absolute;top:0pxleft:0px"><div class="kb_container"></div></div></div>');
										
										var ie_old = ( $.browser.msie ) && ($.browser.version<9);
										
										// PREPARE THE BLACK AND WHITE IMAGES HERE
										if ($this.find('img:first').data('bw') != undefined && $this.find('img:first').data('bw').length>0 && !ie_old)
											$this.find('.kb_container').append('<img class="bw-main-image" src="'+$this.find('img:first').data('bw')+'" style="position:absolute;top:0px;left:0px">');
					
										$this.find('img:first').attr('src',$this.find('img:first').data('src'));
										/******************************* 
										################################
											THE STRUCTUE:
											
											->slide_container
												->parallax_container	
													->kb_container
										################################
										********************************/
										$this.find('.slide_container').css({'opacity':'0.0'});
										
										$this.find('.slide_container .parallax_container .kb_container .video_container').each(function() {
											var $this=$(this);
											$this.closest('.slide_container').append('<div class="kenburn-video-overlay"></div>');								
											$this.closest('.slide_container').append('<div class="kenburn-video-button"></div>');	
											
											$this.closest('.slide_container').data('video',1);
											
											var pbutton = $this.closest('.slide_container').parent().find('.kenburn-video-button');
											var over = $this.closest('.slide_container').parent().find('.kenburn-video-overlay');
											var _width  = parseInt(pbutton.css('width'),0);
											var _height = parseInt(pbutton.css('height'),0);
											var mwidth  = parseInt($this.closest('.slide_container').css('width'),0);
											var mheight = parseInt($this.closest('.slide_container').css('height'),0);
											
											pbutton.css({'left':(mwidth/2-_width/2)+'px','top':(mheight/2-_height/2)+'px'});
											pbutton.data('top',top);
											pbutton.data('url',$this.html());
											$this.remove();
											over.data('origopa',over.css('opacity'));
											
											
											// VIDEO IS DEFINED, SO HOVER ON VIDEO BUTTON SHOULD MAKE SOME EFFECT
											pbutton.hover(
													function() {
														
														var $this = $(this);																					
														var $over = $this.parent().find('.kenburn-video-overlay');											
														if ( $.browser.msie )
															$over.animate({'opacity':'0.5'},{duration:100});
														else
															$over.cssAnimate({'opacity':'0.5'},{duration:100});
														
														if ($.browser.version > 7 && $.browser.version < 9) {											
															$over.css({'display':'block'});
														}
													}, 
													function() {
														var $this = $(this);											
														var $over = $this.parent().find('.kenburn-video-overlay');
														
														if ( $.browser.msie )
															$over.animate({'opacity':$over.data('origopa')},{duration:100});
														else
															$over.cssAnimate({'opacity':$over.data('origopa')},{duration:100});
														
														if ($.browser.msie && $.browser.version > 7 && $.browser.version < 9) {												
															$over.css({'display':'none'});
														}
												});

												
											// VIDEO IS DEFINED, SO CLICK ON VIDEO BUTTON SHOULD START TO PLAY THE VIDEO HERE
											pbutton.click(
												function() {
													var $this=$(this);			
													var top=$this.data('top');
													var slidemask = top.find('.slide_mainmask');
													slidemask.addClass("videoon");
													top.data('currentSlide').animate({'top':opt.height+"px"},{duration:500,queue:false});										
													
													top.find('.slide_mainmask').append('<div class="video_container" style="z-index:9999;width:'+opt.width+'px;height:'+opt.height+'px">'+$this.data('url')+'</div>');
													var video = top.find('.slide_mainmask .video_container');
													video.css({'top':(0-opt.height)+"px"});
													video.animate({'top':'0px'},{duration:500,queue:false});		
											
													video.find('* .close').click(
														function() {
															
															var slidemask = top.find('.slide_mainmask');
															slidemask.removeClass("videoon");
															top.data('currentSlide').animate({'top':"0px"},{duration:600,queue:false});																																										
															video.animate({'top':(0-opt.height)+'px'},{duration:600,queue:false});		
															setTimeout(function() {video.remove()},600);
														});
												});
											
										});
								}
						});
					}
					
					
					////////////////////////////////////////////////
					//	--	BACKGROUND AND DEFAULT VALUES --	 //
					//////////////////////////////////////////////
					function prepareSlidesContainer(top,opt) {
						top.append('<div class="kenburn-bg" style="z-index:7;position:absolute;top:0px;left:0px;width:'+opt.width+'px;height:'+opt.height+'px;overflow:hidden"></div>');
				
						var bg=top.find('.kenburn-bg');
						opt.padtop = 0; opt.padleft=0; opt.padright=0; opt.padbottom=0;
						opt.bordertop = 0; opt.borderleft=0; opt.borderright=0; opt.borderbottom=0;
						
						
						try { opt.padtop=parseInt(bg.css('paddingTop'),0) || 0; } catch(e) {}
						try { opt.padleft=parseInt(bg.css('paddingLeft'),0) || 0; } catch(e) {}
						try { opt.padright=parseInt(bg.css('paddingRight'),0) || 0; } catch(e) {}
						try { opt.padbottom=parseInt(bg.css('paddingBottom'),0) || 0; } catch(e) {}
						
						
						try { opt.bordertop=parseInt(bg.css('border-top-width'),0) || 0; } catch(e) {}
						try { opt.borderleft=parseInt(bg.css('border-left-width'),0) || 0; } catch(e) {}
						try { opt.borderright=parseInt(bg.css('border-right-width'),0) || 0; } catch(e) {}
						try { opt.borderbottom=parseInt(bg.css('border-bottom-width'),0) || 0; } catch(e) {}
						
						opt.width = opt.width - opt.padleft - opt.padright - opt.borderleft - opt.borderright;
						opt.height = opt.height - opt.padtop - opt.padbottom - opt.bordertop - opt.borderbottom;
						
						
						
						bg.width(opt.width);
						bg.height(opt.height);
						
						var full = opt.width + opt.padleft + opt.padright + opt.borderleft + opt.borderright;
						top.closest('.kb_slider_wrapper').width(full);
					}
					
		
					////////////////////////////////////////////////
					//	--	ADD THE SHADOWS IN CASE WE NEED --	 //
					//////////////////////////////////////////////
					function prepareShadows(top,opt) {
					
						if (opt.shadow=="true" || opt.shadow==true || opt.shadow=="on") {
								// CALCULATE THE SIZES OF THE SHADOWS
								var full = opt.width + opt.padleft + opt.padright + opt.borderleft + opt.borderright;
								top.closest('.kb_slider_wrapper').width(full);
								var fifty = full/2;
								
								if (fifty>50) fifty=50;
								full = full - 2*fifty;
								
								
								// CREATE LEFT, MIDDLE AND RIGHT SHADOWS
								var leftshadow=$('<div class="kenburn-leftshadow" style="top:'+(1+opt.height+opt.padtop+opt.padbottom)+'px;left:0px;width:'+fifty+'px"></div>');
								var rightshadow=$('<div class="kenburn-rightshadow" style="top:'+(1+opt.height+opt.padtop+opt.padbottom)+'px"></div>');
								var repeatshadow=$('<div class="kenburn-repeatshadow" style="top:'+(1+opt.height+opt.padtop+opt.padbottom)+'px;left:'+fifty+'px;width:'+full+'px"></div>');
								
								
								// APPEND THE SHADOWS
								top.append(leftshadow);
								top.append(repeatshadow);
								top.append(rightshadow);
								
						} else {
							var thc=top.find('.kenburn_thumb_container');
								//alert(thc);
						}
					}
					
					
					
					///////////////////////////
					// CREATE THE THUMBNAILS //
					//////////////////////////
					function createThumbnails(top,opt) {
						
						var maxitem = top.find('ul >li').length;
						
						
						// CALCULATE THE MAX WIDTH OF THE THUMB HOLDER
						if (maxitem<opt.thumbAmount) opt.thumbAmount=maxitem;						
												
						var maxwidth = (opt.thumbAmount * opt.thumbWidth)	+ ((opt.thumbAmount-1) * opt.thumbSpaces);
						var maxheight = opt.thumbHeight;
						
						var bgwidth = maxwidth-opt.thumbSpaces + 2*opt.thumbPadding;
						var bgheight = maxheight + opt.thumbPadding;
						var full = opt.width + opt.padleft + opt.padright + opt.borderleft + opt.borderright;
						top.closest('.kb_slider_wrapper').width(full);
						var centerl = Math.round(full /2 - bgwidth/2);

						var max= (maxitem * opt.thumbWidth)	+ ((maxitem-1) * opt.thumbSpaces);
						
						
						// CREATE THE BACKGROUND 1 PIXEL ROUND BG 
						top.append('<div class="kenburn_thumb_container" style="position:absolute;left:'+centerl+'px;top:'+(1+opt.height+opt.padtop+opt.padbottom)+'px;width:'+(bgwidth+2)+'px;height:'+(bgheight+2)+'px;"></div>');
						
						// CREATE THE WHITE HOLDER
						var thc=top.find('.kenburn_thumb_container');

						
						if (opt.thumbAmount==0) thc.css({'visibility':'hidden'});
						thc.append('<div class="kenburn_thumb_container_bg" style="position:absolute;left:1px;top:0px;width:'+(bgwidth)+'px;height:'+(bgheight)+'px"></div>');
						
						// CHROME HACK
						var is_chrome = /chrome/.test( navigator.userAgent.toLowerCase() );							
						
						
						thc.find('.kenburn_thumb_container_bg').append('<div class="kenburn-repeatshadow" style="top:0px;left:'+(-2)+'px;width:'+(bgwidth+4)+'px"></div>');
						
						// CREATE THE MASK INSIDE
						thc.append('<div id="thumbmask" style="overflow:hidden;position:absolute;top:0px;left:'+(opt.thumbPadding+1)+'px; width:'+(maxwidth-opt.thumbSpaces)+'px;	height:'+opt.thumbHeight+'px;overflow:hidden;"></div>');					
						var thma=thc.find('#thumbmask');							
	
						// CREATE THE SLIDER CONTAINER
						thma.append('<div class="thumbsslide" style="width:'+max+'px"></div>');										
						var thbg=thma.find('.thumbsslide');
						
						
						
						/**********************************************
						##############################################
								STRUCTURE OF THUMBNAILS
							
							->.kenburn_thumb_container
									->#thumbmask
										->.thumbsslide
											->thumb (thumb"i")
							->.kenburn_thumb_container_bg
							
						##############################################
						*********************************************/
											
						// GO THROUGHT THE ITEMS, AND CREATE AN THUMBNAIL AS WE NEED
						top.find('ul >li').each(function(i) {
									
									var $this=$(this);
									
									// READ OUT THE DATA INFOS
									var img=$this.find('img:first');
									var bgsrc=img.data('thumb_bw');
									var src=img.data('thumb');
									var isvideo = $this.find('.slide_container').data('video')==9; //1
									
									// CREATE THE THUMBS
									var thumb=$('<div class="kenburn-thumbs" id="thumb'+i+'" style="cursor:pointer;position:absolute;top:0px;left:'+((i*opt.thumbWidth)+((i-1)*opt.thumbSpaces))+'px;width:'+opt.thumbWidth+'px;height:'+opt.thumbHeight+'px;background:url('+bgsrc+');"></div>');
																	
									thumb.data('id',i);
									
									if (i==maxitem)	thumb.css({'margin-right':'0px'});							
							
									thbg.append(thumb);
																		
									// CREATE THE IMG ON IT
									var new_img=$('<div id="over" style="cursor:pointer"><img id="over_img" src="'+src+'"></div>');
									thumb.append(new_img);									
									var ovv=thumb.find('#over');
									
									ovv.css({'opacity':'0.0'});
									
									if ($.browser.msie && $.browser.version > 7 && $.browser.version < 9) {
										//ovv.css("filter","alpha(opacity=0)");
										ovv.css({'display':'none'});
									}
									
									
									ovv.css({'overflow':'hidden','position':'absolute','left':'0px','opacity':'0.0','height':opt.thumbHeight+"px",'width':opt.thumbWidth+"px"});
									ovv.find('img').css({'position':'absolute','left':'0px'});
									
									if ( $.browser.msie ) {
										ovv.animate({'left':'0px','opacity':'0.0','height':opt.thumbHeight+"px",'width':opt.thumbWidth+"px"},{duration:50,queue:false});
										ovv.find('img').animate({'left':'0px'},{duration:50,queue:false});
										
									} else {
										ovv.cssAnimate({'left':'0px','opacity':'0.0','height':opt.thumbHeight+"px",'width':opt.thumbWidth+"px"},{duration:50,queue:false});
										ovv.find('img').cssAnimate({'left':'0px'},{duration:50,queue:false});
									}
									
									
										 
									// ADD SHADOWS
									if (opt.shadow=="true" || opt.shadow==true || opt.shadow=="on") {
										var is_chrome = /chrome/.test( navigator.userAgent.toLowerCase() );							
										if (!is_chrome) {
											var repeatshadow=$('<div class="kenburn-repeatshadow" style="position:relative;margin-left:0px;width:'+opt.thumbWidth+'px;"></div>');
											thumb.append(repeatshadow);
										}
									}
									
									
									///////////////////////////////////////
									// SHOW THE COLORED THUMBNAIL HERE  //
									//////////////////////////////////////
									var thumbnail = thbg.find('#thumb'+i);
									thumbnail.hover(
										function() {
											var $this=$(this).find('#over');
											
											if (!$this.parent().hasClass("selected")) {												
													//$this.stop();									
													if ( $.browser.msie ) {
														if ($.browser.msie && $.browser.version > 7 && $.browser.version < 9)
																$this.css({'display':'block'});
															else
																$this.animate({'opacity':'1.0'},{duration:300,queue:false});												
														
													 } else {														
														$this.css({'left':'0px','display':'block'});
														$this.find("img").css({'display':'block','opacity':'1.0','left':'0px'});												
														$this.cssAnimate({'opacity':'1.0'},{duration:300,queue:false});
														
													}
											}
										},
										function() {
											var $this=$(this).find('#over');
											
											if (!$this.parent().hasClass("selected")) {
												if ( $.browser.msie ) {
																									
													if ($.browser.msie && $.browser.version > 7 && $.browser.version < 9)
														$this.css({'display':'none'});
													else
														$this.animate({'opacity':'0'},{duration:300,queue:false});												
													
												 } else {
													$this.cssAnimate({'opacity':'0.0'},{duration:300,queue:false});
												}
											}
										});
									
									thumbnail.click(function() {
										var $this=$(this);
										if (!$this.hasClass("selected")) {
											var newslide = top.find('ul li:eq('+$this.data('id')+')');										
											swapBanner(top.data('currentSlide'),newslide,top,opt);
										}
									});
									
									
								
							});
							
							
							
							////////////////////////							
							// SLIDE TO POSITION  //
							////////////////////////							
							if (maxwidth<max) {
								$(document).mousemove(function(e) {
									$('body').data('mousex',e.pageX);							
								});
								
								var diff=(max- maxwidth);								
								top.data('thumbnailmaxdif',diff);
								
								
								
								var steps = diff / (maxwidth-opt.thumbWidth);
								
								
								thma.data('steps',steps);				
								thma.data('thw',opt.thumbWidth);		
								thma.data('maxw',diff);
								
								
								// ON MOUSE MOVE ON THE THUMBNAILS EVERYTHING SHOULD MOVE :)
								
								thma.mouseenter(function() {
									var $this=$(this);
										if (opt.pauseOnRollOverThumbs != "off")
											$this.addClass('overme');
										
										var offset = $this.offset();
										var x = $('body').data('mousex')-offset.left;
										x=x-$this.data('thw')/2;
										
										// STEPS AND ETC
										var steps=$this.data('steps');												
										
										//ANIMATE TO POSITION
										var pos=(0-steps*x);

										if (pos>0) pos =0;						
										if (pos<0-diff) pos=0-diff;
										if (opt.pauseOnRollOverMain != "off")
											$this.addClass("overon");
										$this.find('.thumbsslide').css({'position':'absolute'});
										
										if ( $.browser.msie ) 
											$this.find('.thumbsslide').animate({'left':pos+'px'},{duration:200,queue:false});										
										else
											$this.find('.thumbsslide').cssAnimate({'left':pos+'px'},{duration:200,queue:false});										
										
								});
								
								thma.mousemove(function() {										
										var $this=$(this);
										if (opt.pauseOnRollOverThumbs != "off")
											$this.addClass('overme');
										
										var offset = $this.offset();
										var x = $('body').data('mousex')-offset.left;
										x=x-$this.data('thw')/2;
										
										// STEPS AND ETC
										var steps=$this.data('steps');												
										
										//ANIMATE TO POSITION
										var pos=(0-steps*x);

										if (pos>0) pos =0;						
										if (pos<0-diff) pos=0-diff;
										
										if (!$this.hasClass("overon")) {
											$this.find('.thumbsslide').css({'position':'absolute'});
											//$this.find('.thumbsslide').stop();
											if ( $.browser.msie ) 
												$this.find('.thumbsslide').animate({'left':pos+'px'},{duration:0,queue:false});										
											else
												$this.find('.thumbsslide').cssAnimate({'left':pos+'px'},{duration:0,queue:false});										
										} else {
											setTimeout(function() {$this.removeClass('overon');},100);
										}
								});
								
								thma.mouseout(function() {
									var $this=$(this);
									$this.removeClass('overme');
										
								});
							}
							
							// ADDED FROM PARADIGM !!!
							if ( opt.thumbAmount==0 || opt.thumbStyle=="none") {
								thc.css({'visibility':'hidden'});
								top.css({'width':full+"px"});
							} else {
								top.css({'width':full+"px",'height':(opt.height+bgheight)+"px"});
							}
					}
					
		
					///////////////////////////
					// CREATE THE BULLETS //
					//////////////////////////
					function createBullets(top,opt) {
						
						var maxitem = top.find('ul >li').length;
						
											
						// CALCULATE THE MAX WIDTH OF THE THUMB HOLDER
						var full = opt.width + opt.padleft + opt.padright;
						
						// Create BULLET CONTAINER
						top.append('<div class="thumbbuttons"><div class="grainme"><div class="leftarrow"></div><div class="thumbs"></div><div class="rightarrow"></div></div></div>');
						var leftb = top.find('.leftarrow');
						var rightb = top.find('.rightarrow');
						
						
						rightb.click(function() 
												{ 
													var newitem = top.data('currentSlide');	
													if (newitem.index()<opt.maxitem-1) {
														var next=top.find('ul li:eq('+(newitem.index()+1)+')');
													} else {
														var next=top.find('ul li:first');
													}
													swapBanner(newitem,next,top,opt);
												});
						leftb.click(function() 
												{
													var newitem = top.data('currentSlide');	
													if (newitem.index()>0) {
														var next=top.find('ul li:eq('+(newitem.index()-1)+')');
													} else {
														var next=top.find('ul li:eq('+(opt.maxitem-1)+')');
													}
													swapBanner(newitem,next,top,opt);
												});
									
						var minithumbs = top.find('.thumbs');
						
								
						
						
						// GO THROUGHT THE ITEMS, AND CREATE AN THUMBNAIL AS WE NEED
						top.find('ul >li').each(function(i) {
									
									var $this=$(this);
									
						
									var thumb_mini=$('<div class="minithumb" id="minithumb'+i+'"></div>');
									

									thumb_mini.data('id',i);
									minithumbs.append(thumb_mini);
																											
									thumb_mini.click(function() {
										var $this=$(this);
										if (!$this.hasClass("selected")) {
											var newslide = top.find('ul li:eq('+$this.data('id')+')');										
											swapBanner(top.data('currentSlide'),newslide,top,opt);
										}
									});
								
							});
							
							minithumbs.waitForImages(function() {
								
								var tp = parseInt(minithumbs.parent().parent().position().top,0);							
								minithumbs.parent().parent().css({'top':(tp+opt.bulletYOffset)+"px",'left':((full/2 - parseInt(minithumbs.parent().width(),0)/2)+opt.bulletXOffset)+"px"});
								
							});
							
							
							
					}
						
					/////////////////////////////////////////////
					// - START THE ROTATION OF THE BANNER HERE //
					/////////////////////////////////////////////						
					function startRotation(item,opt) {
						if ( $.browser.msie ) {
							item.find('.kenburn-preloader').animate({'opacity':'0.0'},{duration:300,queue:false});
							
						} else {
							item.find('.kenburn-preloader').cssAnimate({'opacity':'0.0'},{duration:300,queue:false});
						}
						setTimeout(function() {item.find('.kenburn-preloader').remove();},300);
						var first_slide = item.find('ul li:first') ;
						swapBanner(first_slide,first_slide,item,opt);	
						startParallax(item,opt);
						opt.loaded=1;
						
					}
					
					
					
					
					/////////////////////////////////
					// - START THE PARALLAX EFFECT //
					////////////////////////////////						
					function startParallax(slidertop,opt) {
												
						// FIND THE RIGHT OBJECT 
						var top = slidertop.find('.slide_mainmask');
												
						// SET WIDTH AND HEIGHT
						top.data('maxwidth',opt.width+opt.padleft+opt.padright);
						top.data('maxheight',opt.height+opt.padtop+opt.padbottom);
						top.data('pdistance',opt.parallaxX);
						top.data('pdistancey',opt.parallaxY);
						top.data('cdistance',opt.captionParallaxX);
						top.data('cdistancey',opt.captionParallaxY);
						top.data('opt',opt);
						
						// SOME HELP DIV IF WE NEED TO DEBUG //
								//top.append('<div style="z-index:1000000;opacity:0.3;background-color:#ff0000;width:'+opt.width+'px;height:'+opt.height+'px;position:absolute"></div>');						
						$('body').append('<div id="mpinfo" style="z-index:1000000;background-color:#fff;position:absolute;top:10px;left:10px;font-size:15px"></div>');
						
						
						// KEN BURN ANIMATION
						var slide = top.parent().data('currentSlide');							
						var par = top.find('.parallax_container');
						var layers = slide.find('.layer_container');
						
						
						// THE FIRST MOUSE OVER ON THE TOP
						top.mouseenter(function(e) {							
							var $this = $(this);			
							// FIND THE RIGHT THUMBNAIL HOLDER OBJECT
							var thma = $this.parent().find('.kenburn_thumb_container #thumbmask');
							
							// IF MOUSE IS NOT OVER THE THUMBS AND START ANIMATION NOT RUNNING															
								var slide = $this.parent().data('currentSlide');							
								var par = slide.find('.parallax_container');
								var layers = slide.find('.layer_container');
								
								
									$this.addClass('overon');
								if( opt.pauseOnRollOverMain == 'on' ) {				
									$this.append('<div class="kb-pause"></div>');
								}
								
						});
						
						// BACK TO CENTER AFTER LEAVE
						top.mouseleave(function(e) {							
							var $this = $(this);																			
								var slide = $this.parent().data('currentSlide');							
								var par = slide.find('.parallax_container');
								var layers = slide.find('.layer_container');
								$this.removeClass("overme");		
								
								
									$this.addClass('overon');
								if( opt.pauseOnRollOverMain == 'on' ) {		
									$this.find('.kb-pause').remove();
								}
						});
						
						// HERE COME THE DIRECT PARALLAX HANDLING FOR QUICK ANIMATIONS
						top.mousemove(function(e) {
						
							var $this = $(this);	
							if (opt.pauseOnRollOverMain != "off") 
								$this.addClass("overme");
							// FIND THE RIGHT THUMBNAIL HOLDER OBJECT							
							var thma = $this.parent().find('.kenburn_thumb_container #thumbmask');
							
							// IF MOUSE IS NOT OVER THE THUMBS AND START ANIMATION NOT RUNNING
							if (!thma.hasClass('overme') && !$this.hasClass('overon')) {
									
									
									var slide = $this.parent().data('currentSlide');							
									var par = slide.find('.parallax_container');
									var layers = slide.find('.layer_container');																		
									
								
							} else {
								
								setTimeout(function() {$this.removeClass('overon')},100);
							}
						});
						
						
					
					}
						
						
					/////////////////////////////
					// RANDOM ALIGN GENERATOR //
					////////////////////////////
					function randomAlign() {
						
						var align="";
						var a=Math.floor(Math.random()*3);
						var b=Math.floor(Math.random()*3);
						
						if (a==0) align="left"; 
							else
								if (a==1) align="center" 
									else
										align="right";
						
						if (b==0) align=align+",top" 
							else
								if (b==1) align=align+",center" 
									else
										align=align+",bottom";
						return align;
					}
										
					////////////////////////////////////////////////////
					// - THE BANNER SWAPPER, ONE AGAINST THE OTHER :) //
					////////////////////////////////////////////////////
					function swapBanner(item,newitem,slider_container,opt) {
											
							var trans=false;
							
							slider_container.find('ul >li').each(function(i) {
								var $this=$(this);
								
								if ($this.index() !=item.index() && $this.index() !=newitem.index()) {
									$this.css({'display':'none','position':'absolute','left':'0px','z-index':'994'});									
								}
							});
							
									
							var video = slider_container.find('.slide_mainmask .video_container');														
							setTimeout(function() {video.remove()},600);
							
							var slidemask = slider_container.find('.slide_mainmask');
							slidemask.removeClass("videoon");
							
							item.css({'position':'absolute','top':'0px','left':'0px','z-index':'900'});
							newitem.css({'position':'absolute','top':'0px','left':'0px','z-index':'1000'});
							newitem.css({'display':'block'});

							//Lets find the Image 
							var sour=newitem.find('img:first');
							var sourbw=newitem.find('.bw-main-image');
							
							
							// Lets Save the Size of the IMG first in the DATA
							if (newitem.data('ww') == undefined) {
								var oldW=newitem.find('img').width();			//Read out the Width					
								var oldH=newitem.find('img').height();			//Read out the Width					
								if (oldW!=0) {									// If the Width is not 0 (the image is loaded)
									
									// Let See if the KenBurn Img is smaller than the stage (width). If yes, we need to scale it first ! 
									if (sour.width()>0 && sour.width()<opt.width) {														
										var factor=opt.width / oldW;														
										oldW=oldW*factor;
										oldH=oldH*factor;														
										
									}
																
									// Let See if the KenBurn IMG is smaller then the stage height). If yes, we need to scale it first !!
									if (sour.height()>0 && sour.height()<opt.height) {														
										var factor=opt.height / oldH;														
										oldW=oldW*factor;
										oldH=oldH*factor;																								
									}
									
									newitem.data('ww',oldW);
									newitem.data('hh',oldH);
								}
							} else {
								
								var oldW = newitem.data('ww');
								var oldH = newitem.data('hh');
							}
							
							
							
							// Create the Standard Values
							var newT=0;
							var newL=0;
							var endT=0;
							var endL=0;
							
							var startalign = newitem.data('startalign');
							var endalign = newitem.data('endalign');

							if (startalign=="random") startalign = randomAlign();							
							if (endalign=="random") endalign = randomAlign();							
							
							// Lets Compute the Start Position here depending on the Start Align
							if (startalign != undefined) {	
								

								var salignh = startalign;								
								var horiz = salignh.split(',')[0];
								var vert = salignh.split(',')[1];
							
								
								if (horiz == "left") newL=0;
								 else 
									if (horiz == "center") newL=(opt.width/2 - oldW/2);
									   else
										 if (horiz == "right") newL= 0 - Math.abs(opt.width - oldW);	
								
								if (vert == "top") newT=0;
								 else 
									if (vert == "center") newT=(opt.height/2 - oldH/2);
									   else
										 if (vert == "bottom") newT= 0 - Math.abs(opt.height - oldH);										 
							}
							
							
							// Lets compute the End Positions depending on the End Align
							if (endalign != undefined) {		
								
								var ealignh = endalign;								
								var horiz = ealignh.split(',')[0];
								var vert = ealignh.split(',')[1];
								
								if (horiz == "left") endL=0;
								 else 
									if (horiz == "center") endL=(opt.width/2 - oldW/2);
									   else
										 if (horiz == "right") endL= 0 - Math.abs(opt.width - oldW);	
								
								if (vert == "top") endT=0;
								 else 
									if (vert == "center") endT=(opt.height/2 - oldH/2);
									   else
										 if (vert == "bottom") endT= 0 - Math.abs(opt.height - oldH);										 
							}
							
							
							
							// Remove the Interval of the old item. So it do not disturb the CPU any more
							clearInterval(item.data('interval'));
							
							
							
														
							sour.parent().find('.canvas-now').remove();
							sour.parent().find('.canvas-now-bw').remove();
							
							// CHECK THE CANVAS SUPPORT HERE
							var hasCanvas=isCanvasSupported();
							var isIEunder9 = $.browser.msie && $.browser.version < 9;
							
							if (isIEunder9) hasCanvas=false;
							
							
							// IF THERE IS CANVAS AVAILABLE, WE CAN CREATE A CANVAS HERE....
							if (hasCanvas) {
								sour.parent().append('<div style="position:absolute;z-index:1" class="canvas-now"><canvas class="canvas-now-canvas" width="'+oldW+'" height="'+oldH+'"></canvas></div>');
								sour.css({'display':'none'});
								var canvas=sour.parent().find('.canvas-now-canvas')[0];
								var context = canvas.getContext('2d');
								
								if (sourbw.length>0) {
									sour.parent().append('<div style="position:absolute;z-index:20" class="canvas-now-bw"><canvas class="canvas-now-canvas-bw" width="'+oldW+'" height="'+oldH+'"></canvas></div>');
									sourbw.css({'display':'none'});
									var canvasbw=sour.parent().find('.canvas-now-canvas-bw')[0];
									var contextbw = canvasbw.getContext('2d');
						        }
							} else {
								
								
							}
														
							
							// LETS GET THE TIME 
							var time=newitem.data('panduration');
							
							// DEFAULT VALUES FOR SCALING AND MOVING THE IMAGE
							var scalerX=0;
							var scalerY=0;
							var newW=oldW;
							var newH=oldH;
							
							// READ OUT THE ZOOMFACTOR
							var zoomfact=newitem.data('zoomfact')
							var zoom = newitem.data('zoom');
							
							if (zoom=="random") {
								if (Math.floor(Math.random()*2) == 0) zoom="out" 
									else 
										zoom="in";
							}
							
							if (newitem.data('zoomfact')=="random") {
								zoomfact=(Math.random()*1 + 1);
							}
							
							
							// IF WE ZOOM OUT, WE NEED TO RESET THE ZOOM FIRST TO "BIG"
							if (zoom == "out") {						
								newW=newW*zoomfact;
								newH=newH*zoomfact;
								newL=newL*zoomfact;
								newT=newT*zoomfact;
							}
							
							// NOW LETS CALCULATE THE STEPS HERE
							var movX = (endL-newL) / (time*25);
							var movY = (endT-newT) / (time*25);
							
							
							
							var opaStep = 1/(time*25);
							// STANDARD ZOOM STEPS
							scalerX=(oldW*zoomfact) / (time*25)/10;
							scalerY=(oldH*zoomfact) / (time*25)/10;															
							
							// IF ZOOM OUT, WE INVERT THE ZOOM STEPS
							if (zoom == "out") {							
								scalerX=scalerX*-1;
								scalerY=scalerY*-1;
							} 
							
							
							// Lets compute the End Zoom Offsets depending on the End Align
							if (newitem.data('endalign') != undefined) {																
								var ealignh = newitem.data('endalign');								
								var horiz = ealignh.split(',')[0];
								var vert = ealignh.split(',')[1];
								
								if (horiz == "left") movX = movX + scalerX/4;
								 else 
									if (horiz == "center") movX = movX - scalerX/2;
									   else
										 if (horiz == "right") movX = movX - scalerX;	
								
								if (vert == "top") movY = movY + scalerY/4;
								 else 
									if (vert == "center") movY = movY - scalerY/2;
									   else
										 if (vert == "bottom") movY = movY - scalerY;
							}
							
							
							
							
							
							// IF THE TIMER IS SMALLER THAN THE BASIC TIMER, THAN THE MAIN TIMER NEED TO BE REDUCED TO 
							if (opt.timer>parseInt(newitem.data('panduration'),0)*10) {
								opt.timer=parseInt(newitem.data('panduration'),0)*10 
							} else {
								opt.timer=opt.savedTimer*10;
								
							}
							
							if (hasCanvas) {
								context.drawImage(sour[0],newL,newT,newW,newH);
								if (sourbw.length>0) {		
										contextbw.drawImage(sourbw[0],newL,newT,newW,newH);
										setTimeout(function() {
											sour.parent().find('.canvas-now-bw').cssAnimate({'opacity':'0.0'},{duration:newitem.data('colortransition')*1000,queue:false});
										},500);
										
								}
							} 
							
							sour.cssStop(true,true);
							sourbw.cssStop(true,true);
							
							sour.css({	'position':'absolute',
										'left':newL+"px",
										'top':newT+"px",
										'width':newW+"px",
										'height':newH+"px",
										'opacity':1.0});
										
							sourbw.css({'position':'absolute',
										'left':newL+"px",
										'top':newT+"px",
										'width':newW+"px",
										'height':newH+"px",
										'opacity':1.0});
							
							var oldL = newL;
							var oldT = newT;
							var oldWW = newW;
							step=0;
							// NOW WE CAN CREATE AN INTERVAL, WHICH WILL SHOW 25 FRAMES PER SEC (TO MINIMIZE THE CPU STEPS)
							newitem.data('interval',setInterval(function() {								
								if (!slider_container.parent().parent().find('.kenburn_thumb_container #thumbmask').hasClass('overme') && !slider_container.find('.slide_mainmask').hasClass('overme') && !slider_container.find('.slide_mainmask').hasClass('videoon')) {
									
									newW=newW+scalerX;		//CHANGE THE SCALING PARAMETES
									newH=newH+scalerY;									
									
									newL=newL+movX;			// MOVE THE POSITION OF THE IMAGES 
									newT=newT+movY;
									
									if (newL>0) newL=0;
									if (newT>0) newT=0;
									if (newL<(opt.width - newW)) newL=opt.width-newW;
									if (newT<(opt.height - newH)) newT=opt.height-newH;
									
									if (hasCanvas) {																			
										context.drawImage(sour[0],newL,newT,newW,newH);
										if (sourbw.length>0) contextbw.drawImage(sourbw[0],newL,newT,newW,newH);										
									} else {
											
												var s=newW/oldWW;
												var p1=newL - oldL;
												var p2=newT - oldT;
												 
												 if( jQuery.browser.msie ) {
													 
													   sour.css({'filter': 'progid:DXImageTransform.Microsoft.Matrix(FilterType="bilinear",M11=' + s + ',M12=0,M21=0,M22=' + s + ',Dx=' + p1 + ',Dy=' + p2 + ')'});
													   sour.css({'-ms-filter': 'progid:DXImageTransform.Microsoft.Matrix(FilterType="bilinear",M11=' + s + ',M12=0,M21=0,M22=' + s + ',Dx=' + p1 + ',Dy=' + p2 + ')'});
													   sourbw.remove();
													
												 } else {
									
														sour.cssAnimate({	'left':newL+"px",
																			'top':newT+"px",
																			'width':newW+"px",
																			'height':newH+"px"},
																		{ duration:38, easing:'linear',queue:false});
														
														if (sourbw.length>0 && sourbw.css('opacity')>0) {				
															sourbw.cssAnimate({	'left':newL+"px",
																				'top':newT+"px",
																				'width':newW+"px",
																				'height':newH+"px"},
																			{ duration:38, easing:'linear',queue:false});														
															sourbw.css({'opacity':(sourbw.css('opacity')-opaStep)});
														}
												}
										
									}
								}
							},40));
							
							var is_chrome = /chrome/.test( navigator.userAgent.toLowerCase() );							
							
							if(is_chrome && opt.repairChromeBug=="on") {
								newitem.data('transition','slide');
							}
							
							if (item.index()!=newitem.index()) {
								setTimeout(function() {
									item.find('.canvas-now').css({'visibility':'hidden'});
									item.find('.canvas-now-bw').css({'visibility':'hidden'});
								},550);
							}
							
							// TRANSITION OF THE SLIDES
							if (newitem.data('transition')=="slide") {
									if (trans==false) {
												var left=true;																				
												if (item.index()>newitem.index()) left = false;
												
												if (left) {		
													
													video.animate({'left':(0-opt.width)+'px'},{duration:600,queue:false});																												
													newitem.find('.slide_container').stop(true,true);
													newitem.find('.slide_container').css({'opacity':'1.0','left':opt.width+"px"});
													//setTimeout(function() {
														//if ( $.browser.msie )  {
															item.find('.slide_container').animate({'left':0-opt.width+'px'},{duration:600,queue:false});
															newitem.find('.slide_container').animate({'left':'0px','top':'0px','opacity':'1.0'},{duration:600,queue:false});
														/*} else {
															item.find('.slide_container').cssAnimate({'left':0-opt.width+'px'},{duration:600,queue:false});
															newitem.find('.slide_container').cssAnimate({'left':'0px','top':'0px','opacity':'1.0'},{duration:600,queue:false});
														}*/
													//},600);
													
													
														
													
												} else {
												
													video.animate({'left':(opt.width)+'px'},{duration:600,queue:false});
													newitem.find('.slide_container').stop(true,true);
													newitem.find('.slide_container').css({'opacity':'1.0','position':'absolute','top':'0px','left':0-opt.width+'px'});	
													
													//if ( $.browser.msie )  {
														item.find('.slide_container').animate({'left':opt.width+'px'},{duration:600,queue:false});											
														newitem.find('.slide_container').animate({'left':'0px','top':'0px','opacity':'1.0'},{duration:600,queue:false});
													//} else {
														//item.find('.slide_container').cssAnimate({'left':opt.width+'px'},{duration:600,queue:false});											
														//newitem.find('.slide_container').cssAnimate({'left':'0px','top':'0px','opacity':'1.0'},{duration:600,queue:false});
													//}
													
													
													
													
												}
										}
							} else {																								
								//if ( $.browser.msie ) 
									item.find('.slide_container').stop(true,true);
									item.find('.slide_container').animate({'opacity':0},{duration:600,queue:false});	
								//else
									//item.find('.slide_container').cssAnimate({'opacity':'0'},{duration:600,queue:false});	
								
								video.animate({'opacity':'0.0'},{duration:600,queue:false});		
								
								
								//if ( $.browser.msie ) 
									newitem.find('.slide_container').stop(true,true);
									newitem.find('.slide_container').css({'opacity':0,'left':'0px','top':'0px'});								
									newitem.find('.slide_container').animate({'opacity':1},{duration:600,queue:false});
								//else
									//newitem.find('.slide_container').cssAnimate({'opacity':'1.0'},{duration:600,queue:false});
							}
							
							
							
						// SET THE THUMBNAIL
						
						if (slider_container.find('.kenburn_thumb_container').length>0) {
								var thumb = slider_container.find('.kenburn_thumb_container #thumbmask .thumbsslide #thumb'+newitem.index()+' #over');
							
								slider_container.find('.kenburn_thumb_container #thumbmask .thumbsslide #thumb'+item.index()).each(function(i) {						
										var $this=$(this);								
										if ($this.attr('id')!="thumb"+newitem.index()) {
											
											$this.removeClass('selected');																
											var over=$this.find('#over');
											over.stop();		
											over.css({'position':'absolute','opacity':'0.0'});
											setTimeout(function() {
												over.find('img').css({'position':'absolute','left':'0px'});
											},30);
											
											
											if ( $.browser.msie ) { 												
												over.animate({'left':'0px','height':opt.thumbHeight+"px",'width':opt.thumbWidth+"px"},{duration:1,queue:false});										
											} else {
												over.cssAnimate({'left':'0px','height':opt.thumbHeight+"px",'width':opt.thumbWidth+"px"},{duration:1,queue:false});
											}
											
											if ($.browser.msie && $.browser.version > 7 && $.browser.version < 9)
												over.css({'display':'none'});
											
										} 
								});
								
								thumb.parent().addClass('selected');
								thumb.animate({'opacity':'1.0'},{duration:300,queue:false});
								if ($.browser.msie && $.browser.version > 7 && $.browser.version < 9)
									thumb.css({'display':'block'});
						
						
						
								// SET THE CURRENT ITEM IN DATA
								
								slider_container.data('currentThumb',thumb);
						} 
						
						if (slider_container.find('.minithumb').length>0) {
							var thumb = slider_container.find('#minithumb'+newitem.index());
							slider_container.find('.minithumb').removeClass('selected');
							thumb.addClass('selected');
							if (opt.thumbStyle!="both") slider_container.data('currentThumb',thumb);
						}
						
						//SAVE THE LAST SLIDE
						slider_container.data('currentSlide',newitem);								
						
						// START 
						textanim(newitem,100,slider_container);
						opt.cd=0;
																
					}
					
				
				
				//////////////////////////////////////////
				// CHECK IF CANCAS (HTML5) IS SUPPORTED //
				//////////////////////////////////////////
				function isCanvasSupported(){
				  var elem = document.createElement('canvas');
				  return !!(elem.getContext && elem.getContext('2d'));
				}

				
				
				////////////////////////////////////
				// AUTOMATIC COUNTDOWN FOR SLIDER //
				////////////////////////////////////
				function startTimer(top,opt) {
					opt.cd=0;
					
					if (opt.thumbStyle=="image" || opt.thumbStyle=="both" || opt.thumbStyle=="thumb") {
										//opt.timer=opt.timer*10;
										if ( $.browser.msie ) 									
											top.find('.kenburn_thumb_container #thumbmask .thumbsslide').cssAnimate({'left':'0px'},{duration:300,queue:false});
										else
											top.find('.kenburn_thumb_container #thumbmask .thumbsslide').animate({'left':'0px'},{duration:300,queue:false});
										var tmask = top.find('.kenburn_thumb_container #thumbmask');
										var tslide = tmask.find('.thumbsslide');
										
										var slidemask = top.find('.slide_mainmask');
										
										// HIER COMES THE INTERVAL ES IT SHOULD
										setInterval(function() {
											if (opt.loaded==1) {
												var newitem = top.data('currentSlide');							
												var thumb = top.data('currentThumb');
												
												if (!tmask.hasClass('overme') && !slidemask.hasClass('overme') && !slidemask.hasClass('videoon')) {
																
																opt.cd=opt.cd+1;
																
																var offsetme = Math.floor(opt.thumbWidth * ((opt.cd/opt.timer)))
																
																
																try{
																
																	top.find('.kb-timer').animate({'width':(opt.cd/opt.timer*100)+"%"},{duration:100,queue:false});
																} catch(e) {}
																
																	
																
																
																if (opt.cd==opt.timer) {
																	opt.cd=0;
																	
																	if (newitem.index()<opt.maxitem-1) {
																		var next=top.find('ul li:eq('+(newitem.index()+1)+')');
																		swapBanner(newitem,next,top,opt);
																		var minus = 0-parseInt(thumb.parent().css('left'),0);
																		tslide.css({'position':'absolute'});
																		if (Math.abs(minus)<=top.data('thumbnailmaxdif')) {							
																			if ( $.browser.msie ) 											
																				tslide.animate({'left':minus+'px'},{duration:300,queue:false});
																			else
																				tslide.cssAnimate({'left':minus+'px'},{duration:300,queue:false});
																		} else {
																			minus = 0-top.data('thumbnailmaxdif');							
																			if ( $.browser.msie ) 																					
																				tslide.animate({'left':minus+'px'},{duration:300,queue:false});
																			else
																				tslide.cssAnimate({'left':minus+'px'},{duration:300,queue:false});
																		}
																		
																	} else {
																		swapBanner(newitem,top.find('ul li:first'),top,opt);	
																		if ( $.browser.msie ) 																					
																			tslide.animate({'left':'0px'},{duration:300,queue:false});
																		else
																			tslide.cssAnimate({'left':'0px'},{duration:300,queue:false});
																		
																	}
																	
																	

																}
													}
											}
										},100);
							} else {
							
								var slidemask = top.find('.slide_mainmask');
								
								setInterval(function() {
											if (opt.loaded==1) {
												var newitem = top.data('currentSlide');							
												var thumb = top.data('currentThumb');
												
												if (!slidemask.hasClass('overme') && !slidemask.hasClass('videoon')) {
																
																opt.cd=opt.cd+1;
																try{
																
																	top.find('.kb-timer').animate({'width':(opt.cd/opt.timer*100)+"%"},{duration:100,queue:false});
																} catch(e) {}
																
																if (opt.cd==opt.timer) {
																	opt.cd=0;
																	if (newitem.index()<opt.maxitem-1) {
																		var next=top.find('ul li:eq('+(newitem.index()+1)+')');
																		swapBanner(newitem,next,top,opt);
																		if (opt.thumbStyle!="none") {
																			var minus = 0-parseInt(thumb.parent().css('left'),0);
																			if (tslide!=null && tslide!=undefined) {
																				tslide.css({'position':'absolute'});
																				if (Math.abs(minus)<=top.data('thumbnailmaxdif')) {							
																					if ( $.browser.msie ) 											
																						tslide.animate({'left':minus+'px'},{duration:300,queue:false});
																					else
																						tslide.cssAnimate({'left':minus+'px'},{duration:300,queue:false});
																				} else {
																					minus = 0-top.data('thumbnailmaxdif');							
																					if ( $.browser.msie ) 																					
																						tslide.animate({'left':minus+'px'},{duration:300,queue:false});
																					else
																						tslide.cssAnimate({'left':minus+'px'},{duration:300,queue:false});
																				}
																			}
																		}
																		
																	} else {
																		swapBanner(newitem,top.find('ul li:first'),top,opt);	
																		if (tslide!=null && tslide!=undefined) {
																			if ( $.browser.msie ) 																					
																				tslide.animate({'left':'0px'},{duration:300,queue:false});
																			else
																				tslide.cssAnimate({'left':'0px'},{duration:300,queue:false});
																		}
																		
																	}
																}
													}
											}			
									},100);
																
								
							}
				}
				
							
				
				
				///////////////////
				// TEXTANIMATION //
				//////////////////			
				function textanim (item,edelay,slider_container) {
												
								var counter=2;
				
									item.find('.creative_layer div').each(function(i) {
															
															var $this=$(this);
															
															// REMEMBER OLD VALUES
															if ($this.data('_top') == undefined) $this.data('_top',parseInt($this.css('top'),0));
															if ($this.data('_left') == undefined) $this.data('_left',parseInt($this.css('left'),0));
															if ($this.data('_op') == undefined) { $this.data('_op',$this.css('opacity'));}
															
													
															// CHANGE THE z-INDEX HERE
															$this.css({'z-index':1200});
															
															
																	
																	
																	
																	
																	//// -  FADE UP   -   ////
																	if ($this.hasClass('fadeup')) {
																			$this.animate({'top':$this.data('_top')+20+"px",
																							 'opacity':0},
																							{duration:0,queue:false})
																				   .delay(edelay + (counter+1)*350)
																				   .animate({'top':$this.data('_top')+"px",
																							 'opacity':$this.data('_op')},
																							{duration:500,queue:true})
																		counter++;
																	}
																	
																	
																	//// -  FADE RIGHT   -   ////
																	if ($this.hasClass('faderight')) {
																		$this.animate({'left':$this.data('_left')-20+"px",
																					 'opacity':0},
																					{duration:0,queue:false})
																		   .delay(edelay + (counter+1)*350)
																		   .animate({'left':$this.data('_left')+"px",
																					'opacity':$this.data('_op')},
																					{duration:500,queue:true})
																		counter++;
																	}
																	
																	
																	//// -  FADE DOWN  -   ////
																	if ($this.hasClass('fadedown')) {
																			$this.animate({'top':$this.data('_top')-20+"px",
																							 'opacity':0},
																							{duration:0,queue:false})
																				   .delay(edelay + (counter+1)*350)
																				   .animate({'top':$this.data('_top')+"px",
																							 'opacity':$this.data('_op')},
																							{duration:500,queue:true})
																		counter++;
																	}
																	
																	
																	//// -  FADE LEFT   -   ////
																	if ($this.hasClass('fadeleft')) {
																		$this.animate({'left':$this.data('_left')+20+"px",
																					 'opacity':0},
																					{duration:0,queue:false})
																		   .delay(edelay + (counter+1)*350)
																		   .animate({'left':$this.data('_left')+"px",
																					'opacity':$this.data('_op')},
																					{duration:500,queue:true})
																		counter++;
																	}
																	
																	//// -  FADE   -   ////
																	if ($this.hasClass('fade')) {
																		$this.animate({'opacity':0},
																					{duration:0,queue:false})
																		   .delay(edelay + (counter+1)*350)
																		   .animate({'opacity':$this.data('_op')},
																					{duration:500,queue:true})
																		counter++;
																	}
																	
																	
																	//// - WIPE UP/DOWN/LEFT/RIGHT - ////
																	if ($this.hasClass('wipeup') || $this.hasClass('wipedown') || $this.hasClass('wipeleft') || $this.hasClass('wiperight')) {
																		$this.animate({'opacity':0},{duration:0,queue:false});
																		setTimeout(function() {
																			if ($this.find('.wipermode').length==0) {
																				var actww=$this.outerWidth();
																				var acthh=$this.outerHeight();
																				var params={	
																							color:$this.css('backgroundColor'),
																							border:$this.css('border'),
																							
																							borderradiusmoz:$this.css('-moz-border-radius-topleft'),
																							borderradiusweb:$this.css('-webkit-border-top-left-radius'),
																							borderradius:$this.css('borderTopLeftRadius'),
																							
																							boxmoz:$this.css('-moz-box-shadow'),
																							boxweb:$this.css('-webkit-box-shadow'),
																							box:$this.css('box-shadow'),
																							
																							padtop:"0px",//$this.css('paddingTop'),
																							padleft:"0px",//$this.css('paddingLeft')
																							
																							paddingT:parseInt($this.css('paddingTop'),0),
																							paddingB:parseInt($this.css('paddingBottom'),0),
																							paddingL:parseInt($this.css('paddingLeft'),0),
																							paddingR:parseInt($this.css('paddingRight'),0),
																							
																							ww:actww + 20,
																							hh:acthh + 20
																						  };
																				$this.data('params',params);
																				
																				$this.wrapInner('<div style="position:absolute;overflow:hidden;width:'+(actww)+'px;height:'+(acthh)+'px;"><div class="wipermode-origin" style="top:0px;left:0px;position:absolute;width:'+actww+'px;height:'+acthh+'px;"></div></div>');			
																				$this.prepend('<div class="wipermode" style="width:'+params.ww+'px;height:'+acthh+'px;background-color:'+params.color+';top:0px;left:0px;position:absolute;border-radius:'+params.borderradius+';-moz-border-radius:'+params.borderradiusmoz+';-webkit-border-radius:'+params.borderradiusweb+';-moz-box-shadow:'+params.boxmoz+';-webkit-box-shadow:'+params.boxweb+';box-shadow:'+params.box+';"></div>');																				
																				$this.css({'background':'none'});																																								
																				
																			} 
																			
																			var params = $this.data('params');
																			// STOP ANIMATION, AND RESTORE ORIGINAL POSITION
																			$this.stop(true,true).find('.wipermode-origin')
																			$this.stop(true,true);
																			$this.find('.wipermode').stop(true,true);
																			

																			
																			
																			// REGISTER THE BG AND TEXT AT THE RIGHT POSITION (START POSITION)
																			if ($this.hasClass('wipeup')) {
																				$this.find('.wipermode-origin').css({'top':(-1*params.hh)+"px",'left':params.padleft});																			
																				$this.find('.wipermode').css({'top':(params.hh)+"px"});																				
																			} else {
																				if ($this.hasClass('wipedown')) {
																					$this.find('.wipermode-origin').css({'top':(params.hh)+"px",'left':params.padleft});																			
																					$this.find('.wipermode').css({'top':(-1*params.hh)+"px"});	
																				} else {
																					if ($this.hasClass('wipeleft')) {
																						$this.find('.wipermode-origin').css({'top':params.padtop,'left':(-1*params.ww)+"px"});																			
																						$this.find('.wipermode').css({'left':(params.ww)+"px"});	
																					} else {
																							$this.find('.wipermode-origin').css({'top':params.padtop,'left':(params.ww)+"px"});																			
																							$this.find('.wipermode').css({'left':(-1*params.ww)+"px"});	
																					}
																				}
																			}
																																						
																			$this.animate({'opacity':'1.0'},{duration:300,queue:false});
																			$this.find('.wipermode-origin').animate({'top':params.padtop, 'left':params.padleft},{duration:500,easing:'easeOutSine', queue:false});
																			$this.find('.wipermode').animate({'top':'0px','left':'0px'},{duration:500,easing:'easeOutExpo', queue:false});
																			
																		},(edelay + (counter+1)*350));
																		counter++;
																	}
																	
																	
																	//// - masklesswipe UP/DOWN/LEFT/RIGHT - ////
																	if ($this.hasClass('masklesswipeup') || $this.hasClass('masklesswipedown') || $this.hasClass('masklesswipeleft') || $this.hasClass('masklesswiperight')) {
																		$this.animate({'opacity':0},{duration:0,queue:false});
																		setTimeout(function() {
																			if ($this.find('.masklesswipemode').length==0) {
																				var actww=$this.outerWidth();
																				var acthh=$this.outerHeight();
																				var params={	
																							color:$this.css('backgroundColor'),
																							border:$this.css('border'),
																							
																							borderradiusmoz:$this.css('-moz-border-radius-topleft'),
																							borderradiusweb:$this.css('-webkit-border-top-left-radius'),
																							borderradius:$this.css('borderTopLeftRadius'),
																							
																							boxmoz:$this.css('-moz-box-shadow'),
																							boxweb:$this.css('-webkit-box-shadow'),
																							box:$this.css('box-shadow'),
																							
																							padtop:$this.css('paddingTop'),
																							padleft:$this.css('paddingLeft')
																						  };
																				$this.data('params',params);
																				$this.wrapInner('<div class="masklesswipemode-origin" style="top:0px;left:0px;position:absolute;width:'+actww+'px;height:'+acthh+'px;"></div>');			
																				$this.prepend('<div class="masklesswipemode" style="width:'+actww+'px;height:'+acthh+'px;background-color:'+params.color+';top:0px;left:0px;position:absolute;border-radius:'+params.borderradius+';-moz-border-radius:'+params.borderradiusmoz+';-webkit-border-radius:'+params.borderradiusweb+';-moz-box-shadow:'+params.boxmoz+';-webkit-box-shadow:'+params.boxweb+';box-shadow:'+params.box+';"></div>');																				
																				$this.css({'background':'none'});																																								
																				
																			} 
																			
																			var params = $this.data('params');
																			// STOP ANIMATION, AND RESTORE ORIGINAL POSITION
																			$this.stop(true,true).find('.masklesswipemode-origin')
																			$this.stop(true,true);
																			$this.find('.masklesswipemode').stop(true,true);
																			
																			var distance=50;
																			
																			// REGISTER THE BG AND TEXT AT THE RIGHT POSITION (START POSITION)
																			if ($this.hasClass('wipeup')) {
																				$this.find('.masklesswipemode-origin').css({'top':(-1*distance)+"px",'left':params.padleft});																			
																				$this.find('.masklesswipemode').css({'top':(distance)+"px"});																				
																			} else {
																				if ($this.hasClass('masklesswipedown')) {
																					$this.find('.masklesswipemode-origin').css({'top':(distance)+"px",'left':params.padleft});																			
																					$this.find('.masklesswipemode').css({'top':(-1*distance)+"px"});	
																				} else {
																					if ($this.hasClass('masklesswipeleft')) {
																						$this.find('.masklesswipemode-origin').css({'top':params.padtop,'left':(-1*distance)+"px"});																			
																						$this.find('.masklesswipemode').css({'left':(distance)+"px"});	
																					} else {
																							$this.find('.masklesswipemode-origin').css({'top':params.padtop,'left':(distance)+"px"});																			
																							$this.find('.masklesswipemode').css({'left':(-1*distance)+"px"});	
																					}
																				}
																			}
																																						
																			$this.animate({'opacity':'1.0'},{duration:800,queue:false});
																			$this.find('.masklesswipemode-origin').animate({'top':params.padtop, 'left':params.padleft},{duration:800,easing:'easeInExpo', queue:false});
																			$this.find('.masklesswipemode').animate({'top':'0px','left':'0px'},{duration:800,easing:'easeOutExpo', queue:false});
																			
																		},(edelay + (counter+1)*350));
																		counter++;
																	}
																	
															
														});	// END OF TEXT ANIMS ON DIVS
					
				}
})(jQuery);			

// http://imgscale.kjmeath.com
(function(a){a.fn.imgscale=function(f){f=a.extend({parent:false,scale:"fill",center:true,fade:0},f);var i,e,j,k,c,d,h,b;this.each(function(){var l=a(this);var m=(!f.parent?l.parent():l.parents(f.parent));m.css({opacity:0,overflow:'hidden'});if(m.length>0){l.removeAttr("height").removeAttr("width");if(this.complete){g(l,m,false)}else{l.load(function(){g(l,m,true)})}}});function g(l,p,r){i=p.height();e=p.width();j=l.height();k=l.width();n();function n(){if(e>i){m("w")}else{if(e<i){m("t")}else{if(e==i){m("s")}}}}function m(v){if(k>j){t(v,"w")}else{if(k<j){t(v,"t")}else{if(k==j){t(v,"s")}}}}function t(w,v){if(w=="w"&&v=="w"){q()}else{if(w=="w"&&v=="t"){s("w")}else{if(w=="w"&&v=="s"){s("w")}else{if(w=="t"&&v=="w"){s("w")}else{if(w=="t"&&v=="t"){q()}else{if(w=="t"&&v=="s"){s("t")}else{if(w=="s"&&v=="w"){s("t")}else{if(w=="s"&&v=="t"){s("w")}else{if(w=="s"&&v=="s"){s("w")}}}}}}}}}}function q(){if((k*i/k)>=e){s("t")}else{s("w")}}function s(v){switch(v){case"t":if(f.scale=="fit"){l.attr("width",e)}else{l.attr("height",i)}break;case"w":if(f.scale=="fit"){l.attr("height",i)}else{l.attr("width",e)}break}if(f.center){o()}else{u()}}function o(){c=l.width();d=l.height();if(d>i){b="-"+(Math.floor((d-i)/2))+"px";l.css("margin-top",b)}if(c>e){h="-"+(Math.floor((c-e)/2))+"px";l.css("margin-left",h)}u()}function u(){if(f.fade>0&&r){p.animate({opacity:1},f.fade)}else{p.css("opacity",1)}}}}})(jQuery);
			
