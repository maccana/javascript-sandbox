$('#hideshow').toggle(function() {
	$('#hideshow').text('Hide Gallery');
	$('#message, #hideshow').fadeIn('slow');
	$('#message').show();


}, function() {
	
	$('#hideshow').text('Show Gallery');
	$('#message').fadeOut('slow');
	//$('#message').hide();
	//$('#desc').hide();
});