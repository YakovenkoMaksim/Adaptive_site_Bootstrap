$(document).ready(function() {

	function fullHeight(){
		var winHeight = $(window).height();
		$('.start_s').height(winHeight);
	};
	fullHeight();
	$(window).resize(function(){
		fullHeight();
	});
	
});

$(document).ready(function() {

    $(".top_menu_button").click(function() {
        $(".top_menu ul").slideToggle();
    });

    $(".top_menu").find("a").click(function() {

        if ($( window ).width() < 1024) {
            $(".top_menu ul").slideToggle();
        }
    });
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

    $("a.scroll").click(function() {
        $.scrollTo($(".div"), 800, {
            offset: -90
        });
    });

    $("#top_menu").click(function () {
        $("body, html").animate({
            scrollTop: 0
        }, 800);
        return false;
    });

});