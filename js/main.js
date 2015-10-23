$(document).ready(function() {
	//alert('ready');

	//Scroll Local, take out clickdesk links
	// Bind to the click of all links with a #hash in the href
  $('a[href^="#"]').not('.launch-chat').click(function(e) {
    // Prevent the jump and the #hash from appearing on the address bar
    e.preventDefault();
    // Scroll the window, stop any previous animation, stop on user manual scroll
    // Check https://github.com/flesler/jquery.scrollTo for more customizability
    $(window).stop(true).scrollTo(this.hash, {duration:1000, interrupt:true});
  });

	// Animate the Remember When Next Button
	$('.btn-next').hover(function(){
  	$(this).animate({
    	top: "+=10"
  	}, {
    	duration: 300,
    	complete: function() {
				$(this).animate({
		    	top: "-=10"
		  	}, 300 );
    	}
  	});
	});
	// Attach input checks to Payroll Calc Input
	$('#payroll-calc-input').each(function() {
    var elem = $(this);

    // Save current value of element
    elem.data('oldVal', elem.val());

    // Look for changes in the value
    elem.bind("propertychange change click keyup input paste", function(event){
       // If value has changed...
       if (elem.data('oldVal') != elem.val()) {
        // Updated stored value
        elem.data('oldVal', elem.val());

        // Do action
				var price = 100 + (elem.val() * 6);
        $('#payroll-price').html("$" + price);
      }
    });
  });
	$('.launch-chat').click(function() {
		console.log('launch');
	});
});
