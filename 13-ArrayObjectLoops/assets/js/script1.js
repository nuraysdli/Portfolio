let armstrongNumbers = []; 
let end = 500; 


for (let num = 1; num <= end; num++) {
    let sum = 0;
    let count = 0;
    let copy = num;

    while (copy > 0) {
        count++;
        copy = (copy - (copy % 10)) / 10;
    }

    copy = num;

    while (copy > 0) {
        let digit = copy % 10;
        let power = 1;

        for (let i = 0; i < count; i++) {
            power *= digit;
        }

        sum += power;
        copy = (copy - digit) / 10; 
    }

    if (sum === num) {
        armstrongNumbers[armstrongNumbers.length] = num;
    }
}

console.log(armstrongNumbers);
