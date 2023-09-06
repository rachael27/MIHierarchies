function runScript_treeswlinking(h1, h2) {



    var radius = 18;



    var h1color = "blue", h2color = "red", mergedcolor = "";





    var margin = { top: 30, right: 30, bottom: 30, left: 120 },
        width = 6000 - margin.left - margin.right,
        height = 3500 - margin.top - margin.bottom;



    var treeswlinking_svg = d3
        .select("#content")
        .append("svg")
        .attr("id", "treeswlinking_svg")
        .attr("width", width)
        .attr("height", height);



    stratify = d3
        .stratify()
        .id(function (d) {
            return d.child;
        })
        .parentId(function (d) {
            return d.parent;
        });

    var h2_struct = stratify(h2);
    //console.log(h2_struct);

    var h1_struct = stratify(h1);
    //console.log(h1_struct);


    var h1_root = d3.hierarchy(h1_struct);
    var h2_root = d3.hierarchy(h2_struct);


    /* if (d3.select("#filterdatacheck")._groups[0][0].checked == true) {
        h1_root = filterData(h1_root);
        h2_root = filterData(h2_root);
    } */



    var tree;

    var h1_xpos = 5800;
    var h1_ypos = 3300;

    var h2_xpos = 50;
    var h2_ypos = 100;

    var ltree_size = [2800, 3000];
    var mtree_size = [2300, 2000];
    var stree_size = [1800, 1000];

    var h1_rot = 180;
    var h2_rot = 0;

    var lab_rot = 180;
    var h1_scalex = -1;
    var h1_scaley = 1;

    var h2_scalex = 0;
    var h2_scaley = 0;



    //console.log(h1_root.descendants().length);
    if (h1_root.descendants().length > 0 && h1_root.descendants().length <= 100)
        tree = d3
            .tree()
            .size(stree_size);
    else if (h1_root.descendants().length > 100 && h1_root.descendants().length <= 500)
        tree = d3
            .tree()
            .size(mtree_size);
    else if (h1_root.descendants().length > 500)
        tree = d3
            .tree()
            .size(ltree_size);



    //h1 tree is 
    //h2 tree is 
    /*
        if (d3.select("#sideradio")._groups[0][0].checked == true) {
    
    
            h1_xpos = 1700;
            h1_ypos = 1000;
    
            h2_xpos = 1800;
            h2_ypos = 1000;
    
    
            h1_rot = 0;
            h2_rot = 0;
    
    
        }
    
    
        if (d3.select("#def_tbradio")._groups[0][0].checked == true) {
    
    
            h1_xpos = 3000;
            h1_ypos = 3300;
    
    
        }
    
        else if (d3.select("#tbradio")._groups[0][0].checked == true) {
    
    
            h1_xpos = 500;
            h1_ypos = 1500;
    
            h2_xpos = 500;
            h2_ypos = 2000;
        }
    
    
        else if (d3.select("#tlbrradio")._groups[0][0].checked == true) {
    
    
            h1_xpos = 1800;
            h1_ypos = 3300;
        }
    
    
        else if (d3.select("#ang_tlbrradio")._groups[0][0].checked == true) {
    
    
            h1_xpos = 3300;
            h1_ypos = 2200;
    
    
            h2_xpos = 2650;
            h2_ypos = 1000;
    
            h1_rot = -30;
            h2_rot = 150;
        }
        else if (d3.select("#lrleavesradio")._groups[0][0].checked == true) {
    
    
            h1_xpos = 4500;
            h1_ypos = 2550;
            //h1_ypos = 2600;
    
    
            h2_xpos = 200;
            h2_ypos = 2450;
    
            h1_rot = 270;
            h2_rot = 90;
    
    
            h1_scalex = 1;
            h1_scaley = -1;
    
    
            h2_scalex = -1;
            h2_scaley = -1;
    
            lab_rot = 180;
    
            lab_scalex = 1;
            lab_scaley = -1;
    
        }
    
    */
    //else if (d3.select("#lrradio")._groups[0][0].checked == true) {


    h1_xpos = 2500;
    h1_ypos = 550;
    //h1_ypos = 2600;


    h2_xpos = 1500;
    h2_ypos = 550;

    h1_rot = 270;
    h2_rot = 90;

    lab_rot = 0;


    // }








    var h1_tree = tree(h1_root);


    var data_nodes = h1_tree.descendants();

    //console.log(data_nodes);

    /*  data_nodes = data_nodes.filter(function (d) {
         //console.log(d.children.length);
         if (d.data.data.child.includes("A") || d.data.data.child.includes("B") || d.data.data.child.includes("C"))
             return d;
    
     }); */

    //console.log(data_nodes);


    var data_links = h1_tree.links();

    /*  data_links = data_links.filter(function (d) {
         //console.log(d);
         if (d.source.data.data.child.includes("A") || d.source.data.data.child.includes("B") || d.source.data.data.child.includes("C"))
             return d;
    
     }); */

    //console.log(data);


    var h1_node = treeswlinking_svg
        .append("g")
        .attr("id", "h1tree")
        .attr("transform", "translate(" + h1_xpos + "," + h1_ypos + ") rotate(" + h1_rot + ") scale(" + h1_scalex + "," + h1_scaley + ")")
        //.attr("transform", "translate(" + h1_xpos + "," + h1_ypos + ") rotate(" + h1_rot + " " + h1_xpos + " " + h1_ypos + ")")
        .selectAll(".h1_node")
        .data(data_nodes)
        //.data(h1_tree.descendants())
        .enter()
        .append("g")
        .attr("class", function (d) {
            //   console.log(d);
            return d.child;
        });



    /* treeswolinking_svg.select("#h1tree")
        .append("rect")
        .attr('x', -30)
        .attr('y', -30)
        .attr('width', 1400)
        .attr('height', 600)
        .attr('stroke', 'black')
        .attr('fill', 'none'); */


    var h1_link = h1_node
        .append("path")
        //.data(h1_tree.links())
        .data(data_links)
        // .enter()
        .attr("class", function (d) {
            return "h1_link";
        })
        //.classed("link", true)
        .attr("d", function (d) {
            return "M" + d.source.x + "," + d.source.y
                + "C" + d.source.x + "," + (d.source.y + d.target.y) / 2
                + " " + d.target.x + "," + (d.source.y + d.target.y) / 2
                + " " + d.target.x + "," + (d.target.y);
        })
        .style("opacity", function (d) {
            return 0.5;
        })
        //.style("stroke", "#ccc")
        .style("stroke", "green")
        .style("fill", "none")
        .style("stroke-width", "7px");

    h1_node
        .append("circle")
        .attr("cx", function (d) {
            // console.log(d);
            // console.log(radialPoint(d.x, d.y));
            return d.x;
        })
        .attr("cy", function (d) {
            return d.y;
        })
        .attr("r", function (d) {
            //        console.log(radius);
            // if (d3.select("#solidshaperadio")._groups[0][0].checked == true)
            //   return (radius - 3) + "px";
            //if (d3.select("#hollowshaperadio")._groups[0][0].checked == true)
            return (radius - 6) + "px";
        })
        .attr("class", function (d) {
            return (
                "node" + (d.children ? " node--internal" : " node--leaf")
            );
        })
        .attr("id", function (d) {
            return "h1tree_" + d.data.data.child
                .replaceAll(/\//g, "")
                .replaceAll(".", "")
                .replaceAll(" ", "")
                .replaceAll("(", "")
                .replaceAll(")", "")
                .toLowerCase();
        })
        .style("fill", function (d) {
            // if (d3.select("#solidshaperadio")._groups[0][0].checked == true)
            //   return h2color;
            //  if (d3.select("#hollowshaperadio")._groups[0][0].checked == true)
            return h1color;

        })
        // .style("opacity", 1)

        .style("opacity", function (d) {
            return 0.3;
        })
        .on("mouseover", function (d, i) {
            var name = d.data.data.child;
            //console.log(name);
            //if (name == undefined)
            //name = d.data.data.child;
            var text = "Element: <b>" + name + "</b><br>Element code: <b>" + d.data.data.child + "</b><br>Parent code: <b>" + d.data.data.parent + "</b>";
            d3.select("#tooltip")
                .html(text)
                .style("left", parseInt(d3.event.pageX - 200) + "px")
                .style("top", parseInt(d3.event.pageY + 50) + "px")
                .style("text-align", "left")
                .style("opacity", 1);

            d3.select(this)
                .transition()
                .attr("r", 15);
        })
        .on("mouseleave", function (d) {

            /*  if (d3.select("#solidshaperadio")._groups[0][0].checked == true)
                 d3.select(this)
                     .transition()
                     .attr("r", radius - 3);
             if (d3.select("#hollowshaperadio")._groups[0][0].checked == true) */
            d3.select(this)
                .transition()
                .attr("r", radius - 6);


            d3.select("#tooltip")
                .html("")
                .style("left", 0)
                .style("top", 0)
                .style("opacity", 0);

        });

    h1_node
        .append("text")

        /* .attr("transform", function (d) {
            var x = 0;
            var y = 0;

            if ((this.previousSibling).getAttribute("class").includes("leaf")) {
                x = d.x - 8;
                y = d.y;
            }
            else {
                x = d.x - 10;
                y = d.y;
            }
            return "rotate(" + lab_rot + "," + x + "," + y + ")";

        }) */

        .style("font-size", function (d) {
            // if (d3.select("#fileversion3radio")._groups[0][0].checked == true)
            //   return "20px";
            //else
            return "40px";
        })
        .attr("class", function (d) {
            return d.data.data.child
                .replaceAll(" ", "")
                .replaceAll("(", "")
                .replaceAll(")", "")
                .toLowerCase();
        })
        .classed("text", true)
        .attr("dy", "2em")
        .attr("x", function (d) {

            if ((this.previousSibling).getAttribute("class").includes("leaf"))
                return d.x - 8;
            else
                return d.x + 10;
        })
        .attr("y", function (d) {
            if ((this.previousSibling).getAttribute("class").includes("leaf"))
                return d.y - 8;
            else
                return d.y - 30;
        })
        .attr("text-anchor", function (d) {
            return "start";
        })

        .style("opacity", function (d) {
           /*  if (d3.select("#fileversion3radio")._groups[0][0].checked == true) {
                if (d.depth <= 2)
                    return 1;
                else
                    return 0;
            }
            else */ return 1;
        })
        .text(function (d) {
            // console.log(d);
            var label = "";
            if (d.data.data.description)
                label = d.data.data.description;
            else
                label = d.data.data.child;
            if (label.includes("/"))
                label = label.substring(label.lastIndexOf("/") + 1, label.length);
            return label;
        });







    //////////////// TREESWLINKING H2

    var h2_tree = tree(h2_root);


    if (h2_scalex == 0 && h2_scaley == 0) {
        var h2_node = treeswlinking_svg
            .append("g")
            .attr("id", "h2tree")
            .attr("transform", "translate(" + h2_xpos + "," + h2_ypos + ") rotate(" + h2_rot + ")")
            //.attr("transform", "translate(" + h2_xpos + "," + h2_ypos + ") rotate(" + h2_rot + " " + h2_xpos + " " + h2_ypos + ")")
            .selectAll(".h2_node")
            .data(h2_tree.descendants())
            .enter()
            .append("g")
            .attr("class", function (d) {
                //   console.log(d);
                return d.child;
            });
    }
    else
        var h2_node = treeswlinking_svg
            .append("g")
            .attr("id", "h2tree")
            .attr("transform", "translate(" + h2_xpos + "," + h2_ypos + ") rotate(" + h2_rot + ") scale(" + h2_scalex + "," + h2_scaley + ")")
            //.attr("transform", "translate(" + h2_xpos + "," + h2_ypos + ") rotate(" + h2_rot + " " + h2_xpos + " " + h2_ypos + ")")
            .selectAll(".h2_node")
            .data(h2_tree.descendants())
            .enter()
            .append("g")
            .attr("class", function (d) {
                //   console.log(d);
                return d.child;
            });


    /* treeswolinking_svg.select("#h2tree")
        .append("rect")
        .attr('x', -30)
        .attr('y', -30)
        .attr('width', 1500)
        .attr('height', 600)
        .attr('stroke', 'black') 
        .attr('fill', 'none');
    */



    var h2_link = h2_node
        .append("path")
        .data(h2_tree.links())
        // .enter()
        .attr("class", function (d) {
            return "h2_link";
        })
        //.classed("link", true)
        .attr("d", function (d) {
            return "M" + d.source.x + "," + d.source.y
                + "C" + d.source.x + "," + (d.source.y + d.target.y) / 2
                + " " + d.target.x + "," + (d.source.y + d.target.y) / 2
                + " " + d.target.x + "," + (d.target.y);
        })
        .style("opacity", function (d) {
            return 0.3;
        })
        //.style("stroke", "#ccc")
        .style("stroke", "red")
        .style("fill", "none")
        .style("stroke-width", "7px");

    h2_node
        .append("circle")
        .attr("cx", function (d) {
            // console.log(d);
            // console.log(radialPoint(d.x, d.y));
            return d.x;
        })
        .attr("cy", function (d) {
            return d.y;
        })
        .attr("r", function (d) {
            //  if (d3.select("#solidshaperadio")._groups[0][0].checked == true)
            //    return radius + "px";
            // if (d3.select("#hollowshaperadio")._groups[0][0].checked == true)
            return (radius - 4) + "px";
        })
        .attr("class", function (d) {
            return (
                "node" + (d.children ? " node--internal" : " node--leaf")
            );
        })
        .attr("id", function (d) {
            return "h2tree_" + d.data.data.child
                .replaceAll(/\//g, "")
                .replaceAll(".", "")
                .replaceAll(" ", "")
                .replaceAll("(", "")
                .replaceAll(")", "")
                .toLowerCase();
        })
        .style("fill", function (d) {
            /*   if (d3.select("#solidshaperadio")._groups[0][0].checked == true)
                  return h1color;
              if (d3.select("#hollowshaperadio")._groups[0][0].checked == true) */
            return "white";
        })
        .style("stroke", function (d) {
            //console.log(h1color);
            /*  if (d3.select("#solidshaperadio")._groups[0][0].checked == true)
                 return "none";
             if (d3.select("#hollowshaperadio")._groups[0][0].checked == true) */
            return h1color;

        })
        .style("stroke-width", function (d) {
            /*   if (d3.select("#solidshaperadio")._groups[0][0].checked == true)
                  return "0px";
              if (d3.select("#hollowshaperadio")._groups[0][0].checked == true) */
            return "5px";

        })

        .style("opacity", function (d) {
            return 0.3;
        })
        .on("mouseover", function (d, i) {
            var text = "Element: <b>" + d.data.data.description + "</b><br>Element code: <b>" + d.data.data.child + "</b><br>Parent code: <b>" + d.data.data.parent + "</b>";
            d3.select("#tooltip")
                .html(text)

                .style("left", parseInt(d3.event.pageX - 200) + "px")
                .style("top", parseInt(d3.event.pageY + 50) + "px")
                .style("text-align", "left")
                .style("opacity", 1);

            d3.select(this)
                .transition()
                .attr("r", 15);
        })
        .on("mouseleave", function (d) {

            /*  if (d3.select("#solidshaperadio")._groups[0][0].checked == true)
                 d3.select(this)
                     .transition()
                     .attr("r", radius - 3);
             if (d3.select("#hollowshaperadio")._groups[0][0].checked == true) */
            d3.select(this)
                .transition()
                .attr("r", radius - 6);


            d3.select("#tooltip")
                .html("")
                .style("left", 0)
                .style("top", 0)
                .style("opacity", 0);

        });



    h2_node
        .append("text")
        .style("font-size", function (d) {
            /* if (d3.select("#fileversion3radio")._groups[0][0].checked == true)
                return "20px";
            else */
            return "40px";
        })
        .attr("class", function (d) {
            return d.data.data.child
                .replaceAll(" ", "")
                .replaceAll("(", "")
                .replaceAll(")", "")
                .toLowerCase();
        })
        .classed("text", true)
        .attr("dy", "2em")
        .attr("x", function (d) {

            //console.log(d3.select(this.parentNode)._groups[0][0].children[1].getAttribute("class"));
            if (d3.select(this.parentNode)._groups[0][0].children[1].getAttribute("class").includes("leaf"))
                return d.x - 8;
            else
                return d.x + 20;
        })
        .attr("y", function (d) {
            //if ((this.previousSibling).getAttribute("class").includes("leaf"))
            if (d3.select(this.parentNode)._groups[0][0].children[1].getAttribute("class").includes("leaf"))
                return d.y - 8;
            else
                return d.y - 30;
        })
        .attr("text-anchor", function (d) {
            return "start";
        })

        .style("opacity", function (d) {
            //  console.log(d);
            if (d.depth <= 4)
                return 1;
            else
                return 0;
        })
        .text(function (d) {
            // console.log(d);
            var label = "";
            if (d.data.data.description)
                label = d.data.data.description;
            else
                label = d.data.data.child;
            if (label.includes("/"))
                label = label.substring(label.lastIndexOf("/") + 1, label.length);
            return label;
        });




    //console.log()
    //console.log(h1_tree.descendants());
    //console.log(h2_tree.descendants());

    var x1 = 0, x2 = 0, y1 = 0, y2 = 0;


    d3
        .select("#treeswlinking_svg")
        .append("g")
        .attr("id", "lines");

    for (var h1 = 0; h1 < h1_tree.descendants().length; h1++) {
        for (var h2 = 0; h2 < h2_tree.descendants().length; h2++) {
            if (h1_tree.descendants()[h1].data.data.child == h2_tree.descendants()[h2].data.data.child) {
                //console.log(h2_tree.descendants()[h2].data.data.child + " " + h1_tree.descendants()[h1].data.data.child);
                //console.log(document.getElementById("h1tree_" + h1_tree.descendants()[h1].data.data.child.toLowerCase()));
                //console.log(document.getElementById("h2tree_" + h2_tree.descendants()[h2].data.data.child.toLowerCase()));


                x1 = document.getElementById("h1tree_" + h1_tree.descendants()[h1].data.data.child.toLowerCase()).getAttribute("cx");
                y1 = document.getElementById("h1tree_" + h1_tree.descendants()[h1].data.data.child.toLowerCase()).getAttribute("cy");

                x2 = document.getElementById("h2tree_" + h2_tree.descendants()[h2].data.data.child.toLowerCase()).getAttribute("cx");
                y2 = document.getElementById("h2tree_" + h2_tree.descendants()[h2].data.data.child.toLowerCase()).getAttribute("cy");



                //console.log(x2 + " , " + y2);

                var ctm1 = document.getElementById("h1tree_" + h1_tree.descendants()[h1].data.data.child.toLowerCase()).getCTM();
                var ctm2 = document.getElementById("h2tree_" + h1_tree.descendants()[h1].data.data.child.toLowerCase()).getCTM();


                //console.log(ctm2.a + " " + ctm2.b + " " + ctm2.c + " " + ctm2.d + " " + ctm2.e + " " + ctm2.f);

                // if (d3.select("#lrradio")._groups[0][0].checked == true) {

                //console.log(parseInt(x2) + " " + ctm2.b);
                //console.log(parseInt(y2) + " " + ctm2.d);
                //console.log(ctm2.f + " ");

                var upd_x1 = (parseInt(x1) * ctm1.a) + (parseInt(y1) * ctm1.c) + ctm1.e;
                var upd_y1 = (parseInt(x1) * ctm1.b) + (parseInt(y1) * ctm1.d) + ctm1.f;

                var upd_x2 = (parseInt(x2) * ctm2.a) + (parseInt(y2) * ctm2.c) + ctm2.e;
                var upd_y2 = (parseInt(x2) * ctm2.b) + (parseInt(y2) * ctm2.d) + ctm2.f;

                //console.log(x1 + " , " + y1);
                //console.log(parseInt(x2) * ctm2.b);

                //console.log(x2 + " , " + upd_y2);

                // }

                /* else {
                    var upd_x1 = h1_xpos - parseInt(x1);
                    var upd_y1 = h1_ypos - parseInt(y1);

                    var upd_x2 = parseInt(x2) + h2_xpos;
                    var upd_y2 = parseInt(y2) + h2_ypos;


                } */




                //console.log(x1 + " , " + y1);
                //console.log(x2 + " , " + y2);


                /*  d3
                     .select("#treeswlinking_svg")
                     .select("#lines")
                     .append("circle")
                     .attr("class", h1_tree.descendants()[h1].data.data.child)
                     .attr("cx", upd_x2)
                     .attr("cy", upd_y2)
                     .attr("r", 20)
                     .style("stroke", "green")
                     .style("fill", "yellow")
                     .style("stroke-width", 5); */

                points = [];
                points.push([upd_x1, upd_y1]);
                points.push([(upd_x1 + upd_x2) / 2, (upd_y1 + upd_y2) / 2 - 200]);
                points.push([upd_x2, upd_y2]);

                //console.log(points);



                //console.log(d3.select("#h1tree").attr("transform"));
                //console.log(d3.select("#h2tree").attr("transform"));

                //console.log(document.getElementById("h1tree_" + h1_tree.descendants()[h1].data.data.child).getBoundingClientRect());
                //console.log(document.getElementById("h2tree_" + h1_tree.descendants()[h1].data.data.child).getBoundingClientRect());


                //console.log(document.getElementById("h1tree_" + h1_tree.descendants()[h1].data.data.child).getBBox());
                //console.log(document.getElementById("h2tree_" + h1_tree.descendants()[h1].data.data.child).getBBox());



                /* if (d3.select("#straightlradio")._groups[0][0].checked == true) {
                    var pathline = d3.line(points);




                    d3
                        .select("#treeswlinking_svg")
                        .select("#lines")
                        .append("line")
                        .style("stroke", "blue")
                        .style("fill", "none")
                        .style("stroke-width", 7)
                        .style("opacity", 0.3)
                        //.attr("x1", "transform(" + points[0] + "," + [0] + ")")
                        .attr("x1", upd_x1)
                        .attr("y1", upd_y1)
                        .attr("x2", upd_x2)
                        .attr("y2", upd_y2);

                }



                else if (d3.select("#curvedlradio")._groups[0][0].checked == true) */ {

                    var pathcurve = d3.line().curve(d3.curveBasis);




                    d3
                        .select("#treeswlinking_svg")
                        .select("#lines")
                        .append("path")
                        .attr("d", pathcurve(points))
                        .style("stroke", "green")
                        .style("fill", "none")
                        .style("stroke-width", 5);

                }




                //console.log(d3.select("h1tree_" + h1_tree.descendants()[h1].data.data.child).attr("cx"));



            }

        }

    }













}

