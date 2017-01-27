

//------------------Unicook TopPage header pop up about what Unicook ---------------------


$('header').bind('click',function(){
  $('#cover').css({
    'position': 'absolute',
    'left': 0,
    'top': 0,
    'width': $(window).width(),
    'height': 8600+'px'
  })
    .show();
    $('#unicookAbout').css({
      'position': 'absolute',
      'left': 5+'%',
      'top': $(window).scrollTop() + 80 + 'px',
      'z-index': 140

    })
  .fadeIn('slow');
});

$('#unicookAbout,#cover').bind('click',function(){
  $('#unicookAbout').fadeOut('slow',function(){
    $('#cover').hide();
  });
});




//------------------Store1 pop up----------------------------------

$('.content1').bind('click',function(){
  $('#cover').css({
    'position': 'absolute',
    'left': 0,
    'top': 0,
    'width': $(window).width(),
    'height': 2600+'px'
  })
    .show();
    $('#store1').css({
      'position': 'absolute',
      'top': $(window).scrollTop() + 80 + 'px',
      'z-index': 140

    })
  .fadeIn('slow');
});

$('.store1Page,#cover').bind('click',function(){
  $('#store1').fadeOut('slow',function(){
    $('#cover').hide();
  });
});

$('.content2').bind('click',function(){
  $('#cover').css({
    'position': 'absolute',
    'left': 0,
    'top': 0,
    'width': $(window).width(),
    'height': 2600+'px'
  })
    .show();
    $('#store2').css({
      'position': 'absolute',
      'top': $(window).scrollTop() + 80 + 'px',
      'z-index': 140

    })
  .fadeIn('slow');
});

$('#store2,#cover').bind('click',function(){
  $('#store2').fadeOut('slow',function(){
    $('#cover').hide();
  });
});


$('.content3').bind('click',function(){
  $('#cover').css({
    'position': 'absolute',
    'left': 0,
    'top': 0,
    'width': $(window).width(),
    'height': 2600+'px'
  })
    .show();
    $('#store3').css({
      'position': 'absolute',
      'top': $(window).scrollTop() + 80 + 'px',
      'z-index': 140

    })
  .fadeIn('slow');
});

$('#store3,#cover').bind('click',function(){
  $('#store3').fadeOut('slow',function(){
    $('#cover').hide();
  });
});



$('.content4').bind('click',function(){
  $('#cover').css({
    'position': 'absolute',
    'left': 0,
    'top': 0,
    'width': $(window).width(),
    'height': 2600+'px'
  })
    .show();
    $('#store4').css({
      'position': 'absolute',
      'top': $(window).scrollTop() + 80 + 'px',
      'z-index': 140

    })
  .fadeIn('slow');
});

$('#store4,#cover').bind('click',function(){
  $('#store4').fadeOut('slow',function(){
    $('#cover').hide();
  });
});





//--------------------photoGallery function Popup---------------------------------------

$('.gallery01').bind('click',function(){
  $('#cover').css({
    'position': 'absolute',
    'left': 0,
    'top': 0,
    'width': $(window).width(),
    'height': 5600+'px'
  })
    .show();
    $('.galleryLarge01').css({
      'position': 'absolute',
      'left': 0,
      'top': $(window).scrollTop() + 100 + 'px',
      'z-index': 140

    })
  .fadeIn('slow');
});

$('#cover, .galleryLarge01').bind('click',function(){
  $('.galleryLarge01').fadeOut('slow',function(){
    $('#cover').hide();
  });
});

//------------------------------------------------------------------------

$('.gallery02').bind('click',function(){
  $('#cover').css({
    'position': 'absolute',
    'left': 0,
    'top': 0,
    'width': $(window).width(),
    'height': 5600+'px'
  })
    .show();
    $('.galleryLarge02').css({
      'position': 'absolute',
      'left': 0,
      'top': $(window).scrollTop() + 100 + 'px',
      'z-index': 140

    })
  .fadeIn('slow');
});

