function experimentquestions(qcounter) {
    var selected_value = "";
    var pageID = "experiment";
    var vizID = "mergedtree";

    var list_questions = [
        {
            "qid": "",
            "question": "Are you ready to start the experiment?",
        },
        {
            "qid": "E1.",
            "question": "How many levels does H2 have?",
            "answer": "1",
            "options": [1, 3, 5, 7]

        },

        {
            "qid": "E2.",
            "question": "What is the path of the Node: ?",
            "answer": "P1",
            "options": ["P1", "P2"]

        },

        /*
        {
            "qid": "E3.",
            "question": "What is the level of node filename:root/projects/hcil/jazz/index.css in H1 and H2?",
            "answer": "Level n in H1 and Level n in H2",
            "options": ["Level n in H1 and Level n in H2", "Level n in H1 and Level n in H2", "Level n in H1 and Level n in H2"]

        },

        {
            "qid": "E4.",
            "question": "Which folder has the maximum number of files?",
            "answer": "H2",
            "options": [" "]

        },

        {
            "qid": "E5.",
            "question": "Is the element filename:root/projects/hcil/jazz/list-archives/jazz-chat/000.html avail in both hierarchies?",
            "answer": "Yes",
            "options": ["Yes", "No"]

        },

        {
            "qid": "E6.",
            "question": "Node folder:root/pojects/hcil/jazz  belongs to Parent ABC in H1. Has the parent changed now(in MT)?",
            "answer": "Yes",
            "options": ["Yes", "No"]

        },

        {
            "qid": "E7.",
            "question": "Has the subtree of folder:root/projects/hcil/jazz/list-archives/jazz-chat changed? Are there any file additions or deletions?",
            "answer": "Yes",
            "options": ["Yes", "No"]

        },

        {
            "qid": "E8.",
            "question": "Local relative: Find siblings of folder:root/projects/hcil/historian?",
            "answer": "Yes",
            "options": ["Yes", "No"]

        },
        {
            "qid": "E9.",
            "question": "Which folder in H1 has grown the most in H2?",
            "answer": "Yes",
            "options": ["Yes", "No"]

        },
        {
            "qid": "E10.",
            "question": "How much has changed from H1 to H2?",
            "answer": "Yes",
            "options": ["Yes", "No"]

        },
*/
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
        d3.select("#question")
            .text(list_questions[qcounter].qid + " " + list_questions[qcounter].question);





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
                    .text(list_questions[qcounter].options[i]);

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
        window.location.href = 'landingpage.html?page=experimentquestions';
    }

    d3.selectAll("input[name='experimentanswer']")
        .on("change", function (d, i) {

            console.log(i);
            console.log(this.value + " " + list_questions[qcounter].answer);
            selected_value = this.value;


        });

    function update_log(elementID, elementType, description, questionID, question, useranswer, correctanswer) {
        var date = new Date();


        var logObject = JSON.parse(localStorage.getItem("logObject"));
        logObject.push({
            "userID": localStorage.getItem("userID"),
            "vizID": vizID,
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