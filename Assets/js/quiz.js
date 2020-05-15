$(document).ready(function () {

    var userPage = $("#userInput");
    var bmiPage = $("#bmi-container");

    $("#start").on("click", function () {
        console.log("this button is working!~");
        var startWrapper = $("#start-wrapper");
        startWrapper.removeClass("show");
        startWrapper.addClass("hide");
        console.log(startWrapper);
        userPage.removeClass("hide");
        userPage.attr("class", "show");
    });
    $("#calculate").on("click", function(){
        userPage.removeClass("show");
        bmiPage.removeClass("hide");
        bmiPage.attr("class", "show");
    });
    var weight = $("#userWeight");
    var userMetricInput = $("#userMetricInput");
    var lbs = $("#lb");
    var heightInFeet = $("#userHeight1");
    var heightInCm = $("#userHeight2");
    var userAge = $("#userAge");

    var bmr;
    var tef;
    var eee;
    var neat;

    function tdeeCaculator(){
        
    };
    function lbsToKgs(){
        
    };
    function ftToCm(){

    };
});
