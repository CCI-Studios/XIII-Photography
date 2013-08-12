(function($) {

	$(function () {
		
		if ($(window).width() > 1200)
		{
			$(".view-collections .views-field-field-image-2 [data-url], .view-photo-album-node .views-field-field-image-2 [data-url]")
			.each(function()
			{
				setTimeout(function(i){
					$("<img src='"+$(this).attr("data-url")+"' />");
				}, i*500);
			});
		}

	});

}(jQuery));