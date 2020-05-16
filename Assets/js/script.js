//Bmi Calculator Variables
    var weight = document.getElementById('userWeight');
    var ft = document.getElementById('userHeight1');
    var inch = document.getElementById('userHeight2');
    var userSex;
    var age = document.getElementById('userAge');
    var waist = document.getElementById('userWaist');
    var hip = document.getElementById('userHip');
    var calculate = document.querySelector('#calculate');
    var units = "cm";
    var measurement = "kg";
    var li = document.createElement('li');
$("input:checkbox").on('click', function() {
    //If Statement for units of measurement
    var $box = $(this);
    if ($box.is(":checked")) {
        units = "ft-in";
        measurement = "lb";
    } else {
        units = "cm";
        measurement = "kg"
    }
});
$("#m").change(function() {
    if ($(this).is(":checked")) {
      userSex = "m";
    } 
  });
  $("#f").change(function() {
    if ($(this).is(":checked")) {
      userSex = "f";
    } 
  });
console.log(userSex);
//calculate BMI index
calculate.addEventListener('click', function(){
        var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://bmi.p.rapidapi.com/",
        "method": "POST",
        "headers": {
            "x-rapidapi-host": "bmi.p.rapidapi.com",
            "x-rapidapi-key": "e163aa321cmshbdf57a157b8e441p13e323jsn99560e2ce917",
            "content-type": "application/json",
            "accept": "application/json"
        },
        "processData": false,
        "data": "{\"weight\":{\"value\":\""+weight.value+"\",\"unit\":\""+measurement+"\"},\"height\":{\"value\":\""+ft.value+"-"+inch.value+"\",\"unit\":\""+units+"\"},\"sex\":\""+userSex+"\",\"age\":\""+age.value+"\",\"waist\":\""+waist.value+"\",\"hip\":\""+hip.value+"\"}"
    }
    var pTag = document.createElement('p')
    var data = document.getElementById('user-health-data');
    var health = document.getElementById('health');
    $.ajax(settings).done(function (response) {
        console.log(response);

// this variable needs to be changed to calories         
        var maxCalories = parseInt(response.bmi.value)+200/3;
        var minCalories = parseInt(response.bmi.value)+100/3;

        var xCalories = Math.floor(maxCalories);
        var mCalories = Math.floor(minCalories);
        data.innerHTML =  "bmi: "+response.bmi.value;
        data.appendChild(pTag).innerHTML = response.ideal_weight;
        data.appendChild(pTag).innerHTML = response.bmi.status;        
        data.appendChild(pTag).innerHTML = response.bmi.status;
        data.appendChild(pTag).innerHTML = response.bmi.risk;
        data.appendChild(pTag).innerHTML = response.whtr.status;
        console.log(getRecipe(mCalories, xCalories));
    });
});

//Recipe - Food - Nutrition API
function getRecipe(mCalories, xCalories) {
    $.ajax({
        url: "https://api.spoonacular.com/recipes/findByNutrients?minCalories="+mCalories+"&maxCalories="+xCalories+"&number=3&apiKey=10d90065677e4148b48ed182e0f159a2",
        success: function(res){
            console.log(getsourceone(res[0].id));
            console.log(getsourcetwo(res[1].id));
            console.log(getsourcethree(res[3].id));
        }
    });
}
var recipeOne = document.getElementById('recipeOne');
var recipeTwo = document.getElementById('recipeTwo');
var recipeThree = document.getElementById('recipeThree');
var infoOne = document.getElementById('infoOne');
var infoTwo = document.getElementById('infoThree');
function getsourceone(id){
    $.ajax({
        url: "https://api.spoonacular.com/recipes/"+id+"/information?apiKey=10d90065677e4148b48ed182e0f159a2",
        success: function(res) {
            recipeOne.innerHTML = (res.title); //name of recipe
            console.log(res.readyInMinutes); //time to make
            console.log(res.sourceUrl); //link to directions
            console.log(res.image);  
            infoOne.innerHTML = res.summary;
        }
    });
}
function getsourcetwo(id){
    $.ajax({
        url: "https://api.spoonacular.com/recipes/"+id+"/information?apiKey=10d90065677e4148b48ed182e0f159a2",
        success: function(res) {
            recipeTwo.innerHTML = (res.title); //name of recipe
            console.log(res.readyInMinutes); //time to make
            console.log(res.sourceUrl); //link to directions
            console.log(res.image);  
            infoTwo.innerHTML = res.summary;
        }
    });
}
function getsourcthree(id){
    $.ajax({
        url: "https://api.spoonacular.com/recipes/"+id+"/information?apiKey=10d90065677e4148b48ed182e0f159a2",
        success: function(res) {
            recipeThree.innerHTML = (res.title);//name of recipe
            console.log(res.readyInMinutes); //time to make
            console.log(res.sourceUrl); //link to directions
            console.log(res.image);  
            infoThree.innerHTML = res.summary;
        }
    });
}