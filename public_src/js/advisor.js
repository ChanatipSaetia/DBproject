$(function renderBarChart() {
  var ctx = document.getElementById('myChart');
  return new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['ปี1', 'ปี2', 'ปี3', 'ปี4'],
      datasets: [{
        label: 'Average grade',
        data: [2.67, 2.8, 3.21, 3.3],
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

function () {
  const yr_label = ["ปี 1","ปี 2", "ปี 3", "ปี 4", "ปีอื่นๆ"];
  var st = new Array( [43, 37, 26, 45, 4],
                      [2, 1, 0, 0, 0],
                      [5, 2, 0, 1, 0],
                      [0, 0, 1, 2, 1] );

  let yr_sum = '';
  for (let i = 0; i < 5; i++) {
    yr_sum += '<tr>' + '<th>' + yr_label[i] + '</th>';
    for (let s = 0; s < 4; s++) {
      yr_sum += '<td>'+ st[s][i] +'</td>';
    }
    yr_sum += '</tr>';
  }
  yr_sum += '<tr>' + '<th>ทั้งหมด</th>';
  for (let i = 0; i < 4; i++) {
    yr_sum += '<td>'+ st[i].reduce((a, b) => a + b, 0) +'</td>';
  }
  yr_sum += '</tr>';
  $('.year_label').html(yr_sum);
});
