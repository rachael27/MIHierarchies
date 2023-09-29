function twl_guidedtour() {

    var vizID = "treeswlinking";
    var pageID = "guidedtour";

    var stepsArr = [
        {
            title: " Welcome to the Guided Tour! <hr class='border border-primary border-3 opacity-75'>",
            intro: "You can also use the left and right arrow keys to move through the tour."
        },
        {
            //element: document.querySelector("#link_root/projects/hcil/People"),
            title: "A common node <hr class='border border-primary border-3 opacity-75'>",
            intro: "<p class='text-justify'>If an element belongs to both hierarchies, a line/link is drawn between them. <br> <hr class='border border-danger border-2 opacity-50'> Hovering on the link will highlight the element from both hierarchies and a tooltip displays the element name. <hr class='border border-danger border-2 opacity-50'> The connecting links are drawn based on two requirements.<hr class='border border-danger border-2 opacity-50'>  </p>"
        },
        {
            //element: document.querySelector("#link_root/projects/hcil/members"),
            title: "A connecting link between files <hr class='border border-primary border-3 opacity-75'>",
            intro: "If a link is drawn between 2 files, it means that the file is common to both hierarchies. <hr class='border border-danger border-2 opacity-50'> It is represented by orange-colored links. <hr class='border border-danger border-2 opacity-50'> "
        },
        {
            //element: document.querySelector("#link_root/projects/hcil/members"),
            title: "A connecting link between folders <hr class='border border-primary border-3 opacity-75'>",
            intro: "If a link is drawn between 2 folders, it means that the folder along with the files that belong to it are common to both hierarchies. <hr class='border border-danger border-2 opacity-50'> It is represented by blue-colored links. <hr class='border border-danger border-2 opacity-50'>"
        },
        {
            //element: document.querySelector("#h2tree_rootprojectshcilmembers"),
            title: "Interacting with a node <hr class='border border-primary border-3 opacity-75'>",
            intro: "You can hover on a node to view a tooltip which displays the details about an element. <br><hr class='border border-danger border-2 opacity-50'> You can also click on a node to collapse/expand its children. "
        },

        {
            //element: document.querySelector(".text-level1"),
            title: "Tree levels <hr class='border border-primary border-3 opacity-75'>",
            intro: "The level of an element in a tree is calculated as the number of nodes its away from the root node. <hr class='border border-danger border-2 opacity-50'> To calculate the level, simply count the number of parent nodes till you reach the root node."
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


        })
        .oncomplete(function () {
            update_log("introjs-nextbutton", "Completed guided tour. Redirect to landing page.")
            window.location.href = 'twl-landingpage.html?page=guidedtour';
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