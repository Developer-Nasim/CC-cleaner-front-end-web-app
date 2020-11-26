(function($) {
  "use strict";
  
  
  $('.ckb').click( function (){ 
    $('.cookie-area').toggleClass('cookie-delete');   
  }); 


  // Mobile nenu
  $('.humg-btn').click(function(){
    $('.humg-btn').toggleClass('humgbMenu')
  });
  $('.humg-btn').click(function(){
    $('.mobile-menu').toggleClass('menuActivve')
  }); 

  
 
})(jQuery);
