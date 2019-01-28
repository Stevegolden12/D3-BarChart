

req = new XMLHttpRequest();
req.open("GET", 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json', true);
req.send();
req.onload = function () {
  json = JSON.parse(req.responseText);

  /* Finding the max data and value in the API*/
  const date = json.data.map((data) => data[0]);
  const gdp = json.data.map((data) => data[1]);
 

  var margin = { top: 20, right: 20, bottom: 70, left: 40 },
    width = 800 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

  /*
  var scale = d3.scaleLinear();
  scale.domain([d3.min(gdp), d3.max(gdp)])
  scale.range([40, 780])
  */
  const yScale = d3.scaleLinear()
      .domain([d3.min(gdp, (d)=>d),d3.max(gdp, (d)=>d)])
      .range([480, 20])  
  
 
  var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .style("background-color", "lightblue")
    .attr("class", "mainSvg")

   d3.select(".mainSvg").selectAll("rect")
    .data(json.data)
    .enter()
    .append("rect")
    .attr("class", "bar")
    .attr("width", 20 + "px")
    .attr("height", (d) => d[1])
    .attr("x", (d, i) => i )
    .attr("y", (d, i) => yScale(d[1]-height))

  



}