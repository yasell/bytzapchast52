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
$("#call, .brends__item").click(function() {
	$("#modal_call").addClass("modal_show");
	$(".modal_bg").css("display", "block");
});

// phone click
$("#call2").click(function() {
	$("#modal_call2").addClass("modal_show");
	$(".modal_bg").css("display", "block");
});

$(".modal__close, .modal_bg").click(function() {
	$("#modal_call, #modal_call2").removeClass("modal_show");
	$(".modal_bg").css("display", "none");
});

// send mail
$("#order, #order_modal, #order_modal2").submit(function() {
	$.ajax({
		type: "POST",
		url: "mail.php",
		data: $(this).serialize()
	}).done(function() {
		$(this).find("input").val("");
		// open modal
		$("#modal_call, #modal_call2").removeClass("modal_show");
		$("#modal_sucsess").addClass("modal_show");
		$(".modal_bg").css("display", "block");

		$(".modal__close, .modal_bg").click(function() {
			$("#modal_sucsess").removeClass("modal_show");
			$(".modal_bg").css("display", "none");
		});
		$(".form").trigger("reset");
	});
	return false;
});
