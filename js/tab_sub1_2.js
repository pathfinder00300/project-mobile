$(document).ready(function(){

    // 처음에는 첫 번째 내용만 보이게
    $('.sec1').show();
    $('.sec2').hide();
    $('.sec3').hide();
    $('.sec4').hide();
    $('.sec5').hide();


    $('.tabs .tab').on('click', function(e){

        e.preventDefault();

        // 내가 클릭한 탭의 순번
        let index = $(this).index('.tabs .tab');


        // 모든 탭 비활성화
        $('.tabs .tab').removeClass('active');

        // 클릭한 탭만 활성화
        $(this).addClass('active');


        // 모든 내용 숨기기
        $('.sec1, .sec2, .sec3, .sec4, .sec5').hide();


        // 첫 번째 탭
        if(index === 0){

            $('.sec1').fadeIn('slow');

        }

        // 두 번째 탭
        else if(index === 1){

            $('.sec2').fadeIn('slow');

        }else if(index === 2){

            $('.sec3').fadeIn('slow');

        }else if(index === 3){

            $('.sec4').fadeIn('slow');

        }else if(index === 4){

            $('.sec5').fadeIn('slow');

        }

    });

});