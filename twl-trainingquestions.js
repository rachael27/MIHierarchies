var selected_value = "";

function twl_trainingquestions(qcounter) {

    var pageID = "training";
    var vizID = "linkededtree";



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
            "question": "How many levels does the before hierarchy have?",
            "hint": "The maximum number of levels in a tree defines the level of a tree. The node at the highest level is <i>root/projects/hcil/ndl/ndldemo/anita/new/invit/newmain.html</i>",
            "answer": "8",
            "numoptions": 3,
            "options": ["4", "6", "8"]

        },

        {
            "qid": "T2.",
            "question": 'What is the path of the node:<i>collaborators.shtml</i>?',
            "hint": "The path refers shortest set of parent nodes that need to be traversed to reach the root node from the given node.",
            "answer": "<i>root/projects/hcil/members/collaborators.shtml</i>",
            "numoptions": 3,
            "options": ["<i>root/projects/hcil/collaborators.shtml</i>", "<i>root/projects/hcil/members/collaborators.shtml</i>", "<i>root/projects/hcil/colooaborators/collaborators.shtml</i>"]


        },



        {
            "qid": "T3.",
            "question": "What is the level of node filename:<i>root/projects/hcil/privacy-policy.shtml</i> in the before and after hierarchies?",
            "hint": "Count the number of parent nodes it takes to reach the root node.",
            "answer": "Level 3 in the before hierarchy and Level 3 in the after hierarchy",
            "numoptions": 3,
            "options": ["Level 3 in the before hierarchy and Level 3 in the after hierarchy", "Level 3 in the before hierarchy and Level 2 in the after hierarchy", "Level 4 in the before hierarchy and Level 3 in the after hierarchy"]

        },

        {
            "qid": "T4.",
            "question": "Choose the best description of folder:<i>root/projects/hcil/treemap3</i>",
            "hint": "",
            "answer": "It was newly created in the after hierarchy",
            "numoptions": 3,
            "options": ["It was newly created in the after hierarchy", "The folder already existed in the before hierarchy but had no files", "The folder already existed in the before hierarchy and had few files in it"]
        },


        {
            "qid": "T5.",
            "question": "What happened to the file:<i>jrexxlab.jpg</i>?",
            "hint": "When you search for the file, it is available in the before hierarchy but not in the after hierarcgy. Also, there is no link connecting the node from the before, indicating that it does not belong to the after.",
            "answer": "The file was present in the before but deleted in the after hierarchy",
            "numoptions": 3,
            "options": ["The file was present in the before but deleted in the after hierarchy", "The file was not present in the before hierarchy but added in the after hierarchy", "The file is present in the before and after hierarchies"]

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
                    update_log("btn-hint", "button", "hide hint");
                    d3.select("#btn-hint")
                        .html("<i class='fa-regular fa-lightbulb'></i> Hide hint");
                }
                else {
                    update_log("btn-hint", "button", "show hint");
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
            .html(list_questions[qcounter].qid + " " + list_questions[qcounter].question);


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
                    .html(list_questions[qcounter].options[i]);

            }


        /* d3.select("#option1_label")
            .text(list_questions[qcounter].option1);

        d3.select("#option2_label")
            .text(list_questions[qcounter].option2);

        d3.select("#option3_label")
            .text(list_questions[qcounter].option3); */


        //if (list_questions[qcounter].option3)
        update_log("btn-nextquestion", "button", "display training question", "T" + qcounter, list_questions[qcounter].question, selected_value, list_questions[qcounter].answer);


        /* d3.selectAll(".form-check-input")
            .on("click", function () {
                console.log(this);
                console.log(this.value);
                
            }); */


    }


    else {
        window.location.href = 'twl-landingpage.html?page=trainingquestions';
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



    function update_log(elementID, elementType, description, questionID, question, useranswer, answer) {
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
            "description": description,
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