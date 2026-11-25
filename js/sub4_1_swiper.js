// 유튜브 리스트 스와이퍼

var swiper3 = new Swiper('.swiper1', {
    autoHeight: false, //높이유동  ( .swiper-container에 height:auto)
    slidesPerView: 1.5,  //단수
    spaceBetween: 15,  //단사이 여백
    loop: true,  //무한 loop
    
    //freeMode: true,  //터치 만큼 자유롭게 이동
    centeredSlides: true, //센터 슬라이드 위치(만약 단수가 2개이면 양쪽은 반반씩 보임)
    initialSlide:0, //0~시작
    //effect: 'fade',   //페이드효과(단수가 1단이 된다)
    //effect: 'flip',  //3D 회전효과(단수가 1단이 된다)
    // navigation: {    //이전/다음 버튼
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },
    // pagination: {   //페이지 네이션
    //     el: '.swiper-pagination',
    //     // dynamicBullets: true,
    //     clickable: true,
    //     //type: 'fraction'   //  현재/총개수 (페이지네이션블릿은 사라진다)
    // },
    // autoplay: {  //자동
    //     delay: 3000,
    //     disableOnInteraction: false
    // },
    // scrollbar: {  //하단 스크롤바
    //     el: '.swiper-scrollbar',
    //     hide: true
    // }
});

// ==============================
    // 썸네일 클릭 → 메인 영상 변경
    // ==============================
    $(document).on('click', '.youtube_item a', function(e) {

        e.preventDefault();

        var videoId = $(this).data('video');

        $('.youtube_main iframe').attr(
            'src',
            'https://www.youtube.com/embed/' + videoId
        );

    });