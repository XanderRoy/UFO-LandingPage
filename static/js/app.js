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

// disabled since data was not clean
// var slider = d3.select("#durationSlider");
// var output = d3.select("#durationRange");
// output.innerHTML = slider.value; 

// slider.oninput = function() {
//     output.innerHTML = this.value;
// }
var filterButton = d3.select('#filter-btn');
var inputElement = d3.select("#filter");


// filter function
filterButton.on("click", function() {

  d3.event.preventDefault();
  // clearing exisiting table
  document.getElementById("tbody").innerHTML = "";

  //colecting filters  
  var datetimeVal = d3.select('#datetime').node().value;
  var cityVal = d3.select('#city').node().value;
  var stateVal = d3.select('#state').node().value;
  var countryVal = d3.select('#country').node().value;
  var shapeVal = d3.select('#shape').node().value;

  var filters = {'datetime': datetimeVal, 'city': cityVal, 'state': stateVal, 'country': countryVal, 'shape': shapeVal};

  var filteredData = ufoReports;

  Object.entries(filters).forEach(([key, value]) => {
    if (value != ""){
    
      filteredData = filteredData.filter(ufoReport => ufoReport[key]  === value );

    }
  });


  //creating filter table
  filteredData.forEach((ufoReport) => {
    var row = tbody.append("tr")
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  })

});
     

