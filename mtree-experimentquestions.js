var selected_value = "";
pageID = "experiment";
vizID = "mergedtree";
var score = 0;
var list_questions = [];
screenSize = localStorage.getItem("screenSize");

function experimentquestions(qcounter) {


    d3.select("#qandamodule")
        .select("br")
        .remove();


    list_questions = [
        {
            "qid": "",
            "question": "Are you ready to start the experiment?",
        },
        {
            "qid": "E1.",
            "question": "Does the AfterH have the same number of levels as the Before?",
            "answer": "No. The AfterH has one level more than the BeforeH",
            "options": ["Yes", "No. The AfterH has one level more than the BeforeH", "No. The AfterH has one level less than the BeforeH"]

        },

        {
            "qid": "E2.",
            "question": "What is the path of the node:<i>treeml.dtd</i> to the root node?",
            "answer": "<i>root/hcil/iv03contest/datasets/treeml.dtd</i>",
            "options": ["<i>root/hcil/census/JavaProto/demo_files/treeml.dtd</i>", "<i>root/hcil/iv03contest/datasets/treeml.dtd</i>", "<i>root/hcil/about/pictures/treeml.dtd</i>", "<i>root/hcil/treemaps/treeml.dtd</i>"]

        },


        {
            "qid": "E3.",
            "question": "What is the level of node filename:<i>root/hcil/piccolo/newsroom/newsroom-index.shtml</i> in the before and after hierarchies?",
            "answer": "Level 4 in the BeforeH and Level 4 in the AfterH",
            "options": ["Level 4 in the BeforeH and Level 4 in the AfterH", "Level 4 in the BeforeH and Level 5 in the AfterH", "Level 5 in the BeforeH and Level 6 in the AfterH"]

        },

        {
            "qid": "E4.",
            "question": "Which folder has the maximum number of files deletions?",
            "answer": "treemap3",
            "options": ["snap", "oh99", "treemap3", "spacetree"]

        },

        {
            "qid": "E5.",
            "question": "Is the element filename:<i>root/hcil/about/pictures/reddot.gif</i> available in both hierarchies?",
            "answer": "No, it is available only in the AfterH",
            "options": ["Yes, it is available in both hierarchies", "No, it is available only in the BeforeH", "No, it is available only in the AfterH"]

        },

        /* {
            "qid": "E6.",
            "question": "Node file:<i>root/hcil/pda/thesis/thesis-pda/postscript.html</i> in the BeforeH has gone through a change/s. What is/are the change/s?",
            "answer": "The file has moved up one level in to the folder<i>root/hcil/pda/thesis</i>.",
            "options": ["The file has moved to a different folder on the same level.", "The file has moved down one level in to a sub-folder inside the parent folder:<i>root/hcil/pda/thesis/thesis-pda/thesis-draft/postscript.html</i>.", "The file has moved up one level in to the folder<i>root/hcil/pda/thesis</i>."]
 
        },
 */
        {
            "qid": "E6.",
            "question": "Choose the best description for the folder:<i>root/hcil/piccolo/applications</i> changed?",
            "answer": "One folder and a file have been retained",
            "options": ["Some files have been deleted", "The folder contents have not changed at all", "One folder and a file have been retained", "One file has been added"]

        },

        {
            "qid": "E7.",
            "question": "Find the siblings of folder:<i>root/hcil/photomesa/help.html</i>",
            "answer": "[licensing.shtml;hand-button.gif;hcil-logo-small.gif]",
            "options": ["[figure01.jpg;figure02.jpg;figure03.jpg]", "[spotfire;touchscreens;timesearcher]", "[licensing.shtml;hand-button.gif;hcil-logo-small.gif]"]

        },
        {
            "qid": "E8.",
            "question": "Which folder in the BeforeH has grown the most in the AfterH?",
            "answer": "<i>root/hcil/about/pictures</i>",
            "options": ["<i>root/hcil/treemap3</i>", "<i>root/hcil/about/pictures</i>", "<i>root/hcil/agile2d</i>"]

        },
        {
            "qid": "E9.",
            "question": "Which folder in the BeforeH was deleted in the AfterH?",
            "answer": "<i>root/hcil/visumillion</i>",
            "options": ["<i>root/hcil/treemaps</i>", "<i>root/hcil/about</i>", "<i>root/hcil/visumillion</i>"]

        },

        {
            "qid": "E10.",
            "question": "What changes are common to folder:<i>root/hcil/members/mvenkatraman</i> and folder:<i>root/hcil/members/rsalter</i>?",
            "answer": "One file was deleted; one file was added and one file was retained",
            "options": ["All files were deleted", "One file was added and one file was deleted", "One file was deleted; one file was added and one file was retained", "Two files were retained and the rest were deleted"]

        },

        {
            "qid": "E11.",
            "question": "You're done with the experiment! Thank you so much for your time!",
        }

    ];



    //console.log(list_questions[qcounter]);
    //console.log(document.getElementsByName("traininganswer").length);
    d3.select(".btn-warning")
        .remove();

    d3.select("#qanda_options")
        .selectAll("input")
        .remove();

    d3.select("#qanda_options")
        .selectAll("p")
        .remove();



    if (qcounter < list_questions.length && qcounter >= 0) {
        selected_value = "";

        if (qcounter == list_questions.length - 1 || qcounter == 0)
            d3.select("#btn-nextquestion")._groups[0][0].disabled = false;


        d3.select("#question")
            .html(list_questions[qcounter].qid + " " + list_questions[qcounter].question);





        if (list_questions[qcounter].options)
            for (var i = 0; i < list_questions[qcounter].options.length; i++) {
                d3.select("#qanda_options")
                    .append("input")
                    .attr("class", "form-check-input")
                    .attr("type", "radio")
                    .attr("name", "experimentanswer")
                    .attr("id", "option" + i)
                    .attr("value", list_questions[qcounter].options[i]);


                d3.select("#qanda_options")
                    .append("p")
                    .attr("class", "form-check-label")
                    .attr("form", "option")
                    .attr("id", "option" + i + "_label")
                    .attr("style", "text-align: left; margin-left: 10px; ")
                    .html(list_questions[qcounter].options[i]);

            }



        //update_log("btn-nextquestion", "button", "display question", "click", "E" + qcounter, list_questions[qcounter].question, "", list_questions[qcounter].answer);

        /*
    d3.select("#btn-nextquestion")
        .on("click", function () {
            console.log(this);
            console.log(d3.select(".form-check-input").node().value);
            
        });
        */




        /* d3.select("#option1_label")
            .text(list_questions[qcounter].option1);

        d3.select("#option2_label")
            .text(list_questions[qcounter].option2);

        d3.select("#option3_label")
            .text(list_questions[qcounter].option3); */


        //if (list_questions[qcounter].option3)
        //  d3.select


    }


    else {
        window.location.href = 'landingpage.html?page=experimentquestions';
    }


    d3.select("#btn-next")
        .on("change", function () {
            console.log("selected_value " + selected_value);
        });

    d3.selectAll("input[name='experimentanswer']")
        .on("change", function (d, i) {

            //console.log(i);
            //console.log(this.value + " " + list_questions[qcounter].answer);
            selected_value = this.value;

            if (selected_value == list_questions[qcounter].answer)
                score = 1;
            else
                score = 0;

            update_log("btn-nextquestion", "button", "display question", "click", "E" + qcounter, list_questions[qcounter].question, selected_value, list_questions[qcounter].answer, score);

            d3.select("#btn-nextquestion")._groups[0][0].disabled = false;

        });

    function update_log(elementID, elementType, elementDescription, eventDescription, questionID, question, useranswer, correctanswer, score) {
        var date = new Date();


        var logObject = JSON.parse(localStorage.getItem("logObject"));
        logObject.push({
            "userID": localStorage.getItem("userID"),
            "vizID": localStorage.getItem("vizID"),
            "screenWidth": window.innerWidth,
            "screenHeight": window.innerHeight,
            "pageID": "experiment",
            "elementID": elementID,
            "elementType": elementType,
            "elementDescription": elementDescription,
            "eventDescription": eventDescription,
            "date": date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear(),
            "overall_timestamp": Math.round(+new Date() / 1000),
            //"phase_timestamp": new Date().getMilliseconds(),
            "questionID": questionID,
            "question": question,
            "useranswer": useranswer.replaceAll(",", ""),
            "correctanswer": correctanswer.replaceAll(",", ""),
            "score": score
        });
        localStorage.removeItem("logObject");
        localStorage.setItem("logObject", JSON.stringify(logObject));

    }







}