$('#cover, .galleryLarge02').bind('click',function(){
  $('.galleryLarge02').fadeOut('slow',function(){
    $('#cover').hide();
  });
});

//------------------------------------------------------------------------

$('.gallery03').bind('click',function(){
  $('#cover').css({
    'position': 'absolute',
    'left': 0,
    'top': 0,
    'width': $(window).width(),
    'height': 5600+'px'
  })
    .show();
    $('.galleryLarge03').css({
      'position': 'absolute',
      'left': 0,
      'top': $(window).scrollTop() + 100 + 'px',
      'z-index': 140

    })
  .fadeIn('slow');
});

$('#cover, .galleryLarge03').bind('click',function(){
  $('.galleryLarge03').fadeOut('slow',function(){
    $('#cover').hide();
  });
});

//------------------------------------------------------------------------

$('.gallery04').bind('click',function(){
  $('#cover').css({
    'position': 'absolute',
    'left': 0,
    'top': 0,
    'width': $(window).width(),
    'height': 5600+'px'
  })
    .show();
    $('.galleryLarge04').css({
      'position': 'absolute',
      'left': 0,
      'top': $(window).scrollTop() + 100 + 'px',
      'z-index': 140

    })
  .fadeIn('slow');
});

$('#cover, .galleryLarge04').bind('click',function(){
  $('.galleryLarge04').fadeOut('slow',function(){
    $('#cover').hide();
  });
});

//------------------------------------------------------------------------

$('.gallery05').bind('click',function(){
  $('#cover').css({
    'position': 'absolute',
    'left': 0,
    'top': 0,
    'width': $(window).width(),
    'height': 5600+'px'
  })
    .show();
    $('.galleryLarge05').css({
      'position': 'absolute',
      'left': 0,
      'top': $(window).scrollTop() + 100 + 'px',
      'z-index': 140

    })
  .fadeIn('slow');
});

$('#cover, .galleryLarge05').bind('click',function(){
  $('.galleryLarge05').fadeOut('slow',function(){
    $('#cover').hide();
  });
});

//------------------------------------------------------------------------

$('.gallery06').bind('click',function(){
  $('#cover').css({
    'position': 'absolute',
    'left': 0,
    'top': 0,
    'width': $(window).width(),
    'height': 5600+'px'
  })
    .show();
    $('.galleryLarge06').css({
      'position': 'absolute',
      'left': 0,
      'top': $(window).scrollTop() + 100 + 'px',
      'z-index': 140

    })
  .fadeIn('slow');
});

$('#cover, .galleryLarge06').bind('click',function(){
  $('.galleryLarge06').fadeOut('slow',function(){
    $('#cover').hide();
  });
});

//------------------------------------------------------------------------

$('.gallery07').bind('click',function(){
  $('#cover').css({
    'position': 'absolute',
    'left': 0,
    'top': 0,
    'width': $(window).width(),
    'height': 5600+'px'
  })
    .show();
    $('.galleryLarge07').css({
      'position': 'absolute',
      'left':  0,
      'top': $(window).scrollTop() + 100 + 'px',
      'z-index': 140

    })
  .fadeIn('slow');
});

$('#cover, .galleryLarge07').bind('click',function(){
  $('.galleryLarge07').fadeOut('slow',function(){
    $('#cover').hide();
  });
});

//------------------------------------------------------------------------

$('.gallery08').bind('click',function(){
  $('#cover').css({
    'position': 'absolute',
    'left': 0,
    'top': 0,
    'width': $(window).width(),
    'height': 5600+'px'
  })
    .show();
    $('.galleryLarge08').css({
      'position': 'absolute',
      'left': 0,
      'top': $(window).scrollTop() + 100 + 'px',
      'z-index': 140

    })
  .fadeIn('slow');
});

