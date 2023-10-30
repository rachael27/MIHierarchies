function guidedtour() {

    var vizID = "mergedtree";
    var pageID = "guidedtour";
    var screenSize = localStorage.getItem("screenSize");

    var stepsArr = [
        {
            title: " Welcome to the Guided Tour! <hr class='border border-primary border-3 opacity-75'>",
            intro: "You can interact with each highlighted element in the tour to see it in action. <hr class='border border-danger border-2 opacity-50'> Pop-up boxes will guide you through every step of the tour. If at times the boxes are hidden, scroll to find them. <hr class='border border-danger border-2 opacity-50'>In addition to the back and next buttons, you can also use the left and right arrow keys to move through the tour."
        },

        {
            title: " Arrangement of nodes in the BeforeH and AfterH<hr class='border border-primary border-3 opacity-75'>",
            intro: "Nodes are arranged in an alphabetical order from left-to-right for easy access in each tree and sub-tree."
        },

        {
            element: document.querySelector("#mergedtree_root"),
            title: "A Merged Node <hr class='border border-primary border-3 opacity-75'>",
            intro: "<p class='text-justify'>The root node is a merged node (i.e.) it belongs to both - BeforeH (left) and AfterH (right) hierarchies.  <hr class='border border-danger border-2 opacity-50'> A merged node is represented by a dot within a hollow circle.</p>"
        },
        {
            element: document.querySelector("#mergedtree_mftv-indexhtml"),
            title: "A node that belongs to only the BeforeH (left) hierarchy <hr class='border border-primary border-3 opacity-75'>",
            intro: "Node:<i>root/hcil/piccolo/applications/mftv/ mftv-index.html</i> belongs only to the BeforeH. <hr class='border border-danger border-2 opacity-50'> It is represented by a hollow circle. The link is colored in red to show that it was deleted in the AfterH."
        },
        {
            element: document.querySelector("#mergedtree_about"),
            title: "A node that belongs to only the AfterH (right) hierarchy <hr class='border border-primary border-3 opacity-75'>",
            intro: "Node:<i>root/hcil/about</i> about belongs only to the AfterH. <hr class='border border-danger border-2 opacity-50'> It is represented by a dot (filled circle). The link is colored in green to show that it was newly created in the AfterH.<hr class='border border-danger border-2 opacity-50'>"
        },
        {
            element: document.querySelector(".triangle-academics"),
            title: "The green triangle <hr class='border border-primary border-3 opacity-75'>",
            intro: "The green triangle indicates that a node has been collapsed (i.e. the children of that node are hidden)."
        },

        {
            element: document.querySelector('[id="mergedtree_academics"]'),
            title: "Interacting with a node - collapse/expand <hr class='border border-primary border-3 opacity-75'>",
            intro: "You can click on a node (with a green triangle) to expand its children. <br><hr class='border border-danger border-2 opacity-50'> Click on the node again to collapse it."
        },
        {
            element: document.querySelector("#levellines > line"),
            title: "Level of a node in the BeforeH (dotted/dashed grey level lines) <hr class='border border-primary border-3 opacity-75'>",
            intro: "The grey level lines show the position of a node as it appears in the BeforeH. <hr class='border border-danger border-2 opacity-50'> These lines run from <b>left-to-right</b>. <hr class='border border-danger border-2 opacity-50'> To find the level of node in the BeforeH, simply look for the grey line passing through it. The node:<i>root/hcil</i> in the BeforeH is on level 1 and is represented by the Level 1 grey dotted/dashed line passing through it."
        },

        /*  {
             element: document.querySelector('[id="mergedtree_visumillion"]'),
             title: "Level of a node in the BeforeH <hr class='border border-primary border-3 opacity-75'>",
             intro: "The level of a node in the BeforeH is the number of ancestors from the given node until the root node. <hr class='border border-danger border-2 opacity-50'> To calculate the level, simply count the number of highlighted nodes starting from the root node at level 0. Hence, the level of the selected node is 2.  <hr class='border border-danger border-2 opacity-50'> The root node is at level 0."
         }, */
        {
            element: document.querySelector("#line-chart-l1 .line"),
            title: "Level of a node in the AfterH (solid multi-colored level lines) <hr class='border border-primary border-3 opacity-75'>",
            intro: "The solid multi-colored level lines show the position of a node as it appears in the AfterH. <hr class='border border-danger border-2 opacity-50'> These lines run from <b>right-to-left</b>. <hr class='border border-danger border-2 opacity-50'>To find the level of node in the AfterH, simply look for the solid colored line passing through it. <hr class='border border-danger border-2 opacity-50'> The node:<i>root/hcil</i> in the AfterH and is on level 1 represented by the Level 1 solid orange-colored line passing through it. <hr class='border border-danger border-2 opacity-50'> <b>Some nodes might be on different levels in the BeforeH and AfterH.</b>"
        },
        /*
                {
                    element: document.querySelector("#line-chart-l1 .line"),
                    title: "Level of a node in the AfterH (solid multi-colored level lines) <hr class='border border-primary border-3 opacity-75'>",
                    intro: "The solid multi-colored level lines show the position of a node as it appears in the AfterH. These lines run from right-to-left <hr class='border border-danger border-2 opacity-50'>To find the level of node in the AfterH, simply look for the solid colored line passing through it. <hr class='border border-danger border-2 opacity-50'> The node:<i>root/hcil</i> in the AfterH and is on level 1 represented by the Level 1 solid orange-colored line passing through it. <hr class='border border-danger border-2 opacity-50'> <b>Some nodes might be on different levels in the BeforeH and AfterH.</b>"
                },
                */

        {
            element: document.querySelector(".h2-text-level0"),
            title: "AfterH level lines <hr class='border border-primary border-3 opacity-75'>",
            intro: "Clicking on a level label will show/hide the level line. <hr class='border border-danger border-2 opacity-50'> Clicking on the BeforeH level labels does the same for the dotted/dashed grey level lines."
        },
        {
            element: document.querySelector("#btn-level-chart"),
            title: "AfterH level lines button <hr class='border border-primary border-3 opacity-75'>",
            intro: "Alternatively, you can click on the button to show/hide all level lines. <hr class='border border-danger border-2 opacity-50'> Clicking on the button on the left does the same for the BeforeH level lines. "
        },

        {
            element: document.querySelector('[id="search-nodes"]'),
            title: "Search nodes <hr class='border border-primary border-3 opacity-75'>",
            intro: "Enter the file/folder name, for e.g. type 'filelist.xml' will give you a list of all files named filelist.xml. <hr class='border border-danger border-2 opacity-50'> Choose the required file based on its <b>path:</b><i>/anthro/photos/index_files/filelist.xml</i>"
        },
        {
            element: document.querySelector('[id="btn-search"]'),
            title: "Search nodes <hr class='border border-primary border-3 opacity-75'>",
            intro: "Now, click on the search button. Automatic scrolling will take you to the node that you searched for. <hr class='border border-danger border-2 opacity-50'> The searched node and the nodes on its path to the root node are surrounded by yellow squares."
        },
        {
            element: document.querySelector('[id="btn-clear"]'),
            title: "Complete your search <hr class='border border-primary border-3 opacity-75'>",
            intro: "ONLY when you click on the clear button, the highlighted squares are removed."
        },
        {
            element: document.querySelector('[id="btn-changeonlylayout"]'),
            title: "View changes-only layout <hr class='border border-primary border-3 opacity-75'>",
            intro: "The default layout expands only those folders that have undergone changes while hiding the children of those nodes that did not change from BeforeH to AfterH."
        },

        {
            element: document.querySelector('[id="btn-entirelayout"]'),
            title: "View the entire layout <hr class='border border-primary border-3 opacity-75'>",
            intro: "This layout expands all folders - those that have undergone changes and those that have not. <hr class='border border-danger border-2 opacity-50'> You can toogle between the two layouts depending on the task."
        },

        {

            title: "End of Guided Tour! <hr class='border border-primary border-3 opacity-75'>",
            intro: "We have reached the end of the tour. You can now move on the next phase."
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


              {
             element: document.querySelector("#line-chart-l2 > path"),
             title: "AfterH tree level 2 <hr class='border border-primary border-3 opacity-75'>",
             intro: "This Level 2 line dips down to node L1 to show that node L1 belongs on Level 2 in the AfterH and on Level 3 in the BeforeH.  <hr class='border border-danger border-2 opacity-50'> It then goes back up to meet Node C. Node C has the grey line and the colored line passing through it. This shows that it belongs to Level 2 in both the BeforeH and AfterH hierarchies. "
         },
         {
             element: document.querySelector(".text-level1"),
             title: "BeforeH (dashed, grey colored line) and AfterH tree levels (colored level lines) <hr class='border border-primary border-3 opacity-75'>",
             intro: "Clicking on a level label will switch the line on/off."
         }, 
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