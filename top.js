// JavaScript Document
$(function(){
	$("#InfoInner dd p")
		.appendTo("#InfoInner")
		.hide();
	$("#InfoInner dd h4").click(function(){	
		var i = $("#InfoInner dd h4").index(this),
			p = $("#InfoInner").scrollTop();
		$("#InfoInner").css("overflow","hidden");
		$("#InfoInner > p")
		.eq(i)
		.css({
			"position":"absolute",
			"top":p,
			"left":"0",
			"width":"560px",
			"height":"100%",
			"padding":"10px",
			"opacity":"0.88",
			"background-color":"#000000",
			"color":"#FFFFFF",
			"font-size":"13px"
		})
		.fadeIn("fast")
	});
	
	$("#InfoInner > p").click(function(){
		$(this).fadeOut("fast",function(){
			$("#InfoInner").css("overflow","auto");
		});
	});
		
});