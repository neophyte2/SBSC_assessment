google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Work',     11],
    ['Eat',      2],

  ]);

  var options = {
    // title: 'My Daily Activities',
    pieHole: 0.4,
  };

  var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
  chart.draw(data, options);
  var chartx = new google.visualization.PieChart(document.getElementById('donutchartx'));
  chartx.draw(data, options);
  var countChart = new google.visualization.PieChart(document.getElementById('countChart'));
  countChart.draw(data, options);
}