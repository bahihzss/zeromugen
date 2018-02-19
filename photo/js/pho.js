// JavaScript Document

$(function() {
  	$(".PhotoGallery").each(function(i) {
		var target = this;
		var num = $(target).attr("num");
		var ifldr = $(target).attr("folder");
   		var title = $(target).attr("title");
		var lg = "lightbox[lg" + i +"]";
		
		$(target).append("<h3 class = 'Title'>" + title + "</h3>");
		$(target).append("<ul class = 'clearfix'></ul>");
	
		for(t = 1; t <= num; t++) $("ul",target).append("<li>");
		$("ul li",target).each(function(s) {
			t = s + 1;
			var img = ifldr + "img" + t + ".jpg";
			var thumb = ifldr + "img" + t + "s.jpg";
			$("<a>")
				.attr("href", img)
				.attr("rel", lg)
				.addClass("zphoto")
				.append("<img src = '" + thumb + "'>")
				.appendTo(this);
		});

		$("ul",target).append("<li class = 'GalleryEnd'></li>");
		$("ul .GalleryEnd",target).append("<a href = ''>▲ページトップに戻る</a>");

	});
    $(".RightContents").fadeIn("slow");

//ページ内をぬめっとスクロールするスクリプト
    //ページ内スクロール
    $(".btnGallery").click(function () {
        var i = $(".btnGallery").index(this)
        var p = $(".content").eq(i).offset().top;
        $('html,body').animate({ scrollTop: p }, 'slow', 'swing');
        return false;
    });
    //ページ上部へ戻る
    $(".Go2Top").click(function () {
        $("html,body").animate({ scrollTop: 0 }, 'slow', 'swing');
        return false;
    });
	//jQueryで動的に追加された要素
	$(".GalleryEnd").live({
		"click":function(){
        	$("html,body").animate({ scrollTop: 0 }, 'slow', 'swing');
        	return false;		
		}
	});

//背景をロールオーバーで暗くするスクリプト
	$('.zphoto').live({	
		'mouseenter':function(){// マウスが乗ったとき
			$(this).stop().animate({backgroundColor: "#CDCDCD"}, "fast", "swing");
		},
		'mouseleave':function(){// マウスが離れたとき
			$(this).stop().animate({backgroundColor: "#FFFFFF"	}, "slow", "swing");
		}
	});

//メニューがついてくるスクリプト
	$(function(){
		offset = $('#gmenu').offset();	
		$(window).scroll(function () {
			if($(window).scrollTop() + 50 > offset.top) {
				moveTop = $(window).scrollTop() - offset.top + 50 +"px";
				$("#gmenu")
				.css({"position":"relative"})
				.stop().animate({"top":moveTop},800);
			} else {
				$("#gmenu").stop().animate({"top":"0"},800);
			}
		});
	});
});




















