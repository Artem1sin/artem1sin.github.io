function loader () {
	$(document).ready(function() {
		setInterval(() => {
			let loader = $('.loader');
			loader.css('display', 'none');
		}, 2000);
	});
}

loader();

$(document).ready(function() {
	$('.burger').click(function(event) {
		$('body, .burger, .heading__menu').toggleClass('active');
	});
});