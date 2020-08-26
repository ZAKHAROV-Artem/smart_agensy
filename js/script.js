 $(".burger").click(function() {
     $(".menu").animate({ left: '30%' });
 });
 $(".close-menu").click(function() {
     $(".menu").animate({
         left: '100%'
     });
 });