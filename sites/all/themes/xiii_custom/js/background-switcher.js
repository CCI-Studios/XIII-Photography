(function($) {

	var i = 0;
	var i_max;

	$(function () {

		i_max = $(".view-collections img").size()-1;

		if (i_max > 0)
			setTimeout(next, 4000);

	});

	function next()
	{
		i++;
		if (i > i_max) i=0;
	}
}(jQuery));