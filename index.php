<?= get_header() ?>
<body>
	<div id="page-preloader"><span class="spinner"></span></div>
	<div class="container">
        <div class="swiper-wrapper">
			<?php echo get_template_part('templates/page_one') ?>
			<?php echo get_template_part('templates/page_two') ?>
			<?php echo get_template_part('templates/page_three') ?>
			<?php echo get_template_part('templates/page_four') ?>
			<?php echo get_template_part('templates/page_five') ?>
			<?php echo get_template_part('templates/page_six') ?>
		</div>
		<div class="slider_num">
			<p><span class="span_first">01</span><span class="span_one">/</span><span class="span_two">10</span></p>
			<div class="arrows">
				<div class="swiper-button-prev"></div>
				<div class="swiper-button-next"></div>
			</div>
		</div>
	</div>
	<!-- Modal -->
	<div id="modal_form">
		<span id="modal_close"></span>
		<form action="#">
			<div class="form_input_name">
				<input type="text" name="name" placeholder="Ваше имя*">
				<p class="red">Поле обязательно для заполнения</p>
			</div>
			<div class="form_input_email">
				<input type="text" name="email" placeholder="Ваш e-mail*">
				<p class="red">Поле обязательно для заполнения</p>
			</div>
			<div class="clear"></div>
			<div class="form_input_phone">
				<input type="text" name="phone" placeholder="Ваш телефон">
			</div>
			<div class="form_input_skype">
				<input type="text" name="email" placeholder="Скайп, вайбер, телеграм">
			</div>
			<div class="clear"></div>
			<div class="form_textarea">
				<textarea name="message" placeholder="Ваше сообщение*"></textarea>
				<p class="red">Поле обязательно для заполнения</p>
			</div>
			<div class="form_button">
				<p>Получить консультацию</p>
				<button class="btn_down">Бесплатно</button>
				<p>Одно или несколько полей содержат ошибочные  данные.<br>Пожалуйста, проверьте их и попробуйте еще раз.</p>
			</div>
		</form>
	</div>
	<div id="overlay"></div><!-- //Modal -->
<?= get_footer() ?>