$(function () {
   $('button[data-popup="true"]').on('click', function () {
      $('.popup').toggleClass('active');
      $('.overlay').show();
      $('body').addClass('active');
   });

   $('.popup__close-btn').click(function () { 
      $('.overlay').hide();
      $('.popup').toggleClass('active');
      $('body').removeClass('active');
   });
})