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

    // Font size up and down

    $('.font-size-up').click(function() {
        $('#main-content *').each(function() {
            let currentFontSize = Number($(this).css('font-size').replace('px', ''));
            $(this).css('font-size', ++currentFontSize + 'px');
            $(this).css('line-height', 2*(++currentFontSize) + 'px');
        });
    });

    $('.font-size-down').click(function() {
        $('#main-content *').each(function() {
            let currentFontSize = Number($(this).css('font-size').replace('px', ''));
            $(this).css('font-size', --currentFontSize);
            $(this).css('line-height', 2*(--currentFontSize) + 'px');
        });
    });

    // Registration popup

    $(".registration_popup").click(function () {
        $(".show_popup").addClass("show");
    });

    // Sign in popup

    $(".sign_in_popup").click(function () {
        $(".sign_in_popup_container").addClass("show");
    });

    // Information popup

    $(".information").click(function () {
        $(".information_popup").addClass("show");
    });

    // Hide popup on body click

    $('.popup_container').click(function (e) {
        console.log(e.target.offsetParent.className);
        
        if (!e.target.offsetParent || (e.target.offsetParent.className !== 'registration' && e.target.offsetParent.className !== 'input_container')) {
            $(".popup_container").removeClass("show");
        }
    });

    // Hide popup
    $(".close_container").click(function () {
        $(".popup_container").removeClass("show");
    });

    // Remove avatar
    $(".remove_avatar").click(function () {
        $(".fa-circle").toggleClass("show_avatar");
    });

    // Grid
    $(".grid1").click(function () {
        $(".grid1").addClass("active");
        $(".grid2").removeClass("active");
        $(".news").removeClass("active");
    });
    $(".grid2").click(function () {
        $(".grid2").addClass("active");
        $(".grid1").removeClass("active");
        $(".news").addClass("active");
    });

    // Password

    $("#see_password").click(function() {
        if( $("#password").attr("type") == "password"){
            $("#password").attr("type", "text");
            $('#see_password .far').removeClass('fa-eye').addClass('fa-eye-slash');
        }else{
            $("#password").attr("type", "password");
            $('#see_password .far').removeClass('fa-eye-slash').addClass('fa-eye');
        }
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

    $('.gallery').click(function () {
        new Swiper('.gallery_slider', {
            slidesPerView: 4,
            // slaidebs shoris dashoreba 
            spaceBetween: 10,
            speed: 600,
            navigation: {
                nextEl: '.next-four',
                prevEl: '.prev-four',
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
    });

    // Same news

    var swiper = new Swiper('.new_slider', {
        slidesPerView: 2,
        // slaidebs shoris dashoreba 
        spaceBetween: 0,
        speed: 600,
        navigation: {
            nextEl: '.next-new',
            prevEl: '.prev-new',
        },
        loop: true,
        breakpoints: {
            1024: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            640: {
                slidesPerView: 1,
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

    // ===== Scroll to Top ==== 
    $('#return-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
    });

    // Answer comment

    $('.answer').click(function () {
        $(this).parents('.text').find('.comment_form').toggleClass('show');
    });
    
    $(document).mouseup(function (e) {
        var container = $(".comment_form"); // YOUR CONTAINER SELECTOR

        if (!container.is(e.target) // if the target of the click isn't the container...
            &&
            container.has(e.target).length === 0) // ... nor a descendant of the container
        {
            container.removeClass('show');
        }
    });

    // Redactor

    $(document).ready(function() {

        $('.textarea').redactor({

            imageUpload: "{{url('admin/upload')}}?_token=" + "{{csrf_token()}}",

            fileUpload: "{{url('admin/upload')}}?_token=" + "{{csrf_token()}}",

            lang: 'en',

            autoresize: true,

            minHeight: 200,

            plugins : ['emoticons'],

            emoticons : {
                viewType: 'modal',

                items: [{
                    'name': 'Happy',
                    'src' : 'http://acmilan.ge/engine/data/emoticons/022.gif',
                    'shortcode' : ':)'
                },
                {
                    'name': 'Sad',
                    'src' : 'http://acmilan.ge/engine/data/emoticons/fuck%20morata.gif',
                    'shortcode' : ':('
                }],
                
                button: {
                    addBefore: 'fontcolor',
                }
            }
        });

    });

    // Filter

    $(".filter").click(function () {
        $(".hide_container").toggleClass('show');
        $(this).toggleClass('text_color');
    });


    // Responsive menu

    $(".show_menu").click(function () {
        $(".hidden_menu").toggleClass('show');
    });
    $('.dropdown_menu').click(function () {
        $(this).find('.dropdown_content').toggleClass('show');
    });

    $(".show_match").click(function () {
        $(".right_container").toggleClass('show');
    });
});