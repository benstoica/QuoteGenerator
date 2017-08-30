$(document).ready(function() {
	$("#new").on("click",function(){
	$.getJSON("https://random-quote-generator.herokuapp.com/api/quotes/random",function(json){
$("#quoteDisplay").html(json.quote);
		
		});
	});
});