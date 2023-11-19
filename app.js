

let height = document.getElementById("height-input");
let weight = document.getElementById("weight-input");
let calculateBtn = document.getElementById("cal-btn");
let finalResult = document.getElementById("result");

function calculate(){
    let a = height.value;
    let b = weight.value;
    let result = b / (a*a);
    
    if(height.value || weight.value == ""){
        finalResult.textContent = "Please fill all inputs!"
    } else  {
        finalResult.textContent = "Your BMI is " + result.toFixed(1);
    };

};
