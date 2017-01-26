var config = {
    type: 'pie',
    data: {
        labels: ["Black or African-American", "Hispanic or Latinx", "Asian", "White", "Mixed race/ethnicity", "Unreported"],
        datasets: [{
            label: 'Ethnicity',
            data: [10, 29, 15, 400, 29, 20],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 0
        }]
    },
    options: {
    }
};

window.onload = function() {
	var ctx = document.getElementById("myChart");
	window.myDoughnut = new Chart(ctx, config);
};
