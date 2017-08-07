<?php 
	/* Constants */

	if (!defined('PLEMYA_DIR')) define('PLEMYA_DIR', get_template_directory()."/");
	if (!defined('PLEMYA_DIR_URI')) define('PLEMYA_DIR_URI', get_template_directory_uri()."/");

	/* Title */

	add_theme_support('title_tag');

	/* Styles and scripts */

	wp_register_style( 
		'plemya_animate_styles', 
		PLEMYA_DIR_URI."css/animate.css"
	);
	wp_register_style( 
		'plemya_swiper_styles', 
		PLEMYA_DIR_URI."css/swiper.min.css"
	);
	wp_register_style( 
		'plemya_styles', 
		PLEMYA_DIR_URI."style.css"
	);
	wp_enqueue_style('plemya_animate_styles');
	wp_enqueue_style('plemya_swiper_styles');
	wp_enqueue_style('plemya_styles');
	wp_register_script( 
		'plemya_responsive_scripts', 
		PLEMYA_DIR_URI."js/responsive.js", 
		['jquery'], 
		false, 
		true
	);
	wp_register_script( 
		'plemya_swiper_scripts', 
		PLEMYA_DIR_URI."js/swiper.min.js", 
		['plemya_responsive_scripts'], 
		false, 
		true
	);
	wp_register_script( 
		'plemya_wow_scripts', 
		PLEMYA_DIR_URI."js/wow.min.js", 
		['plemya_swiper_scripts'], 
		false, 
		true
	);
	wp_register_script( 
		'plemya_custom_scripts', 
		PLEMYA_DIR_URI."js/scripts.js", 
		['plemya_wow_scripts'], 
		false, 
		true
	);
	wp_enqueue_script('plemya_custom_scripts');
?>