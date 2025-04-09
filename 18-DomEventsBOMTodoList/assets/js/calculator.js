let inputOne = document.querySelector(".number-one");
let inputTwo = document.querySelector(".number-two");

let plusBtn = document.querySelector(".plus-btn");
let minusBtn = document.querySelector(".minus-btn");
let multBtn = document.querySelector(".mult-btn");
let devideBtn = document.querySelector(".devide-btn");
let removeBtn = document.querySelector(".remove")

let result = document.querySelector(".result");

let plus = () => {
    if(inputOne.value == "" && inputTwo.value == ""){
        alert("Enter numbers");
    } else if (inputOne.value == ""){
        alert("Enter first number");
    } else if (inputTwo.value == ""){
        alert("Enter second number")
    } else {
        result.value = Number(inputOne.value) + Number(inputTwo.value);
        inputOne.value = "";
        inputTwo.value = "";
    }
};

let minus = () => {
    if(inputOne.value == "" && inputTwo.value == ""){
        alert("Enter numbers");
    } else if (inputOne.value == ""){
        alert("Enter first number");
    } else if (inputTwo.value == ""){
        alert("Enter second number");
    } else if (inputOne.value < inputTwo.value){
        alert("The smaller number must be subtracted from the larger number.")
    } else if (inputOne.value < 0 || inputTwo.value < 0){
        alert("Please enter positive numbers")
    } else {
        result.value = Number(inputOne.value) - Number(inputTwo.value);
        inputOne.value = "";
        inputTwo.value = "";
    }
}

let mult = () => {
    if(inputOne.value == "" && inputTwo.value == ""){
        alert("Enter numbers");
    } else if (inputOne.value == ""){
        alert("Enter first number");
    } else if (inputTwo.value == ""){
        alert("Enter second number");
    } else if (inputOne.value < 0 && inputTwo.value < 0){
        result.value = Math.abs(inputOne.value * inputTwo.value);
    } else if (inputOne.value < 0 || inputTwo.value < 0){
        result.value = -(Math.abs(inputOne.value * inputTwo.value));
    } else if (inputOne.value * inputTwo.value === Infinity){
        alert("I can't work with vert large numbers");
    } else {
        result.value = Number(inputOne.value) * Number(inputTwo.value);
        inputOne.value = "";
        inputTwo.value = "";
    }
}

let devide = () => {
    if(inputOne.value == "" && inputTwo.value == ""){
        alert("Enter numbers");
    } else if (inputOne.value == ""){
        alert("Enter first number");
    } else if (inputTwo.value == ""){
        alert("Enter second number");
    } else if (inputTwo.value == 0) {
        alert("Cannot be devided by 0");
    } else if (inputOne.value < 0 && inputTwo.value < 0){
        result.value = Math.abs(inputOne.value / inputTwo.value);
    } else if (inputOne.value < 0 || inputTwo.value < 0){
        result.value = -(Math.abs(inputOne.value / inputTwo.value));
    } else if (!Number.isInteger(result.value)){
        result.value = Math.floor(inputOne.value / inputTwo.value);
    } else {
        result.value = Number(inputOne.value) / Number(inputTwo.value);
        inputOne.value = "";
        inputTwo.value = "";
    }
}

let remove = () => {
    inputOne.value = "";
    inputTwo.value = "";
    result = "";
}

plusBtn.addEventListener("click", plus);
minusBtn.addEventListener("click", minus);
multBtn.addEventListener("click", mult);
devideBtn.addEventListener("click", devide);
removeBtn.addEventListener("click", remove);