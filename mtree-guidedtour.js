function guidedtour() {

    var vizID = "mergedtree";
    var pageID = "guidedtour";

    var stepsArr = [
        {
            title: " Welcome to the Guided Tour! <hr class='border border-primary border-3 opacity-75'>",
            intro: "You can also use the left and right arrow keys to move through the tour."
        },
        {
            element: document.querySelector("#mergedtree_root"),
            title: "A Merged Node <hr class='border border-primary border-3 opacity-75'>",
            intro: "<p class='text-justify'>The root node is a merged node (i.e.) it belongs to both - base (left) and target (right) hierarchies.  <hr class='border border-danger border-2 opacity-50'> A merged node is represented by a dot within a hollow circle. <hr class='border border-danger border-2 opacity-50'> Some of the other merged nodes are A and B. </p>"
        },
        {
            element: document.querySelector("#mergedtree_c"),
            title: "A node that belongs to only the base (left) hierarchy <hr class='border border-primary border-3 opacity-75'>",
            intro: "Node C belongs only to the base hierarchy. <hr class='border border-danger border-2 opacity-50'> It is represented by a hollow circle. <hr class='border border-danger border-2 opacity-50'>Some of the other nodes that belong to only base hierarchy are D, E, F, L5, L6, L7 and L8."
        },
        {
            element: document.querySelector("#mergedtree_l9"),
            title: "A node that belong to only the target (right) hierarchy <hr class='border border-primary border-3 opacity-75'>",
            intro: "Node L9 belongs only to the target hierarchy. <hr class='border border-danger border-2 opacity-50'> It is represented by a dot (filled circle)."
        },
        {
            element: document.querySelector("#levellines > line"),
            title: "Base tree levels (grey level lines) <hr class='border border-primary border-3 opacity-75'>",
            intro: "The grey level lines show the position of a node as it appears in the base hierarchy. <hr class='border border-danger border-2 opacity-50'> In this tree, we have a total of 4 levels ranging from Levels 0 to 3."
        },
        {
            element: document.querySelector("#line-chart-l1 > path"),
            title: "Target tree levels (colored level lines) <hr class='border border-primary border-3 opacity-75'>",
            intro: "The colored level lines show the position of a node as it appears in the target hierarchy. <hr class='border border-danger border-2 opacity-50'>In this tree, we have a total of 4 target levels ranging from Levels 0 to 3."
        },
        {
            element: document.querySelector("#line-chart-l2 > path"),
            title: "Target tree level 2 <hr class='border border-primary border-3 opacity-75'>",
            intro: "This Level 2 line dips down to node L1 to show that node L1 belongs on Level 2 in the target hierarchy and on Level 3 in the base hierarchy.  <hr class='border border-danger border-2 opacity-50'> It then goes back up to meet Node C. Node C has the grey line and the colored line passing through it. This shows that it belongs to Level 2 in both the base and target hierarchies. "
        },
        {
            element: document.querySelector(".text-level1"),
            title: "Target tree levels (colored level lines) <hr class='border border-primary border-3 opacity-75'>",
            intro: "Clicking on a level label will switch the line on/off."
        },
        {
            element: document.querySelector("#levelbutton"),
            title: "Target level lines button <hr class='border border-primary border-3 opacity-75'>",
            intro: "Alternatively, you can click on this button to switch on/off all the level lines."
        },
        {

            title: "End of Guided Tour! <hr class='border border-primary border-3 opacity-75'>",
            intro: "We have reached the end of the tour."
        }

    ];



    /*
        d3.select("#mergedtree_root")
            .attr("data-title", "A Merged Node")
            .attr("data-intro", "The root node is a merged node (i.e.) it belongs to both - base (left) and target (right) hierarchies. A merged node is represented by a dot within a hollow circle. ")
            .attr("data-step", 1);
    
        d3.select("#h1tree_root")
            .attr("data-title", "A node that belongs to only the base (left) hierarchy")
            .attr("data-intro", "Node C belongs only to the base hierarchy. It is represented by a hollow circle. Some of the other nodes that belong to only base hierarchy are D, E, F, L5, L6, L7 and L8.")
            .attr("data-step", 2);
    
        d3.select("#h2tree_root")
            .attr("data-title", "A node that belong to only the target (right) hierarchy")
            .attr("data-intro", "Node L9 belongs only to the target hierarchy. It is represented by a dot (filled circle).")
            .attr("data-step", 3);
    
        d3.select("#levellines")
            .select("line")
            .attr("data-title", "Base tree levels (grey level lines)")
            .attr("data-intro", "The grey level lines show the position of a node as it appears in the base hierarchy. In this tree, we have a total of 4 levels ranging from Levels 0 to 3.")
            .attr("data-step", 4);
    
    
        d3.select("#line-chart-l1")
            .select("path")
            .attr("data-title", "Target tree levels (colored level lines)")
            .attr("data-intro", "The colored level lines show the position of a node as it appears in the target hierarchy. In this tree, we have a total of 4 target levels ranging from Levels 0 to 3.")
            // .attr("data-hint", "Clicking on the Level line label can turn the line on/off")
            .attr("data-step", 5);
    
        d3.select("#line-chart-l2")
            .select("path")
            .attr("data-title", "Target tree level 2")
            .attr("data-intro", "This Level 2 line dips down to node L1 to show that node L1 belongs on Level 2 in the target hierarchy and on Level 3 in the base hierarchy.  It then goes back up to meet Node C. Node C has the grey line and the colored line passing through it. This shows that it belongs to Level 2 in both the base and target hierarchies. ")
            .attr("data-hint", "Clicking on the Level line label can turn the line on/off")
            .attr("data-step", 6);
    
    
        d3.select(".text-level1")
            .attr("data-title", "Target tree levels (colored level lines)")
            .attr("data-intro", "Clicking on a level label will switch the line on/off.")
            .attr("data-step", 7);
    
        d3.select("#levelbutton")
            .attr("data-title", "Target level lines button")
            .attr("data-intro", "Alternatively, you can click on this button to switch on/off all the level lines.")
            .attr("data-step", 8);
    */



    introJs()
        //.addHints()
        //.setOptions("disableInteraction", false)
        .setOptions({
            steps: stepsArr,
            // "showStepNumbers": true,
            "exitOnOverlayClick": false,
            "exitOnEsc": false,
            "skipLabel": "",
            "disableInteraction": false


        })
        .oncomplete(function () {
            update_log("introjs-nextbutton", "Completed guided tour. Redirect to landing page.")
            window.location.href = 'landingpage.html?page=guidedtour';
        })
        .onchange(function () {
            //console.log(this);
            update_log("introjs-nextbutton", "display tooltip " + this._currentStep);
        })

        //.setOption("showStepNumbers", true)


        .start();


    // console.log(introJs().isActive());


    function update_log(elementID, description) {
        var date = new Date();


        var logObject = JSON.parse(localStorage.getItem("logObject"));
        logObject.push({
            "userID": localStorage.getItem("userID"),
            "vizID": vizID,
            "pageID": pageID,
            "elementID": elementID,
            "elementType": "button",
            "description": description,
            "date": date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear(),
            "overall_timestamp": new Date().getMilliseconds(),
            "phase_timestamp": new Date().getMilliseconds(),
            "questionID": "",
            "question": "",
            "useranswer": "",
            "correctanswer": ""
        });
        localStorage.removeItem("logObject");
        localStorage.setItem("logObject", JSON.stringify(logObject));

    }



    //
}