window.onload = function() {
	var chart = c3.generate({
	bindto: '#ethnicityChart',
	data: {
		columns: [
			['White', 300],
			['Latinx/Hispanic', 47],
			['Black', 12],
			['Asian', 29],
			['Multiracial', 10],
			['Other/prefer not to say', 18]
		],
		type: 'donut',
	},
	donut: {
		title: "Ethnicity"
	}
});
};
