let str = "I am frontend DEVELOPER I LEARN Javascript";


// Task 1
function foundVowels(str){
    let count = 0;
    let vowels = "aeəioöıuüAEƏIİUÜOÖ";

    for (let i = 0; i < str.length; i++) {
        if(vowels.includes(str.charAt(i))){
            count++;
        }
    }
    return count;
}
console.log(foundVowels(str));


// Task 2
function space(str){
    return str.split(" ").length - 1;
}
console.log(space(str));


// Task 3
function maxLength(str){
    let text = str.split(" ");
    let max = text[0];

    for (let i = 0; i < text.length; i++) {
        if (text[i].length > max.length){
            max = text[i];
        }
    }
    return max;
}
console.log(maxLength(str));


// Task 4
function upperWords(str){
    let words = str.split(" ");

    words.forEach((word, index) => {
        if(word === word.toUpperCase()){
            console.log(`Söz: ${word}, indeks: ${index}`);
        }
    })
}
upperWords(str);


// Task 5
function muchWords(str){
    let content = str.split(" ");

    for (let i = 0; i < content.length; i++) {
        if(content[i].length > 2){
            console.log(content[i]);
        }
    }
}
muchWords(str);


// Task 6
let strr = "My name is Nuray";

function concatLetters(strr){
    let sentence = strr.split(" ");
    let result = "";

    for (let i = 0; i < sentence.length; i++) {
        result += sentence[i].charAt(0);
    }
    return result;
}
console.log(concatLetters(strr));


// Task 7
let sentenc = "Mən JavaScripti yeni öyrənməyə başlamışam.";

function abbreviateWords(sentenc) {
    let words = sentenc.split(" "); 
    let result = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i];

        if (word.length < 4) {
            result.push(word);
        } else {
            result.push(word[0] + (word.length - 2) + word[word.length - 1]);
        }
    }
    return result.join(" ");
}
console.log(abbreviateWords(sentenc));
