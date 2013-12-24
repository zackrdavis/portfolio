//follow cursor with div
$(document).mousemove(function(e){
      $('#follower').css('top', e.clientY).css('left', e.clientX);
});


//expand+contract divs
$(document).ready(function(){
    $(".expand").not(".linklabel").click(function(){
       

        
	
		$(this).toggleClass('shrunk expanded');

});    
});

