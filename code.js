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
   
});

