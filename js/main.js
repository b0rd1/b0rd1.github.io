$(function() {
  "use strict";

  // <!--==================== Function Typewriter ==================-->
  $.fn.typewriter = function() {
    this.each(function() {
      var $ele = $(this),
        str = $ele.text(),
        progress = 0;
      $ele.text('');
      var timer = setInterval(function() {
        $ele.text(str.substring(0, progress++) + (progress & 1 ? '_' : ' '));
        if (progress > 15) clearInterval(timer);
      }, 150);
    });
    return this;
  };


  // <!--==================== Typewriter Animation ===================-->
  var intervalHeader = setInterval(function() {
    $("#target").css('display', 'block');
    $("#target").typewriter();
    clearInterval(intervalHeader);
  }, 900);


  // <!--==================== Scroll Top =========================-->
  $(".footer-scrollup").on('click', function() {
    $('html,body').animate({
      'scrollTop': '0'
    }, 1000);
    return false;
  });


  // <!--==================== Smooth Scroll =======================-->
  var cfg = {
      scrollDuration: 800,
    },
    $WIN = $(window);

  $('.navbar-right li a').on('click', function(e) {

    var target = this.hash,
      $target = $(target);

    // e.preventDefault();
    e.stopPropagation();

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top + -90
    }, cfg.scrollDuration, 'linear');
  });


  // <!--===========Collapse the navbar on scroll ===============-->
  $(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
      $(".navbar").addClass("top-nav-collapse");
    } else {
      $(".navbar").removeClass("top-nav-collapse");
    }
  });


  // <!--==================== Nivo Slider ======================-->
  $('#ensign-nivoslider').nivoSlider({
    effect: 'slideInRight',
    slices: 15,
    boxCols: 8,
    boxRows: 4,
    animSpeed: 500,
    pauseTime: 5000,
    startSlide: 0,
    directionNav: false,
    controlNavThumbs: false,
    pauseOnHover: false,
    manualAdvance: false
  });


  // <!--==================== Gallery ============================-->
  $('.portfolio-list').mixItUp({
    animation: {
      effects: 'fade stagger(50ms)',
      reverseOut: true,
      staggerSequence: function(i) {
        return (2 * i) - (5 * ((i / 3) - ((1 / 3) * (i % 3))));
      }
    }
  });


  // <!--==================== Skill Bars =======================-->
  var target = $("#activate-skills").offset().top;
  var interval = setInterval(function() {
    if ($(window).scrollTop() >= target) {
      $(".skills-bar-progress > span").each(function() {
        $(this).data("origWidth", $(this).width()).width(0).animate({
          width: $(this).data("origWidth")
        }, 3000);
      });
      clearInterval(interval);
    }
  }, 250);


  // <!--==================== Blink Button Form ================-->
  var intervalFooter = setInterval(function() {
    if ($(window).scrollTop() >= 3073) {

      $("#btn-footer").animate({
        opacity: 0
      }, 500, "linear", function() {
        $(this).animate({
          opacity: 1
        }, 500);
        $(this).animate({
          opacity: 0
        }, 500);
        $(this).animate({
          opacity: 1
        }, 500);
      });
      clearInterval(intervalFooter);
    }
  }, 250);


  // <!--==================== Effect I'm Andrea ===============-->
  var intervalName = setInterval(function() {

    $("#myName span").animate({
      opacity: 0
    }, "linear", function() {
      $('#name-i').animate({
        opacity: 1
      }, 800);
      $('#name-apostrofo').animate({
        opacity: 1
      }, 1800);
      $('#name-m').animate({
        opacity: 1
      }, 2300);
      $('#name-a').animate({
        opacity: 1,
      }, 2800);
      $('#name-n').animate({
        opacity: 1
      }, 3000);
      $('#name-d').animate({
        opacity: 1
      }, 3200);
      $('#name-r').animate({
        opacity: 1
      }, 3700);
      $('#name-e').animate({
        opacity: 1
      }, 4000);
      $('#name-a_ultima').animate({
        opacity: 1,
      }, 4200);
      $('#myName span').animate({
        opacity: 0.3,
      }, 1500);
    });
  }, 3000);



  // <!--==================== Stop Video Portfolio on click ===========-->
  $(document).on('click', function() {
    $("video").each(function() {
      var src = $(this).attr('src');
      $(this).attr('src', src);
    });
  });

  // <!--==================== Close Menu on click ===========-->
  $('.navbar-nav li a').on('click', function() {
    if (window.innerWidth <= 768) {
      $(".navbar-toggler").click();
    }
  });

  // <!--==================== Skilss Bar Effect ===================-->
  $('.skills-bar-progress').mouseenter(function() {

    $(this).animate({
      opacity: 0.5,
    }), 100;
    $(this).animate({
      opacity: 1
    }), 100;

    $(this).toggleClass('bar-effect');
    $(this).toggleClass('bar-effect-back');
  });

  // <!--== Stupid idea for the logo, 'cause im not a graphic designer sigh :( ==-->
  var logo = 'images/logo/best_logo_in_the_world.png';

  try {
    $('#logo').html(Logo);
  } catch (err) {
    $('#logo').html('{{ ' + err.message + ' }}');
  }
});