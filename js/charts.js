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


	function loadNewChartData(event) {
		var source = event.currentTarget.dataset.source;
		setTimeout(function() {
			ethnicityChart.load({
				//unload: true,
				url: 'data/' + source + '.json',
				mimeType: 'json'
			});
		}, 500);
	}

	var filters = document.getElementsByClassName( 'filter' );

	for (var i = 0; i < filters.length; i++) {
		// one way
		filters[i].addEventListener('click', loadNewChartData, false);
	}


// add event listener to element

	/*
	filter.onclick = function() {

	};
	*/


};
