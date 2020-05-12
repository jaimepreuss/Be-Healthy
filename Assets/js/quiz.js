$(document).ready(function () {
    var i = 0;
    var questionArr = [
        "What is your weight?",
        "What is your height?",
        "What is your hip size?",
        "What is your hip size?",
        "What is your sex?",
        "What is your age?"];

    $("#start").on("click", function () {
        console.log("this button is working!~");
        var startWrapper = $("#start-wrapper");
        startWrapper.removeClass("show");
        startWrapper.addClass("hide");
        console.log(startWrapper);
        $("#question-container").attr("class", "show");
        populateQuestions();
    });

    var questionIndex = 0;
    function populateQuestions() {

        $("#question").text(questionArr[questionIndex]);
        // $("#continue").on("click", function(){ i++;
        // $("#")
        // }

        questionIndex++;
    }
//look at quiz homework.

});
