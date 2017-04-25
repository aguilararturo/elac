jQuery(function($) {'use strict',
		
	// Carousel Auto Slide Off
	$('#event-carousel, #twitter-feed, #sponsor-carousel ').carousel({
		interval: false
	});


	// Contact form validation
	var form = $('.contact-form');
	form.submit(function () {'use strict',
		$this = $(this);
		$.post($(this).attr('action'), function(data) {
			$this.prev().text(data.message).fadeIn().delay(3000).fadeOut();
		},'json');
		return false;
	});


	$('.main-nav ul').onePageNav({
		currentClass: 'active',
	    changeHash: false,
	    scrollSpeed: 900,
	    scrollOffset: 0,
	    scrollThreshold: 0.3,
	    filter: ':not(.no-scroll)'
	});

});

    var Twitter ={};

 Twitter.callback = function(jsonP){
             //console.log("json", jsonP);
             var parser = $(".parser"),
             container = $(".carousel-inner"),
             tweets,
             i,
             createItem = function(item,index){

               var div = $('<div class="item'+((index === 0)?' active':'') +'"></div>'),
               divInner = $('<div class="carousel-content"></div>');
               console.log('<div class="item'+((index === 0)?' active':'') +'"></div>');
               div.append(divInner.append($(item).children()));

               div.append($(item).children());

               return div;
           };

           parser.html(jsonP.body);



           tweets = $('.h-feed').children('li');

           for(i = 0; i < tweets.length; i++){                   
            container.append(createItem(tweets[i],i));
        }


    }

    window.addEventListener("load" , function(){
     var jp = document.createElement("script");
     jp.src = "https://cdn.syndication.twimg.com/widgets/timelines/506829210191552512?&lang=en&callback=Twitter.callback&suppress_response_codes=true&rnd=0.3450709420721978";
     var hd = document.getElementsByTagName("head")[0];
     hd.appendChild(jp);

 });


// Google Map Customization
(function(){

	var map;

	map = new GMaps({
		el: '#gmap',
		lat: 43.04446,
		lng: -76.130791,
		scrollwheel:false,
		zoom: 16,
		zoomControl : false,
		panControl : false,
		streetViewControl : false,
		mapTypeControl: false,
		overviewMapControl: false,
		clickable: false
	});

	var image = 'images/map-icon.png';
	map.addMarker({
		lat: 43.04446,
		lng: -76.130791,
		icon: image,
		animation: google.maps.Animation.DROP,
		verticalAlign: 'bottom',
		horizontalAlign: 'center',
		backgroundColor: '#3e8bff',
	});


	var styles = [ 

	{
		"featureType": "road",
		"stylers": [
		{ "color": "#b4b4b4" }
		]
	},{
		"featureType": "water",
		"stylers": [
		{ "color": "#d8d8d8" }
		]
	},{
		"featureType": "landscape",
		"stylers": [
		{ "color": "#f1f1f1" }
		]
	},{
		"elementType": "labels.text.fill",
		"stylers": [
		{ "color": "#000000" }
		]
	},{
		"featureType": "poi",
		"stylers": [
		{ "color": "#d9d9d9" }
		]
	},{
		"elementType": "labels.text",
		"stylers": [
		{ "saturation": 1 },
		{ "weight": 0.1 },
		{ "color": "#000000" }
		]
	}

	];

	map.addStyle({
		styledMapName:"Styled Map",
		styles: styles,
		mapTypeId: "map_style"  
	});

	map.setStyle("map_style");
}());



