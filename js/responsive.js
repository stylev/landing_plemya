jQuery(document).ready(function($) {

	var widthSite = +$(window).width(),
		heightSite = +$(window).height();

	// landscape

	if (widthSite / heightSite < 1) {
		var med = widthSite;
		widthSite = heightSite;
		heightSite = med;
		$('html').css({
			height: `${heightSite}px`,
			width: `${widthSite}px`
		});
	}

	var s = heightSite / 950,
		k = 1920 * s;

	// Preloader

	$('.spinner').css({
		height: `${57 * s}px`,
		margin: `-${29 * s}px 0 0 -${29 * s}px`,
		width: `${57 * s}px`
	});

	// Modal

	$('#modal_form').css({
		height: `${469 * s}px`,
		width: `${770 * s}px`,
		'margin-left': `-${750 * s / 2}px`,
		'margin-top': `-${410 * s / 2}px`
	});
	$('#modal_close').css({
		height: `${27 * s}px`,
		width: `${27 * s}px`,
		top: `${25 * s}px`,
		right: `${30 * s}px`
	});

	$('.consult, .pulse').click( function (event){
		event.preventDefault();
		$('#overlay').fadeIn(400, function (){ 
			$('#modal_form').css('display', 'block').animate({
				opacity: 1, 
				top: '50%'
			}, 200);
		});
	});
	$('#modal_close, #overlay').click( function (){
		$('#modal_form').animate({
			opacity: 0, top: '45%'
		}, 200, function () {
			$(this).css('display', 'none');
			$('#overlay').fadeOut(400);
		}); 
	});

	$('#modal_form form').css({
		top: `${90 * s}px`,
		left: `${106 * s}px`,
		width: `${580 * s}px`
	});
	$('#modal_form form input').css({
		height: `${40 * s}px`,
		'border-radius': `${40 * s / 2}px`,
		'font-size': `${18 * s}px`
	});
	$('.form_textarea').css({
		height: `${88 * s}px`
	});
	$('#modal_form form textarea').css({
		'border-radius': `${43 * s / 2}px`,
		'font-size': `${18  * s}px`
	});
	$('#modal_form form .form_button .btn_down').css({
		'border-radius': `${29 * s}px`,
		'font-size': `${20 * s}px`,
		padding: `${9 * s}px ${57 * s}px ${9 * s}px ${29 * s}px`
	});
	$('#modal_form form .form_button p:first').css('font-size', `${25 * s}px`);
	$('#modal_form form .form_button p:last').css('font-size', `${13 * s}px`);
	$('#modal_form form .red').css('font-size', `${14  * s}px`);
	
	/* Width, height */

	$('.container, swiper-wrapper, .page_one, .page_two, .page_three').css({
		height: `${heightSite}px`,
		width: `${widthSite}px`
	});

	/* Page one */


	// left of .man
	var mLPsd = 464 * s,
		left = ((widthSite - k) / 2) + mLPsd;
	$('.man').css('left', `${left}px`);
	$('.man').on('mouseover', function () {
		$('.lamp_on_two').fadeIn(200);
		/*$('.man').on('mouseout', function () {
			$('.lamp_on_two').fadeOut(200);
		});*/
	});

	// left of .lamp_on_one
	var mLPsd = 132 * s,
		left = ((widthSite - k) / 2) + mLPsd;
	$('.lamp_on_one').css('left', `${left}px`);

	// left of .lamp_on_two
	mLPsd = 413 * s;
	left = ((widthSite - k) / 2) + mLPsd;
	$('.lamp_on_two').css('left', `${left}px`);

	// left of .lamp_on_three
	mLPsd = 731 * s;
	left = ((widthSite - k) / 2) + mLPsd;
	$('.lamp_on_three').css('left', `${left}px`);

	// left of .lamp_on_four
	mLPsd = 1068 * s;
	left = ((widthSite - k) / 2) + mLPsd;
	$('.lamp_on_four').css('left', `${left}px`);

	// left of .logo
	mLPsd = 395 * s;
	left = ((widthSite - k) / 2) + mLPsd;
	var top = 53 * s;
	$('.logo').css({
		'left': `${left}px`,
		'top': `${top}px`
	});
	$('.logo').on('mouseover', function () {
		$('.lamp_on_one').fadeIn(200);
		/*$('.logo').on('mouseout', function () {
			$('.lamp_on_one').fadeOut(200);
		});*/
	});

	// .sidebar
	mLPsd = 394 * s;
	left = ((widthSite - k) / 2) + mLPsd;
	$('.sidebar').css({
		'left': `${left}px`,
		'top': `${300 * s}px`
	});
	$('.sidebar ul li a').css({
		'height': `${20 * s}px`,
		'width': `${35 * s}px`,
		'transition': 'all .3s'
	});
	$('.sidebar ul li').css({
		'margin-bottom': `${35 * s}px`
	});

	// phone number
	mLPsd = 894 * s;
	left = ((widthSite - k) / 2) + mLPsd;
	$('.page_one nav a').css({
		'left': `${left}px`,
		'top': `${50 * s}px`,
		'font-size': `${35 * s}px`
	});
	$('.page_one nav a').on('mouseover', function () {
		$('.lamp_on_three').fadeIn(200);
		/*$('.logo').on('mouseout', function () {
			$('.lamp_on_three').fadeOut(200);
		});*/
	});

	// button top (page 1)
	mLPsd = 1237 * s;
	left = ((widthSite - k) / 2) + mLPsd;
	$('.page_one nav button').css({
		'backgroundPosition': `${14 * s}px center`,
		'border-radius': `${28 * s}px`,
		'font-size': `${20 * s}px`,
		left: `${left}px`,
		padding: `${10 * s}px ${17 * s}px ${10 * s}px ${43 * s}px`,
		top: `${46 * s}px`
	});
	$('.page_one nav button').on('mouseover', function () {
		$('.lamp_on_four').fadeIn(200);
		/*$('.logo').on('mouseout', function () {
			$('.lamp_on_four').fadeOut(200);
		});*/
	});

	// h1
	mLPsd = 943 * s;
	left = ((widthSite - k) / 2) + mLPsd;
	$('.page_one .article h1').css({
		'left': `${left}px`,
		'top': `${140 * s}px`,
		'font-size': `${45 * s}px`
	});
	$('.page_one .article h1').on('mouseover', function () {
		$('.lamp_on_three, .lamp_on_four').fadeIn(200);
		/*$('.logo').on('mouseout', function () {
			$('.lamp_on_one').fadeOut(200);
		});*/
	});

	// h2
	mLPsd = 942 * s;
	left = ((widthSite - k) / 2) + mLPsd;
	$('.page_one .article h2').css({
		'left': `${left}px`,
		'top': `${353 * s}px`,
		'font-size': `${24 * s}px`
	});

	// h3
	mLPsd = 942 * s;
	left = ((widthSite - k) / 2) + mLPsd;
	$('.page_one .article h3').css({
		'left': `${left}px`,
		'top': `${470 * s}px`,
		'font-size': `${19 * s}px`
	});

	// figure height

	$('.page_one .article h4 figure').css({
		'height': `${18 * s}px`,
		'width': `${18 * s}px`
	});

	// h4
	$('.page_one .article h4').css('font-size', `${19 * s}px`);

	// h4 p
	$('.page_one .article h4 p').css({
		'line-height': `${24 * s}px`,
	    margin: `-${5}px 0 0 ${9}px`
	});

	// h4_one
	mLPsd = 942 * s;
	left = ((widthSite - k) / 2) + mLPsd;
	top = 550 * s;
	$('.page_one .article .h4_one').css({
		'left': `${left}px`,
		'top': `${top}px`
	});

	// h4_two
	mLPsd = 1116 * s;
	left = ((widthSite - k) / 2) + mLPsd;
	top = 550 * s;
	$('.page_one .article .h4_two').css({
		'left': `${left}px`,
		'top': `${top}px`
	});

	// h4_three
	mLPsd = 1284 * s;
	left = ((widthSite - k) / 2) + mLPsd;
	top = 550 * s;
	$('.page_one .article .h4_three').css({
		'left': `${left}px`,
		'top': `${top}px`
	});

	// bottom button
	mLPsd = 1110 * s;
	left = ((widthSite - k) / 2) + mLPsd;
	$('.page_one .footer .pulse').css({
		'left': `${left}px`,
		'bottom': `${106 * s}px`,
		'border-radius': `${29 * s}px`,
		'font-size': `${20 * s}px`,
		padding: `${9 * s}px ${57 * s}px ${9 * s}px ${29 * s}px`
	});

	// slider_num
	mLPsd = 359 * s;
	left = ((widthSite - k) / 2) + mLPsd;
	$('.slider_num').css({
		'left': `${left}px`,
		height: `${115 * s}px`,
		width: `${286 * s}px`
	});
	$('.slider_num p').css({
		'font-size': `${63 * s}px`,
		'line-height': `${115 * s}px`,
		margin: `0 0 0 ${51 * s}px`
	});
	$('.slider_num p .span_two').css('font-size', `${25 * s}px`);

	/* Page two */

	// nav button (page 2, page 3, page 4)

	mLPsd = 396 * s;
	left = ((widthSite - k) / 2) + mLPsd;
	$('.page_two nav button, .page_three nav button, .page_four nav button, .page_five nav button, .page_six nav button').css({
		'backgroundPosition': `${14 * s}px center`,
		'border-radius': `${28 * s}px`,
		'font-size': `${20 * s}px`,
		left: `${left}px`,
		padding: `${10 * s}px ${17 * s}px ${10 * s}px ${43 * s}px`,
		top: `${15 * s}px`
	});

	// lamp (page 2, page 3, page 4, page 5, page 6)

	mLPsd = 965.62 * s;
	left = ((widthSite - k) / 2) + mLPsd;
	$('.page_two .lamp_on').css({
		left: `${left}px`,
		height: `${124.82 * s}px`
	});

	mLPsd = 880.62 * s;
	left = ((widthSite - k) / 2) + mLPsd;
	$('.page_three .lamp_on').css({
		left: `${left}px`,
		height: `${124.82 * s}px`
	});

	mLPsd = 890.62 * s;
	left = ((widthSite - k) / 2) + mLPsd;
	$('.page_four .lamp_on').css({
		left: `${left}px`,
		height: `${124.82 * s}px`
	});

	mLPsd = 906.62 * s;
	left = ((widthSite - k) / 2) + mLPsd;
	$('.page_five .lamp_on').css({
		left: `${left}px`,
		height: `${124.82 * s}px`
	});

	mLPsd = 966.62 * s;
	left = ((widthSite - k) / 2) + mLPsd;
	$('.page_six .lamp_on').css({
		left: `${left}px`,
		height: `${124.82 * s}px`
	});


	// page 2 slider

	mLPsd = 977 * s;
	left = ((widthSite - k) / 2) + mLPsd;
	$('.page_two .article').css({
		left: `${left}px`,
		top: `${465 * s}px`,
		width: `${527 * s}px`
	});
	mLPsd = 1496 * s;
	left = ((widthSite - k) / 2) + mLPsd;
	$('.page_two .button-next').css({
		height: `${12 * s}px`,
		left: `${left}px`,
		bottom: `${145 * s}px`,
		width: `${22 * s}px`
	});
	mLPsd = 943 * s;
	left = ((widthSite - k) / 2) + mLPsd;
	$('.page_two .button-prev').css({
		height: `${12 * s}px`,
		left: `${left}px`,
		bottom: `${145 * s}px`,
		width: `${22 * s}px`
	});
	$('.page_two .article .slider_one, .page_two .article .slider_two, .page_two .article .slider_three, .page_two .article .slider_four').css({
		width: `${527 * s}px`
	});
	$('.page_two .article h2').css({
		'font-size': `${48 * s}px`,
		'margin': `${42 * s}px 0 ${9 * s}px`
	});
	$('.page_two .article p').css({
		'font-size': `${24 * s}px`,
		'line-height': `${27 * s}px`
	});

	mLPsd = 897 * s;
	left = ((widthSite - k) / 2) + mLPsd;
	$('.page_two .slider_wrap').css({
		height: `${126 * s}px`,
		left: `${left}px`,
		top: `${254 * s}px`,
		width: `${620 * s}px`
	});
	$('.page_two .slider_thumbs .slider_one p:first, .page_two .slider_thumbs .slider_two p:first, .page_two .slider_thumbs .slider_three p:first, .page_two .slider_thumbs .slider_four p:first').css('font-size', `${56 * s}px`);
	$('.page_two .slider_thumbs .slider_one p:last, .page_two .slider_thumbs .slider_two p:last, .page_two .slider_thumbs .slider_three p:last, .page_two .slider_thumbs .slider_four p:last').css('font-size', `${28 * s}px`);
	$('.page_two .slider_thumbs .slider_one p:first, .page_two .slider_thumbs .slider_two p:first, .page_two .slider_thumbs .slider_three p:first, .page_two .slider_thumbs .slider_four p:first').css({
		'margin-top': `${48 * s}px`,
		'margin-bottom': `${12 * s}px`
	});
	$('.page_two .slider_wrap .slider_one, .page_two .slider_wrap .slider_two').css('margin-right', `${20 * s}px !important`);

	/* Page 3 */

	$('.page_three .article div').css({
		'padding': `0 0 0 ${60 * s}px`
	});
	$('.page_three .article div p').css({
		'font-size': `${22 * s}px`,
		'line-height': `${28 * s}px`
	});

	// .article .one
	mLPsd = 840 * s;
	left = ((widthSite - k) / 2) + mLPsd;
	$('.page_three .article .one').css({
		'left': `${left}px`,
		'top': `${203 * s}px`,
		'background-size': `${50 * s}px auto`,
		'background-position': `left ${25 * s}px`
	});
	$('.page_three .article .one p').css('margin', `${19 * s}px 0 0 0`);

	// .article .two
	mLPsd = 1201 * s;
	left = ((widthSite - k) / 2) + mLPsd;
	$('.page_three .article .two').css({
		'left': `${left}px`,
		'top': `${203 * s}px`,
		'background-size': `${51 * s}px auto`,
		'padding': `0 0 0 ${42 * s}px`
	});
	$('.page_three .article .two p').css('margin', `${15 * s}px 0 0 0`);

	// .article .three
	mLPsd = 840 * s;
	left = ((widthSite - k) / 2) + mLPsd;
	$('.page_three .article .three').css({
		'left': `${left}px`,
		'top': `${383 * s}px`,
		'background-size': `${44 * s}px auto`
	});
	$('.page_three .article .three p').css('margin', `${-3 * s}px 0 0 0`);

	// .article .four
	mLPsd = 1201 * s;
	left = ((widthSite - k) / 2) + mLPsd;
	$('.page_three .article .four').css({
		'left': `${left}px`,
		'top': `${383 * s}px`,
		'background-size': `auto ${41 * s}px`,
		'padding': `0 0 0 ${42 * s}px`
	});
	$('.page_three .article .four p').css('margin', `${-3 * s}px 0 0 0`);

	// .article .five
	mLPsd = 840 * s;
	left = ((widthSite - k) / 2) + mLPsd;
	$('.page_three .article .five').css({
		'left': `${left}px`,
		'top': `${517 * s}px`,
		'background-size': `${43 * s}px auto`
	});
	$('.page_three .article .five p').css('margin', `${-3 * s}px 0 0 0`);

	// .article .six
	mLPsd = 1201 * s;
	left = ((widthSite - k) / 2) + mLPsd;
	$('.page_three .article .six').css({
		'left': `${left}px`,
		'top': `${517 * s}px`,
		'background-size': `${39 * s}px auto`,
		'padding': `0 0 0 ${42 * s}px`
	});
	$('.page_three .article .six p').css('margin', `${-3 * s}px 0 0 0`);	

	// page 4 slider

	mLPsd = 802 * s;
	left = ((widthSite - k) / 2) + mLPsd;
	$('.page_four .article').css({
		left: `${left}px`,
		top: `${140 * s}px`,
		width: `${743 * s}px`,
		height: `${604 * s}px`
	});

	$('.page_four .article .slider_one, .page_two .article .slider_two, .page_two .article .slider_three, .page_two .article .slider_four').css({
		width: `${700 * s}px`
	});
	$('.page_four .article h1').css({
		'font-size': `${48 * s}px`,
		'margin': `${42 * s}px 0 ${9 * s}px`
	});

	$('.page_four .article p').css({
		'font-size': `${24 * s}px`,
		'line-height': `${27 * s}px`
	});

	$('.page_four .article .slider_one h1').css({
		margin: `${397 * s}px 0 ${12 * s}px`,
		'font-size': `${40 * s}px`,
		'line-height': `${45 * s}px`

	});
	$('.page_four .article .slider_one h1 span').css('font-size', `${45 * s}px`);
	$('.page_four .article .slider_two h2, .page_four .article .slider_three h2, .page_four .article .slider_four h2').css({
		'font-size': `${30 * s}px`,
		'margin': `${22 * s}px 0 ${8 * s}px`
	});
	$('.page_four .article .slider_two p').css('font-size', `${21 * s}px`);
	$('.page_four .article .slider_two .four').css('font-size', `${22 * s}px`);
	$('.page_four .article .slider_two h4').css({
		margin: `0 0 0 ${64 * s}px`
	});
	if (heightSite < 300) $('.page_four .article .slider_two h4').css({
		margin: `0 0 0 ${52 * s}px`
	});
	$('.page_four .article .slider_two h4 p').css({
		'font-size': `${19 * s}px`,
		'line-height': `${23 * s}px`,
		margin: `${15 * s}px 0 0 0`
	});
	$('.page_four .article .slider_two h4 img').css({
		'height': `${21 * s}px`
	});
	$('.page_four .article .slider_two .one').css('margin', `0 0 ${40 * s}px`);
	$('.page_four .article .slider_two .two').css('margin', `0 0 ${30 * s}px`);
	$('.page_four .article .slider_two .three').css('margin', `${55 * s}px 0 ${45 * s}px`);
	if (heightSite < 500) $('.page_four .article .slider_two .three').css('margin', `${35 * s}px 0 ${25 * s}px`);

	// page 4 slider (.slider_three)

	$('.page_four .article .slider_three p').css('font-size', `${21 * s}px`);
	$('.page_four .article .slider_three .four').css('font-size', `${22 * s}px`);

	$('.page_four .article .slider_three h3').css({
		'font-size': `${28 * s}px`,
		margin: `${20 * s}px 0 ${20 * s}px`
	});
	$('.page_four .article .slider_three h4').css('margin', `0 0 0 ${44 * s}px`);
	if (heightSite < 300) $('.page_four .article .slider_three h4').css({
		margin: `0 0 0 ${40 * s}px`
	});
	$('.page_four .article .slider_three h4 p').css({
		'font-size': `${19 * s}px`,
		'line-height': `${23 * s}px`,
		margin: `0 0 0 ${16 * s}px`
	});
	$('.page_four .article .slider_three h4 img').css({
		'height': `${21 * s}px`
	});
	$('.page_four .article .slider_three .one').css('margin', `0 0 ${20 * s}px`);
	$('.page_four .article .slider_three .two').css('margin', `0 0 ${5 * s}px ${30 * s}px`);
	$('.page_four .article .slider_three .two_one').css({
		'margin': `0 0 ${5 * s}px ${30 * s}px`,
		'font-size': `${18 * s}px`,
		'line-height': `${18 * s}px`,
	});
	$('.page_four .article .slider_three .two_three').css({
		'margin': `0 0 ${5 * s}px`,
		'font-size': `${18 * s}px`
	});
	$('.page_four .article .slider_three .three').css('margin', `${20 * s}px 0 ${20 * s}px`);

	// page 4 slider (.slider_four)

	$('.page_four .article .slider_four p').css('font-size', `${21 * s}px`);
	$('.page_four .article .slider_four .four').css('font-size', `${22 * s}px`);

	$('.page_four .article .slider_four h3').css({
		'font-size': `${28 * s}px`,
		margin: `${20 * s}px 0 ${20 * s}px`
	});
	$('.page_four .article .slider_four h4').css('margin', `0 0 0 ${44 * s}px`);
	$('.page_four .article .slider_four h4 p').css({
		'font-size': `${17 * s}px`,
		'line-height': `${20 * s}px`,
		margin: `0 0 0 ${16 * s}px`
	});
	$('.page_four .article .slider_four h4 img').css({
		'height': `${21 * s}px`
	});
	$('.page_four .article .slider_four .dist').css('height', `${30 * s}px`);
	$('.page_four .article .slider_four .one').css({
		'margin': `0 0 ${30 * s}px`,
		'font-size': `${25 * s}px`
	});
	$('.page_four .article .slider_four .two').css({
		'margin': `0 0 ${30 * s}px ${30 * s}px`,
		'font-size': `${18 * s}px`
	});
	$('.page_four .article .slider_four .three').css('margin', `${20 * s}px 0 ${20 * s}px`);

	mLPsd = 862 * s;
	left = ((widthSite - k) / 2) + mLPsd;
	$('.page_four .slider_wrap').css({
		height: `${126 * s}px`,
		left: `${left}px`,
		bottom: `${19 * s}px`,
		width: `${620 * s}px`
	});

	$('.page_four .slider_wrap .slider_two p:first, .page_four .slider_wrap .slider_three p:first, .page_four .slider_wrap .slider_four p:first').css('font-size', `${51 * s}px`);
	$('.page_four .slider_wrap .slider_two p:last, .page_four .slider_wrap .slider_three p:last, .page_four .slider_wrap .slider_four p:last').css('font-size', `${33 * s}px`);

	/* Page 5 */

	mLPsd = 920 * s;
	left = ((widthSite - k) / 2) + mLPsd;
	$('.page_five .article').css({
		left: `${left}px`,
		top: `${350 * s}px`
	});
	$('.page_five .article div:not(.clear)').css({
		'padding': `${40 * s}px 0 0 0`,
		'background-size': `${60 * s}px ${46 * s}px`
	});
	$('.page_five .article div p').css({
		'font-size': `${18 * s}px`,
		'line-height': `${20 * s}px`
	});
	$('.page_five .article .two, .page_five .article .four').css('margin', `0 0 0 ${45 * s}px`);

	/* Page 6 */

	mLPsd = 608 * s;
	left = ((widthSite - k) / 2) + mLPsd;
	$('.page_six .article').css({
		left: `${left}px`,
		top: `${260 * s}px`
	});
	$('.page_six .article div:not(.clear)').css({
		'padding': `${10 * s}px 0 ${10 * s}px ${40 * s}px`
	});
	$('.page_six .article div p').css({
		'font-size': `${24 * s}px`
	});
	$('.page_six .article .two, .page_six .article .four').css('margin', `0 0 0 ${40 * s}px`);
	$('.page_six .article .one, .page_six .article .two, .page_six .article .three').css('width', `${250 * s}px`);
});
