//Bmi Calculator Variables
    var weight = document.getElementById('userWeight');
    var ft = document.getElementById('userHeight1');
    var inch = document.getElementById('userHeight2');
    var userSex = document.getElementById('userSex');
    var age = document.getElementById('userAge');
    var waist = document.getElementById('userWaist');
    var hip = document.getElementById('userHip');
    var data = document.getElementById('user-health-data');
    var calculate = document.querySelector('#calculate');
    var units = "cm";
    var measurement = "kg";
//ajax call for BMI Calculater
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

//calculate BMI index
calculate.addEventListener('click', function(){
        var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://bmi.p.rapidapi.com/",
        "method": "POST",
        "headers": {
            "x-rapidapi-host": "bmi.p.rapidapi.com",
            "x-rapidapi-key": "ea5f608bc5msh64c9275fb23b0efp19a68bjsn4dfcc0f3ef75",
            "content-type": "application/json",
            "accept": "application/json"
        },
        "processData": false,
        "data": "{\"weight\":{\"value\":\""+weight.value+"\",\"unit\":\""+measurement+"\"},\"height\":{\"value\":\""+ft.value+"-"+inch.value+"\",\"unit\":\""+units+"\"},\"sex\":\""+userSex.value+"\",\"age\":\""+age.value+"\",\"waist\":\""+waist.value+"\",\"hip\":\""+hip.value+"\"}"
    }

    $.ajax(settings).done(function (response) {
        console.log(response);
        var maxCalories = parseInt(response.bmi.value)+200/3;
        var minCalories = parseInt(response.bmi.value)+100/3;
        var xCalories = Math.floor(maxCalories);
        var mCalories = Math.floor(minCalories);
        data.innerHTML = response.bmi.value;
        data.innerHTML = response.bmi.status;
        data.innerHTML = response.bmi.risk;
        data.innerHTML = response.whtr.status;
        data.innerHTML = response.ideal_weight;
        console.log(getRecipe(mCalories, xCalories));
    });
});

//Recipe - Food - Nutrition API
function getRecipe(mCalories, xCalories) {
    $.ajax({
        url: "https://api.spoonacular.com/recipes/findByNutrients?minCalories="+mCalories+"&maxCalories="+xCalories+"&number=3&apiKey=10d90065677e4148b48ed182e0f159a2",
        success: function(res){
            console.log(res[0].id);
            console.log(getsource(res[0].id));
        }
    });
}
function getsource(id){
    $.ajax({
        url: "https://api.spoonacular.com/recipes/111209/information?apiKey=10d90065677e4148b48ed182e0f159a2",
        success: function(res) {
            console.log(res.title); //name of recipe
            console.log(res.readyInMinutes); //time to make
            console.log(res.sourceUrl); //link to directions
            console.log(res.image);  
            console.log(res.summary);
        }
    });
}