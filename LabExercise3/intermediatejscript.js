{
  //Question 1
  /* 
1. Uppercase the first character Write a function ucFirst(str) that returns the string str with the capitalized first character, for instance: ucFirst("john") == "John";
*/

  console.log("Question 1");
  function ucFirst(str) {
    console.log(str.charAt(0).toUpperCase() + str.slice(1));
  }
  ucFirst("ivan");
  console.log("-----------------------------");
}

{
  //Question 2
  /*
2. Truncate the text Create a function truncate(str, maxlength) that checks the length of the str and, if it exceeds maxlength – replaces the end of str with the ellipsis character "…", to make its length equal to maxlength.
The result of the function should be the truncated (if needed) string.
For instance:
truncate("What I'd like to tell on this topic is:", 20) = "What I'd like to te…"
truncate("Hi everyone!", 20) = "Hi everyone!"
*/
  console.log("Question 2");

  function truncate(str, maxlength) {
    // If the length of str is less than or equal to num
    // just return str--don't truncate it.
    if (str.length <= maxlength) {
      return str;
    }
    // Return str truncated with '...' concatenated to the end of str.
    return str.slice(0, maxlength) + "...";
  }
  console.log(truncate("Hi everyone!", 20));

  console.log("-----------------------------");
}

{
  //Question 3
  /*
3. Array operations Let’s try 5 array operations. 
1. Create an array styles with items “Jazz” and “Blues”. 
2. Append “Rock-n-Roll” to the end. 
3. Replace the value in the middle by “Classics”. Your code for finding the middle value should work for any arrays with odd length. 
4. Strip off the first value of the array and show it. 
5. Prepend Rap and Reggae to the array. 
The array in the process: 
Jazz, Blues 
Jazz, Blues, Rock-n-Roll 
Jazz, Classics, Rock-n-Roll 
Classics, Rock-n-Roll 
Rap, Reggae, Classics, Rock-n-Roll
*/
  console.log("Question 3");

  let styles = ["Jazz", "Blues"];
  console.log(styles);
  styles.push("Rock-n-Roll");
  console.log(styles);
  styles[Math.floor((styles.length - 1) / 2)] = "Classics";
  console.log(styles);
  console.log(styles.shift());
  styles.unshift("Rap", "Reggae");
  console.log(styles);
  console.log("-----------------------------");
}

{
  //Question 4
  console.log("Question 4");
  /*
4. Translate border-left-width to borderLeftWidth Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”. 
That is: removes all dashes, each word after dash becomes uppercased. 
Examples:
camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
*/

  // function camelize(str){
  //     return str.replace(/^([A-Z])|[\s-_]+(\w)/g, function(match, p1, p2, offset){
  //         if (p2) return p2.toUpperCase();
  //         return p1.toLowerCase();

  //     });
  // }

  function camelize(str) {
    let wordArr = str.split("-").map((word, index) => {
      if (index == 0) {
        return word;
      } else {
        return word[0].toUpperCase() + word.slice(1);
      }
    });

    return wordArr.join("");
  }

  console.log(camelize("webkit-transition"));

  /*short cut code of the above
    function camelize(str) {
	let wordArr = str.split('-').map(
		(word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
	);
	
	return wordArr.join('');
    */

  /*
 * Camelize a string, cutting the string by multiple separators like
 * hyphens, underscores and spaces.
 * 
 * @param {text} string Text to camelize
 * @return string Camelized text
 *
function camelize(text) {
    return text.replace(/^([A-Z])|[\s-_]+(\w)/g, function(match, p1, p2, offset) {
        if (p2) return p2.toUpperCase();
        return p1.toLowerCase();        
    });
}
    
*/
console.log("-----------------------------");
}

