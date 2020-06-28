// Enable Tool Tips Globally 
$(function () {
	$('[data-toggle="tooltip"]').tooltip()
});


// Radio Button Selector * FOR DEVELOPMENT ONLY *
$(document).ready(function () {
    $('input:radio').click(function () {
        var selValue = $("input:radio:checked").val();
		$("header .col-md-12").removeClass().addClass("col-md-12").addClass(selValue);
		if ($('header .col-md-12').hasClass('text-center')) {
			$(".col-md-5").first().removeClass().addClass("col-md-5 offset-md-1 mt-3");
			$("header img").first().removeClass().addClass("img-fluid mx-auto d-block");
		};
		if ($('header .col-md-12').hasClass('text-right')) { 
			$(".col-md-5" ).first().removeClass().addClass("col-md-5 offset-md-2 mt-3");
 			$("header img").first().removeClass().addClass("img-fluid ml-auto d-block");
		};
		if ($('header .col-md-12').hasClass('text-left')) {	
			$(".col-md-5").first().removeClass().addClass("col-md-5 mt-3");
			$("header img").first().removeClass().addClass("img-fluid mr-auto d-block");
		};
    });
});
// END Radio Button Selector * FOR DEVELOPMENT ONLY *
