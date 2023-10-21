function guidedtour() {

    var vizID = "mergedtree";
    var pageID = "guidedtour";
    var screenSize = localStorage.getItem("screenSize");

    var stepsArr = [
        {
            title: " Welcome to the Guided Tour! <hr class='border border-primary border-3 opacity-75'>",
            intro: "In addition to the back and next buttons, you can also use the left and right arrow keys to move through the tour."
        },
        {
            element: document.querySelector("#mergedtree_root"),
            title: "A Merged Node <hr class='border border-primary border-3 opacity-75'>",
            intro: "<p class='text-justify'>The root node is a merged node (i.e.) it belongs to both - BeforeH (left) and AfterH (right) hierarchies.  <hr class='border border-danger border-2 opacity-50'> A merged node is represented by a dot within a hollow circle. <hr class='border border-danger border-2 opacity-50'></p>"
        },
        {
            element: document.querySelector("#mergedtree_doc"),
            title: "A node that belongs to only the BeforeH (left) hierarchy <hr class='border border-primary border-3 opacity-75'>",
            intro: "Node:<i>root/hcil/treemap3/doc</i> belongs only to the BeforeH. <hr class='border border-danger border-2 opacity-50'> It is represented by a dot (filled circle). The link is colored in red to show that it was deleted in the AfterH."
        },
        {
            element: document.querySelector("#mergedtree_about"),
            title: "A node that belongs to only the AfterH (right) hierarchy <hr class='border border-primary border-3 opacity-75'>",
            intro: "Node:<i>root/hcil/about</i> about belongs only to the AfterH. <hr class='border border-danger border-2 opacity-50'> It is represented by a hollow circle. The link is colored in green to show that it was newly created in the AfterH.<hr class='border border-danger border-2 opacity-50'>"
        },
        {
            element: document.querySelector(".triangle-academics"),
            title: "The green triangle <hr class='border border-primary border-3 opacity-75'>",
            intro: "The green triangle indicates that a node has been collapsed. Click on the triangle to reveal the children of that node. <hr class='border border-danger border-2 opacity-50'> You can expand the children again, by clicking on the triangle or node."
        },
        {
            element: document.querySelector("#levellines > line"),
            title: "BeforeH tree levels (dotted/dashed grey level lines) <hr class='border border-primary border-3 opacity-75'>",
            intro: "The grey level lines show the position of a node as it appears in the BeforeH. <hr class='border border-danger border-2 opacity-50'> To find the level of node in the BeforeH, simply look for the grey line passing through it. The node:<i>root/hcil</i> in the BeforeH is on level 1 and is represented by the Level 1 grey dotted/dashed line passing through it."
        },
        {
            element: document.querySelector("#line-chart-l1 > path"),
            title: "AfterH tree levels (solid multi-colored level lines) <hr class='border border-primary border-3 opacity-75'>",
            intro: "The solid multi-colored level lines show the position of a node as it appears in the AfterH. <hr class='border border-danger border-2 opacity-50'>To find the level of node in the AfterH, simply look for the solid colored line passing through it. The node:<i>root/hcil</i> in the AfterH and is on level 1 represented by the Level 1 solid orange-colored line passing through it. <hr class='border border-danger border-2 opacity-50'> Some nodes might be on different levels in the BeforeH and AfterH."
        },
        /*  {
             element: document.querySelector("#line-chart-l2 > path"),
             title: "AfterH tree level 2 <hr class='border border-primary border-3 opacity-75'>",
             intro: "This Level 2 line dips down to node L1 to show that node L1 belongs on Level 2 in the AfterH and on Level 3 in the BeforeH.  <hr class='border border-danger border-2 opacity-50'> It then goes back up to meet Node C. Node C has the grey line and the colored line passing through it. This shows that it belongs to Level 2 in both the BeforeH and AfterH hierarchies. "
         }, */
        {
            element: document.querySelector(".text-level1"),
            title: "BeforeH (dashed, grey colored line) and AfterH tree levels (colored level lines) <hr class='border border-primary border-3 opacity-75'>",
            intro: "Clicking on a level label will switch the line on/off."
        },
        {
            element: document.querySelector("#btn-level-line"),
            title: "AfterH level lines button <hr class='border border-primary border-3 opacity-75'>",
            intro: "Alternatively, you can click on this button to switch on/off all the level lines."
        },
        {
            element: document.querySelector('[id="search-nodes"]'),
            title: "Search nodes <hr class='border border-primary border-3 opacity-75'>",
            intro: "Enter the file/folder name, for e.g. type 'filelist.xml' will give you a list of all files named filelist.xml. <hr class='border border-danger border-2 opacity-50'> Choose the required file based on its <b>path:</b><i>/anthro/photos/index_files/filelist.xml</i>"
        },
        {
            element: document.querySelector('[id="btn-search"]'),
            title: "Search nodes <hr class='border border-primary border-3 opacity-75'>",
            intro: "Now, click on the search button. Automatic scrolling will take you to the nodes that you searched for (now highlighted in gold)."
        },
        {
            element: document.querySelector('[id="btn-clear"]'),
            title: "Complete your search <hr class='border border-primary border-3 opacity-75'>",
            intro: "When you click on the clear button, the nodes that you searched for previosuly, are no longer highlighted."
        },
        {
            element: document.querySelector('[id="tog-hierarchy"]'),
            title: "Search nodes from the BeforeH/AfterH <hr class='border border-primary border-3 opacity-75'>",
            intro: "You can search nodes from the BeforeH and AfterH, by using the toggle switch."
        },
        {

            title: "End of Guided Tour! <hr class='border border-primary border-3 opacity-75'>",
            intro: "We have reached the end of the tour."
        }

    ];



    /*
        d3.select("#mergedtree_root")
            .attr("data-title", "A Merged Node")
            .attr("data-intro", "The root node is a merged node (i.e.) it belongs to both - BeforeH (left) and AfterH (right) hierarchies. A merged node is represented by a dot within a hollow circle. ")
            .attr("data-step", 1);
    
        d3.select("#h1tree_root")
            .attr("data-title", "A node that belongs to only the BeforeH (left) hierarchy")
            .attr("data-intro", "Node C belongs only to the BeforeH. It is represented by a hollow circle. Some of the other nodes that belong to only BeforeH are D, E, F, L5, L6, L7 and L8.")
            .attr("data-step", 2);
    
        d3.select("#h2tree_root")
            .attr("data-title", "A node that belong to only the AfterH (right) hierarchy")
            .attr("data-intro", "Node L9 belongs only to the AfterH. It is represented by a dot (filled circle).")
            .attr("data-step", 3);
    
        d3.select("#levellines")
            .select("line")
            .attr("data-title", "BeforeH tree levels (grey level lines)")
            .attr("data-intro", "The grey level lines show the position of a node as it appears in the BeforeH. In this tree, we have a total of 4 levels ranging from Levels 0 to 3.")
            .attr("data-step", 4);
    
    
        d3.select("#line-chart-l1")
            .select("path")
            .attr("data-title", "AfterH tree levels (colored level lines)")
            .attr("data-intro", "The colored level lines show the position of a node as it appears in the AfterH. In this tree, we have a total of 4 AfterH levels ranging from Levels 0 to 3.")
            // .attr("data-hint", "Clicking on the Level line label can turn the line on/off")
            .attr("data-step", 5);
    
        d3.select("#line-chart-l2")
            .select("path")
            .attr("data-title", "AfterH tree level 2")
            .attr("data-intro", "This Level 2 line dips down to node L1 to show that node L1 belongs on Level 2 in the AfterH and on Level 3 in the BeforeH.  It then goes back up to meet Node C. Node C has the grey line and the colored line passing through it. This shows that it belongs to Level 2 in both the BeforeH and AfterH hierarchies. ")
            .attr("data-hint", "Clicking on the Level line label can turn the line on/off")
            .attr("data-step", 6);
    
    
        d3.select(".text-level1")
            .attr("data-title", "AfterH tree levels (colored level lines)")
            .attr("data-intro", "Clicking on a level label will switch the line on/off.")
            .attr("data-step", 7);
    
        d3.select("#levelbutton")
            .attr("data-title", "AfterH level lines button")
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
            update_log("introjs-nextbutton", "button", "Completed guided tour. Redirect to landing page.", "click")
            window.location.href = 'landingpage.html?page=guidedtour';
        })
        .onchange(function () {
            console.log(this._currentStep);
            update_log("introjs-nextbutton", "button", "display tooltip " + this._currentStep, "click");
        })

        //.setOption("showStepNumbers", true)


        .start();


    // console.log(introJs().isActive());


    function update_log(elementID, elementType, elementDescription, eventDescription) {
        var date = new Date();


        var logObject = JSON.parse(localStorage.getItem("logObject"));
        logObject.push({
            "date": date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear(),
            "userID": localStorage.getItem("userID"),
            "vizID": localStorage.getItem("vizID"),
            "screenWidth": window.innerWidth,
            "screenHeight": window.innerHeight,
            "pageID": "guided tour",
            "elementID": elementID,
            "elementType": elementType,
            "elementDescription": elementDescription,
            "eventDescription": eventDescription,
            "overall_timestamp": Math.round(+new Date() / 1000),
            //"phase_timestamp": new Date().getMilliseconds(),
            "questionID": "",
            "question": "",
            "useranswer": "",
            "correctanswer": "",
            "score": ""
        });
        localStorage.removeItem("logObject");
        localStorage.setItem("logObject", JSON.stringify(logObject));

    }



    //
}