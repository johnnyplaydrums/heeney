main = function() {
	
	$(".bio-button").click(function() {
		$(".music").css('display','none');
		$(".shows").css('display','none');
		$(".social-media").css('display','none');
		$(".bio-text").slideToggle();
	});

	$(".music-button").click(function() {
		$(".bio-text").css('display','none');
		$(".shows").css('display','none');
		$(".social-media").css('display','none');
		$(".music").slideToggle();	
	});
	
	$(".shows-button").click(function() {
		$(".bio-text").css('display','none');
		$(".music").css('display','none');
		$(".social-media").css('display','none');
		$(".shows").slideToggle();	
	});

	$(".social-button").click(function() {
		$(".bio-text").css('display','none');
		$(".shows").css('display','none');
		$(".music").css('display','none');
		$(".social-media").slideToggle();	
	});


};

$(document).ready(main);
