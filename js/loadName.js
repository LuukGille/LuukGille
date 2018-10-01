$(".name span").bind('oanimationend animationend webkitAnimationEnd', function() { 
	$(this).addClass('present');
});