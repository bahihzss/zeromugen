// JavaScript Document
//URLパラメータ取得
function getParameter(key) {
	var str = location.search.split("?");
	if (str.length < 2) {
		return "";
	}
	
	var params = str[1].split("&");
	for (var i = 0; i < params.length; i++) {
		var keyVal = params[i].split("=");
		if (keyVal[0] == key && keyVal.length == 2) {
			return decodeURIComponent(keyVal[1]);
		}
	}
}

//パラメーターの位置まで移動
var i = getParameter("i");
if (i){
	i = $(".LiveInfo").length - i + 1;
	$(function(){
		var j = i - 1;
	    var p = $(".LiveInfo").eq(j).offset().top;
	    $('html,body').animate({ scrollTop: p }, 'slow', 'swing');
	    return false;
	});
}