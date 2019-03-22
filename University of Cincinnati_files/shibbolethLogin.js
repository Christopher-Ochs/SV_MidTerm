$(function () {

	var oldIE;
	var isIE;

    if ($('html').is('.ie7, .ie8')) {
    	isIE = true;
        oldIE = true;
    }

    if ($('html').is('.ie9')) {
    	isIE = true;
        oldIE = false;
    }

    if (oldIE) {
        var el = $(".col-lg-offset-3");
        el.css('background-color', 'black');
        el.css('MAX-WIDTH', '400px');
        el.css('MIN-WIDTH', '200px');
        el.css('MARGIN', '0px auto');

        //add old browser alert
        $('h1').after('<div class="alert alert-warning">You are using a version of Internet Explorer which is no longer supported. Some features may not work correctly. Upgrade to a modern browser, such as <a href="https://www.google.com/intl/en/chrome/browser/" rel="external" target="_blank">Google Chrome</a> or <a href="http://www.mozilla.org/en-US/firefox/new/" rel="external" target="_blank">FireFox</a>.</div>');
    } 

    if (isIE) {
    	$('label').show();
    }

    //end ie dection
    //Help slide down
    $("#helpbtn").click(function () {
        $("#needHelp").toggle ("slow", function () {
            // Animation complete.
        });                
    });


	$('form').submit(function () {
		var returnVal = true;
		if ($('#j_username').val() === "" || $('#j_username').val() === "Username"){
			$('#j_username').closest('.form-group').addClass('has-error');
			$('#clientValidation').show();
			returnVal = false;
		}

		if ($('#j_password').val() === "" || $('#j_password').val() === "Password"){
			$('#j_password').closest('.form-group').addClass('has-error');
			$('#clientValidation').show();
			returnVal = false;
		}
		return returnVal;
	});


});
