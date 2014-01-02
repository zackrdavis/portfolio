//follow cursor with color transparency div
$(document).mousemove(function(e){
      $('#follower').css('top', e.clientY).css('left', e.clientX);
});

//expand/contract/scroll on click
$(document).ready(function(){
   //
   $(".expand").not(".linklabel").click(function(){
		$(this).toggleClass('shrunk expanded');
		console.log("didit");
   });
   
   $(".expand").not(".expanded").click(function(){
      $('html, body').animate({
         scrollLeft: $(this).offset().left
      }, 2000);
   });

   $(".expand").click(function(e){
      if($(e.target).hasClass('noshrink')){
         
      } else {
         var current_div = $(this);
         $(this).toggleClass('shrunk expanded');
         $(".expanded").not(current_div).toggleClass('shrunk expanded');
      }
   });    
   
   $(".expand").click(function(){
      var item = $(this).attr('id');
      // console.log(item);
      var itemIndex = $(this).index('.expand');
      var shrunkWidth = 260;
      var itemPos = itemIndex * (shrunkWidth + 63) + 75; 
      
      if ($(this).hasClass('expanded')) {
         var centerOffset = (($(window).width())/2)-(908/2);
      } else {
         var centerOffset = (($(window).width())/2)-(shrunkWidth/2);
      };
      
      $("#content").animate({scrollLeft:(itemPos - centerOffset)}, 50
   });
   
});

