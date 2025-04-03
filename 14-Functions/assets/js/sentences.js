function countSymbol(sentence, symbol){
    let count = 0;
    for (let i = 0; i < sentence.length; i++) {
        if(sentence[i] === symbol){
            count++;
        }
    }
    return count;
}

let sentence = prompt("Zehmet olmasa cumleni daxil edin:");
let symbol = prompt("Zehmet olmasa simvolu daxil edin");

console.log(`"${sentence}" cumlesinde "${symbol}" simvolundan ${countSymbol(sentence, symbol)} defe istifade olunub`)