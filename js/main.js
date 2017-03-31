// back to top
$("#back-top").hide();

$(window).scroll(function() {
	if ($(this).scrollTop() > 100) {
		$("#back-top").fadeIn();
	} else {
		$("#back-top").fadeOut();
	}
});

$("#back-top").click(function() {
	$("body,html").animate({
		scrollTop: 0
	}, 500);
	return false;
});

// - smooth scroll
$(".header__nav-list").on("click", "a", function(event) {
	event.preventDefault();

	var el = $(this).attr("href");
	$("body,html").animate({
		scrollTop: $(el).offset().top
	}, 2000);
	return false;
});

// call button
$("#call").click(function() {
	$("#modal_call").addClass("modal_show");
	$(".modal_bg").css("display", "block");
});

$(".modal__close, .modal_bg").click(function() {
	$("#modal_call").removeClass("modal_show");
	$(".modal_bg").css("display", "none");
});

// easy form validate
function validateForm(dir) {
	var form = dir;
	var name, phone;
	var error = [];
	// var checking;
	form.find("#order").html("");
	name = form.find("#name").val();
	phone = form.find("#phone").val();
	if (name === "") {
		error.push("Введите имя*");
	} else
	if (!/[А-Яа-яЁёa-zA-Z`\s]{1,100}/.test(name)) {
		error.push("*Мы ждём от Вас корректного имени");
	}
	if (phone === "") {
		error.push("Введите телефон*");
	} else
	if (!/[0-9()-\s+]{3,20}/.test(phone)) {
		error.push("*Введите корректный телефон");
	}
	if (error.length > 0) {
		$.each(error, function() {
			form.find(".errortext").append(this + "<br>");
		});
		return false;
	}
	return true;
}

$(".order-btn").on("submit", function(e) {
	var valid = validateForm($(this));
	if (!valid) {
		return false;
	}
});
