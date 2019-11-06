$(document).ready(function() {
	$(".carousel").carousel({
		interval:5000
	});


	// Cheng Color Websit 
	// 
	$(".icon-chose").click(function(){
		$(".color-opthion").fadeToggle();
	});


	// Cheng Color

	var color = $(".color-opthion ul li");

	color
	.eq(0).css("background-color","#dc2525").end()
	.eq(1).css("background-color","#0895D1").end()
	.eq(2).css("background-color","#e426d5").end()
	.eq(3).css("background-color","#ffd500");


	color.click(function()
	{
		$("link[href*='theme']").attr("href", $(this).attr("data-value"));
	});


    // Caching The Scroll Top Element
    // 
    scrollButton = $("#scroll-top");
    
    $(window).scroll(function () {
        
        if ($(this).scrollTop() >= 700) {
            
            scrollButton.show();
            
        } else {
            
            scrollButton.hide();
        }
    });
    
    // Click On Button To Scroll Top
    
    scrollButton.click(function () {
        
        $("html,body").animate({ scrollTop : 0 }, 600);
        
    });
    
});


// Loading Screen

$(window).load(function () {
    
    "use strict";
    
    // Loading Elements
    
    $(".loading-overlay .spinner").fadeOut(1000, function () {
        
        // Show The Scroll

        $("body").css("overflow", "auto");
        
        $(this).parent().fadeOut(1000, function () {
            
            $(this).remove();
        });
    });
});