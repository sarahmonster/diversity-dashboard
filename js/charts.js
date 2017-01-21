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

	var filter = document.getElementById( 'filter' );

	filter.onclick = function() {
		setTimeout(function () {
			ethnicityChart.load({
				//unload: true,
				url: 'data/ethnicity-technical.json',
				mimeType: 'json'
			});
		}, 500);
	};


};
