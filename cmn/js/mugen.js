// JavaScript Document
var aMove = true,
	aView,
	act = true;
//imgを追加
$(function(){
	if(act){
	$("<img>")
	.attr("src","http://ma-foo.jp/zeromugen/img/mugen.png")
	.attr("id","mugen")
	.attr("width", "25")
	.attr("height", "25")
	.css({
		"display": "none",
		"position": "absolute"
	}).appendTo("body");
	//マウスが・・・
	$(document)
	//侵入した時
	.hover(function(event){
		$("#mugen")
		.css({
			left: event.pageX + 10 + "px",
			top: event.pageY + 10 + "px",
			display: "block"
		})
		.fadeIn("fast", "swing", function(){aView = true;});
	}
	//出て行ったとき
	,function(){
		aMove = false;
		$("#mugen")
		.fadeOut("fast", "swing", function(){
			$("#mugen").css("display", "none");
			aMove = true;
			aView = false;
		});
	})
	//動いたとき
	.mousemove(function MoveMugen(event){
		if (aMove && aView){
			$("#mugen").stop(true).animate({
				left: event.pageX + 10 + "px",
				top: event.pageY + 10 + "px"
			},"fast","linear");
		} else {
			setTimeout(MoveMugen, 10);
		}
	});
	}
});