$('#cover, .galleryLarge08').bind('click',function(){
  $('.galleryLarge08').fadeOut('slow',function(){
    $('#cover').hide();
  });
});

//------------------------------------------------------------------------

$('.gallery09').bind('click',function(){
  $('#cover').css({
    'position': 'absolute',
    'left': 0,
    'top': 0,
    'width': $(window).width(),
    'height': 5600+'px'
  })
    .show();
    $('.galleryLarge09').css({
      'position': 'absolute',
      'left': 0,
      'top': $(window).scrollTop() + 100 + 'px',
      'z-index': 140

    })
  .fadeIn('slow');
});

$('#cover, .galleryLarge09').bind('click',function(){
  $('.galleryLarge09').fadeOut('slow',function(){
    $('#cover').hide();
  });
});

//------------------------------------------------------------------------

$('.gallery10').bind('click',function(){
  $('#cover').css({
    'position': 'absolute',
    'left': 0,
    'top': 0,
    'width': $(window).width(),
    'height': 5600+'px'
  })
    .show();
    $('.galleryLarge10').css({
      'position': 'absolute',
      'left': 0,
      'top': $(window).scrollTop() + 100 + 'px',
      'z-index': 140

    })
  .fadeIn('slow');
});

$('#cover, .galleryLarge10').bind('click',function(){
  $('.galleryLarge10').fadeOut('slow',function(){
    $('#cover').hide();
  });
});

//------------------------------------------------------------------------

$('.gallery11').bind('click',function(){
  $('#cover').css({
    'position': 'absolute',
    'left': 0,
    'top': 0,
    'width': $(window).width(),
    'height': 5600+'px'
  })
    .show();
    $('.galleryLarge11').css({
      'position': 'absolute',
      'left': 0,
      'top': $(window).scrollTop() + 100 + 'px',
      'z-index': 140

    })
  .fadeIn('slow');
});

$('#cover, .galleryLarge11').bind('click',function(){
  $('.galleryLarge11').fadeOut('slow',function(){
    $('#cover').hide();
  });
});

//------------------------------------------------------------------------

$('.gallery12').bind('click',function(){
  $('#cover').css({
    'position': 'absolute',
    'left': 0,
    'top': 0,
    'width': $(window).width(),
    'height': 5600+'px'
  })
    .show();
    $('.galleryLarge12').css({
      'position': 'absolute',
      'left': 0,
      'top': $(window).scrollTop() + 100 + 'px',
      'z-index': 140

    })
  .fadeIn('slow');
});

$('#cover, .galleryLarge12').bind('click',function(){
  $('.galleryLarge12').fadeOut('slow',function(){
    $('#cover').hide();
  });
});

//--------------------photoGallery function Popup END---------------------------------------






// ---------------Coupon page ----------------------


$('#btn, #headCoupon').bind('click',function(){
  $('#cover').css({
    'position': 'absolute',
    'left': 0,
    'top': 0,
    'width': $(window).width(),
    'height': 8600+'px'
  })
    .show();
    $('#uniCoupon').css({
      'position': 'absolute',
      'left': 15+'%',
      'top': $(window).scrollTop() + 30 + 'px',
      'z-index': 140

    })
  .fadeIn('slow');
});

$('#cover, #uniCoupon').bind('click',function(){
  $('#uniCoupon').fadeOut('slow',function(){
    $('#cover').hide();
  });
});

// -------------------Coupon page End -------------------------------------

//------------------photoMenu-------------------------

$('#menu1').bind('click',function(){
  $('#cover').css({
    'position': 'absolute',
    'left': 0,
    'top': 0,
    'width': $(window).width(),
    'height': 8600+'px'
  })
    .show();
    $('#photoMenu1').css({
      'position': 'absolute',
      'left': 0,
      'top': $(window).scrollTop() + 100 + 'px',
      'z-index': 140

    })
  .fadeIn('slow');
});

