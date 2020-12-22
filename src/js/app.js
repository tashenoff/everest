

$(function() {
  objectFitImages();
  initPhoneMask();
});


$('.hamburger').on('click', function() {
  $('.menu-header').slideToggle('medium', function() {
    if ($(this).is(':visible')) {
      $(this).css('display', 'block');
    
    } 
  });
});

$('.hamburger').click(function(e) {
  e.preventDefault();
  $(this).toggleClass('is-active');
});

$('#owl-one').owlCarousel({
  loop:true,
  margin:10,
  dots: false,
  nav: false,
  responsiveClass:true,
  responsive:{
    0:{
      items:3,
      nav:false
    },
    600:{
      items:3,
      nav:false
    },
    1000:{
      items:3,
      nav:false,
      loop:false,
      margin: 0,
    }
  }
})


$('#owl-two').owlCarousel({
  loop:true,
  margin:10,
  dots: false,
  nav: false,
  responsiveClass:true,
  responsive:{
    0:{
      items:4,
      nav:false
    },
    600:{
      items:4,
      nav:false
    },
    1000:{
      items:4,
      nav:false,
      loop:false
    }
  }
})


$('#owl-three').owlCarousel({
  loop:true,
  margin:10,
  dots: false,
  nav: false,
  responsiveClass:true,
  responsive:{
    0:{
      items:4,
      nav:false
    },
    600:{
      items:4,
      nav:false
    },
    1000:{
      items:4,
      nav:false,
      loop:false
    }
  }
})


// Example 1: From an element in DOM
$('.open-popup-link').magnificPopup({
  type:'inline',
  midClick: true, // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
  removalDelay: 300,
  mainClass: 'mfp-fade',

});


$('#my_form_email').submit(function(){
    $.post(
        'http://everest.intrmd.kz/post-email.php', // адрес обработчика
         $("#my_form_email").serialize(), // отправляемые данные          
  
        function(msg) { // получен ответ сервера  
            // $('#my_form_email').hide('slow');
            $('#my_message_email').html(msg);
        }
    );
    
    return false;
});


$(document).ready(function() {
  $(".popup").magnificPopup({
    type: "image",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: true,
    gallery: {
      enabled: true
    }
  });
});
$(".bootleggers").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  navText: [
    "<i class='fa fa-caret-left'></i>",
    "<i class='fa fa-caret-right'></i>"
  ]
});

// function sendAjaxForm(result_form, ajax_form, url) {
//   $.ajax({
//       url: "send.php",
//       type:     "POST", //метод отправки
//       dataType: "html", //формат данных
//       data: $("#"+ajax_form).serialize(),  // Сеарилизуем объект
//       success: function(response) { //Данные отправлены успешно
//         result = $.parseJSON(response);
//         $('#result_form').html('<div class="green"><img src="https://www.flaticon.com/svg/static/icons/svg/753/753345.svg">' + 'Сообщение успешно отправленно!' + '</div>');
//     },
//     error: function(response) { // Данные не отправлены
//           $('#result_form').html('<div class="red"><img src="https://www.flaticon.com/svg/static/icons/svg/753/753345.svg">' + 'Ошибка. Данные не отправлены.' + '</div>');
//     }
//  });
// }
