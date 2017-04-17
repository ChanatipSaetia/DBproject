function renderBarChart() {
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

function renderDoughnutChart() {
  var ctx = document.getElementById('notGraduatedChart');
  var data = {
    labels: [
      'คอมพิวเตอร์',
      'ไฟฟ้า',
      'เครื่องกล'
    ],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56'
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56'
        ]
      }]
  };
  return new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: {
      animation: {
        animateScale: true
      }
    }
  });
}

$(document).ready(function () {
  renderBarChart();
  renderDoughnutChart();
});

// Progressbar
function progressbar() {
    var elem = document.getElementById("statbar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}
// $(document).ready(function() {
//   $('.progress .progress-bar').progressbar();
// });

// if ($(".progress .progress-bar")[0]) {
//     $('.progress .progress-bar').progressbar();
// }
// /Progressbar
