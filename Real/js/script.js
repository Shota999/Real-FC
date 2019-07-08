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

    // Popup

    $(".registration_popup").click(function() {
        $(".popup_container").addClass("show");
    });
    $(".close_container").click(function() {
        $(".popup_container").removeClass("show");
    });

    // Swiper
    
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
    $('#getting-started').countdown('2019/12/29', function (event) {
        $(this).html(event.strftime('%d დღე %M წთ : %S წამი'));
    });
    
});