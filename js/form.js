document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // these IDs from the previous steps
    emailjs.sendForm('service_k5ls7pk', 'template_f1qb548', this)
        .then(() => {
            console.log('SUCCESS!');
            alert('메일 전송에 성공하였습니다.');
        }, (error) => {
            console.log('FAILED...', error);
            alert('메일 전송에 실패하였습니다.');
        });
    // 문의하기 버튼 클릭
    $('.btn_submit').on('click', function(e){

        // 개인정보 동의 체크 안 했을 경우
        if(!$('#privacy').is(':checked')){
            e.preventDefault();

            // 기존 문구가 여러 번 생기지 않게
            $('.privacy_error').remove();

            $('.agree').append(
                '<p class="privacy_error">개인정보 수집 및 이용에 동의해주세요.</p>'
            );

            return false;
        }

        // 체크되어 있으면 에러 문구 제거
        $('.privacy_error').remove();
    });


    // 체크하면 바로 에러 문구 제거
    $('#privacy').on('change', function(){

        if($(this).is(':checked')){
            $('.privacy_error').remove();
        }

    });
});