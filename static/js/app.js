// from data.js
var ufoReports = data;


// rendering table
var table = d3.select('#ufo-table');
var tbody = d3.select('tbody');
var thead = d3.select('thead');

ufoReports.forEach((ufoReport) => {
    var row = tbody.append("tr")
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });
console.log("Table Rendered");

var filterButton = d3.select('#filter-btn');
var inputElement = d3.select("#form-control");


// filter function
filterButton.on("click", function() {

  d3.event.preventDefault();

  
  document.getElementById("tbody").innerHTML = "";


  let text = d3.select('#datetime').node().value;
  var filteredData = ufoReports.filter(ufoReport => ufoReport.datetime === text);
      
  filteredData.forEach((ufoReport) => {
    var row = tbody.append("tr")
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  })

});
     

