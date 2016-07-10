
$(function() {

	$("form").validate({
		rules: {
			confirm_email: {
				equalTo: "input[name='email']"
			},
			zip_code: {
				number: true,
				minlength: 6,
				maxlength: 10
			},
			password: {
				minlength: 8
			},
			confirm_password: {
				minlength: 8,
				equalTo: "input[name='password']"
			}

		},
		messages: {
			email: {
				required: "You'll use this as your user ID"
			},
			confirm_email: {
				equalTo: "Please provide same email"
			},
			zip_code: {
				required: "Please provide your zip code"
			},
			password: {
				required: "A strong password will be nice"
			},
			confirm_password: {
				equalTo: "Please provide same password"
			}
		},
		submitHandler: function() {
			alert("Welcome to join us!");
		}
	});

	$("input[type='submit']")
		.mousedown(function() {
			$("input[type='submit']").css("background", "#fff");
		})
		.mouseup(function() {
			$("input[type='submit']").css("background", "#eee");
		});
});
