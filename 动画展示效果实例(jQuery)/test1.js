var ems=document.getElementsByClassName('playtimes');
for (var i = ems.length - 1; i >= 0; i--) {
	ems[i].innerText=Math.floor(Math.random()*10000);
}
var page=1, i=4,
	$parent = $("div.v_show"),
	$v_show = $parent.find("div.v_content_list"),
	$v_content = $parent.find("div.v_content"),
	v_width = $v_content.width(),
	len = $v_show.find("li").length,
	page_count = Math.ceil(len/i);

$("span.next").click(function(){
	if(!$v_show.is(":animated")){
		if(page==page_count){
			$v_show.animate({left: '0px'}, "normal");
			page=1;
		}else{
			$v_show.animate({left:'-='+v_width}, "normal");
			page++;
		}		
		$parent.find('span').eq(page-1).addClass('current').siblings().removeClass('current');
	}
});

$("span.prev").click(function(){
	if(!$v_show.is(":animated")){
		if(page==1){
			$v_show.animate({left:'-='+v_width*(page_count-1)}, "normal");
			page=page_count;
		}else{
			$v_show.animate({left:'+='+v_width}, "normal");
			page--;
		}
		$parent.find('span').eq(page-1).addClass('current').siblings().removeClass('current');
	}
});