// JavaScript Document
$(document).ready(function(){
	$('form').submit(function(e){
		e.preventDefault()
		alert("pedido realizado")
		$('.delR').val('');
		
	})
});

