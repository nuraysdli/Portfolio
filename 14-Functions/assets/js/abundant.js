function abundant(number){
    let sum = 0;

    for (let i = 1; i < number; i++) {
        if(number % i === 0){
            sum += i;
        }
    }

    if(sum > number){
        return `${number} - abundant ededdir`;
    } else {
        return `${number} - deficient ededdir`;
    }
}

let number = Number(prompt("Zehmet olmasa musbet tam eded daxil edin:"));

console.log(abundant(number));