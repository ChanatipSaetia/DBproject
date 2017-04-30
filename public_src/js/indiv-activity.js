function renderBarChart() {
  var ctx = document.getElementById('chart');
  let labelList = [];
  let dataList = [];
  for(let i=0; i<data.length; i++){
    labelList.push(data[i].year);
    dataList.push(data[i].sum);
  }

  return new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labelList,
        datasets: [{
          label: 'จำนวนชั่วโมงรวมต่อปี',
          data: dataList,
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
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
