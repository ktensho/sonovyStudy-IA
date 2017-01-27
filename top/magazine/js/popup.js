
//------------------Text pop up----------------------------------

$('.presentText').bind('click',function(){
  $('#cover').css({
    'position': 'absolute',
    'left': 0,
    'top': 0,
    'width': $(window).width(),
    'height': 100+'vh',
  })
    .show();
    $('.curriculum').css({
      'position': 'absolute',
      'top': 0,
      'z-index': 210

    })
  .fadeIn('fast');
});

$('.presentWork').bind('click',function(){
  $('.curriculum').fadeOut('fast',function(){
    $('#cover').hide();
  });
});

/* 解説ページポップアップ */
