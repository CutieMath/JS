// // DOM Manipulation
// var nums = [1, 2, 3, 4, 5, 6];
// d3.select('h1').style('color', 'pink');
// d3.select('body')
//     .selectAll('p')
//     .data(nums)
//     .enter() // take data item one by one
//     .append('p')
//     // .text('WHOOHOO~~')
//     .text(function(data) {return data;})


// Create Bar-chart
var nums = [80, 100, 56, 120, 180, 30, 40, 120, 160];

var svgWidth = 500, svgHeight = 300, barPadding = 5;
var barWidth = (svgWidth / nums.length);

var svg = d3.select('svg')
    .attr("width", svgWidth)
    .attr("height", svgHeight);

var barChart = svg.selectAll("rect") // rectangle 
    .data(nums)
    .enter()
    .append("rect")
    .attr("y", function(d){
        return svgHeight - d
    })
    .attr("height", function(d){
        return d;
    })
    .attr("width", barWidth - barPadding)
    .attr("transform", function(d, i) {
        var translate = [barWidth * i, 0];
        return "translate(" + translate + ")";
    });