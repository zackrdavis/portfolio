//follow cursor with div
$(document).mousemove(function(e){
      $('#follower').css('top', e.clientY).css('left', e.clientX);
});


//expand+contract divs
$(document).ready(function(){
    $(".expand").not(".linklabel").click(function(){
       
        /* var current_div = $(this); */
        
	
		$(this).toggleClass('shrunk expanded');
		
		
		/*
$(this).animate({marginTop:61, height:550, width:908, opacity:1}, 500, function(){
		});
*/
	
/*
		$(".expand").not(current_div).animate({marginTop: 150,  height:360, width:260, opacity:1}, 500, function(){
			$(this).removeClass("expanded");
		});   
*/
	
/*
	$(".expanded").click(function(){

		$(this).animate({marginTop:150, height:360, width:260, opacity:1}, 500, function(){
			$(this).toggleClass("expanded");
		});

	}); 
*/ 
/*
	$(".expanded").click(function(event){
	
		$(this).animate({marginTop: 150,  height:360, width:260, opacity:1}, 500, function(){

*/
	
/*
$(document).ready(function(){
    $("#clickListener").click(function(event){
       
    $(".expand").animate({marginTop:150, height:360, width:260, opacity:1}, 500, function(){
	$(this).removeClass("expanded");
*/

	

    
 /*
   $('*').click(function(event){
    
    $(".expand").animate({marginTop: 150,  height:360, width:260, opacity:1}, 500, function(){
	$(this).css("z-index","9998");
	});   
	
	    		
    });

*/

});    
});

