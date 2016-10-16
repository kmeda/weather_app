$(document).ready(function(){

	function startProgBar(){
		$('.prog-bar').addClass('progress-bar');
	}
	//startProgBar();

//---------Photo feed from Flickr-------//
		var INTERVAL_IN_MS = 5000;
		//flickr albums
		var feed0 = "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=b1db118b7d647291801da82cb76fdfda&photoset_id=72157673889965692&user_id=148193135%40N05&format=json&nojsoncallback=1&auth_token=72157673924779351-a6ce0bbaa932a49c&api_sig=a339151cb4d6102fb368c31b2760ccb3";
		var feed1 = "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=a7444d790bdc74fd18e75fc7d64a4b28&photoset_id=72157671743773323&user_id=148193135%40N05&format=json&nojsoncallback=1&auth_token=72157675167701166-9832f391962b682a&api_sig=791c171c6cfebbaf040fc23190000c92";
		var feed2 = "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=a7444d790bdc74fd18e75fc7d64a4b28&photoset_id=72157675145977626&user_id=148193135%40N05&format=json&nojsoncallback=1&auth_token=72157675167701166-9832f391962b682a&api_sig=4642e718c9e5ea939b2a852d5a7d9b3b";

		function getImage00() {
	    $.getJSON( feed0, function(data) {
	          var rnd = Math.floor(Math.random() * data.photoset.photo.length);
						var link_builder = data.photoset.photo[rnd]
	          var image_src = "https://farm"+ link_builder['farm'] +".staticflickr.com/"+ link_builder['server'] +"/"+ link_builder['id'] +"_"+ link_builder['secret'] +".jpg";
						$('.row-2-box-1 .image, .row-3-box-1 .image').attr('src', image_src).hide().fadeIn(1000);
	        // start the timeout countdown only after the previous image has been fetched and displayed
	        window.setTimeout(getImage00, INTERVAL_IN_MS);
	      });
	  }
		window.setTimeout(getImage00, INTERVAL_IN_MS);


		function getImage01() {
	    $.getJSON( feed1, function(data) {
						var rnd = Math.floor(Math.random() * data.photoset.photo.length);
						var link_builder = data.photoset.photo[rnd]
						var image_src = "https://farm"+ link_builder['farm'] +".staticflickr.com/"+ link_builder['server'] +"/"+ link_builder['id'] +"_"+ link_builder['secret'] +".jpg";
						$('.row-2-box-3 .image, .row-3-box-3 .image').attr('src', image_src).hide().fadeIn(1000);
	        // start the timeout countdown only after the previous image has been fetched and displayed
	        window.setTimeout(getImage01, INTERVAL_IN_MS);
	      });

	  }
		window.setTimeout(getImage01, INTERVAL_IN_MS);


		function getImage02() {
	    $.getJSON( feed2, function(data) {
						var rnd = Math.floor(Math.random() * data.photoset.photo.length);
						var link_builder = data.photoset.photo[rnd]
						var image_src = "https://farm"+ link_builder['farm'] +".staticflickr.com/"+ link_builder['server'] +"/"+ link_builder['id'] +"_"+ link_builder['secret'] +".jpg";
						$('.row-3-box-2 .image').attr('src', image_src).hide().fadeIn(1000);
	        // start the timeout countdown only after the previous image has been fetched and displayed
	        window.setTimeout(getImage02, INTERVAL_IN_MS);
	      });

	  }
		window.setTimeout(getImage02, INTERVAL_IN_MS);

//-------Open weather API---------//



});

//References
//http://stackoverflow.com/questions/32950870/set-interval-on-json-call-to-reload-new-image
