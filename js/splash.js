(function(){
  const splash=document.getElementById('splash');
  if(!splash)return;
  let timer;
  function showSplash(){
    clearTimeout(timer);
    splash.classList.remove('hide');
    timer=setTimeout(()=>splash.classList.add('hide'),2000);
  }
  // 페이지 로딩 시 시작. 로딩이 느려도 화면을 4초 이상 막지 않습니다.
  if (!sessionStorage.getItem('splashShown')) {
      sessionStorage.setItem('splashShown', 'true');
      showSplash();
  } else {
      splash.remove();
  }
  const replay=document.getElementById('replay');
  if(replay)replay.addEventListener('click',showSplash);
})();
