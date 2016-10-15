$(document).ready(function(){

	function startProgBar(){
		$('.prog-bar').addClass('progress-bar');
	}
$('.image').hide().fadeIn(2000);

		var INTERVAL_IN_MS = 5000;

		var feed1 = "";
		var feed2 = "";
		var feed3 = "";
	  function getImage00() {
	    $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?", {
	        tagmode: "nature",
	        format: "json"
	      }, function(data) {
	           var rnd = Math.floor(Math.random() * data.items.length);
	           var image_src = data.items[rnd]['media']['m'].replace("_m", "_b");
						 $('.row-2-box-1 .image').hide(100).fadeIn(1500).css('background-image', "url('" + image_src + "')");
						 $('.row-3-box-1 .image').hide(100).fadeIn(1500).css('background-image', "url('" + image_src + "')");
	        // start the timeout countdown only after the previous image has been fetched and displayed
	        window.setTimeout(getImage00, INTERVAL_IN_MS);
	      });

	  }

		function getImage01() {
	    $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?", {
	        tagmode: "wild",
	        format: "json"
	      }, function(data) {

	           var rnd = Math.floor(Math.random() * data.items.length);
	           var image_src = data.items[rnd]['media']['m'].replace("_m", "_b");
						 $('.row-2-box-3 .image').hide(100).fadeIn(1500).css('background-image', "url('" + image_src + "')");
						 $('.row-3-box-3 .image').hide(100).fadeIn(1500).css('background-image', "url('" + image_src + "')");
	        // start the timeout countdown only after the previous image has been fetched and displayed
	        window.setTimeout(getImage01, INTERVAL_IN_MS);
	      });

	  }

		function getImage02() {
	    $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?", {
	        tagmode: "animals",
	        format: "json"
	      }, function(data) {

	           var rnd = Math.floor(Math.random() * data.items.length);
	           var image_src = data.items[rnd]['media']['m'].replace("_m", "_b");
						 $('.row-3-box-2 .image').hide(100).fadeIn(1500);
						 $('.row-3-box-2 .image').css('background-image', "url('" + image_src + "')");
	        // start the timeout countdown only after the previous image has been fetched and displayed
	        window.setTimeout(getImage02, INTERVAL_IN_MS);
	      });

	  }

	  window.setTimeout(getImage00, INTERVAL_IN_MS);
		window.setTimeout(getImage01, INTERVAL_IN_MS);
		window.setTimeout(getImage02, INTERVAL_IN_MS);

});
