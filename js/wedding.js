$(function() {
	$.localScroll.hash({
		target: 'body', // Could be a selector or a jQuery object too.
		queue:true,
		duration: 1000
	});
	
	$.localScroll({ 
		target: 'body', // could be a selector or a jQuery object too.
		queue:true,
		duration: 1000,
		hash:true,
		onBefore:function( e, anchor, $target ){
			// The 'this' is the settings object, can be modified
		},
		onAfter:function( anchor, settings ){
		   // The 'this' contains the scrolled element (#content)
		}
	});   
	                                  
	var url = "http://wedding-timer.heroku.com/";
	$.getJSON(url + "?callback=?");    
	        
	$('.fancybox').fancybox();
});

function WT(data){                 
	var weddingTime = new Date(data.wedding_time * 1000);                      
	$('#countdown .content').countdown({until: weddingTime}); 
}