$(function() {
    data = [{
        'no': '2110313',
        'name': 'OS SYS PROG',
        'credit': 3,
        'grade': 'W'
    }, {
        'no': '2110316',
        'name': 'PROG LANG PRIN',
        'credit': 3,
        'grade': 'F'
    }, {
        'no': '2110327',
        'name': 'ALGORITHM DESIGN',
        'credit': 3,
        'grade': 'D'
    }, {
        'no': '2110352',
        'name': 'COMP SYS ARCH',
        'credit': 3,
        'grade': 'A'
    }, {
        'no': '2110363',
        'name': 'HW SYN LAB I',
        'credit': 1,
        'grade': 'A'
    }, {
        'no': '2110391',
        'name': 'INDIV COMP III',
        'credit': 1,
        'grade': 'A'
    }, {
        'no': '2110482',
        'name': 'HIGH TECH ENT',
        'credit': 3,
        'grade': 'B+'
    }, {
        'no': '2200226',
        'name': 'FOLK MUS TH SOC',
        'credit': 3,
        'grade': 'A'
    }]
    sum = [20,20,3.85,94,94,1.6,345.00]
    table = ''
    for (var i = 0; i < data.length; i++) {
      row = data[i]
      table += '<tr '
      if(row['grade'] == 'D' || row['grade'] == 'D+' || row['grade'] == 'W'){
        table += 'class="warning"' + '>'
      }
      else if (row['grade'] == 'F') {
        table += 'class="danger"' + '>'
      }
      else if (row['grade'] == 'A') {
        table += 'class="success"' + '>'
      }
      else {
        table += '>'
      }
      table += '<td>'+ row['no'] +'</td>'
      + '<td>'+ row['name'] +'</td>'
      + '<td>'+ row['credit'] +'</td>'
      + '<td>'+ row['grade'] +'</td>'
      + '</tr>'
    }

    sum_table = '<tr '
    if(sum[5] > 3.6){
      sum_table += 'class="success"' + '>'
    } else if(sum[5] > 3.25){
      sum_table += 'class="info"' + '>'
    } else if(sum[5] < 1.8){
      sum_table += 'class="danger"' + '>'
    } else if(sum[5] < 2.0){
      sum_table += 'class="warning"' + '>'
    } else {
      sum_table += '>'
    }
    for (var i = 0; i < sum.length; i++) {
      sum_table += '<td>'+ sum[i] + '</td>'
    }
    sum_table += '</tr>'
    console.log(sum_table)
    $('.grade_table').html(table);
    $('.sum_grade_table').html(sum_table);
});
