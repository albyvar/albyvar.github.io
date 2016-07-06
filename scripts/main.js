$(document).ready(function(){

	$("a.mobile").click(function(){
		$(".sidebar").slideDown('fast');
	});

	$("a.menuclose").click(function(){
		$(".sidebar").slideUp('fast');
	});

		
	

	window.onresize = function(event){
		if($(window).width() > 730){
			$(".sidebar").show();
		}
	};

	function mhweb_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('#mhwebhold').offset().top;
    if (window_top > div_top) {
        $('#hold').addClass('glue');
        $('#mhwebhold').height($('#hold').outerHeight());

        

    } else {
        $('#hold').removeClass('glue');
        $('#mhwebhold').height(0);
    }
}

$(function() {
    $(window).scroll(mhweb_relocate);
    mhweb_relocate();

});

	


});

