/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/script.js":
/*!********************************!*\
  !*** ./resources/js/script.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * WEBSITE: https://themefisher.com
 * TWITTER: https://twitter.com/themefisher
 * FACEBOOK: https://www.facebook.com/themefisher
 * GITHUB: https://github.com/themefisher/
 */

jQuery(function ($) {
  'use strict';

  /* ----------------------------------------------------------- */
  /*  Fixed header
  /* ----------------------------------------------------------- */
  $(window).on('scroll', function () {
    // fixedHeader on scroll
    function fixedHeader() {
      var headerOneTopSpace = $('.header-one .logo-area').outerHeight();
      var headerOneELement = $('.header-one .site-navigation');
      if ($(window).scrollTop() > headerOneTopSpace) {
        $(headerOneELement).addClass('navbar-fixed');
        $('.header-one').css('margin-bottom', headerOneELement.outerHeight());
      } else {
        $(headerOneELement).removeClass('navbar-fixed');
        $('.header-one').css('margin-bottom', 0);
      }
    }
    fixedHeader();

    // Count Up
    function counter() {
      var oTop;
      if ($('.counterUp').length !== 0) {
        oTop = $('.counterUp').offset().top - window.innerHeight;
      }
      if ($(window).scrollTop() > oTop) {
        $('.counterUp').each(function () {
          var $this = $(this),
            countTo = $this.attr('data-count');
          $({
            countNum: $this.text()
          }).animate({
            countNum: countTo
          }, {
            duration: 1000,
            easing: 'swing',
            step: function step() {
              $this.text(Math.floor(this.countNum));
            },
            complete: function complete() {
              $this.text(this.countNum);
            }
          });
        });
      }
    }
    counter();

    // scroll to top btn show/hide
    function scrollTopBtn() {
      var scrollToTop = $('#back-to-top'),
        scroll = $(window).scrollTop();
      if (scroll >= 50) {
        scrollToTop.fadeIn();
      } else {
        scrollToTop.fadeOut();
      }
    }
    scrollTopBtn();
  });
  $(document).ready(function () {
    // navSearch show/hide
    function navSearch() {
      $('.nav-search').on('click', function () {
        $('.search-block').fadeIn(350);
      });
      $('.search-close').on('click', function () {
        $('.search-block').fadeOut(350);
      });
    }
    navSearch();

    // navbarDropdown
    function navbarDropdown() {
      if ($(window).width() < 992) {
        $('.site-navigation .dropdown-toggle').on('click', function () {
          $(this).siblings('.dropdown-menu').animate({
            height: 'toggle'
          }, 300);
        });
        var navbarHeight = $('.site-navigation').outerHeight();
        $('.site-navigation .navbar-collapse').css('max-height', 'calc(100vh - ' + navbarHeight + 'px)');
      }
    }
    navbarDropdown();

    // back to top
    function backToTop() {
      $('#back-to-top').on('click', function () {
        $('#back-to-top').tooltip('hide');
        $('body,html').animate({
          scrollTop: 0
        }, 800);
        return false;
      });
    }
    backToTop();

    // banner-carousel
    function bannerCarouselOne() {
      $('.banner-carousel.banner-carousel-1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: true,
        speed: 600,
        arrows: true,
        prevArrow: '<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>'
      });
      $('.banner-carousel.banner-carousel-1').slickAnimation();
    }
    bannerCarouselOne();

    // banner Carousel Two
    function bannerCarouselTwo() {
      $('.banner-carousel.banner-carousel-2').slick({
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        speed: 600,
        arrows: true,
        prevArrow: '<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>'
      });
    }
    bannerCarouselTwo();

    // pageSlider
    function pageSlider() {
      $('.page-slider').slick({
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        speed: 600,
        arrows: true,
        prevArrow: '<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>'
      });
    }
    pageSlider();

    // Shuffle js filter and masonry
    function projectShuffle() {
      if ($('.shuffle-wrapper').length !== 0) {
        var Shuffle = window.Shuffle;
        var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
          itemSelector: '.shuffle-item',
          sizer: '.shuffle-sizer',
          buffer: 1
        });
        $('input[name="shuffle-filter"]').on('change', function (evt) {
          var input = evt.currentTarget;
          if (input.checked) {
            myShuffle.filter(input.value);
          }
        });
        $('.shuffle-btn-group label').on('click', function () {
          $('.shuffle-btn-group label').removeClass('active');
          $(this).addClass('active');
        });
      }
    }
    projectShuffle();

    // testimonial carousel
    function testimonialCarousel() {
      $('.testimonial-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        speed: 600,
        arrows: false
      });
    }
    testimonialCarousel();

    // team carousel
    function teamCarousel() {
      $('.team-slide').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows: true,
        prevArrow: '<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>',
        responsive: [{
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        }, {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }, {
          breakpoint: 481,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }]
      });
    }
    teamCarousel();

    // media popup
    function mediaPopup() {
      $('.gallery-popup').colorbox({
        rel: 'gallery-popup',
        transition: 'slideshow',
        innerHeight: '500'
      });
      $('.popup').colorbox({
        iframe: true,
        innerWidth: 600,
        innerHeight: 400
      });
    }
    mediaPopup();
  });
});

/***/ }),

/***/ 1:
/*!**************************************!*\
  !*** multi ./resources/js/script.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\A\Documents\test\example-apps\resources\js\script.js */"./resources/js/script.js");


/***/ })

/******/ });