{//Question 5

console.log("Question 5");
  function Calculator(a, b) {
    this.methods = {
      "-": (a, b) => a - b,
      "+": (a, b) => a + b,
      "*": (a, b) => a * b,
      "/": (a, b) => a / b,
      "**": (a, b) => Math.pow(a, b),
    };
    this.calculate = function (str) {
      /*need to try to put in the above methods*/
      let split = str.split(" "),
        a = +split[0];
      (operator = split[1]), (b = +split[2]);

      return this.methods[operator](a, b);
    };
    this.addMethod = function (name, func) {
      this.methods[name] = func;
    };
  }

  let powerCalc = new Calculator();
  powerCalc.addMethod("*", (a, b) => a * b);
  powerCalc.addMethod("/", (a, b) => a / b);
  powerCalc.addMethod("**", (a, b) => a ** b);
  let result = powerCalc.calculate("2 + 3");
  console.log(result);
  console.log("-----------------------------");
}
{//Question 6
  console.log("Question 6");
//6. Filter unique array members Let arr be an array. Create a function unique(arr) that should return an array with unique items of arr. For instance:


function unique(arr) {
  let result = [];
  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }
  return result;
}
  let values = [
    "Hare",
    "Krishna",
    "Hare",
    "Krishna",
    "Krishna",
    "Krishna",
    "Hare",
    "Hare",
    ":-O",
  ];

  
  console.log(unique(values)); // Hare, Krishna, :-O P.S. Here strings are used, but can be values of any type.
  console.log("-----------------------------");
}

{//Question 7
  /*
7. Iterable keys We’d like to get an array of map.keys() in a variable and then apply array-specific methods to it, e.g. .push. But that doesn’t work: let map = new Map(); map.set("name", "John");
let keys = map.keys(); // Error: keys.push is not a function keys.push("more"); Why? How can we fix the code to make keys.push work?
*/
console.log("Question 7");

let map = new Map();
map.set("name", "John");
let keys = Array.from(map.keys());
keys.push("more");
console.log(keys);

console.log("-----------------------------");
}
{//Question 8
  /*
8. Store "unread" flags There’s an array of messages:
let messages = [
{text: "Hello", from: "John"},
{text: "How goes?", from: "John"},
{text: "See you soon", from: "Alice"}
]; Your code can access it, but the messages are managed by someone else’s code. New messages are added, old ones are removed regularly by that code, and you don’t know the exact moments when it happens. 
Now, which data structure could you use to store information about whether the message “has been read”? 
The structure must be well-suited to give the answer “was it read?” for the given message object. 
P.S. When a message is removed from messages, it should disappear from your structure as well. 
P.P.S. We shouldn’t modify message objects, add our properties to them. As they are managed by someone else’s code, that may lead to bad consequences.
*/
console.log("Question 8");
let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];


let readMessages = new WeakSet();

// how to  store two message have been read

readMessages.add(messages[0]);
readMessages.add(messages[1]);

// read the first message again

readMessages.add(messages[0]);

//Asking message 0 was read or not 
console.log('Read Message 0: '+ readMessages.has(messages[0])); //True

messages.shift(); //message[1]

console.log(messages);
console.log("-----------------------------");
}
{//Question 9
  /*
9. Sum the properties There is a salaries object with arbitrary number of salaries. Write the function sumSalaries(salaries) that returns the sum of all salaries using Object.values and the for..of loop.
If salaries is empty, then the result must be 0. For instance:
let salaries = {
"John": 100,
"Pete": 300,
"Mary": 250
};
alert( sumSalaries(salaries) ); // 650
*/
console.log("Question 9");

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
  };


function sumSalaries(salaries) {
  return Object.values(salaries).reduce((a, b) => a + b, 0);
}

console.log( sumSalaries(salaries) ); // 650

console.log("-----------------------------");
}
{//Question 10
  /*
10. The maximal salary There is a salaries object:
const salaries = {
"John": 100,
"Pete": 300,
"Mary": 250
}; 
Create the function topSalary(salaries) that returns the name of the top-paid person. ● If salaries is empty, it should return null. ● If there are multiple top-paid persons, return any of them. 
P.S. Use Object.entries and destructuring to iterate over key/value pairs.
*/
console.log("Question 10");

const salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
  }; 

function topSalary(salaries) {
  let maxSalary = 0;
  let maxName = null;
  for (const [name, salary] of Object.entries(salaries)) {
    if (maxSalary < salary) {
      maxSalary = salary;
      maxName = name;
    }
  }

  return maxName;
};

console.log(topSalary(salaries));

console.log("-----------------------------");
}
{//Question 11
console.log("Question 11");

function getSecondsToday() {
  let d = new Date();
  return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
}
console.log(getSecondsToday());
console.log("-----------------------------");
}
{//Question 12
console.log("Question 12");
let room = {
  number: 23,
};
let meetup = {
  title: "Conference",
  occupiedBy: [{ name: "John" }, { name: "Alice" }],
  place: room,
};
room.occupiedBy = meetup;
meetup.self = meetup;
console.log(
  JSON.stringify(meetup, function replacer(key, value) {
    return key != "" && value == meetup ? undefined : value;
  })
);

console.log("-----------------------------");
}
