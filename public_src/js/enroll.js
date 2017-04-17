$(function() {
  const data = [{
    'no': '2110313',
    'name': 'OS SYS PROG',
    'credit': 3,
    'grade': 'W',
    'created_time': '05.10 PM 5/10/2017',
    'edited_time': '11.30 PM 28/10/2017',
  }, {
    'no': '2110316',
    'name': 'PROG LANG PRIN',
    'credit': 3,
    'grade': 'F',
    'created_time': '05.10 PM 5/10/2017',
    'edited_time': '05.10 PM 5/10/2017',
  }, {
    'no': '2110327',
    'name': 'ALGORITHM DESIGN',
    'credit': 3,
    'grade': 'D',
    'created_time': '05.10 PM 5/10/2017',
    'edited_time': '05.10 PM 5/10/2017',
  }, {
    'no': '2110352',
    'name': 'COMP SYS ARCH',
    'credit': 3,
    'grade': 'Z',
    'created_time': '05.10 PM 5/10/2017',
    'edited_time': '06.46 PM 13/10/2017',
  }, {
    'no': '2110352',
    'name': 'COMP SYS ARCH',
    'credit': 3,
    'grade': 'A',
    'created_time': '07.38 PM 15/10/2017',
    'edited_time': '05.10 PM 5/10/2017',
  }, {
    'no': '2110363',
    'name': 'HW SYN LAB I',
    'credit': 1,
    'grade': 'A',
    'created_time': '05.10 PM 5/10/2017',
    'edited_time': '05.10 PM 5/10/2017',
  }, {
    'no': '2110391',
    'name': 'INDIV COMP III',
    'credit': 1,
    'grade': 'A',
    'created_time': '05.10 PM 5/10/2017',
    'edited_time': '05.10 PM 5/10/2017',
  }, {
    'no': '2110482',
    'name': 'HIGH TECH ENT',
    'credit': 3,
    'grade': 'B+',
    'created_time': '05.10 PM 5/10/2017',
    'edited_time': '05.10 PM 5/10/2017',
  }, {
    'no': '2200226',
    'name': 'FOLK MUS TH SOC',
    'credit': 3,
    'grade': 'A',
    'created_time': '05.10 PM 5/10/2017',
    'edited_time': '05.10 PM 5/10/2017',
  }, {
    'no': '3800250',
    'name': 'HUMAN RELATIONS',
    'credit': 3,
    'grade': 'Z',
    'created_time': '05.10 PM 5/10/2017',
    'edited_time': '05.20 PM 11/10/2017',
  }];


  function addRow(table, row, more) {
    if (row['grade'] == 'Z' && !more) {
      return table;
    }
    table += '<tr ';
    if (!more) {
      if (row['grade'] == 'D' || row['grade'] == 'D+' || row['grade'] == 'W') {
        table += 'class="warning"' + '>';
      } else if (row['grade'] == 'F') {
        table += 'class="danger"' + '>';
      } else if (row['grade'] == 'A') {
        table += 'class="success"' + '>';
      }
    }
    table += '>';
    if (more) {
      table += '<td>' + row['created_time'] + '</td>'
      table += '<td>เพิ่ม</td>'
    }
    table += '<td>' + row['no'] + '</td>' +
      '<td>' + row['name'] + '</td>' +
      '<td>' + row['credit'] + '</td>'
    if (!more)
      table += '<td>' + row['grade'] + '</td>'
    table += '</tr>';
    if ((row['grade'] == 'Z' || row['grade'] == 'W') && more) {
      table += '<tr ';
      table += '>';
      if (more) {
        table += '<td>' + row['edited_time'] + '</td>'
        if (row['grade'] == 'Z')
          table += '<td>ลด</td>'
        else
          table += '<td>ถอน</td>'
      }
      table += '<td>' + row['no'] + '</td>' +
        '<td>' + row['name'] + '</td>' +
        '<td>' + row['credit'] + '</td>'
      if (!more)
        table += '<td>' + row['grade'] + '</td>'
      table += '</tr>';
    }
    return table
  }

  const sum = [20, 20, 3.85, 94, 94, 1.6, 345.00];
  let table = '';
  let detail_table = '';
  for (var i = 0; i < data.length; i++) {
    let row = data[i];
    table = addRow(table, row, false);
    detail_table = addRow(detail_table, row, true);
  }
  console.log(table);
  let sum_table = '<tr ';
  if (sum[5] > 3.6) {
    sum_table += 'class="success"' + '>';
  } else if (sum[5] > 3.25) {
    sum_table += 'class="info"' + '>';
  } else if (sum[5] < 1.8) {
    sum_table += 'class="danger"' + '>';
  } else if (sum[5] < 2.0) {
    sum_table += 'class="warning"' + '>';
  } else {
    sum_table += '>';
  }
  for (var i = 0; i < sum.length; i++) {
    sum_table += '<td>' + sum[i] + '</td>';
  }
  sum_table += '</tr>';
  $('.grade_table').html(table);
  $('.detail_table').html(detail_table);
  $('.sum_grade_table').html(sum_table);

  $('#grade').DataTable({
    "paging": false
  });

  $('#detail').DataTable({
    "paging": false
  });
});
