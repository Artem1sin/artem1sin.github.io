$(function () {
   function scrollToTop(sectionId) {
      console.log(sectionId);
      var targetScroll =  $(sectionId).offset().top;
      $('html, body').animate({scrollTop: targetScroll + 1}, 1000);
   }
   
   $('a[href*="#"]').on('click', function() {
      sectionId = $(this).attr('href');
      scrollToTop(sectionId);
      $('.burger, .menu, body').removeClass('active');
   });

   $(window).on('scroll', function(event) {
      var height = $(window).scrollTop(),
          mainHeight = $('#header').offset().top,
          firstSectionHeight = $('#about').offset().top,
          secondSectionHeight = $('#services').offset().top,
          thirdSectionHeight = $('#interior').offset().top,
          fourthSectionHeight = $('#polygraphy').offset().top,
          fivethSectionHeight = $('#reviews').offset().top,
          sixthSectionHeight = $('#faq').offset().top,
          seventhSectionHeight = $('#contacts').offset().top;
      if (height > firstSectionHeight) {
         $('.dots__link:eq(0)').removeClass('active');
         $('.dots__link:eq(1)').addClass('active');
      } else {
         $('.dots__link:eq(1)').removeClass('active');
         $('.dots__link:eq(0)').addClass('active');
      }
      if (height > secondSectionHeight) {
         $('.dots__link:eq(1)').removeClass('active');
         $('.dots__link:eq(2)').addClass('active');
      } else {
         $('.dots__link:eq(2)').removeClass('active');
      }
      if (height > thirdSectionHeight) {
         $('.dots__link:eq(2)').removeClass('active');
         $('.dots__link:eq(3)').addClass('active');
         
      } else {
         $('.dots__link:eq(3)').removeClass('active');
      }
      if (height > fourthSectionHeight) {
         $('.dots__link:eq(3)').removeClass('active');
         $('.dots__link:eq(4)').addClass('active');
         
      } else {
         $('.dots__link:eq(4)').removeClass('active');
      }
      if (height > fivethSectionHeight) {
         $('.dots__link:eq(4)').removeClass('active');
         $('.dots__link:eq(5)').addClass('active');
         
      } else {
         $('.dots__link:eq(5)').removeClass('active');
      }
      if (height > sixthSectionHeight) {
         $('.dots__link:eq(5)').removeClass('active');
         $('.dots__link:eq(6)').addClass('active');
         
      } else {
         $('.dots__link:eq(6)').removeClass('active');
      }
      if ((height + 200) > seventhSectionHeight) {
         $('.dots__link:eq(6)').removeClass('active');
         $('.dots__link:eq(7)').addClass('active');
         
      } else {
         $('.dots__link:eq(7)').removeClass('active');
      }

   });

   $('.switch').on('click', function() {
      $('span').toggleClass('active'); 
      scrollToTop('#about'); 
   });

   $('.reviews__slider').slick();

   $('.faq__title').click(function() { 
      $(this).toggleClass('active').next().slideToggle(300);   
   });
   
   $('button[data-popup="true"]').on('click', function () {
      $('.popup').toggleClass('active');
      $('.popup-text').text($(this).attr('data-title'));
      $('.overlay').show();
      $('body').addClass('active');
   });

   $('.popup__close-btn').click(function () { 
      $('.overlay').hide();
      $('.popup').toggleClass('active');
      $('body').removeClass('active');
   });

   $('.burger').click(function(){
      $('.burger, .menu, body').toggleClass('active');
   });
});