$('#cover, #photoMenu1').bind('click',function(){
  $('#photoMenu1').fadeOut('slow',function(){
    $('#cover').hide();
  });
});
//---------------------------------------------------------
$('#menu2').bind('click',function(){
  $('#cover').css({
    'position': 'absolute',
    'left': 0,
    'top': 0,
    'width': $(window).width(),
    'height': 8600+'px'
  })
    .show();
    $('#photoMenu2').css({
      'position': 'absolute',
      'left': 0,
      'top': $(window).scrollTop() + 100 + 'px',
      'z-index': 140

    })
  .fadeIn('slow');
});

$('#cover, #photoMenu2').bind('click',function(){
  $('#photoMenu2').fadeOut('slow',function(){
    $('#cover').hide();
  });
});
//--------------------------------------

//---------------------------------------------------------
$('#menu3').bind('click',function(){
  $('#cover').css({
    'position': 'absolute',
    'left': 0,
    'top': 0,
    'width': $(window).width(),
    'height': 8600+'px'
  })
    .show();
    $('#photoMenu3').css({
      'position': 'absolute',
      'left': 0,
      'top': $(window).scrollTop() + 100 + 'px',
      'z-index': 140

    })
  .fadeIn('slow');
});

$('#cover, #photoMenu3').bind('click',function(){
  $('#photoMenu3').fadeOut('slow',function(){
    $('#cover').hide();
  });
});
//--------------------------------------


//---------------------------------------------------------
$('#menu4').bind('click',function(){
  $('#cover').css({
    'position': 'absolute',
    'left': 0,
    'top': 0,
    'width': $(window).width(),
    'height': 8600+'px'
  })
    .show();
    $('#photoMenu4').css({
      'position': 'absolute',
      'left': 0,
      'top': $(window).scrollTop() + 100 + 'px',
      'z-index': 140

    })
  .fadeIn('slow');
});

$('#cover, #photoMenu4').bind('click',function(){
  $('#photoMenu4').fadeOut('slow',function(){
    $('#cover').hide();
  });
});
//--------------------------------------



//---------------------------------------------------------
$('#menu5').bind('click',function(){
  $('#cover').css({
    'position': 'absolute',
    'left': 0,
    'top': 0,
    'width': $(window).width(),
    'height': 8600+'px'
  })
    .show();
    $('#photoMenu5').css({
      'position': 'absolute',
      'left': 0,
      'top': $(window).scrollTop() + 100 + 'px',
      'z-index': 140

    })
  .fadeIn('slow');
});

$('#cover, #photoMenu5').bind('click',function(){
  $('#photoMenu5').fadeOut('slow',function(){
    $('#cover').hide();
  });
});
//--------------------------------------



//---------------------------------------------------------
$('#menu6').bind('click',function(){
  $('#cover').css({
    'position': 'absolute',
    'left': 0,
    'top': 0,
    'width': $(window).width(),
    'height': 8600+'px'
  })
    .show();
    $('#photoMenu6').css({
      'position': 'absolute',
      'left': 0,
      'top': $(window).scrollTop() + 100 + 'px',
      'z-index': 140

    })
  .fadeIn('slow');
});

$('#cover, #photoMenu6').bind('click',function(){
  $('#photoMenu6').fadeOut('slow',function(){
    $('#cover').hide();
  });
});
//--------------------------------------



//---------------------------------------------------------
$('#menu7').bind('click',function(){
  $('#cover').css({
    'position': 'absolute',
    'left': 0,
    'top': 0,
    'width': $(window).width(),
    'height': 8600+'px'
  })
    .show();
    $('#photoMenu7').css({
      'position': 'absolute',
      'left': 0,
      'top': $(window).scrollTop() + 100 + 'px',
      'z-index': 140

    })
  .fadeIn('slow');
});

$('#cover, #photoMenu7').bind('click',function(){
  $('#photoMenu7').fadeOut('slow',function(){
    $('#cover').hide();
  });
});
//--------------------------------------
