var album, photos, arrow_left, arrow_right, x_max, x_min, x, x_move, x_per_page;

(function($) {

	$(function () {
		x_move = 241;
		x = 0;

		arrow_left = $("#arrow-left");
		arrow_right = $("#arrow-right");

		album = $(".view-collections .view-content, .view-photo-album-node .view-content");
		photos = $(".view-collections .views-row, .view-photo-album-node .views-field-field-image ul li");
		x_max = photos.size()-1;
		x_min = 0;


		album.on("touchstart", function(e){
			album.data({
				"touchstartX": e.originalEvent.touches[0].pageX, 
				"left_touchstart":parseInt(album.css("left"))||0
			});
		});
		album.on("touchmove", function(e){
			e.preventDefault();
			var deltaX = e.originalEvent.touches[0].pageX - album.data("touchstartX");
			var left = album.data("left_touchstart");
			left += deltaX;
			var max_left = 0;
			var min_left = -1*(x_max-x_per_page+1)*x_move;
			if (left > max_left) {
				left = max_left;
				arrow_left.hide();
			}
			else
			{
				arrow_left.show();
			}
			if (left < min_left) {
				left = min_left;
				arrow_right.hide();
			}
			else
			{
				arrow_right.show();
			}
			album.css({"left": left+"px"});
		});

		var windowWidth = $(window).width();
		x_per_page = 4;
		if (windowWidth < 1060)
			x_per_page = 3;
		if (windowWidth < 800)
			x_per_page = 2;
		if (windowWidth < 560)
			x_per_page = 1;

		if (photos.size() <= x_per_page)
		{
			arrow_left.hide();
			arrow_right.hide();
		}
		else
		{
			arrow_left.hide();

			arrow_left.click(function(){
				arrow_right.show();
				arrow_left_click();
			});
			arrow_right.click(function(){
				arrow_left.show();
				arrow_right_click();
			});
		}

		$(window).resize(windowResize);

		function windowResize()
		{
			var windowWidth = jQuery(window).width();
			x_per_page = 4;
			if (windowWidth < 1060)
				x_per_page = 3;
			if (windowWidth < 800)
				x_per_page = 2;
			if (windowWidth < 560)
				x_per_page = 1;
		}
	});

}(jQuery));

function arrow_right_click()
{
	x++;
	if (x>x_max) x=x_max;
	var left = "-"+(x*x_move)+"px";
	album.animate({"left": left});

	if (x == x_max-(x_per_page-1))
		arrow_right.hide();
}

function arrow_left_click()
{
	x--;
	if (x<x_min) x=x_min;
	var left = "-"+(x*x_move)+"px";
	album.animate({"left": left});

	if (x == x_min)
		arrow_left.hide();
}

function scrollTo(y)
{
	arrow_left.show();
	arrow_right.show();

	if (y < x)
	{
		x = y-1;
		arrow_right_click();
	}
	else if (y > x + (x_per_page-1))
	{
		x = y-(x_per_page-2);
		arrow_left_click();
	}

	if (x == x_max-(x_per_page-1))
		arrow_right.hide();

	if (x == x_min)
		arrow_left.hide();
}
