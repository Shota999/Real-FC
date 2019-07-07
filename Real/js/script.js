$(document).ready(function () {

    // tabs
    $(".openTabs").click(function () {
        let active_element = $(this).parent().parent().nextAll('.active');
        let next_active = $("#" + $(this).data('tab'));
        if (active_element && next_active) {
            $(active_element).removeClass('active');
            $(next_active).addClass('active');
            $(this).parent().find('.active').removeClass('active');
            $(this).addClass('active');
        }
    });

    $(".dropdown_menu").hover(
        function () {
            $(this).children(".dropdown_content").stop().fadeToggle(200);
        });

    $('.blitz').hover(function () {
            $('.onhover').attr('src', 'images/blitz_hover.png');
            $(this).children(".fa-caret-left").stop().toggle();
        },
        function () {
            $('.onhover').attr('src', 'images/blitz.png');
            $(this).children(".fa-caret-left").stop().toggle();
        }
    );
    $('.blitz').hover(function () {
        $('.hover_container').stop().toggleClass('show');
    });

    $(".registration_popup").click(function () {
        $(".popup_container").addClass("show");
    });
    $(".close_container").click(function () {
        $(".popup_container").removeClass("show");
    });

    var swiper = new Swiper('.swiper-container', {
        speed: 600,
        parallax: true,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: true,
    });

    // Timer
    $('#getting-started').countdown('2019/07/09', function (event) {
        $(this).html(event.strftime('1 დღე 56 წთ : %S წამი'));
    });
});