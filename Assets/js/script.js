//variables
const start = document.getElementById('start');
const prev = document.getElementById('previous');
//change
const continue = document.getElementById('continue');
var weight = 85;
var userSex = $("#userFormWeight").on("click", function() {
    userSex = userSex;
});

//ajax call for recipes api
fetch("https://edamam-recipe-search.p.rapidapi.com/search?q=" + var1, {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "edamam-recipe-search.p.rapidapi.com",
        "x-rapidapi-key": "e163aa321cmshbdf57a157b8e441p13e323jsn99560e2ce917"
    }
})
    //promise
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.log(err);
    });

//ajax call for BMI
function bmiCall(weight) {
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
        "data": "{\"weight\":{\"value\":\"85.00\",\"unit\":\"lb\"},\"height\":{\"value\":\"170.00\",\"unit\":\"cm\"},\"" + userSex +"\":\"m\",\"age\":\"24\",\"waist\":\"34.00\",\"hip\":\"40.00\"}"
    }
    
    $.ajax(settings).done(function (response) {
        console.log(response);
        //taking infomation -> storing it -> showing it.
    });
}



