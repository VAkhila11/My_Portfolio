(function ($) {
    "use strict";

    // Smooth scrolling to section
    $(".btn-scroll").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
        }
    });

    
    // Typed Initiate
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }
    
    
    // Skills
    function initializeProgressBars() {
        $('.progress .progress-bar').each(function () {
            $(this).css('width', '0');
            const value = $(this).attr("aria-valuenow");
            setTimeout(() => {
                $(this).css({
                    'width': value + '%',
                    'transition': 'width 2s ease-in-out'
                });
            }, 100);
        });
    }

    // Initialize progress bars on page load
    $(document).ready(function() {
        setTimeout(initializeProgressBars, 500);
    });

    // Initialize progress bars when they come into view
    $('.skill').waypoint(function () {
        initializeProgressBars();
    }, { offset: '80%', triggerOnce: true });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        items: 1
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    // Handle responsive content margin
    function handleResponsiveLayout() {
        if (window.innerWidth < 992) { // lg breakpoint
            document.querySelector('.content').style.marginLeft = '0';
        } else {
            document.querySelector('.content').style.marginLeft = '350px';
        }
    }

    // Call on load and resize
    window.addEventListener('load', handleResponsiveLayout);
    window.addEventListener('resize', handleResponsiveLayout);
})(jQuery);

