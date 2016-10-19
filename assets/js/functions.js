$(document).ready(function(){

	function startProgBar(){
		$('.prog-bar').addClass('progress-bar');
	}
	startProgBar();

//---------Photo feeds from Flickr-------//

		//flickr albums

		var feed0 = "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=1cfa5a530ee66f188f763ab7c250e5e2&photoset_id=72157673889965692&user_id=148193135%40N05&format=json&nojsoncallback=1&api_sig=2afe7cc71451016b3e81a91ad64f7cdc";
		var feed1 = "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=1cfa5a530ee66f188f763ab7c250e5e2&photoset_id=72157675145977626&user_id=148193135%40N05&format=json&nojsoncallback=1&api_sig=bc6436258a6e0cb505e9b53270908b72";
		var feed2 = "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=1cfa5a530ee66f188f763ab7c250e5e2&photoset_id=72157671743773323&user_id=148193135%40N05&format=json&nojsoncallback=1&api_sig=7699e5c33b01d3e434eea5e836c66dcb";

		var INTERVAL_IN_MS = 7000;
		function getImage00() {
	    $.getJSON( feed0, function(data) {
						var rnd = Math.floor(Math.random() * data.photoset.photo.length);
						var link_builder = data.photoset.photo[rnd];
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
						var link_builder = data.photoset.photo[rnd];
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
						var link_builder = data.photoset.photo[rnd];
						var image_src = "https://farm"+ link_builder['farm'] +".staticflickr.com/"+ link_builder['server'] +"/"+ link_builder['id'] +"_"+ link_builder['secret'] +".jpg";
						$('.row-3-box-2 .image').attr('src', image_src).hide().fadeIn(1000);
	        // start the timeout countdown only after the previous image has been fetched and displayed
	        window.setTimeout(getImage02, INTERVAL_IN_MS);
	      });

	  }
		window.setTimeout(getImage02, INTERVAL_IN_MS);

//-------Open weather API---------//

	var coords_arr = [];
	navigator.geolocation.getCurrentPosition(function(position) {
		var lat = position.coords.latitude;
		var lon = position.coords.longitude;
		coords_arr.push(lat, lon);

		var current_weather = "http://api.openweathermap.org/data/2.5/weather?";
		$.getJSON(current_weather,
			{
				lat: coords_arr[0],
				lon: coords_arr[1],
				units: 'metric',
				appid:'da3cb6f02bbac70aa49452c177808490'
			},
			function(data){
			console.log(data);
			$('.location').text(data.name);
			$('.temp-large').text(Math.floor(data.main.temp) + "°");
			$(".toggle").click(function () {
						 var text = $('.toggle').text();
						 $(this).text(text == "C" ? "F" : "C");
						 var temp = $('.temp-large').text();
						 var tempC = Math.floor(data.main.temp);
						 var tempF = (((Math.floor(data.main.temp)) * 9) / 5) + 32;
						 
						 $('.temp-large').text( temp == tempF +  "°" ? tempC +  "°" : tempF +  "°");
					});

			var weather_icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
			$('.condition').attr('src', weather_icon);

			function sunRise() {
					var sec1 = data.sys.sunrise;
					var date = new Date(sec1 * 1000);
					var hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
					var am_pm = date.getHours() >= 12 ? "pm" : "am";
					var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
					time = hours + ":" + minutes + " " + am_pm;
					$('.sunrise').text(time);
			}

			function sunSet() {
					var sec1 = data.sys.sunset;
					var date = new Date(sec1 * 1000);
					var hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
					var am_pm = date.getHours() >= 12 ? "pm" : "am";
					var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
					time = hours + ":" + minutes + " " + am_pm;
					$('.sunset').text(time);
			}

			sunRise();
			sunSet();
			$('.rain').text();
			$('.humidity').text(data.main.humidity + "%");
			$('.wind').text(data.wind.speed + " mph");
			$('.feels-like').text(Math.floor(data.main.temp)+"°");
			$('.precipitation').text();
			$('.pressure').text(data.main.pressure);
			$('.visibility').text();
			$('.uvindex').text();

			var weatherDescription = "Today: " + data.weather[0].description + ". The high will be "+ Math.round(data.main.temp_max)+"° with a low of "+ Math.round(data.main.temp_min) + "°.";
			$('.row-2-box-2 h1').text(weatherDescription);



		});

	});






});

//References
//http://stackoverflow.com/questions/32950870/set-interval-on-json-call-to-reload-new-image
//http://stackoverflow.com/questions/30407610/how-to-store-geolocation-coordinates-into-an-array-with-javascript
//https://www.reddit.com/r/FreeCodeCamp/comments/4con5s/how_do_i_use_the_icon_given_in_the_open_weather/
//https://www.flickr.com/services/api/auth.oauth.html#request_token
//http://stackoverflow.com/questions/16670931/hide-scroll-bar-but-still-being-able-to-scroll
//http://stackoverflow.com/questions/26493446/change-size-of-scrollbar-thumb-with-css
//http://www.aspsnippets.com/Articles/JavaScript-Display-Current-Time-in-12-hour-format-AM-PM-and-24-hour-format-with-Hours-Minutes-and-Seconds-hhmmss.aspx
