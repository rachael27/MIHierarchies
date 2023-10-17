var selected_value = "";

function trainingquestions(qcounter) {

    var pageID = "training";
    var vizID = "mergedtree";



    var list_questions = [
        {
            "qid": "",
            "question": "Are you ready to start the training?",
            "hint": "Hints will be available throughout this phase to help you! You can only progress to the next question when you answer the current question correctly.",
            // "answer": "Yes",
            // "numoptions": 2,
            // "options": ["Yes"]

        },
        {
            "qid": "T1.",
            "question": "How many levels does the BeforeH have?",
            "hint": "The maximum number of levels in a tree defines the level of a tree and the node at the highest level is <i>root/hcil/ndl/ndldemo/anita/new/invit/newmain.html</i>. This is represented by the grey dashed lines that represent the level of the BeforeH. The solid colored lines represent the levels of the AfterH.",
            "answer": "8",
            "numoptions": 3,
            "options": ["4", "6", "8"]

        },

        {
            "qid": "T2.",
            "question": "What is the path of the node:<i>collaborators.shtml</i>?",
            "hint": "The path refers to the shortest set of parent nodes that need to be traversed to reach the root node from the given node. Hover, on a node to see its path highlighted to the root node.",
            "answer": "<i>root/hcil/members/collaborators.shtml</i>",
            "numoptions": 3,
            "options": ["<i>root/hcil/collaborators.shtml</i>", "<i>root/hcil/members/collaborators.shtml</i>", "<i>root/hcil/collaborators/collaborators.shtml</i>"]


        },



        {
            "qid": "T3.",
            "question": "What is the level of node filename:<i>root/hcil/privacy-policy.shtml</i> in the before and after hierarchies?",
            "hint": "The grey dashed line and the solid colored line crossing through the given node represents its level in the before and after hierarchies respectively.",
            "answer": "Level 2 in the BeforeH and Level 2 in the AfterH",
            "numoptions": 3,
            "options": ["Level 2 in the BeforeH and Level 2 in the AfterH", "Level 3 in the BeforeH and Level 2 in the AfterH", "Level 4 in the BeforeH and Level 3 in the AfterH"]

        },

        {
            "qid": "T4.",
            "question": "Choose the best description of folder:<i>root/hcil/treemap3</i>.",
            "hint": "The treemap3 folder has several red links which denotes multiple file deletions. But it also has some blue links, which show that some files from the BeforeH are also in the AfterH. ",
            "answer": "The folder existed in the BeforeH but many files were deleted",
            "numoptions": 3,
            "options": ["It was newly created in the AfterH", "The folder existed in the BeforeH but all files were deleted", "The folder existed in the BeforeH but many files were deleted"]
        },


        {
            "qid": "T5.",
            "question": "What happened to the file:<i>jrexxlab.jpg</i>?",
            "hint": "When you search for the file, it is unavailable in the BeforeH but available in the AfterH. Also, there is no link connecting the node from the AfterH, indicating that it does not belong to the BeforeH.",
            "answer": "The file was not present in the BeforeH but was newly created in the AfterH",
            "numoptions": 3,
            "options": ["The file was present in the BeforeH but deleted in the AfterH", "The file was not present in the BeforeH but was newly created in the AfterH", "The file is present in the BeforeH and the AfterH"]

        },


        {
            "qid": "T6.",
            "question": "You're done with the training questions! Proceed to the experiment questions!",
            "hint": "Good luck!"


        }




    ];


    //console.log(qcounter);
    //console.log(list_questions[qcounter]);
    //console.log(document.getElementsByName("traininganswer").length);




    d3.select("#qandamodule")
        .style("opacity", 1);

    d3.select("#qanda_options")
        .selectAll("input")
        .remove();

    d3.select("#qanda_options")
        .selectAll("p")
        .remove();

    d3.select("#btn-hint")
        .on("click", function (d) {
            d3.timeout(function () {

                if (d3.select("#collapseElement").attr("class").includes("show")) {
                    update_log("btn-hint", "button", "hide hint", "click");
                    d3.select("#btn-hint")
                        .html("<i class='fa-regular fa-lightbulb'></i> Hide hint");
                }
                else {
                    update_log("btn-hint", "button", "show hint", "click");
                    d3.select("#btn-hint")
                        .html("<i class='fa-solid fa-lightbulb' style='color:rgb(244, 166, 11);'></i> Show hint");
                }
            }, 400);

        });

    if (qcounter < list_questions.length && qcounter >= 0) {
        //console.log("qcounter " + qcounter);

        if (qcounter == list_questions.length - 1 || qcounter == 0) {
            d3.select("#btn-nextquestion")._groups[0][0].disabled = false;

            if (qcounter == 0)
                d3.select("#btn-hint")
                    .append("span")
                    .attr("class", "spinner-grow spinner-grow-sm")
                    .attr("role", "status");
        }

        d3.select("#question")
            .text(list_questions[qcounter].qid + " " + list_questions[qcounter].question);


        d3.select("#hint")
            .text(list_questions[qcounter].hint);


        if (list_questions[qcounter].options)
            for (var i = 0; i < list_questions[qcounter].options.length; i++) {
                d3.select("#qanda_options")
                    .append("input")
                    .attr("class", "form-check-input radiobuttons")
                    .attr("type", "radio")
                    .attr("name", "traininganswer")
                    .attr("id", "option" + i)
                    .attr("value", list_questions[qcounter].options[i]);


                d3.select("#qanda_options")
                    .append("p")
                    .attr("class", "form-check-label")
                    .attr("form", "option")
                    .attr("id", "option" + i + "_label")
                    .attr("style", "text-align: left; margin-left: 10px; margin-top:0px; border-radius:5px; text-indent:10px; ")
                    .text(list_questions[qcounter].options[i]);

            }


        /* d3.select("#option1_label")
            .text(list_questions[qcounter].option1);

        d3.select("#option2_label")
            .text(list_questions[qcounter].option2);

        d3.select("#option3_label")
            .text(list_questions[qcounter].option3); */


        //if (list_questions[qcounter].option3)
        update_log("btn-nextquestion", "button", "display training question", "click", "T" + qcounter, list_questions[qcounter].question, selected_value, list_questions[qcounter].answer);


        /* d3.selectAll(".form-check-input")
            .on("click", function () {
                console.log(this);
                console.log(this.value);
                
            }); */


    }


    else {
        window.location.href = 'landingpage.html?page=trainingquestions';
    }

    d3.selectAll("input[name='traininganswer']")
        .on("change", function (d, i) {
            //console.log(d);
            //console.log(this);
            //console.log(this.value);
            console.log(qcounter + " " + list_questions.length);





            selected_value = this.value;

            if (selected_value == list_questions[qcounter].answer) {
                d3
                    .select("#option" + i + "_label")
                    .style("background-color", "#A0D6B4");
                d3.select("#btn-nextquestion")._groups[0][0].disabled = false;

            }

            else
                d3
                    .select("#option" + i + "_label")
                    .style("background-color", "#F3E8EA");
        });



    function update_log(elementID, elementType, elementDescription, eventDescription, questionID, question, useranswer, answer) {
        var date = new Date();
        //console.log(useranswer);

        logObject = JSON.parse(localStorage.getItem("logObject"));
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
            "questionID": questionID,
            "question": question,
            "useranswer": useranswer,
            "correctanswer": answer
        });
        localStorage.removeItem("logObject");
        localStorage.setItem("logObject", JSON.stringify(logObject));

    }


}