
$(".head_box #head_wrap #head_right #head_car").hover(function() {
	$(this).css('background', '#f60');
	$(this).children('a').css('color', '#f0f0f0');
	$("#car_content").animate({height: "300px"}, 500);
}, function() {
	$(this).css('background', '#444');
	$(this).children('a').css('color', '#a0a0a0');
	$("#car_content").animate({height: "0px"}, 500);
});

$(".menu_li").hover(function() {
	$("#menu_content_bg").css("border", "1px solid #d0d0d0");
	$(this).css('color', '#ff6700');
	$("#"+$(this).attr('control')).show();
	$("#menu_content_bg").height(230);
}, function() {
	$("#"+$(this).attr('control')).hide();
	$(this).css("color", "#424242");
	$("#menu_content_bg").height(0);
	$("#menu_content_bg").css("border", "0px solid #d0d0d0");
});

$("#menu_content_bg #menu_content_wrap ul li").hover(function() {
	$("#menu_content_bg").css("border", "1px solid #d0d0d0");
	$(this).css('color', '#ff6700');
	$(this).show();
	$("#menu_content_bg").height(230);
}, function() {
	$(this).css("color", "#424242");
	$("#menu_content_bg").height(0);
	$("#menu_content_bg").css("border", "0px solid #d0d0d0");
	$(this).hide();
});

$("#find_input").focus(function() {
	$("#find_wrap").css('border', '1px solid #ff6700');
	$("#find_but").css('border-left', '1px solid #ff6700');
});
$("#find_input").blur(function() {
	$("#find_wrap").css('border', '1px solid #f0f0f0');
	$("#find_but").css('border-left', '1px solid #f0f0f0');
});

$("#find_but").hover(function() {
	$(this).css({"background":"#ff6700", "color":"#fff"});
}, function() {
	$(this).css({'background':'#fff', 'color':'#424242'});
});

$("#banner_menu_wrap").children().hover(function() {
	$(this).css("background", "#ff6700");
	$(this).children(".banner_menu_content").css("border", "1px solid #f0f0f0").show();
}, function() {
	$(this).css("background", "none");
	$(this).children(".banner_menu_content").css("border", "0px solid #f0f0f0").hide();
});

$(function(){
	var i=0;
	var big_banner_pic=$("#big_banner_pic");
	var allimg=$("#big_banner_pic li").length;
	function img_change(){
		var img_i=i*(-1226)+"px";
		big_banner_pic.animate({opacity: "0.2"},
			100, function() {
			big_banner_pic.css('left', img_i);
			big_banner_pic.animate({opacity: "1"}, 100);
		});
	}
	function automatic(){
		i++;
		if(i>=allimg){
			i=0;
		}
		img_change();
	}
	change_self_time=setInterval(automatic, 3000);

	$("#big_banner_change_wrap").hover(function(){
		clearInterval(change_self_time);
		$("#big_banner_change_wrap").children().show();
	},function(){
		change_self_time=setInterval(automatic, 3000);
		$("#big_banner_change_wrap").children().hide();
	})

	$("#big_banner_change_prev").click(function(){
		i++;
		if(i>=allimg){
			i=0;
		}
		img_change();
	})
	$("#big_banner_change_next").click(function(){
		i--;
		if(i<=0){
			i=allimg-1;
		}
		img_change();
	})
})

$(".head_other_ad").hover(function() {
	$(this).css({
		"top":"-5px",
		"box-shadow":"0px 15px 30px rgba(0,0,0,0.2)"
	});
}, function() {
	$(this).css({
		"top":"0px",
		"box-shadow":"none"
	});
});

$(function(){
	$("#head_hot_goods_content").children().children().eq(0).css("border-color", "#f00");
	$("#head_hot_goods_content").children().children().eq(1).css("border-color", "#ff7600");
	$("#head_hot_goods_content").children().children().eq(2).css("border-color", "#adff2f");
	$("#head_hot_goods_content").children().children().eq(3).css("border-color", "#6495ed");
	$("#head_hot_goods_content").children().children().eq(4).css("border-color", "#70009c");
	$("#head_hot_goods_content").children().children().eq(5).css("border-color", "#f00");
	$("#head_hot_goods_content").children().children().eq(6).css("border-color", "#ff7600");
	$("#head_hot_goods_content").children().children().eq(7).css("border-color", "#adff2f");
	$("#head_hot_goods_content").children().children().eq(8).css("border-color", "#6495ed");
	$("#head_hot_goods_content").children().children().eq(9).css("border-color", "#70009c");
})

$("#head_hot_goods_prev").hover(function(){
	$(this).css({"background": "#ff6700", "color":"#fff"});
},function(){
	$(this).css({"background": "none", "color": "#2e2e2e"});
})
$("#head_hot_goods_next").hover(function(){
	$(this).css({"background": "#ff6700", "color":"#fff"});
},function(){
	$(this).css({"background": "none", "color": "#2e2e2e"});
})
$("#head_hot_goods_prev").click(function(){
	$("#head_hot_goods_content").children("ul").animate({left:"0px"},300);	
})
$("#head_hot_goods_next").click(function(){
	$("#head_hot_goods_content").children("ul").animate({left:"-1236px"},300);
})
$("#head_hot_goods_wrap #head_hot_goods_content ul li").hover(function() {
	$(this).css({
		"top":"-5px",
		"box-shadow":"0px 15px 30px rgba(0,0,0,0.2)"
	});
}, function() {
	$(this).css({
		"top":"0px",
		"box-shadow":"none"
	});
});

$(".floor_goods_wrap_li").hover(function() {
	$(this).css({
		"top":"-5px",
		"box-shadow":"0px 15px 30px rgba(0,0,0,0.2)"
	});
}, function() {
	$(this).css({
		"top":"0px",
		"box-shadow":"none"
	});
});