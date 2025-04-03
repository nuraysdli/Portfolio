let arr = [203, 19, 2, 13, 196, 86, 35, 77, 1000, 5];

let oneDigitCount = 0;
let twoDigitCount = 0;
let threeDigitCount = 0;

for (let i = 0; i < arr.length; i++) {

    let numDigits = arr[i].toString().length;

    if (numDigits === 1) {
        oneDigitCount++;
    } else if (numDigits === 2) {
        twoDigitCount++;
    } else if (numDigits === 3) {
        threeDigitCount++;
    }
}

console.log(`Birreqemli: ${oneDigitCount}`);
console.log(`İkireqemli: ${twoDigitCount}`);
console.log(`Ucreqemli: ${threeDigitCount}`);
