// JavaScript Document
$(function() {
    $( "#tabs" ).tabs();
  });
$(function() {
   $("#accordion").accordion({ collapsible: true, active: false, heightStyle: "content"});
  });
  
$(document).ready(function(){
    $("#menu_btn").click(function(){
        $("#nav_menu").animate({width:'toggle'},0);
    });
});

if (matchMedia) {
	var mq = window.matchMedia("(min-width: 800px)");
	mq.addListener(WidthChange);
	WidthChange(mq);
}

// media query change
function WidthChange(mq) {

	if (mq.matches) {
		$("#nav_menu").css("display","block"); //display block when change from 550px to 551 prevent the menu dispear
		$("#menu_btn").css("display","none");
	}
	else {
		$("#nav_menu").slideUp(0); //slide up when chenge 551 to 550
		$("#menu_btn").css("display","block");
	}
}