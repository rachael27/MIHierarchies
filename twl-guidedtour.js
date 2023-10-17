function twl_guidedtour() {

    var vizID = "treeswlinking";
    var pageID = "guidedtour";

    var stepsArr = [
        {
            title: "Welcome to the Guided Tour! <hr class='border border-primary border-3 opacity-75'>",
            intro: "In addition to the back and next buttons, you can also use the left and right arrow keys to move through the tour."
        },
        {
            element: document.querySelector('[id="h1tree_root"]'),
            title: "Node with a green border <hr class='border border-primary border-3 opacity-75'>",
            intro: "<p class='text-justify'>A node may represent a file or folder. <br> <hr class='border border-danger border-2 opacity-50'> If the node has a green border, it is a folder. <hr class='border border-danger border-2 opacity-50'>  </p>"
        },

        {
            element: document.querySelector('[id="h1tree_newmainhtml"]'),
            title: "Node without a green border <hr class='border border-primary border-3 opacity-75'>",
            intro: "<p class='text-justify'>If the node, doesn't have a border, it is a file. <br> <hr class='border border-danger border-2 opacity-50'> </p>"
        },
        {
            element: document.querySelector('[id="link_academics"]'),
            title: "A connecting link between folders <hr class='border border-primary border-3 opacity-75'>",
            intro: "If a link is drawn between 2 folders, it means that the folder along with the files that belong to it are common to both hierarchies. <hr class='border border-danger border-2 opacity-50'>"
        },
        {
            element: document.querySelector('[id="link_wordnetviewer"]'),
            title: "A connecting link between files <hr class='border border-primary border-3 opacity-75'>",
            intro: "If a link is drawn between 2 files, it means that the file is common to both hierarchies. <hr class='border border-danger border-2 opacity-50'> "
        },

        {
            element: document.querySelector('[id="h1tree_postscripthtml"]'),
            title: "Interacting with a node <hr class='border border-primary border-3 opacity-75'>",
            intro: "You can hover on a node to view a tooltip which displays the details about a node. <br><hr class='border border-danger border-2 opacity-50'> It also highlights the path from the node to the root."
        },
        {
            element: document.querySelector('[id="h1tree_treemaps"]'),
            title: "Interacting with a node <hr class='border border-primary border-3 opacity-75'>",
            intro: "You can also click on a node to collapse/expand its children. <br><hr class='border border-danger border-2 opacity-50'> "
        },

        {
            element: document.querySelector('[id=" h1tree_filelistxml_text"]'),
            title: "Interacting with a LABEL <hr class='border border-primary border-3 opacity-75'>",
            intro: "You can hover on a label to magnify the text. <br><hr class='border border-danger border-2 opacity-50'> "
        },

        {
            element: document.querySelector('[id="h1tree_muiseum"]'),
            title: "Tree levels <hr class='border border-primary border-3 opacity-75'>",
            intro: "The level of a node in a tree is the distance of the node from the root. <hr class='border border-danger border-2 opacity-50'> To calculate the level, simply count the number of highlighted nodes in the path to the root node and subtract 1. Hence, the level of the selected node is 2 (3 highlighted nodes - 1).  <hr class='border border-danger border-2 opacity-50'> The root node is at level 0."
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

            title: "End of the Guided Tour! <hr class='border border-primary border-3 opacity-75'>",
            intro: "We have reached the end of the tour. You can now move on the next phase."
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
            //"tooltipPosition": "top"


        })
        .oncomplete(function () {
            update_log("introjs-nextbutton", "button", "Completed guided tour. Redirect to landing page", "click")
            window.location.href = 'twl-landingpage.html?page=guidedtour';
        })
        .onchange(function () {
            //console.log(this);
            update_log("introjs-nextbutton", "button", "display tooltip " + this._currentStep, "click");
        })

        //.setOption("showStepNumbers", true)


        .start();


    // console.log(introJs().isActive());


    function update_log(elementID, elementType, elementDescription, eventDescription) {
        var date = new Date();


        var logObject = JSON.parse(localStorage.getItem("logObject"));
        logObject.push({
            "userID": localStorage.getItem("userID"),
            "vizID": vizID,
            "screenSize": window.innerWidth + ";" + window.innerHeight,
            "pageID": pageID,
            "elementID": elementID,
            "elementType": elementType,
            "elementDescription": elementDescription,
            "eventDescription": eventDescription,
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