const numbers = [12, 45, 23, 67, 34, 89, 90, 11, 56, 78]; 
let sum = 0;
let i = 0;

while (i < numbers.length) {
    sum += numbers[i];
    i++;
}

let average = sum / numbers.length;
console.log(average);
