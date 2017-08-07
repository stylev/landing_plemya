jQuery(document).ready(function($) {

    // Loading

    $(window).on('load', function () {
        var $preloader = $('#page-preloader'),
            $spinner   = $preloader.find('.spinner');
        $spinner.fadeOut();
        $preloader.delay(350).fadeOut('slow');
    });

    // Reload on resizing

    $(window).resize(function () {
        setTimeout(function () {
            location.reload();
        }, 500);
    });

	/* Swiper slider */

    // Main

	var swiper = new Swiper('.container', {
        direction: 'vertical',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        mousewheelControl: true
    });

    // Page 2

    var slider_achivments = new Swiper('.slider_achivments', {
        nextButton: '.button-next',
        prevButton: '.button-prev',
        autoplay: 3500,
        autoplayDisableOnInteraction: false
    });
    var slider_thumbs = new Swiper('.slider_thumbs', {
        centeredSlides: false,
        slideToClickedSlide: true
    });
    slider_achivments.params.control = slider_thumbs;
    slider_thumbs.params.control = slider_achivments;

    // Page 4

    var page_4_slider_flipchart = new Swiper('.page_4_slider_flipchart', {
        autoplayDisableOnInteraction: false,
        effect: 'flip',
        direction: 'vertical',
        autoplay: 7500
    });
    var page_4_slider_thumbs = new Swiper('.page_4_slider_thumbs', {
        centeredSlides: false,
        slideToClickedSlide: true
    });
    page_4_slider_flipchart.params.control = page_4_slider_thumbs;
    page_4_slider_thumbs.params.control = page_4_slider_flipchart;

	// WOW

	new WOW().init();

	// Slider counter

	$('body').on('wheel', function () {
        var divEl = $('.container > .swiper-wrapper').children('div');
        for (let i = 0; i < divEl.length; i++) {
            if (divEl[i].classList.contains('swiper-slide-active')) {
                if (divEl[i].classList.contains('page_one')) {
                    $('.slider_num .span_first').text('01');
                    break;
                }
                else {
                    if (divEl[i].classList.contains('page_two')) {
                        $('.slider_num .span_first').text('02');
                        $('.page_two .lamp_on').fadeOut();
                        setTimeout(function () {
                            $('.page_two .lamp_on').fadeIn(300);
                        }, 500);
                        break;
                    }
                    if (divEl[i].classList.contains('page_three')) {
                        $('.slider_num .span_first').text('03');
                        $('.page_three .lamp_on').fadeOut();
                        setTimeout(function () {
                            $('.page_three .lamp_on').fadeIn(300);
                        }, 500);
                        // fadeIn .article div
                        $('.page_three .article div').css('display', 'none');
                        setTimeout(function () {
                            $(`.page_three .article .one`).fadeIn(1000);
                        }, 500);
                        setTimeout(function () {
                            $(`.page_three .article .two`).fadeIn(1000);
                        }, 1500);
                        setTimeout(function () {
                            $(`.page_three .article .three`).fadeIn(1000);
                        }, 2500);
                        setTimeout(function () {
                            $(`.page_three .article .four`).fadeIn(1000);
                        }, 3500);
                        setTimeout(function () {
                            $(`.page_three .article .five`).fadeIn(1000);
                        }, 4500);
                        setTimeout(function () {
                            $(`.page_three .article .six`).fadeIn(1000);
                        }, 5500);
                        break;
                    }
                    if (divEl[i].classList.contains('page_four')) {
                        $('.slider_num .span_first').text('04');
                        $('.page_four .lamp_on').fadeOut();
                        setTimeout(function () {
                            $('.page_four .lamp_on').fadeIn(300);
                        }, 500);
                        break;
                    }
                    if (divEl[i].classList.contains('page_five')) {
                        $('.slider_num .span_first').text('05');
                        $('.page_five .lamp_on').fadeOut();
                        setTimeout(function () {
                            $('.page_five .lamp_on').fadeIn(300);
                        }, 500);
                        // fadeIn .article div
                        $('.page_five .article div:not(.clear)').css('display', 'none');
                        setTimeout(function () {
                            $(`.page_five .article .one`).fadeIn(1000);
                        }, 500);
                        setTimeout(function () {
                            $(`.page_five .article .two`).fadeIn(1000);
                        }, 1500);
                        setTimeout(function () {
                            $(`.page_five .article .three`).fadeIn(1000);
                        }, 2500);
                        setTimeout(function () {
                            $(`.page_five .article .four`).fadeIn(1000);
                        }, 3500);
                        break;
                    }
                    if (divEl[i].classList.contains('page_six')) {
                        $('.slider_num .span_first').text('06');
                        $('.page_six .lamp_on').fadeOut();
                        setTimeout(function () {
                           $('.page_six .lamp_on').fadeIn(300);
                        }, 500);
                        break;
                    }
                }
            }
        }       
    });

	$('.swiper-button-prev, .swiper-button-next').click(function () {
        var divEl = $('.container > .swiper-wrapper').children('div');
        for (let i = 0; i < divEl.length; i++) {
            if (divEl[i].classList.contains('swiper-slide-active')) {
        		if (divEl[i].classList.contains('page_one')) {
                    $('.slider_num .span_first').text('01');
                    break;
                }
                else {
                    if (divEl[i].classList.contains('page_two')) {
                        $('.slider_num .span_first').text('02');
                        $('.page_two .lamp_on').fadeOut();
                        setTimeout(function () {
                            $('.page_two .lamp_on').fadeIn(300);
                        }, 500);
                        break;
                    }
                    if (divEl[i].classList.contains('page_three')) {
                        $('.slider_num .span_first').text('03');
                        $('.page_three .lamp_on').fadeOut();
                        setTimeout(function () {
                            $('.page_three .lamp_on').fadeIn(300);
                        }, 500);
                        // fadeIn .article div
                        $('.page_three .article div').css('display', 'none');
                        setTimeout(function () {
                            $(`.page_three .article .one`).fadeIn(1000);
                        }, 500);
                        setTimeout(function () {
                            $(`.page_three .article .two`).fadeIn(1000);
                        }, 1500);
                        setTimeout(function () {
                            $(`.page_three .article .three`).fadeIn(1000);
                        }, 2500);
                        setTimeout(function () {
                            $(`.page_three .article .four`).fadeIn(1000);
                        }, 3500);
                        setTimeout(function () {
                            $(`.page_three .article .five`).fadeIn(1000);
                        }, 4500);
                        setTimeout(function () {
                            $(`.page_three .article .six`).fadeIn(1000);
                        }, 5500);
                        break;
                    }
                    if (divEl[i].classList.contains('page_four')) {
                        $('.slider_num .span_first').text('04');
                        $('.page_four .lamp_on').fadeOut();
                        setTimeout(function () {
                            $('.page_four .lamp_on').fadeIn(300);
                        }, 500);
                        break;
                    }
                    if (divEl[i].classList.contains('page_five')) {
                        $('.slider_num .span_first').text('05');
                        $('.page_five .lamp_on').fadeOut();
                        setTimeout(function () {
                            $('.page_five .lamp_on').fadeIn(300);
                        }, 500);
                        // fadeIn .article div
                        $('.page_five .article div:not(.clear)').css('display', 'none');
                        setTimeout(function () {
                            $(`.page_five .article .one`).fadeIn(1000);
                        }, 500);
                        setTimeout(function () {
                            $(`.page_five .article .two`).fadeIn(1000);
                        }, 1500);
                        setTimeout(function () {
                            $(`.page_five .article .three`).fadeIn(1000);
                        }, 2500);
                        setTimeout(function () {
                            $(`.page_five .article .four`).fadeIn(1000);
                        }, 3500);
                        break;
                    }
                    if (divEl[i].classList.contains('page_six')) {
                        $('.slider_num .span_first').text('06');
                        $('.page_six .lamp_on').fadeOut();
                        setTimeout(function () {
                           $('.page_six .lamp_on').fadeIn(300);
                        }, 500);
                        break;
                    }
                }
            }
        }
    });
});
