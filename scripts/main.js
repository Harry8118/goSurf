$(function () {
   $('.header__slider').slick({
      Infinite: true,
      fade: true,
      arrows: true,
      prevArrow: '<img class="slider-arrows slider-arrows__left" src="/image/icons/arrow-left.svg" alt="">',
      nextArrow: '<img class="slider-arrows slider-arrows__right" src="/image/icons/arrow-right.svg" alt="">',
      asNavFor: '.slider-body',
   });

   $('.slider-body').slick({
      slidesToShow: 4,
      slideToScroll: 4,
      asNavFor: '.header__slider',
   })



   $('.surf-slide').slick({
      slidesToShow: 4,
      slideToScroll: 1,
      prevArrow: '<img class="slider-arrows slider-arrows__left" src="/image/icons/arrow-left.svg" alt="">',
      nextArrow: '<img class="slider-arrows slider-arrows__right" src="/image/icons/arrow-right.svg" alt="">',
      asNavFor: '.slider-map',
      focusOnSelect: true,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 3,
            }
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 2,
            }
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 2,
            }
         }
      ]
   })

   $('.slider-map').slick({
      slidesToShow: 8,
      slideToScroll: 1,
      arrows: false,
      asNavFor: '.surf-slide',
      focusOnSelect: true,
   })

   $('.holder__slider, .shop__slider',).slick({
      Infinite: true,
      fade: true,
      dots: true,
      prevArrow: '<img class="slider-arrows slider-arrows__left" src="/image/icons/arrow-left.svg" alt="">',
      nextArrow: '<img class="slider-arrows slider-arrows__right" src="/image/icons/arrow-right.svg" alt="">',
   })

   $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="./image/icons/Plus.svg" alt=""></div><div class="quantity-button quantity-down"><img src="./image/icons/minus.svg" alt=""></div></div>').insertAfter('.quantity input');
   $('.quantity').each(function () {
      var spinner = $(this),
         input = spinner.find('input[type="number"]'),
         btnUp = spinner.find('.quantity-up'),
         btnDown = spinner.find('.quantity-down'),
         min = input.attr('min'),
         max = input.attr('max');

      btnUp.click(function () {
         var oldValue = parseFloat(input.val());
         if (oldValue >= max) {
            var newVal = oldValue;
         } else {
            var newVal = oldValue + 1;
         }
         spinner.find("input").val(newVal);
         spinner.find("input").trigger("change");
      });

      btnDown.click(function () {
         var oldValue = parseFloat(input.val());
         if (oldValue <= min) {
            var newVal = oldValue;
         } else {
            var newVal = oldValue - 1;
         }
         spinner.find("input").val(newVal);
         spinner.find("input").trigger("change");
      });

   });


   $('.quantity-button').on('click', function () {
      let summ = ($('.nights').val()) * ($('.summ').data('night')) + ($('.guests').val() - 1) * ($('.summ').data('guests'))
      $('.summ').html('$ ' + summ);
   })

   let summ = $('.nights').val() * $('.summ ').data('night') + ($('.guests').val() - 1) * $('.summ').data('guests')
   $('.summ').html('$ ' + summ);



   $('.surfboard__box-circle').on('click', function () {
      $(this).toggleClass('activ')
   })


   $('.menu-btn').on('click', function () {
      $('.menu').toggleClass('active')
   })

   new WOW().init();

})


var today = new Date()

var date = `${today.getMonth() + 1} | ${today.getFullYear()}`

var day = today.getDate()

var dt = document.getElementById('date')
dt.innerText = date

var dy = document.getElementById('day')
dy.innerText = day

