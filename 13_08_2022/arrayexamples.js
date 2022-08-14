const fruits = ["Banana"];

let arr3 = [];
let arr1 = fruits;
let arr2 = [...fruits];
fruits.forEach((item) => arr3.push(item));
/*
console.log(arr1);
console.log(arr2);
console.log(arr3);
*/
let studentsData = [
  ["Jack", 24],
  ["Sara", 23],
  ["Peter", 25],
];

let sortMultidimensional = (arr) => {
  let length = arr.length;
  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      if (arr[j][i] > arr[j + 1][1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
};
console.log(sortMultidimention(studentsData));


const users = [{name: "sara", age: 25}, {name: "John", age: 88 }, {name: "jessica", age: 34}, {name: "John", age: 22}]

const primeNumbers = [1, 2, 3, 5, 7]

const userNamedJohn = users.find(user => user.name === "John" );

const usersNamedJohn = users.filter(user => user.name === "John");

const odds = primeNumbers.filter(num => num % 2);

console.log(odds);