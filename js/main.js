$(window).load( function(){
	$(".scrollContent").mCustomScrollbar({theme:"rounded-dots-dark"});
	$("aside.loading").fadeOut(500);
});

$(document).ready( function(){

	$("section.projects").find("button").click(function() {
		var ide = $(this).attr("class");
		$("aside#modal")
			.find("article." + ide)
			.fadeIn(500);
	});

	$("aside#modal").find("button.close").click(function() {
		$(this)
			.parent()
			.parent()
			.fadeOut(500);
	});

});