// JavaScript Document
$(document).ready(function() {				   
    rateItm($("#menvitem").val());
		
});

function rateItm(navcur){
			var span = document.getElementById("menv"+navcur+""); 
		    span.className= 'c1'+navcur;
}