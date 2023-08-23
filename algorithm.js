
function bt_compareDimensions(h2, h1, h2_dims, h1_dims, h1color, h2color, mergedcolor) {
    //console.log(h1);
    //console.log(h2);

    //console.log(h1_dims);
    //console.log(h2_dims);

    //console.log(h1color + " " + h2color + " " + mergedcolor);

    //var arrDims = [];


    var hier_flat = [];
    var index = 0;

    var h1_flat = flatten_array(h1);
    var h2_flat = flatten_array(h2);

    //console.log(h1_flat);
    //console.log(h2_flat);

    var maxLevels = Math.max(h1.length, h2.length);
    var hier = [];
    var hier_obj = [];
    var levelcolor = "";
    var bordertype = "";
    var linkcolor = "";
    var detailsh1 = "";
    var detailsh2 = "";
    var level = "";
    var altparent = "";

    for (let i = 0; i < maxLevels; i++) {
        hier.push([]);
        //arrDims_obj.push([]);
    }
    //console.log(hier);
    //console.log(hier.length);

    //var lev1 = level_desc(h1[i][ii], h1);
    //hier.push({ "child": h1[i][ii], "parent": parent_desc(h1[i][ii], h1_dims), "alternateparent": parent_desc(h1[i][ii], h2_dims), "color": mergedcolor, "shape": "merged", "level": avg_level });
    //hier_flat.push(h1[i][ii]);


    for (var i = 0; i < h1.length; i++) {
        //console.log("h1 " + i);
        for (var ii = 0; ii < h1[i].length; ii++) {

            //console.log(h1[i][ii] + " " + i);
            hier[i].push(h1[i][ii]);
            hier_flat.push(h1[i][ii]);

            detailsh1 = findDetails(h1_dims, h1[i][ii]);

            //console.log(details);



            //found only in h1
            if (!h2_flat.includes(h1[i][ii])) {
                //levelcolor = "blue";
                hier_obj.push({
                    "child": h1[i][ii],
                    //"parent": parent_desc(h1[i][ii], h1_dims),
                    //"level": level_desc(h1[i][ii], h1),
                    //"bordertype": "solid",
                    //"description": findDescription(h1_dims, h1[i][ii]),

                    "parent": detailsh1[0],
                    "level": detailsh1[1],
                    "description": detailsh1[2],


                    "alternateparent": "",
                    "color": h1color,
                    "shape": "h1",

                    "alternatelevel": "",
                    "levelcolor": h1color,

                    "x": 0,
                    "y": 0,

                    "linkcolor": "red",

                    "h1parent": detailsh1[0],
                    "h2parent": ""
                });
                //break;

                h1_flat.splice(h1_flat.indexOf(h1[i][ii]), 1);

            }
        }
    }



    for (var i = 0; i < h2.length; i++) {
        //console.log("h2 " + i);
        for (var ii = 0; ii < h2[i].length; ii++) {
            //console.log(h2[i][ii]);
            //console.log("h2 " + i + " " + ii);
            levelcolor = h1color;
            altparent = "";

            detailsh1 = findDetails(h1_dims, h2[i][ii]);
            detailsh2 = findDetails(h2_dims, h2[i][ii]);


            //found in both
            if (h1_flat.includes(h2[i][ii])) {
                //console.log("both");

                //var ancestor = findAncestor(h2[i][ii], h2_dims, h1, h1_dims);
                //var ancestor_level = level_desc(ancestor, h1);
                //console.log("element " + h2[i][ii] + " " + level_desc(h2[i][ii], h1));
                //console.log(h2[i][ii] + " " + ancestor + " " + ancestor_level);
                hier[i].push(h2[i][ii]);
                hier_flat.push(h2[i][ii]);


                if (detailsh2[1] == detailsh1[1])
                    levelcolor = h1color;
                else if (detailsh2[1] < detailsh1[1])
                    levelcolor = "#4F7942";
                else /*if((level_desc(h2[i][ii], h2) > level_desc(h2[i][ii], h1)))*/
                    levelcolor = "green";

                //if (parent_desc(h2[i][ii], h1_dims) == parent_desc(h2[i][ii], h2_dims))
                //  bordertype = "solid";


                //else bordertype = "dashed";


                //console.log(parent_desc(h2[i][ii], h2_dims));
                if (detailsh1[0] == detailsh2[0])
                    linkcolor = "blue";
                else
                    linkcolor = "red";


                if (detailsh1[0] == detailsh2[0])
                    altparent == "";
                else
                    altparent = detailsh2[0];


                hier_obj.push({
                    "child": h2[i][ii],

                    //"parent": parent_desc(h2[i][ii], h1_dims),
                    //"level": level_desc(h2[i][ii], h1),
                    //"description": findDescription(h1_dims, h2[i][ii]),

                    "parent": detailsh1[0],
                    "level": detailsh1[1],
                    "description": detailsh1[2],


                    //"alternateparent": parent_desc(h2[i][ii], h2_dims),
                    //"alternatelevel": level_desc(h2[i][ii], h2),

                    "alternateparent": altparent,
                    "alternatelevel": detailsh2[1],


                    "color": mergedcolor,
                    "shape": "merged",


                    //"levelcolor": levelcolor,
                    "levelcolor": h1color,
                    //"bordertype": bordertype,
                    "x": 0,
                    "y": 0,

                    "linkcolor": linkcolor,

                    "h1parent": detailsh1[0],
                    "h2parent": detailsh2[0]
                });

                //hier[i].push(h2[i][ii]);
                //hier_flat.push(h2[i][ii]);
                // console.log(i + " " + ii + " " + h2[i][ii]);

                // break;
            }

            else {
                //console.log("element not included " + h2[i][ii]);
                var ancestor = "";
                var child = "";
                var fa_result = findAncestor(h2[i][ii], h2_dims, h1, h1_dims);
                //console.log(fa_result);
                ancestor = fa_result[0];
                if (fa_result[1] == 1) {

                    child = fa_result[2];
                    //console.log(child);

                    for (var h = 0; h < hier_obj.length; h++) {
                        // console.log(h + " " + hier_obj[h].child);
                        /* if (hier_obj[h].child == h2[i][ii]) {
                            console.log("DO OBJECT UPDATED");
                            hier_obj[h].level = (level_desc(fa_result[0]) + level_desc(fa_result[2])) / 2;
                        } */
                        if (hier_obj[h].child == child) {
                            //console.log("OBJECT UPDATED");
                            hier_obj[h].parent = h2[i][ii];
                            hier_obj[h].alternateparent = parent_desc(child, h1_dims);

                        }

                    }

                }


                var ancestor_level = level_desc(ancestor, h2);
                //console.log(h2[i][ii] + " " + ancestor + " " + ancestor_level);
                hier[ancestor_level + 1].push(h2[i][ii]);

                if (ancestor == parent_desc(h2[i][ii], h2_dims))
                    bordertype = "solid";
                //else bordertype = "dashed";

                if (fa_result[1] == 1) {
                    //console.log("updt if");
                    //console.log(h2[i][ii] + ancestor);

                    if (ancestor == detailsh2[0])
                        altparent == "";
                    else
                        altparent = detailsh2[0];


                    hier_obj.push({
                        "child": h2[i][ii],

                        "parent": ancestor,
                        "description": findDescription(h2_dims, h2[i][ii]),
                        "level": (level_desc(fa_result[0], h1) + level_desc(fa_result[2], h1)) / 2,

                        "alternateparent": altparent,
                        "color": h2color,
                        "shape": "h2",

                        "alternatelevel": detailsh2[1],
                        //"levelcolor": levelcolor,
                        "levelcolor": h1color,
                        //"bordertype": bordertype,
                        "x": 0,
                        "y": 0,

                        "linkcolor": "green",

                        "h1parent": "",
                        "h2parent": ""

                    });
                    //break;
                }
                else {
                    //console.log("updt else");
                    //console.log(h2[i][ii] + " " + ancestor + " " + parent_desc(h2[i][ii], h2_dims));
                    //console.log(level_desc(ancestor, h2) + "" + level_desc(ancestor, h1) + "" + 1)
                    var anc_h1 = level_desc(ancestor, h1);
                    var anc_h2 = level_desc(ancestor, h2);

                    //detailsh2 = findDetails(h2_dims, h2[i][ii]);

                    if (anc_h1 == undefined)
                        anc_h1 = 0;
                    if (anc_h2 == undefined)
                        anc_h2 = 0;
                    //console.log(anc_h1 + " " + anc_h2 + (d3.max([anc_h1, anc_h2]) + 1));
                    hier_obj.push({
                        "child": h2[i][ii],

                        //"parent": parent_desc(h2[i][ii], h2_dims),
                        //"description": findDescription(h2_dims, h2[i][ii]),
                        //"alternatelevel": level_desc(h2[i][ii], h2),

                        "parent": detailsh2[0],
                        "description": detailsh2[2],
                        "alternatelevel": detailsh2[1],


                        "level": d3.max([anc_h1, anc_h2]) + 1,
                        "alternateparent": "",
                        "color": h2color,
                        "shape": "h2",
                        //"level": level_desc(parent_desc(h2[i][ii], h2_dims), h2) + 1,
                        //"level": ancestor_level + 1,


                        //"levelcolor": levelcolor,
                        "levelcolor": h1color,
                        //"bordertype": bordertype,
                        "x": 0,
                        "y": 0,

                        "linkcolor": "green",

                        "h1parent": "",
                        "h2parent": detailsh2[0]
                    });
                    //break;
                }

            }
        }
    }


    //console.log(hier);
    //console.log(hier_flat);
    //console.log(hier_obj);
    return hier_obj;

}




