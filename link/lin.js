// JavaScript Document
$(function(){
	var d = "fast";
	$(".ArtistBox a").hover(function(){
		$(this)
			.find(".Title")
			.stop(true)
			.slideDown(d,"swing")
			.animate({
				"height": 29 + "px",
				"padding-top": 190 + "px"
			},d,"swing");
	},function(){
		$(".Title",this).stop(true, false).slideUp(d,"swing");
	});
});