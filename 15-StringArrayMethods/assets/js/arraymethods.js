// Task 1
const arr = [1,2,2,5,8,9,9,7,7,7];

function countDuplicates(arr) {
    return arr.reduce((acc, num) => {
        acc[num] = (acc[num] || 0) + 1;
        return acc;
    }, {});
}
console.log(countDuplicates(arr));


// Task 2
function palindromWords(word) {
    let len = word.length;
    for (let i = 0; i < len / 2; i++) {
        if (word[i] !== word[len - 1 - i]) {
            return false;
        }
    }
    return true;
}
console.log(palindromWords("level"));


// Task 3
let number = [3,7,8,15,19,34];

function numbersCounter(number){
    let numbers = Number(prompt("Ədəd daxil edin:"));
    let countt = 0;

    for (let i = 0; i < number.length; i++) {
        if(number[i] < numbers){
            countt++;
        }
    }
    return countt;
}
console.log(numbersCounter(number));


// Task 4
const customers = [
    {
      name: "Tyrone",
      personal: {
        age: 33,
        hobbies: ["Bicycling", "Camping"],
      },
    },
    {
      name: "Elizabeth",
      personal: {
        age: 25,
        hobbies: ["Guitar", "Reading", "Gardening"],
      },
    },
    {
      name: "Penny",
      personal: {
        age: 36,
        hobbies: ["Comics", "Chess", "Legos"],
      },
    },
  ];
  
  const allHobbies = customers.reduce((acc, customer) => {
    return acc.concat(customer.personal.hobbies);
  }, []);
  console.log(allHobbies);


// Task 5
function generateRandomArray(size, min, max) {
    let arr = [];
    for (let i = 0; i < size; i++) {
        arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return arr;
}

function analyzeArray(arr) {
    const max = Math.max(...arr);
    const min = Math.min(...arr);

    const sum = arr.reduce((acc, num) => acc + num, 0);
    const avg = sum / arr.length;

    const sqr = arr.map(num => Math.pow(num, 2));

    return {
        max,
        min,
        avg,
        sum,
        sqr
    };
}

const randomArray = generateRandomArray(10, 1, 100);

const result = analyzeArray(randomArray);

console.log("Random Array:", randomArray);
console.log("Ən Böyük Element:", result.max);
console.log("Ən Kiçik Element:", result.min);
console.log("Ortalamasi:", result.avg);
console.log("Toplami:", result.sum);
console.log("Elementlərin Kvadratları:", result.sqr);

  