function recomputePositions_nodes(descendants) {
    console.log(descendants);

    if (!d.data.data.level % 2 == 0)


        return descendants;
}


function createHierarchy(arrDims, h1, h2) {

    /*  console.log(arrDims);
     console.log(h1);
     console.log(h2); */

    var hier = [];
    hier.push({ "child": "root", "parent": "", "alternateparent": "", "color": mergedcolor, "shape": "merged" });
    var hier_str = "";
    for (let j = 1; j < arrDims.length; j++) {

        for (let jj = 0; jj < arrDims[j].length; jj++) {
            // console.log(arrDims[j][jj]);

            if (arrDims[j][jj].color == mergedcolor) {
                var h1_details = parent(arrDims[j][jj], h1);
                var h2_details = parent(arrDims[j][jj], h2);

                if (h1_details[1] < h2_details[1])
                    hier.push({ "child": arrDims[j][jj].name, "parent": h1_details[0], "alternateparent": h2_details[0], "color": mergedcolor, "shape": "merged" });

                else
                    hier.push({ "child": arrDims[j][jj].name, "parent": h2_details[0], "alternateparent": h1_details[0], "color": mergedcolor, "shape": "merged" });

            }

            else if (arrDims[j][jj].color == h2color) {
                hier.push({ "child": arrDims[j][jj].name, "parent": parent(arrDims[j][jj], h1)[0], "alternateparent": "", "color": h2color, "shape": "h2" });

            }

            else {
                hier.push({ "child": arrDims[j][jj].name, "parent": parent(arrDims[j][jj], h2)[0], "alternateparent": "", "color": h1color, "shape": "h1" });
            }


        }
    }
    //  console.log(hier);
    return hier;

}


