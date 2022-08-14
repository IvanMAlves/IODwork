/*
const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

Exercise 1: In index.js print the name of each company using forEach
Exercise 2: In index.js print the name of each company that started after 1987
Exercise 3: In index.js get only the companies that have category Retail
Exercise 4: In index.js sort the companies based on their end date in asceding order
Exercise 5: In index.js sort the ages array in desceding order
Exercise 6: In index.js make an new object that has the properties of name and category same as the companies[0] and a method print that prints out the name (use object destructuring and ES6 JS - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) 
Exercise 7: In index.js create a funcion that takes an unkown number of arguments that are numbers and return their sum;
Exercise 8: In index.js make a function that takes an unkown number of arguments of any type and adds them in an array and returns the array, if the argument is an array it should add it's values to the array that will be returned by the function
*/

const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];



let data = companies;

let companyName = [];
let companyStart = [];


 //Exercise 1
 console.log("Exercise 1");
companies.forEach((item) => {
    companyName.push(item.name);
});
console.log(companyName);
console.log("-----------------------------------------------------");

// exercise 2
console.log("Exercise 2");
let compsAft87 = [];
companies.forEach((item) => {
  if (item.start > 1987) {
  compsAft87.push(item.name + ' start ' + item.start);
 }
});
console.log(compsAft87);
console.log("-----------------------------------------------------");

//exercise 3
console.log("Exercise 3");
let onlyRetail = [];
companies.forEach((item) => {
  if (item.category == "Retail") {
    onlyRetail.push(item.name + ' category ' + item.category);
 }
});
console.log(onlyRetail);
console.log("-----------------------------------------------------");

//exercise 4
console.log("Exercise 4");
let sortEndAsc = companies.sort(function(a,b){
    return a.end - b.end;
});
console.log(sortEndAsc);
console.log("-----------------------------------------------------");

//exercise 5
console.log("Exercise 5");
let sortEndDesc = companies.sort(function(a,b){
    return b.end - a.end;
});
console.log(sortEndDesc);
console.log("-----------------------------------------------------");

//exercise 6
console.log("Exercise 6");
let destrObj = {name: companies[0].name, category: companies[0].category, getName(){console.log(this.name)}};
destrObj.getName();

/*
let newCompObj = companies[0];

if (companies[0].name && companies[0].category){
    let {name, category} = companies[0];
    let newObject = {name, category};
    companies.push(newObject);
};
//Print name method
let printName = (item) => {
    if(item.name) return item.name;
    return 'Not valid name'
}

//Adding new object to array
//companies.push(newObject);
console.log(printName(companies[companies.length-1]));
*/
console.log("-----------------------------------------------------");

//exercise 7
console.log("Exercise 7");
const printNums = (...nums) => { //this is the function which does the magic for us the ... allows us to have as many arguments as we want
  let numTotal = 0; //we need a value to store the total of all the arguments
  for(let num of nums) { //simple forloop which stores each value into num of all the arguments input
    numTotal +=num; //adds each value of num to the total
  }
  console.log(numTotal); // console logs the total
}

printNums (1,2,3,4,5,6,7,8,9,10,11); //the method with our arguments entered.
console.log("-----------------------------------------------------");

//exercise 8
console.log("Exercise 8");
let storeArgs = (...args) => {
  let storedArgs = [];
  for(let arg of args) { //arg is the new value of the argument by the user in all of the arguments
    if (Array.isArray(arg)) { //the Array.isArray(args) in an if statement will return true, if true we execute the next line of code
      for(let i = 0; i < arg.length; i++){ //we are checking against arg which is a new array if we check against args that is the total argument
        storedArgs.push(arg[i]); //here we push the arg value [i] for each item in the array 
      }
    }
    else { //must have an else to ensure we dont enter the entire array again because we have an if for single values.
      storedArgs.push(arg); //pushes the arg value of arguments into the new array 1 by 1
    }
  }
  return storedArgs;
}

let arrResults = storeArgs(1,2,3,"league","of","legends",[1,3,3,7],"can be cancer");
console.log(arrResults);
/*
let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: Array [30,40,50]
*/
/*
homes.sort(function(a, b) {
    return parseFloat(a.price) - parseFloat(b.price);
});

//Or after ES6 version:
homes.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));

For descending order, you may use
//homes.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
*/


/* Exercise 6 */





