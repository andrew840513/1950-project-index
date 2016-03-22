// JavaScript Document
$(document).ready(function(){
    $("#menu").click(function(){
        $("#nav_menu").animate({width:'toggle'},100);
    });
});

if (matchMedia) {
	var mq = window.matchMedia("(min-width: 1050px)");
	mq.addListener(WidthChange);
	WidthChange(mq);
}

// media query change
function WidthChange(mq) {

	if (mq.matches) {
		$("#nav_menu").css("display","block"); //display block when change from 550px to 551 prevent the menu dispear
		$("#menu").css("display","none");
	}
	else {
		$("#nav_menu").slideUp(0); //slide up when chenge 551 to 550
		$("#menu").css("display","block");
	}
}