function parent(element, array) {
    // console.log(element);
    // console.log(array);
    for (var i = 0; i < array.length; i++) {

        if (array[i].data.data.child == element.name) {
            if (element.name == "root")
                return ["", array[i].data.data.height];
            else
                return [array[i].data.data.parent, array[i].data.parent.height];
        }
    }
}


function findDimensions(root) {
    const arrDims = [];

    //console.log(root);

    for (let i = 0; i <= root.height; i++) {
        arrDims.push([]);
    }

    // console.log(arrDims);

    root.eachBefore(function (d) {
        const str = d.depth;
        //  arrDims[str].push({ "name": d.data.data.child, "depth": d.depth, "height": d.height });
        arrDims[str].push(d.data.data.child);

    });

    return arrDims;
}

function parent_desc(element, array) {

    //console.log(element);
    //console.log(array);
    var child = array.filter(function (el) {
        //console.log(el);

        if (element == el.data.data.child) {
            //  console.log(element);
            // console.log(element + " " + el.parent.data.id);
            return el.data.data.parent;
        }

    });
    //console.log(child[0].parent.data.id);
    //console.log(child);
    if (child.length == 0)
        return "";
    else
        return child[0].parent.data.data.child;
}



function level_desc(element, array) {
    //console.log(element);
    //console.log(array);
    for (let i = 0; i < array.length; i++) {
        for (let ii = 0; ii < array[i].length; ii++) {
            if (array[i][ii].child == element || array[i][ii] == element) {
                //console.log(i);
                return i;
            }
        }
    }
}

