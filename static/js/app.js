// from data.js
var ufoReports = data;


// rendering table
var table = d3.select('#ufo-table');
var thead = d3.select('thead')
var tbody = d3.select('tbody');

function createTable() {
  
  var headers = ['Date', 'City', 'State', 'Country', 'Shape', 'Duration', 'Comments']
  var row = thead.append("tr")

  headers.forEach((value) => {
  var cell = row.append("td");
  cell.text(value); })


  ufoReports.forEach((ufoReport) => {
      var row = tbody.append("tr")
      Object.entries(ufoReport).forEach(([key, value]) => {
        var cell = tbody.append("td");
        cell.text(value);
      });
    });

};
createTable();
var filterButton = d3.select('#filter-btn');
var inputElement = d3.select("#filter");


// filter function
filterButton.on("click", function() {

  d3.event.preventDefault();
  document.getElementById("tbody").innerHTML = "";

  var datetime = d3.select('#datetime').node().value;
  var city = d3.select('#city').node().value;
  var state = d3.select('#state').node().value;
  var country = d3.select('#country').node().value;
  var shape = d3.select('#shape').node().value;
  var filters = {'datetime': datetime, 'city': city, 'state': state, 'country': country, 'shape': shape};

  var filteredData = ufoReports;
  filteredData = filteredData.filter(ufoReport => ufoReport.datetime === datetime);


  // Object.entries(filters).forEach(([key, value]) => {
  //   if (value != ""){
  //     console.log(key, value);
  //     filteredData = filteredData.filter(ufoReport => ufoReport.key == value);
     
  //   }
  // });



  filteredData.forEach((ufoReport) => {
    var row = tbody.append("tr")
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  })

});
     

