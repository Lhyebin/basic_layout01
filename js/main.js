$(function () {


    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 0 ? $('.header').addClass('on') : $('.header').removeClass('on')
    })




    /* <슬라이드 갯수 메뉴바 동작 만들기> */
    $('.main_slide').on('init afterChange', function (e, s, c) {
        const current = $('.main_slide .slick-current');
        current.addClass('on').siblings().removeClass('on');

        $('.main_visual .slide_num span').text(c ? (c + 1) : 1);
        $('.main_visual .slide_num strong').text(s.slideCount);

        console.log(s.slideCount)

        $('.main_visual .menu li').eq(0).addClass('on')
        $('.main_visual .menu li').eq(c).addClass('on')
            .siblings().removeClass('on');
    })

    $('.main_slide').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        pauseOnHover: false,
        fade: true,
        arrows: false,
    });


    $('.main_visual .arrows .left').on('click', function () {
        $('.main_slide').slick('slickPrev')
    });
    $('.main_visual .arrows .right').on('click', function () {
        $('.main_slide').slick('slickNext')
    });


    $('.main_visual .menu li').on('click', function (e) {
        e.preventDefault();
        const idx = $(this).index(); //0, 1, 2
        $('.main_slide').slick('slickGoTo', idx)
    })






    $('.product_slide').slick({
        slidesToShow: 3,
        asNavFor: ".pic_slide",
        // -> 슬라이드 동시에 2개 같이 움직이게 하기
        focusOnSelect: true,
        arrows: false,
        centerMode: true,
        centerPadding: '20px',

        // <반응형 : 화면 사이즈 작아졌을때 3개씩 돌아가던 슬라이드를 제품 1개씩 돌아가도록>
        responsive: [
            {
                breakpoint: "768",
                settings: {
                    slidesToShow: 1,

                }
            }
        ]
    });







    $('.main_big_product .arrows .left').on('click', function () {
        $('.product_slide2').slick('slickPrev')
    })
    $('.main_big_product .arrows .right').on('click', function () {
        $('.product_slide2').slick('slickNext')
    })








    $('.product_slide2').slick({
        slidesToShow: 3,
        arrows: false,
        dots: true,
        // <반응형 : 화면 사이즈 작아졌을때 3개씩 돌아가던 슬라이드를 제품 1개씩 돌아가도록>
        responsive: [
            {
                breakpoint: "768",
                settings: {
                    slidesToShow: 1,

                }
            }
        ]
    });








    $('.pic_slide').slick({
        vertical: true,
        arrows: false,
        asNavFor: '.product_slide',
    });




    /* <위로 올라가는 버튼 만들기>  */
    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 600);
    });

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        //sct > 1000 ? $('.to_top').fadeIn(1000) : $('.to_top').fadeOut();
        sct > 1000 ? $('.to_top').addClass('on') : $('.to_top').removeClass('on');
    })



    $('.scr').on('click', function (e) {
        e.preventDefault();
        const st = $(this.hash).offset().top;
        console.log(st);
        $('html, body').animate({ scrollTop: st }, 600);
    })








    $('.history_menu li').on('click', function (e) {
        e.preventDefault();
        // -> 새로고침했을때 페이지 상단으로 가지않도록 설정
        let idx = $(this).index();
        $('.history_content li').eq(idx).addClass('on').siblings().removeClass('on');
    })









    // <푸터 : 네이버 구글 다음 고를 수 있는 체인지 박스>
    $('#fl').on('change', function () {
        // const lnk = $(this).val();
        // console.log(lnk, '바뀌네~~~');
        // if (lnk) { window.open(lnk); } -> val()가 있을때만 뜨게끔

        lnk && window.open(lnk);
    });



    $('.family_link2 span').on('click', function () {
        $(this).toggleClass('on');
        $(this).next().toggleClass('on');
    })







    /* <슬라이드ㅡ으ㅡㅡㅡㅡㅡ> */
    $('.portfolio_slide').on('init afterChange', function (e, s, c) {
        console.log(c)
        $('.main_portfolio .itm').eq(c).addClass('on').siblings().removeClass('on')
    })

    $('.portfolio_slide').slick({
        centerMode: true,
        variableWidth: true,
        arrows: false,
        dots: true,
    });



    $('.main_portfolio .tab_arrows .left').on('click', function () {
        $('.portfolio_slide').slick('slickPrev')
    });
    $('.main_portfolio .tab_arrows .right').on('click', function () {
        $('.portfolio_slide').slick('slickNext')
    });


});