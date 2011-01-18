/*!
 * jsWeather, JavaScript YQL-JSONP Weather
 * Copyright (c) Amin Akbari (eAmin.js on gmail)
 * under the MIT Style Licence
 * Date: 11/9/2010
 */

var weather = (function(doc) {
	var u = 'http://query.yahooapis.com/v1/public/yql?q={query}&format=json&callback=weather.yql.{callback}',
	query = 'select * from weather.forecast where location = "IRXX{code}" and u = "{units}"';
	doc.head = doc.getElementsByTagName('head')[0] || doc.documentElement;

	var cCode = {
		'Tehran' : '0018', 'Mashhad' : '0008', 'Esfahan' : '0003','Shiraz' : '0015', 'Gorgan' : '0044',
		'Hamadan' : '0048', 'Hormozgan' : '0033', 'Kerman' : '0034', 'Kermanshah' : '0029', 'Bojnurd' : '0042',
		'Birjand' : '0031', 'Zahedan' : '0020', 'Ahvaz' : '0032', 'Yasuj' : '0046', 'KhurramAbad' : '0050',
		'Karaj' : '0006', 'Yazd' : '0019', 'Zanjan' : '0024', 'Orumiyeh' : '0023', 'Tabriz' : '0016',
		'Rasht' : '0043', 'Arak' : '0030'
	};

	// handle jsonp request
	var yql = function(qry, callback) {
		var jsonp = 'jsonp' + (+new Date),
		url = u.replace('{query}', encodeURIComponent(qry.toLowerCase())).replace('{callback}', jsonp),
		script = doc.createElement('script');
		script.type = 'text/javascript';

		weather.yql[jsonp] = function(data) {
			delete weather.yql[jsonp];
			callback(data);
		};

		script.src = url;		
		doc.head.insertBefore(script, document.head.firstChild);
	};

	return {
		$: function(ele) {
			return doc.getElementById(ele);
		},

		yql: yql,

		get: function(city, units, callback) {
			units = (units.toLowerCase() === 'c') ? 'c' : 'f';
			tempunit = (units === 'c') ? 'Celsius' : 'Fahrenheit';
			var code;

			if (city != null) {
				for (var i in cCode) {
					if (cCode.hasOwnProperty(i) && i === city) code = query.replace('{code}', cCode[i]);
				}
				code = code.replace('{units}', units);
			}

			this.yql(code, function(data) {
				var results = data.query.results.channel;
				var forecasts = {
					country: results.location.country,
					city:  results.location.city,
					img: results.item.description.match(/src="([^"]+)"/i)[1],
					current: {
						date: results.item.condition.date,
						code: results.item.condition.code, // used for translate to persian
						temp: results.item.condition.temp + ' ' + tempunit, // C & F
						text: results.item.condition.text // alternative
					},

					units: {
						distance: results.units.distance,
						pressure: results.units.pressure,
						speed: results.units.speed,
						temperature: results.units.temperature
					},

					more: {
						forecast: results.item.forecast,
						astroSunrise: results.astronomy.sunrise,
						astroSunset: results.astronomy.sunset,
						atmHumidity: results.atmosphere.humidity,
						atmPressure: results.atmosphere.pressure,
						atmRising: results.atmosphere.rising,
						atmVisibility: results.atmosphere.visibility,
						wChill: results.wind.chill,
						wDirection: results.wind.direction,
						wSpeed: results.wind.speed
					}
				};

				if (typeof results == 'object' && !(data.query.hasOwnProperty('error'))){
					callback(forecasts);
				}

				// releasing memory
				results = forecasts = null;
			});
		}
	};
})(document);