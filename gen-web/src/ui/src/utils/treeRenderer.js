import * as d3 from "d3"

export function renderTree(divId, data){
    var margin = {top: 100, right: 10, bottom: 240, left: 10},
        width = 340 - margin.left - margin.right,
        height = 600 - margin.top - margin.bottom;

    var orientations = {
        "bottom-to-top": {
            size: [width, height],
            x: function(d) { return d.x; },
            y: function(d) { return d.y; }
        }
    };

    var svg = d3.select(divId).selectAll("svg")
        .data(d3.entries(orientations))
        .enter().append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


        svg.each(function(orientation) {
            var svg = d3.select(this),
                o = orientation.value;

            // Compute the layout.
            var treemap = d3.tree().size(o.size);

            var nodes = d3.hierarchy(data);

            nodes = treemap(nodes);

            var links = nodes.descendants().slice(1);


            // Create the link lines.
            svg.selectAll(".link")
                .data(links)
                .enter().append("path")
                .attr("class", "link")
                .attr("d", function(d) {
                    return "M" + d.x + "," + o.y(d)
                        + "C" + d.x + "," + (o.y(d) + o.y(d.parent)) / 2
                        + " " + d.parent.x + "," +  (o.y(d) + o.y(d.parent)) / 2
                        + " " + d.parent.x + "," + o.y(d.parent);
                });

            // Create the node circles.
            var node = svg.selectAll(".node")
                .data(nodes.descendants())
                .enter()
                .append("g")
            node.append("circle")
                .attr("class", "node")
                .attr("r", 4.5)
                .attr("cx", o.x)
                .attr("cy", o.y);


            node .append("text")
                .text(function (d) {return d.data.name;})
                .attr("x", o.x)
                .attr("dx", 5)
                .attr("y", o.y);
        });

}