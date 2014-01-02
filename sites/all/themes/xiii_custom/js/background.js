var i = 0;
var i_max;
var wait_time = 5000;
var timer;

jQuery(function () {
	//setup for the collections list switching
	i_max = jQuery(".view-collections img, .view-photo-album-node img").size()-1;
	if (i_max > 0)
		timer = setInterval(next, wait_time);

	//set the default active photo
	jQuery(".view-photo-album-node li.first, .view-collections .views-row-1").addClass("active");
	setBackground(0);

	//setup album photo clicks
	jQuery(".view-photo-album-node img").click(function()
	{
		clearInterval(timer);

		jQuery(".view-photo-album-node .active").removeClass("active");
		jQuery(this).parent().addClass("active");

		i = jQuery(this).parent().index();

		setBackground(i);

		return false;
	});
	
	//resize the backgrounds when the browser is resized
	jQuery(window).resize(resizeBackground);

	//catch key presses
	jQuery(document).keydown(keypress);
});

function next()
{
	i++;
	if (i > i_max) i=0;

	jQuery(".view-collections .active, .view-photo-album-node .active").removeClass("active");
	jQuery(".view-collections .views-row, .view-photo-album-node .views-field-field-image li")
		.eq(i)
		.addClass("active");

	setBackground(i);

	scrollTo(i);
}

function previous()
{
	i--;
	if (i < 0) i=i_max;

	jQuery(".view-collections .active, .view-photo-album-node .active").removeClass("active");
	jQuery(".view-collections .views-row, .view-photo-album-node .views-field-field-image li")
		.eq(i)
		.addClass("active");

	setBackground(i);

	scrollTo(i);
}

function setBackground(index)
{
	jQuery("#background img").addClass("old");

	var url;
	if (jQuery(window).width() > 1200)
	{
		url = jQuery(".views-field-field-image-2 [data-url]").eq(index).attr("data-url");
	}
	else
	{
		url = jQuery(".views-field-field-image-1 [data-url]").eq(index).attr("data-url");
	}

	if (url)
	{
		jQuery("#background img").addClass("old");
		jQuery("#background").append("<img class='new' />");

		jQuery("#background img.new")
			.one("load", resizeBackground)
			.one("load", preloadNext)
			.attr("src", url);
	}
}

function resizeBackground()
{
	var img;
	if (jQuery("#background img").size()>1)
	{
		img = jQuery("#background img.new");
	}
	else
	{
		img = jQuery("#background img");
	}

	//console.log("img.height="+img.height()+", window.height="+jQuery(window).height());

	if (!img.height())
	{
		setTimeout(resizeBackground, 10);
		return;
	}

	var temp_img = img.clone().addClass("temp-img").removeClass("landscape").appendTo("body");


	if (!temp_img.height())
	{
		setTimeout(resizeBackground, 10);
		return;
	}

	//console.log("temp_img.height="+temp_img.height()+", window.height="+jQuery(window).height());

	if (temp_img.height() <= jQuery(window).height())
	{
		img
			.addClass("landscape")
			.css({
				"margin-left":"-"+(temp_img.addClass("landscape").width()/2)+"px",
				"margin-top":"",
				"top":""
			});
	}
	else
	{
		img
			.removeClass("landscape")
			.css({
				"margin-left":"",
				"margin-top": "-"+(temp_img.removeClass("landscape").height()/2)+"px",
				"top": "50%"
			});
	}

	temp_img.remove();

	jQuery("#background img.new")
	.hide()
	.removeClass("new")
	.fadeIn(1000, function(){
		jQuery("#background img.old").addClass("remove");
		setTimeout(function(){
			jQuery("#background img.remove").remove();
		}, 1000);
	});
}

function preloadNext()
{
	var next = i+1;
	if (next > i_max) next=0;

	if (jQuery(window).width() > 1200)
	{
		url = jQuery(".views-field-field-image-2 [data-url]").eq(next).attr("data-url");
	}
	else
	{
		url = jQuery(".views-field-field-image-1 [data-url]").eq(next).attr("data-url");
	}

	var img = new Image();
	img.src = url;
}

function keypress(event)
{
	switch (event.keyCode)
	{
		case 37:
			previous();
			clearInterval(timer);
			break;

		case 39:
			next();
			clearInterval(timer);
			break;

		case 13:
			var active_link = jQuery(".view-collections .active a");
			if (active_link.length == 1)
			{
				window.location = active_link.attr("href");
			}
			break;

		case 8:
			window.history.back();
			break;
	}
}

