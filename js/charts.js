(function( $ ){

	window.onload = function() {
		var charts = {
			ethnicity: null,
			gender: null,
		}
		charts.ethnicity = c3.generate({
			bindto: '#ethnicityChart',
			data: {
				url: 'data/ethnicity.json',
				mimeType: 'json',
				type: 'bar'
			},
			axis: {
				rotated: false,
				x: {
					show: false,
					label: {
						text: 'Ethnicity',
						position: 'outer-center'
					},
					tick: {
						outer: false
					}
				},
				y: {
					show: false,
				}
			},
			bar: {
				width: {
					ratio: 0.9
				}
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

		charts.gender = c3.generate({
			bindto: '#genderChart',
			data: {
				url: 'data/gender.json',
				mimeType: 'json',
				type: 'donut'
			},
			donut: {
				title: "Gender",
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
		function loadNewChartData( event ) {
			event.preventDefault();
			var filterLink = event.currentTarget;
			$(filterLink).siblings().removeClass( 'active' );
			$(filterLink).addClass( 'active' );
			var source = event.currentTarget.dataset.source;
			var chart = event.currentTarget.dataset.chart;

			charts[chart].load({
				//unload: true,
				url: 'data/' + source + '.json',
				mimeType: 'json'
			});
		}


		// Get an array of our filter links.
		var filters = document.getElementsByClassName( 'filter' );

		// For each filter, add an event listener to load new chart data.
		for (var i = 0; i < filters.length; i++) {
			filters[i].addEventListener('click', loadNewChartData, false);
		}



	};

})( jQuery );
