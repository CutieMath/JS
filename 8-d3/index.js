// Bar Chart
// var dataToUse = [1,2,3,4,5,6];
// var svgWidth = 500, svgHeight = 300, barPadding = 5;
// var barWidth = svgWidth / dataToUse.length;
// var svg = d3.select('svg')
//     .attr("width", svgWidth)
//     .attr("height", svgHeight);
// var yScale = d3.scaleLinear()
//     .domain([0, d3.max(dataToUse)])
//     .range([0, svgHeight])
// var barChart = svg.selectAll("rect")
//     .data(dataToUse)
//     .enter()
//     .append("rect")
//     .attr("y", function(d) {
//         return svgHeight - yScale(d)
//     })
//     .attr("height", function(d){
//         return yScale(d);
//     })
//     .attr("width", barWidth - barPadding)
//     .attr("class", "bar")
//     .attr("transform", function(d, i){
//         var translate = [barWidth * i, 0];
//         return "translate(" + translate + ")";
//     })
// var text = svg.selectAll("text")
//     .data(dataToUse)
//     .enter()
//     .append("text")
//     .text(function(d){
//         return yScale(d);
//     })
//     .attr("y", function(d, i){
//         return svgHeight - yScale(d) - 2;
//     })
//     .attr("x", function(d, i){
//         return barWidth * i;
//     })

// Add axes
var data = [80, 100, 56, 120, 180, 30, 40, 120, 160]

var svgWidth = 550, svgHeight = 300;

var svg = d3.select('svg')
    .attr("width", svgWidth)
    .attr("height", svgHeight);

var xScale = d3.scaleLinear()
    .domain([0, d3.max(data)])
    .range([0, svgWidth]);

var yScale = d3.scaleLinear()
    .domain([0, d3.max(data)])
    .range([svgHeight, 0]);

var x_axis = d3.axisBottom().scale(xScale);
var y_axis = d3.axisLeft().scale(yScale);

svg.append("g")
    .attr("transform", "translate(50, 10)")
    .call(y_axis);

var xAxisTranslate = svgHeight - 20;

svg.append("g")
    .attr("transform", "translate(50, " + xAxisTranslate + ")")
    .call(x_axis);