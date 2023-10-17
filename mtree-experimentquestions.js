function experimentquestions(qcounter) {
    var selected_value = "";
    var pageID = "experiment";
    var vizID = "mergedtree";

    d3.select("#qandamodule")
        .select("br")
        .remove();

    var list_questions = [
        {
            "qid": "",
            "question": "Are you ready to start the experiment?",
        },
        {
            "qid": "E1.",
            "question": "How many levels does the AfterH have?",
            "answer": "8",
            "options": [4, 6, 8]

        },

        {
            "qid": "E2.",
            "question": "What is the path of the node:<i>treeml.dtd</i>?",
            "answer": "<i>root/hcil/iv03contest/datasets/treeml.dtd</i>",
            "options": ["<i>root/hcil/census/JavaProto/demo_files/treeml.dtd</i>", "<i>root/hcil/iv03contest/datasets/treeml.dtd</i>", "<i>root/hcil/about/pictures/treeml.dtd</i>", "<i>project/hcil/treemap/treeml.dtd</i>"]

        },


        {
            "qid": "E3.",
            "question": "What is the level of node filename:<i>root/hcil/piccolo/newsroom/newsroom-index.shtml</i> in the BeforeH and AfterH hierarchies?",
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
            "answer": "No, it is available only in the AfterH.",
            "options": ["Yes, it is available in both hierarchies.", "No, it is available only in the BeforeH.", "No, it is available only in the AfterH."]

        },

        {
            "qid": "E6.",
            "question": "Node file:<i>root/hcil/pda/thesis/thesis-/postscript.html</i> in the BeforeH has gone through a change/s. What is/are the change/s?",
            "answer": "The file has moved up one level in to the folder<i>root/hcil/pda/thesis</i>.",
            "options": ["The file has moved to a different folder on the same level.", "The file has moved down one level in to a sub-folder inside the parent folder:root/hcil/pda/thesis/thesis-pda/thesis-draft/postscript.html.", "The file has moved up one level in to the folder:root/hcil/pda/thesis."]

        },

        {
            "qid": "E7.",
            "question": "Have the contents of folder:<i>root/hcil/piccolo/applications</i> changed?",
            "answer": "Yes",
            "options": ["Some files have been deleted.", "The folder contents have not changed at all.", "One file has been added."]

        },

        {
            "qid": "E8.",
            "question": "Find the siblings of folder:<i>root/projects/hcil/treemap3/doc</i>",
            "answer": "[doc3.3,demo.shtml,demo_files]",
            "options": ["[1.html,2.html,3.html]", "[spotfire,touchscreens,timesearcher]", "[doc3.3,demo.shtml,demo_files]"]

        },
        {
            "qid": "E9.",
            "question": "Which folder in the BeforeH has grown the most in the AfterH?",
            "answer": "root/hcil/about/pictures",
            "options": ["root/hcil/treemaps3", "root/hcil/about/pictures", "root/hcil/agile2d"]

        },
        {
            "qid": "E10.",
            "question": "Which folder in the BeforeH was deleted in the AfterH?",
            "answer": "root/hcil/visumillion",
            "options": ["root/hcil/treemap", "root/hcil/about", "root/hcil/visumillion"]

        },

        {
            "qid": "E11.",
            "question": "What changes are common to folder:root/hcil/members/mvenkatraman and folder:root/hcil/members/rsalter?",
            "answer": "One file was deleted, one file was added and one file was retained",
            "options": ["All files were deleted", "One file was added and one file was deleted", "One file was deleted, one file was added and one file was retained", "Two files were retained and the rest were deleted."]

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



        update_log("btn-nextquestion", "button", "display question", "click", "E" + qcounter, list_questions[qcounter].question, selected_value, list_questions[qcounter].answer);

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

    d3.selectAll("input[name='experimentanswer']")
        .on("change", function (d, i) {

            console.log(i);
            console.log(this.value + " " + list_questions[qcounter].answer);
            selected_value = this.value;

            update_log("btn-downloadlog", "button", "download log", "click");

            d3.select("#btn-nextquestion")._groups[0][0].disabled = false;

        });

    function update_log(elementID, elementType, elementDescription, eventDescription, questionID, question, useranswer, correctanswer) {
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
            "questionID": questionID,
            "question": question,
            "useranswer": useranswer,
            "correctanswer": correctanswer
        });
        localStorage.removeItem("logObject");
        localStorage.setItem("logObject", JSON.stringify(logObject));

    }







}