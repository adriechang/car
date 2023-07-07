$(function() {
    $('.m_burger_box').click(function() {
        $('.jp_nav_box').show();
        bodyHide();
        setTimeout(function() {
            $('.jp_nav_box .m_slider_body').addClass('open');
        }, 100);
    });

    $('.slider_close_btn').click(function() {
        sliderClose();
    });

    function bodyHide() {
        $('body').addClass('body_hidden');
    }

    function sliderClose() {
        $('.m_slider_body').removeClass('open');
        setTimeout(function() {
            $('.m_slider_style').hide();
            $('body').removeClass('body_hidden');
        }, 500);
    }

    $('.js_show_more').click(function() {
        $('.car_more_sec').toggleClass('d_none');
    });
    $('.js_sub_item').click(function() {
        $('.jp_lable_sub_box,.jp_lable_sub_box').show();
        $('.m_slider_lable_box .m_slider_body').addClass('body_hidden');
        bodyHide();
        setTimeout(function() {
            $('.jp_lable_sub_box .m_slider_body').addClass('open');
        }, 100);
    });

    $('.js_close_bg').click(function() {
        $('.m_slider_body').removeClass('open');
        setTimeout(function() {
            $('.jp_lable_sub_box').hide();
            $('body,.m_slider_lable_box .m_slider_body').removeClass('body_hidden');
        }, 500);
    });

    //tab
    var tabs_menu = document.getElementsByClassName("tabs_menu");
    for (var k = 0; k < tabs_menu.length; k++) {
        tabs_menu[k].onclick = js_tabs;
    }

    function js_tabs() {
        var tab_id = this.getAttribute("data-target");
        var tabs_panel = document.getElementsByClassName("tabs_panel");

        for (var i = 0; i < tabs_panel.length; i++) {
            tabs_panel[i].style.display = "none";
        }
        for (var j = 0; j < tabs_menu.length; j++) {
            tabs_menu[j].className = tabs_menu[j].className.replace("tabs_menu_active", "");
        }
        this.className += " tabs_menu_active";
        document.getElementById(tab_id).style.display = "block";
        return false;
    }

    //篩選切換
    $('.normal_list>p').on('click', function() {
        $(this).siblings().removeClass('active').end().addClass('active');
    });

    //輪播
    $('.car_lable_box_new.owl-carousel').owlCarousel({
        dots: false,
        margin: 10,
        responsive: {
            0: {
                items: 5
            },
            768: {
                items: 6
            },
            1200: {
                items: 8
            }
        }
    });

    $(".m_used_car_box.owl-carousel").owlCarousel({
        dots: false,
        margin: 10,
        responsive: {
            0: {
                items: 2.5
            },
            768: {
                items: 3.5
            },
            991: {
                items: 4
            }
        }
    });

    $(".main_used_car_box.owl-carousel").owlCarousel({
        dots: false,
        margin: 10,
        responsive: {
            0: {
                items: 1.5
            },
            768: {
                items: 2.5
            },
            991: {
                items: 4
            }
        }
    });
});