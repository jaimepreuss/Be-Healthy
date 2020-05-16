$(document).ready(function () {

  var userPage = $("#userInput");
  var bmiPage = $("#bmi-container");
  var weight = $("#userWeight");
  var weightVar;
  var height1 = $("#userHeight1");
  var height1Var;
  var height2 = $("#userHeight2");
  var newHeight;
  var userAge = $("#userAge");
  var sexVar;
  var userWaist = $("#userWaist");
  var userHip = $("#userHip");
  var userWorkout = $("#userActivity option:selected");
  var userWorkActivity = $("#userWorkActivity option:selected");
  var bmr;
  var tef;
  var eee;
  var neat;
  var tdee;
  var tdee1;
  var recipe1 = $("#estimatedCalories");

  $("#start").on("click", function () {

    var startWrapper = $("#start-wrapper");
    startWrapper.addClass("hide");
    userPage.removeClass("hide");
    userPage.attr("class", "show");
  });

  $("#calculate").on("click", function () {
  
    userPage.attr("class", "hide");
    bmiPage.removeClass("hide");
    userAge = parseInt(userAge.val());
    tdee1 = tdeeCaculator();
    userHip = parseInt(userHip.val());
    userWaist = parseInt(userWaist.val());
    console.log(tdee1);
    $("#estimatedCalories").append(tdee1);
    
  });

  $("input:checkbox").on('click', function () {

    var $box = $(this);
    if ($box.is(":checked")) {

      var group = "input:checkbox[name='" + $box.attr("name") + "']";
      $(group).prop("checked", false);
      $box.prop("checked", true);
      
    } else {

      $box.prop("checked", false);
    }
  });

  $("#m").change(function() {

    if ($(this).is(":checked")) {
      sexVar = 5;
    } 
  });

  $("#f").change(function() {

    if ($(this).is(":checked")) {
      sexVar = -161;
    } 
  });

  $("#metric").change(function() {
    height2.attr("class", "hide");
    
  });

  $("#imperial").change(function() {

    if ($(this).is(":checked")) {
      
      height2.removeClass("hide");
      height2.attr("class", "form-control");
    } 
  });

  function recipe1() {

    recipe1 = recipe1 - 200;
    return recipe1;
  };

  function lbsToKgs() {
    
    weightVar = parseInt(weight.val());
    weightVar = Math.floor(weightVar * .45359237);
    
    return weightVar;
  };

  function ftToCm() {
    
    height1Var = parseInt(height1.val());
    newHeight = Math.floor(height1Var / .032808);

    return newHeight;
  };

  function bmrCalculator() {

    var weight2;
    var newHeight2;

    if ($("#imperial").is(":checked")) {
      weight2 = lbsToKgs();
      newHeight2 = ftToCm();

    }
    else {
      newHeight2 = height1;
    }

    bmr = (10 * weight2) + (6.25 * newHeight2) - (5 * userAge) + sexVar;

    return bmr;
  };
  function tefCaculator() {
    tef = bmrCalculator() * .1;
    
    return tef;
  };
  function eeeCalculator() {

    if (userWorkout == 1) {
      eee = 250;
    } else {
      eee = 500;
    }
    
    return eee;
  };
  function neatCalculator() {
    if (userWorkActivity == 1) {

      neat = 250;
    } else {

      neat = 500;
    }
    
    return neat;
  };
  function tdeeCaculator() {
    bmr = bmrCalculator();
    tef = tefCaculator();
    eee = eeeCalculator();
    neat = neatCalculator();
    tdee = bmr + tef + eee + neat;

    return tdee;
  };
});
