

req = new XMLHttpRequest();
req.open("GET", 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json', true);
req.send();
req.onload = function () {
  json = JSON.parse(req.responseText);

  /* Finding the max data and value in the API*/
  const date = json.data.map((data) => data[0]);
  const scaleX = d3.max(date);
  const gdp = json.data.map((data) => data[1]);
  const scaleY = d3.max(gdp)

  var margin = { top: 20, right: 20, bottom: 70, left: 40 },
    width = 800 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;
  /*
  const scale = d3.scaleLinear();
  scale.domain([d3.min(gdp), d3.max(gdp)])
  scale.range([30, 800])

  const output = scale(1000);
  */
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
    .attr("x", (d, i) => i * 21)
    .attr("y", (d, i) => height - d[1])




}