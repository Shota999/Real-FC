$(document).ready(function () {

    // tabs
    $(".openTabs").click(function () {
        let active_element = $(this).parent().parent().nextAll('.active');
        console.log(active_element)
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
            el: '.pagination-first',
            clickable: true,
        },
        navigation: {
            nextEl: '.next-first',
            prevEl: '.prev-first',
        },
        loop: true,
    });

    // Second slider New pagination da isrebis klasebi shevcvale

    var swiper = new Swiper('.slider_second', {
        pagination: {
            el: '.pagination-second',
            clickable: true,
        },
        navigation: {
            nextEl: '.next-second',
            prevEl: '.prev-second',
        },
        loop: false,
    });

    // Video slider

    var swiper = new Swiper('.video_slider', {
        slidesPerView: 4,
        // slaidebs shoris dashoreba 
        spaceBetween: 10,
        speed: 600,
        navigation: {
            nextEl: '.next-third',
            prevEl: '.prev-third',
        },
        loop: true,
        breakpoints: {
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            }
          }
    });

    // Gallery slider

    var swiper = new Swiper('.gallery_slider', {
        slidesPerView: 4,
        // slaidebs shoris dashoreba 
        spaceBetween: 10,
        speed: 600,
        navigation: {
            nextEl: '.next-third',
            prevEl: '.prev-third',
        },
        loop: true,
        breakpoints: {
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            }
          }
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