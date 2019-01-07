/*jQuery Nivo Slider v3.2*/

(function($) {
  var NivoSlider = function(element, options) {
    // Defaults are below
    var settings = $.extend({}, $.fn.nivoSlider.defaults, options);

    // Useful variables. Play carefully.
    var vars = {
      currentSlide: 0,
      currentImage: '',
      totalSlides: 0,
      running: false,
      paused: false,
      stop: false,
      controlNavEl: false
    };

    // Get this slider
    var slider = $(element);
    slider.data('nivo:vars', vars).addClass('nivoSlider');

    // Find our slider children
    var kids = slider.children();
    kids.each(function() {
      var child = $(this);
      var link = '';
      if (!child.is('img')) {
        if (child.is('a')) {
          child.addClass('nivo-imageLink');
          link = child;
        }
        child = child.find('img:first');
      }
      // Get img width & height
      var childWidth = (childWidth === 0) ? child.attr('width') : child.width(),
        childHeight = (childHeight === 0) ? child.attr('height') : child.height();

      if (link !== '') {
        link.css('display', 'none');
      }
      child.css('display', 'none');
      vars.totalSlides++;
    });


    // Get initial image
    if ($(kids[vars.currentSlide]).is('img')) {
      vars.currentImage = $(kids[vars.currentSlide]);
    } else {
      vars.currentImage = $(kids[vars.currentSlide]).find('img:first');
    }

    // Set first background
    var sliderImg = $('<img/>').addClass('nivo-main-image');
    sliderImg.attr('src', vars.currentImage.attr('src')).show();
    slider.append(sliderImg);

    //Create caption
    slider.append($('<div class="nivo-caption"></div>'));

    // Process caption function
    var processCaption = function(settings) {
      var nivoCaption = $('.nivo-caption', slider);
      if (vars.currentImage.attr('title') != '' && vars.currentImage.attr('title') != undefined) {
        var title = vars.currentImage.attr('title');
        if (title.substr(0, 1) == '#') title = $(title).html();

        if (nivoCaption.css('display') == 'block') {
          setTimeout(function() {
            nivoCaption.html(title);
          }, settings.animSpeed);
        } else {
          nivoCaption.html(title);
          nivoCaption.stop().fadeIn(settings.animSpeed);
        }
      } else {
        nivoCaption.stop().fadeOut(settings.animSpeed);
      }
    }

    //Process initial  caption
    processCaption(settings);


    // Private run method
    var nivoRun = function(slider, kids, settings, nudge) {

      if (currentEffect === 'sliceDown' || currentEffect === 'sliceDownRight' || currentEffect === 'sliceDownLeft') {
        createSlices(slider, settings, vars);
        timeBuff = 0;
        i = 0;
        slices = $('.nivo-slice', slider);
        if (currentEffect === 'sliceDownLeft') {
          slices = $('.nivo-slice', slider)._reverse();
        }

        slices.each(function() {
          var slice = $(this);
          slice.css({
            'top': '0px'
          });
          if (i === settings.slices - 1) {
            setTimeout(function() {
              slice.animate({
                opacity: '1.0'
              }, settings.animSpeed, '', function() {
                slider.trigger('nivo:animFinished');
              });
            }, (100 + timeBuff));
          } else {
            setTimeout(function() {
              slice.animate({
                opacity: '1.0'
              }, settings.animSpeed);
            }, (100 + timeBuff));
          }
          timeBuff += 50;
          i++;
        });

        // Run animation
        for (var cols = 0; cols < (settings.boxCols * 2); cols++) {
          var prevCol = cols;
          for (var rows = 0; rows < settings.boxRows; rows++) {
            if (prevCol >= 0 && prevCol < settings.boxCols) {
              /* Due to some weird JS bug with loop vars
              being used in setTimeout, this is wrapped
              with an anonymous function call */
              (function(row, col, time, i, totalBoxes) {
                var box = $(box2Darr[row][col]);
                var w = box.width();
                var h = box.height();
                if (currentEffect === 'boxRainGrow' || currentEffect === 'boxRainGrowReverse') {
                  box.width(0).height(0);
                }
                if (i === totalBoxes - 1) {
                  setTimeout(function() {
                    box.animate({
                      opacity: '1',
                      width: w,
                      height: h
                    }, settings.animSpeed / 1.3, '', function() {
                      slider.trigger('nivo:animFinished');
                    });
                  }, (100 + time));
                } else {
                  setTimeout(function() {
                    box.animate({
                      opacity: '1',
                      width: w,
                      height: h
                    }, settings.animSpeed / 1.3);
                  }, (100 + time));
                }
              })(rows, prevCol, timeBuff, i, totalBoxes);
              i++;
            }
            prevCol--;
          }
          timeBuff += 100;
        }
      }
    };



    // Trigger the afterLoad callback
    settings.afterLoad.call(this);

    return this;
  };

  $.fn.nivoSlider = function(options) {
    return this.each(function(key, value) {
      var element = $(this);
      // Return early if this element already has a plugin instance
      if (element.data('nivoslider')) {
        return element.data('nivoslider');
      }
      // Pass options to plugin constructor
      var nivoslider = new NivoSlider(this, options);
      // Store plugin object in this element's data
      element.data('nivoslider', nivoslider);
    });
  };

  //Default settings
  $.fn.nivoSlider.defaults = {
    effect: 'random',
    slices: 15,
    boxCols: 8,
    boxRows: 4,
    animSpeed: 500,
    pauseTime: 3000,
    startSlide: 0,
    directionNav: true,
    controlNav: true,
    controlNavThumbs: false,
    pauseOnHover: true,
    manualAdvance: false,
    prevText: 'Prev',
    nextText: 'Next',
    randomStart: false,
    beforeChange: function() {},
    afterChange: function() {},
    slideshowEnd: function() {},
    lastSlide: function() {},
    afterLoad: function() {}
  };

  $.fn._reverse = [].reverse;

})(jQuery);