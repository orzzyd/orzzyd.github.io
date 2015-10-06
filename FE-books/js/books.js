$(document).ready(function() {
	var $booksList=$("#books-list");
	var $doc=$(document);
	$(document).scroll(function(event) {
		/* Act on the event */
		if ($doc.scrollTop()>260) {
			$booksList.addClass('books-list-word-scroll');
		}else{
			$booksList.removeClass('books-list-word-scroll').addClass('books-list-word');
		};
		if (($doc.scrollLeft()>0)&&($doc.scrollTop()>260)) {
			var $offset_left=$doc.scrollLeft();
			$offset_left=-1*$offset_left;
			$booksList.css('left', $offset_left);
		}else{
			$booksList.removeAttr('style');
		};
		if (($(window).height()<550)&&($doc.scrollTop()>260)) {
			$booksList.hide();
		}else{
			$booksList.show();
		};
	});
	$(window).resize(function(event) {
		/* Act on the event */
		var $booksList=$("#books-list");
		if (($(window).height()<550)&&($doc.scrollTop()>260)) {
			$booksList.hide();
		}else{
			$booksList.show();
		};
	});
});