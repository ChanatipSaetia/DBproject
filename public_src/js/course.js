function renderBarChart() {
  var ctx = document.getElementById('myChart');
  return new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['A', 'B+', 'B', 'C+', 'C', 'D+', 'D', 'F', 'W'],
      datasets: [{
        label: 'จำนวนนิสิต',
        data: [250, 600, 650, 800, 750, 700, 400, 200, 100, 500, 321],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)'
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

$(document).ready(function() {
  renderBarChart();
  $('.list-group-item').click(function() {
    let no = $(this).data("courseno");
    $('.list-group-item').removeClass('active')
    $(this).addClass('active');
    $.ajax({
      method: "POST",
      url: "/course/detail",
      data: {
        course_no: no
      }
    })
    .done(function(result) {
      $('#name_en').html(result.name_en);
      $('#name_th').html(result.name_th);
    });
  })
});
