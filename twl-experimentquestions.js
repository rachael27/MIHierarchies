function twl_experimentquestions(qcounter) {
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
            "question": "How many levels does the after hierarchy have?",
            "answer": "1",
            "options": [1, 3, 5, 7]

        },

        {
            "qid": "E2.",
            "question": "What is the path of the node:<i>treeml.dtd</i>?",
            "answer": " ",
            "options": ["<i>root/project/hcil/iv03contest/datasets/treeml.dtd</i>", "<i>root/project/hcil/census/JavaProto/demo_files/treeml.dtd</i>", "<i>root/project/hcil/about/pictures/treeml.dtd</i>", "<i>root/project/hcil/treemap/treeml.dtd</i>"]

        },


        {
            "qid": "E3.",
            "question": "What is the level of node filename:<i>root/projects/hcil/piccolo/newsroom/index.shtml</i> in the before and after hierarchies?",
            "answer": "Level 5 in the before hierarchy and Level 6 in the after hierarchy",
            "options": ["Level 5 in the before hierarchy and Level 5 in the after hierarchy", "Level 4 in the before hierarchy and Level 5 in the after hierarchy", "Level 5 in the before hierarchy and Level 6 in the after hierarchy"]

        },

        {
            "qid": "E4.",
            "question": "Which folder has the maximum number of files deletions?",
            "answer": " ",
            "options": [" "]

        },

        {
            "qid": "E5.",
            "question": "Is the element filename:<i>root/projects/hcil/treemap3/images/tm.gif</i> available in both hierarchies?",
            "answer": "Yes",
            "options": ["Yes, it is available in both hierarchies.", "No, it is available only in the before hierarchy.", "No, it is available only in the after hierarchy."]

        },

        {
            "qid": "E6.",
            "question": "Node folder:<i>root/pojects/hcil/jazz</i>  belongs to Parent ABC in the before hierarchy. Has the parent changed now (in MT)?",
            "answer": "Yes",
            "options": ["Yes", "No"]

        },

        {
            "qid": "E7.",
            "question": "Have the contents of folder:<i>root/projects/hcil/timesearcher/docs/graphics</i> changed?",
            "answer": "Yes",
            "options": ["Some files have been added.", "Some files have been deleted.", "The folder contents have not changed at all."]

        },

        {
            "qid": "E8.",
            "question": "Find the siblings of folder:<i>root/projects/hcil/treemap3/doc</i>",
            "answer": "Yes",
            "options": ["[doc3.3,demo_shtml,demo_files]", "[1.html,2.html,3.html]", "[spotfire,touchscreens,timesearcher]"]

        },
        {
            "qid": "E9.",
            "question": "Which folder in the before hierarchy has grown the most in the after hierarchy?",
            "answer": "treemaps3",
            "options": ["treemaps3", "pictures"]

        },
        {
            "qid": "E10.",
            "question": "Which folder in the before hierarchy was deleted in the after hierarchy?",
            "answer": "about",
            "options": ["treemaps3", "about", "treemaps"]

        },

        {
            "qid": "E11.",
            "question": "What changes has the folder:<i>root/projects/hcil/piccolo/applications</i> gone through?",
            "answer": "One file was deleted",
            "options": ["One file was deleted", "Multiple files were added", "No changes were made"]

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



        update_log("btn-nextquestion", "button", "display next question", "E" + qcounter, list_questions[qcounter].question, selected_value, list_questions[qcounter].answer);

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
        window.location.href = 'twl-landingpage.html?page=experimentquestions';
    }

    d3.selectAll("input[name='experimentanswer']")
        .on("change", function (d, i) {

            console.log(i);
            console.log(this.value + " " + list_questions[qcounter].answer);
            selected_value = this.value;

            d3.select("#btn-nextquestion")._groups[0][0].disabled = false;

        });

    function update_log(elementID, elementType, description, questionID, question, useranswer, correctanswer) {
        var date = new Date();


        var logObject = JSON.parse(localStorage.getItem("logObject"));
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
            "correctanswer": correctanswer
        });
        localStorage.removeItem("logObject");
        localStorage.setItem("logObject", JSON.stringify(logObject));

    }







}