function parent_hier(element, array) {

    //console.log(element);
    //console.log(array);

    for (i = 0; i < array.length; i++)
        //console.log(i);
        if (element == array[i].child) {
            //console.log("MATCH");
            //console.log(element + " " + array[i].child);
            return array[i].parent;
        }



    //console.log(child[0].parent.data.id);

}


function level_hier(element, array) {
    //console.log(array);
    //console.log(element);
    for (var i = 0; i < array.length; i++) {
        if (array[i].child == element) {
            //console.log(array[i].level);
            return array[i].level;
        }
    }
}

function flatten_array(array) {
    var hier = [];

    for (var h = 0; h < array.length; h++) {
        for (var hh = 0; hh < array[h].length; hh++) {
            hier.push(array[h][hh]);
        }
    }

    // console.log(hier);


    return hier;
}





function findDetails(array, element) {
    var parent = "";
    for (var i = 0; i < array.length; i++) {
        if (array[i].data.data.child == element) {
            //console.log(array[i]);
            if (array[i].data.data.child != "root")
                parent = array[i].parent.data.data.child;
            else
                parent = "";
            return [parent, array[i].depth, array[i].data.data.description];
        }
    }
}


function findDescription(array, element) {
    for (var i = 0; i < array.length; i++) {
        if (array[i].data.data.child == element)
            return array[i].data.data.description;
    }
}

function findAncestor(element, h2_array, h1_array, h1_dims) {

    //console.log(flatten_array(h1_array))
    var flat_h1_array = flatten_array(h1_array);
    var flag_parent = 0;
    var flag_child = 0;
    var child = "";

    var parent = parent_desc(element, h2_array);

    //console.log(element + " " + parent);
    //console.log(h2_array);
    //console.log(flat_h1_array);
    //console.log(h1_dims);


    if (flat_h1_array.includes(parent)) {
        flag_parent = 1;

        for (var i = 0; i < h2_array.length; i++) {
            if (element == h2_array[i].data.data.child) {
                //console.log(h2_array[i].children);
                if (typeof h2_array[i].children != "undefined") {
                    //console.log()
                    for (var c = 0; c < h2_array[i].children.length; c++) {
                        // console.log(h2_array[i].children[c].data.data.child);
                        if (flat_h1_array.includes(h2_array[i].children[c].data.data.child)) {
                            flag_child = 1;
                            child = h2_array[i].children[c].data.data.child;
                        }
                    }
                }
                else flag_child == 0;
            }
        }
        //console.log("child and parent", child + " ** " + parent);
        if (flag_parent == 1 && flag_child == 1) {
            //console.log("return");
            return [parent, 1, child];
        }
        else
            return [parent, 0, ""];
    }

    else {
        //console.log("entered else");
        for (var i = 0; i < h2_array.length; i++) {
            //console.log(h2_array[i]);
            if (element == h2_array[i].data.data.child) {
                //console.log(h2_array[i].data.data.parent);
                //return [parent, 0, ""];
                return [h2_array[i].data.data.parent, 0, ""];
                /* for (var anc = 0; anc < h2_array[i].ancestors().length; anc++) {
                    console.log(h2_array[i].ancestors()[anc].data.data.child);
                    if (flat_h1_array.includes(h2_array[i].ancestors()[anc].data.data.child)) {
                        console.log("match found " + h2_array[i].ancestors()[anc].data.data.child);
                        return [h2_array[i].ancestors()[anc].data.data.child, 0, ""];
                    }
                } */


            }
        }
    }
}