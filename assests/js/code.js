$(window).on('load', function () {
    /*preloader*/
    /*load all images first*/
    let update = 0;
    let imagesSrc = new Array();
    imagesSrc = ["/assests/images/bg1.jpg"
        , "/assests/images/bg2.jpg", "/assests/images/b1.jpg"
        , "/assests/images/b2.jpg", "/assests/images/b3.jpg"
        , "/assests/images/b4.jpg", "/assests/images/b5.jpg"
        , "/assests/images/b6.jpg", "/assests/images/b7.jpg"
        , "/assests/images/b8.jpg"
        , "/assests/images/b10.jpg", "/assests/images/b11.jpg"
        , "/assests/images/b12.jpg", "/assests/images/b13.jpg"
        , "/assests/images/b14.jpg", "/assests/images/b15.jpg"
        , "/assests/images/b16.jpg", "/assests/images/b17.jpg"
        , "/assests/images/b18.jpg", "/assests/images/b19.jpg"
        , "/assests/images/b20.jpg", "/assests/images/b21.jpg"
        , "/assests/images/b22.jpg"]

    var imagesToPreload = document.querySelectorAll('.body_content img');
    function preloadImage(no) {
        new ImagePreloader(imagesSrc[no], function () {
            if (imagesSrc.length === update) {
                $('.preloader').delay(3000).fadeOut('slow', function () {
                    $('.body_content').addClass('body_active');  //To show web content
                    AOS.init({ duration: 800, }); //start AOS animation

                    /*after load images start with slick slider library*/
                    $('.img_content').not('.slick-initialized').slick({
                        slidesToShow: 3,
                        centerMode: true,
                        centerPadding: '0px',
                        slidesToScroll: 1,
                        autoplay: true,
                        autoplaySpeed: 3000,
                        initialSlide: 0,
                        arrows: false,
                        dots: false,
                        pauseOnHover: true,
                        responsive: [{
                            breakpoint: 1000,
                            settings: {
                                slidesToShow: 2
                            }
                        }, {
                            breakpoint: 800,
                            settings: {
                                slidesToShow: 1
                            }
                        }]
                    });
                    $('.img_slide').not('.slick-initialized').slick({
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: true,
                        autoplaySpeed: 2000,
                        initialSlide: 0,
                        arrows: true,
                        dots: false,
                        pauseOnHover: true,
                        speed: 1500

                    });
                    $('.img2_slide').not('.slick-initialized').slick({
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        autoplay: true,
                        autoplaySpeed: 2000,
                        initialSlide: 0,
                        arrows: true,
                        dots: false,
                        pauseOnHover: true,
                        speed: 1000,
                        responsive: [{
                            breakpoint: 700,
                            settings: {
                                slidesToShow: 1
                            }
                        }]
                    });
                });
            }
        });
    }

    for (var i = 0; i < imagesSrc.length; i++) {
        update++;
        preloadImage(i);

    }

    /***********************************************************************************************/
    /*slider background images*/
    $('.img_header').backstretch([
        "/assests/images/bg1.jpg"
        , "/assests/images/bg2.jpg"
    ], { duration: 6000, fade: 2000 });
    /***********************************************************************************************/
    /*Another way for slider background images*/
    /*var img_array = [1, 2],
        index = 0,
        interval = 6000;
    (function changeBg() {
        index = (index + 1) % img_array.length;
        $('.full').fadeOut('fast', function () {
            $('.full').css({ 'background': 'linear-gradient( 90deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url(/assests/images/bg' + img_array[index] + '.jpg) center no-repeat' });
            $('.full').fadeIn('fast');
        });
        setTimeout(changeBg, interval);
    })();*/
    /************************************************************************************************/
    /*refresh AOS animation only on wheel event*/
    $(window).on("wheel", function () {
        /*first reset and refresh AOS animation*/
        AOS.refresh();
    })
    /*catch scroll*/
    $(window).on("scroll", function () {
        /*if scroll down > 50
            >> animate header
            >> show back to top button
        else
            >>DO OPPOSITE
        */
        if ($(window).scrollTop() > 50) {
            $("header").addClass("header_active");
            $('#button').addClass('show');
        } else {
            $("header").removeClass("header_active");
            $('#button').removeClass('show');
        }
    });
    /************************************************************************************************/
    /*show burger button on mobile screen*/
    let button_burger = document.querySelector('.burger__input');
    let nav = document.querySelector('header .right_nav');
    /*@ screen width 900px 
        >>hidden nav bar
        >>reset check box
    */
    let media1090 = window.matchMedia("(max-width: 1090px)");
    media1090.addListener(media) // call handler function whenever the media query is triggered
    media(media1090);
    function media(media) {
        if (media1090.matches) {
            $(button_burger).prop('checked', false);
            nav.classList.add('hide');
        } else {
            $(button_burger).prop('checked', false);
            nav.classList.remove('hide');
            nav.classList.remove('block');
        }
    }
    /************************************************************************************************/
    /*show nav bar when click on burger button*/
    $('.burger__input').unbind("click").click(function () { //unbind() method removes event handlers from selected elements.
        nav.classList.toggle('block');
    });
    /************************************************************************************************/
    // when pressed on back to top button
    $('#button').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    });
    /************************************************************************************************/
    // Show the first tab and hide the rest
    $('.tabs_nav li:first-child').addClass('active_tab');

    // Click function
    $('.tabs_nav li').click(function () {
        $('.tabs_nav li').removeClass('active_tab');
        $(this).addClass('active_tab');
        return false;
    });
    // Show the first tab and hide the rest
    $('.tabs_nav2 li:first-child').addClass('active_tab');

    // Click function
    $('.tabs_nav2 li').click(function () {
        $('.tabs_nav2 li').removeClass('active_tab');
        $(this).addClass('active_tab');
        return false;
    });
    /************************************************************************************************/
    /*Dark mode
        >>First get attribute and check if web page in dark mode or light mode
        >>second change theme and change Title Image*/
    $('.dark_mode').on('click', function () {
        let check = (document.body.getAttribute('data-theme') === 'dark');

        if (check) {
            document.body.setAttribute('data-theme', '');
            $('.dark_mode img').prop('title', 'Light Mode');
        } else {
            document.body.setAttribute('data-theme', 'dark');
            $(".dark_mode img").prop("title", "Dark Mode");
        }
        console.log(check)

    });
    /************************************************************************************************/
});

