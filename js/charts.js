(function( $ ){

	window.onload = function() {
		var ethnicityChart = c3.generate({
			bindto: '#ethnicityChart',
			data: {
				url: 'data/ethnicity.json',
				mimeType: 'json',
				type: 'donut'
			},
			donut: {
				title: "Ethnicity",
				width: 80
			},
			legend: {
				position: 'right'
			},
			tooltip: {
				format: {
					value: function (value, ratio, id) {
						return value;
					}
				}
			}
		});

		// Load new chart data.
		function loadNewChartData(event) {
			var filterLink = event.currentTarget;
			$(filterLink).siblings().removeClass( 'active' );
			$(filterLink).addClass( 'active' );
			var source = event.currentTarget.dataset.source;
			setTimeout(function() {
				ethnicityChart.load({
					//unload: true,
					url: 'data/' + source + '.json',
					mimeType: 'json'
				});
			}, 500);
		}


		// Get an array of our filter links.
		var filters = document.getElementsByClassName( 'filter' );

		// For each filter, add an event listener to load new chart data.
		for (var i = 0; i < filters.length; i++) {
			filters[i].addEventListener('click', loadNewChartData, false);
		}
	};

})( jQuery );
