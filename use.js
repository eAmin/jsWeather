window.onload = function() {
	var cities = weather.$('selectBox');
	cities.onchange = function() {
		weather.get(cities.options[cities.selectedIndex].value, !!weather.$('cf').checked ? 'c' : 'f', function(forecasts) {
			document.getElementsByTagName('img')[0].src = forecasts.img;
			var curr = forecasts.current, more = forecasts.more;
			for (var i in condText) {
				if (i == curr.code) {
					weather.$('text').innerHTML = ' ' + condText[i];
				}
			}
			weather.$('temp').innerHTML = ' ' + curr.temp;
			weather.$('date').innerHTML = ' ' + curr.date;
			weather.$('city').innerHTML = ' ' + forecasts.city;
			weather.$('sunrise').innerHTML = ' ' + more.astroSunrise;
			weather.$('sunset').innerHTML = ' ' + more.astroSunset;
			weather.$('wspeed').innerHTML = ' ' + more.wSpeed;
			weather.$('wdirection').innerHTML = ' ' + more.wDirection;
			weather.$('wchill').innerHTML = ' ' + more.wChill;
			weather.$('visibility').innerHTML = ' ' + more.atmVisibility;
			weather.$('humidity').innerHTML = ' ' + more.atmHumidity;
			weather.$('pressure').innerHTML = ' ' + more.atmPressure;
			for (var j in rising) {
				if (j == more.atmRising) {
					weather.$('rising').innerHTML = ' ' + rising[j];
				}
			}
		});
	};
};

/* used for translate to persian */
var rising = {
	'0': '\u064A\u06A9\u0646\u0648\u0627\u062E\u062A',
	'1': '\u0627\u0641\u0632\u0627\u064A\u0634\u06CC',
	'2': '\u06A9\u0627\u0647\u0634\u06CC'
};

var condText = {
	'0': '\u06AF\u0631\u062F\u0628\u0627\u062F',
	'1': '\u0637\u0648\u0641\u0627\u0646 \u06AF\u0631\u0645\u0633\u0664A\u0631\u06CC',
	'2': '\u0637\u0648\u0641\u0627\u0646',
	'3': '\u0637\u0648\u0641\u0627\u0646 \u0648 \u0631\u0639\u062F \u0648 \u0628\u0631\u0642 \u0634\u062F\u064A\u062F',
	'4': '\u0637\u0648\u0641\u0627\u0646 \u0647\u0627\u06CC \u0631\u0639\u062F \u0648 \u0628\u0631\u0642',
	'5': '\u0628\u0631\u0641 \u0648 \u0628\u0627\u0631\u0627\u0646',
	'6': '\u0628\u0627\u0631\u0627\u0646 \u0648 \u062A\u06AF\u0631\u06AF',
	'7': '\u0628\u0631\u0641 \u0648 \u062A\u06AF\u0631\u06AF',
	'8': '\u0646\u0645 \u0646\u0645 \u0628\u0631\u0641 \u0633\u0631\u062F',
	'9': '\u0628\u0627\u0631\u0627\u0646 \u0646\u0645 \u0646\u0645',
	'10': '\u0628\u0627\u0631\u0627\u0646 \u062E\u06CC\u0644\u06CC \u0633\u0631\u062F',
	'11': '\u0631\u06AF\u0628\u0627\u0631',
	'12': '\u0631\u06AF\u0628\u0627\u0631',
	'13': '\u0628\u0627\u0631\u0634 \u0646\u0627\u06AF\u0647\u0627\u0646\u06CC \u0628\u0631\u0641',
	'14': '\u0631\u06AF\u0628\u0627\u0631 \u0645\u0644\u0627\u064A\u0645 \u0628\u0631\u0641',
	'15': '\u0648\u0632\u0634 \u0628\u0631\u0641',
	'16': '\u0628\u0631\u0641',
	'17': '\u062A\u06AF\u0631\u06AF',
	'18': '\u062A\u06AF\u0631\u06AF',
	'19': '\u063A\u0628\u0627\u0631',
	'20': '\u0645\u0647 \u0622\u0644\u0648\u062F',
	'21': '\u0645\u0647 \u06A9\u0645',
	'22': '\u062F\u0648\u062F\u0622\u0644\u0648\u062F',
	'23': '\u0632\u0648\u0632\u0647 \u0628\u0627\u062F',
	'24': '\u0628\u0627\u062F',
	'25': '\u0633\u0631\u062F',
	'26': '\u0627\u0628\u0631\u06CC',
	'27': '\u0628\u064A\u0634\u062A\u0631 \u0627\u0628\u0631\u06CC (\u0634\u0628)',
	'28': '\u0628\u064A\u0634\u062A\u0631 \u0627\u0628\u0631\u06CC (\u0631\u0648\u0632)',
	'29': '\u0646\u064A\u0645\u0647 \u0627\u0628\u0631\u06CC (\u0634\u0628)',
	'30': '\u0646\u064A\u0645\u0647 \u0627\u0628\u0631\u06CC (\u0631\u0648\u0632)',
	'31': '\u0635\u0627\u0641 (\u0634\u0628)',
	'32': '\u0622\u0641\u062A\u0627\u0628\u06CC',
	'33': '\u0635\u0627\u0641 (\u0634\u0628)',
	'34': '\u0635\u0627\u0641 (\u0631\u0648\u0632)',
	'35': '\u0628\u0627\u0631\u0627\u0646 \u0648 \u062A\u06AF\u0631\u06AF',
	'36': '\u06AF\u0631\u0645',
	'37': '\u0637\u0648\u0641\u0627\u0646 \u0631\u0639\u062F',
	'38': '\u0637\u0648\u0641\u0627\u0646 \u0647\u0627\u06CC \u067E\u0631\u0627\u06A9\u0646\u062F\u0647 \u0631\u0639\u062F',
	'39': '\u0637\u0648\u0641\u0627\u0646 \u0647\u0627\u06CC \u067E\u0631\u0627\u06A9\u0646\u062F\u0647 \u0631\u0639\u062F',
	'40': '\u0631\u06AF\u0628\u0627\u0631 \u067E\u0631\u0627\u06A9\u0646\u062F\u0647',
	'41': '\u0628\u0631\u0641 \u0633\u0646\u06AF\u064A\u0646',
	'42': '\u0628\u0627\u0631\u0634 \u067E\u0631\u0627\u06A9\u0646\u062F\u0647 \u0628\u0631\u0641',
	'43': '\u0628\u0631\u0641 \u0633\u0646\u06AF\u064A\u0646',
	'44': '\u0646\u064A\u0645\u0647 \u0627\u0628\u0631\u06CC',
	'45': '\u0628\u0627\u0631\u0627\u0646 \u0648 \u0631\u0639\u062F \u0648 \u0628\u0631\u0642',
	'46': '\u0631\u06AF\u0628\u0627\u0631\u0647\u0627\u06CC \u0628\u0631\u0641\u06CC',
	'47': '\u0631\u06AF\u0628\u0627\u0631\u0647\u0627\u06CC \u0645\u0646\u0641\u0631\u062F \u0647\u0645\u0631\u0627\u0647 \u0628\u0627 \u0631\u0639\u062F',
	'3200': '\u0646\u0627\u0645\u0634\u062E\u0635'
};