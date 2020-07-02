$("document").ready(function () {
    "use strict";
    
    // nice scroll plugin
        $("body").niceScroll({
        cursorcolor: "#f9218d",
        cursorwidth: "8px",
        cursorborder: "1px solid #f9218d"
    });
    
     $(".header").height($(window).height());

    $(window).resize(function () {
        $(".header").height($(window).height());
    });
    $(".header .header-info").each(function () {
        $(this).css('paddingTop', ($(window).height() - $(".navbar").height()) / 2 - 140);
    });
    
    // auto write
        var typed = new Typed('.writter', {
        strings: ["<p>attractive visual learning experience</p>", "<p>Get daily tasks and bounes</p>"],
        typeSpeed: 50,
        backSpeed: 20,
        backDelay: 1000,
        loop: true
    });
    
    // loading
    $(".loading").ready(
        function () {
            setTimeout(function () {
                $(".loading").fadeOut();

            }, 3000);
        });


});
