$(document).ready(function () {

  var userPage = $("#userInput");
  var bmiPage = $("#bmi-container");
  var weight = parseInt($("#userWeight").val());
  var height1 = parseInt($("#userHeight1").val());
  var height2 = $("#userHeight2");
  var newHeight;
  var userAge = $("#userAge");
  var userSex = $("#f");
  var sexVar;
  var userWorkout = $("#userActivity option:selected").val();
  var userWorkActivity = $("#userWorkActivity option:selected").val();
  var bmr;
  var tef;
  var eee;
  var neat;
  var tdee;
  var recipe1 = $("#estimatedCalories");
  var recipe2;
  var recipe3;

  $("#start").on("click", function () {
    var startWrapper = $("#start-wrapper");
    startWrapper.removeClass("show");
    startWrapper.addClass("hide");
    userPage.removeClass("hide");
    userPage.attr("class", "show");
  });
  $("#calculate").on("click", function () {
    userPage.removeClass("show");
    bmiPage.removeClass("hide");
    bmiPage.attr("class", "show");
    tdee = tdeeCaculator();
    console.log(parseInt(tdee));
    console.log(weight.text());
    console.log(height1.text());
    console.log(userWorkout);
    console.log(userWorkActivity);
    console.log(userAge.text());
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
    weight = weight * .45359237;
    return weight;
  };
  function ftToCm() {
    newHeight = height1 / .032808;
    newHeight = newHeight + height2;
    return newHeight;
  };
  function bmrCalculator() {
    if ($("#imperial").is(":checked")) {
      lbsToKgs();
      ftToCm();
    }
    else {
      newHeight = height1;
    }
    
    bmr = (10 * weight) + (6.25 * newHeight) - (5 * userAge) + sexVar;
    return bmr;
  };
  function tefCaculator() {
    tef = bmrCalculator * .1;
    return tef;
  };
  function eeeCalculator() {

    if (userWorkout == 1) {
      eee = 250;
    } else {
      eee = 500;
    }
  };
  function neatCalculator() {
    if (userWorkActivity == 1) {
      neat = 250;
    } else {
      neat = 500;
    }
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
