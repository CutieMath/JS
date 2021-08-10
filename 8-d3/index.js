var nums = [1, 2, 3, 4, 5, 6];

d3.select('h1').style('color', 'pink');
d3.select('body')
    .selectAll('p')
    .data(nums)
    .enter() // take data item one by one
    .append('p')
    // .text('WHOOHOO~~')
    .text(function(data) {return data;})