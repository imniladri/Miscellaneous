$("button.btn").click(function(){

	if ($("#rate1").is(":checked"))
		swal("Uh Oh!", "Thanks for your Feedback! (Bored)");

	else if ($("#rate2").is(":checked"))
		swal("Oops!", "Thanks for your Feedback! (Sad)");

	else if ($("#rate3").is(":checked"))
		swal("Wow!", "Thanks for your Feedback! (Happy)");

	else if ($("#rate4").is(":checked"))
		swal("Cheers!", "Thanks for your Feedback! (Loved It)");

	else if ($("#rate5").is(":checked"))
		swal("Yippee!", "Thanks for your Feedback! (Awesome)");

});