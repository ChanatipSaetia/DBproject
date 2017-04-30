function renderBarChart() {
  var ctx = document.getElementById('chart');
  return new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['2013', '2014', '2015', '2016'],
      datasets: [{
        label: 'จำนวนชั่วโมง',
        data: [250,600,650,800],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}

$(document).ready(function () {
  renderBarChart();
});
