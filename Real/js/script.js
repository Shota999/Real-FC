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

    // Registration popup

    $(".registration_popup").click(function () {
        $(".show_popup").addClass("show");
    });
    $(".close_container").click(function () {
        $(".popup_container").removeClass("show");
    });

    // Sign in popup

    $(".sign_in_popup").click(function () {
        $(".sign_in_popup_container").addClass("show");
    });
    $(".close_container").click(function () {
        $(".sign_in_popup_container").removeClass("show");
    });

    // Swiper

    // First slider

    var swiper = new Swiper('.slider_first', {
        speed: 600,
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

    // Second slider

    var swiper = new Swiper('.slider_second', {
        speed: 600,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: false,
    });

    // Gallery slider

    var swiper = new Swiper('.gallery_slider', {
        speed: 600,
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


    // Load more

    $(".news").slice(0, 17).show();
    $("#loadMore").on("click", function (e) {
        e.preventDefault();
        $(".news:hidden").slice(0, 4).slideDown();
        if ($(".news:hidden").length == 0) {
            $("#loadMore").text("No Content").addClass("noContent");
        }
    });

    // ===== Scroll to Top ==== 
    $('#return-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
    });
});