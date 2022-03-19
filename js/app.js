$(function() {

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();
    
    
    
    
    // fixed header
    checkScroll(scrollOffset);

    $(window).on("scroll", function() {

        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);

    });

    function checkScroll(scrollOffset) {
        if (scrollOffset >= introH) {
            header.addClass("fixed");
        }
        else {
            header.removeClass("fixed");
        }
    }





    // smooth scroll
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        var $this=$(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;
        
        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockOffset
        });
    });






    // menu nav toggle
    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();
        
        $(this).toggleClass("active")
        $("#nav").toggleClass("active");

        
    });



    $(window).on("click", function (event) {
         
        var $trigger = $("#nav_toggle");
        if($trigger !== event.target && !$trigger.has(event.target).length){
            $("#nav").removeClass("active");
            $("#nav_toggle").removeClass("active");
        }            
    });

    



    // collapse
    $("[data-collapse]").on("click", function (event) {
        event.preventDefault();
        
        var $this = $(this),
            blockId = $this.data('collapse');
        
        
        $this.toggleClass("active");
    });


    // slider
    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });

});