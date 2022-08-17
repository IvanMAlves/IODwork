const users = [{name: "sara", age: 25}, {name: "John", age: 88 }, {name: "jessica", age: 34}, {name: "John", age: 22}]

const primeNumbers = [1, 2, 3, 5, 7]

const userNamedJohn = users.find(user => user.name === "John" );

const usersNamedJohn = users.filter(user => user.name === "John");

const odds = primeNumbers.filter(num => num % 2);

console.log(odds);