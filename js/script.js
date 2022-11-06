$(document).ready(function(){
  $('.carousel__inner').slick({
    infinite: true,
    speed: 1200,
    /* adaptiveHeight: true, */
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png"></button>',
    responsive: [
      {
      breakpoint: 992,
      settings: {
        dots: true,
        arrows: false,
        dots: false
        }
      }  
          
    ]
  });

  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });


  function toggleSlide(item){
    $(item).each(function(i) {
      $(this).on('click', function(e){
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      })
    })
  };
  
  toggleSlide('.catalog-item__link');
  toggleSlide('.catalog-item__back');
    
  // Modal
  $('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn('slow');
  });
  $('.modal__close').on('click', function() { 
    $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
  });
  
  $('.button_mini').each(function(i) {
    $(this).on('click', function() {
      $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
      $('.overlay, #order').fadeIn('slow');
    })
  });



  function validateForms(form){
    $(form).validate({
      rules: {
        name: {
          required: true,
          minlength: 2
        },
        phone: "required",
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: {
          required: "Будь ласка, введіть своє ім'я",
          minlength: jQuery.validator.format("Ім'я повинно містити мінмум {0} символи!")
        },
        phone: "Будь ласка, введіть свій номер тулефону",
        email: {
          required: "Ввудіть свою пошту",
          email: "Неправильно введено адресу пошти"
        }
      }
    });
  };

  validateForms('#consultation-form');
  validateForms('#consultation form');
  validateForms('#order form');
  
  $('input[name=phone]').mask("+38 (999) 999-99-99");   
  //Потрібно видалити type="number" інакше не буде працювати
  
  //Smooth scroll and pageup
  $(window).scroll(function() {
    if($(this).scrollTop() >1600) {
      $('.pageup').fadeIn();
    } else {
      $('.pageup').fadeOut();
    }
  });

  new WOW().init();
});
