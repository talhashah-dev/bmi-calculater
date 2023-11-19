

let height = document.getElementById("height-input");
let weight = document.getElementById("weight-input");
let finalResult = document.getElementById("result");
let clear = document.getElementById("reset-btn");


function calculate(){
    let a = height.value;
    let b = weight.value;
    let result = b / (a*a);
    finalResult.textContent = "Your BMI is " + result.toFixed(1);
};

function reset(){
    height.value = "";
    weight.value = "";
};