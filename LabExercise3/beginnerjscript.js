const prompt = require("prompt-sync")();

{//Question 2
console.log("Question 2");
let ax = "" + 1 + 0;
let bx = "" - 1 + 0;
let c = true + false;
let d = 6 / "3";
let e = "2" * "3";
let f = 4 + 5 + "px";
let g = "$" + 4 + 5;
let h = "4" - 2;
let i = "4px" - 2;
let j = " -9 " + 5;
let k = " -9 " - 5;
let l = null + 1;
let m = undefined + 1;
let n = " \t \n" - 2;

console.log(ax);
console.log(bx);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(h);
console.log(i);
console.log(j);
console.log(k);
console.log(l);
console.log(m);
console.log(n);
}
console.log("---------------------------");

{//Question 3
console.log("Question 3");

let a3 = parseInt(prompt("First number? ", 1));
let b3 = parseInt(prompt("Second number? ", 2));
console.log(a3 + b3); // 12
/*
let a = prompt('First number?', 1);
let b = prompt('Second number?', 2);

//let numA = a.match(/\d+/);
//blet numB = b.match(/\d+/);
//let bnum = b.replace( /^\D+/g, '');
//console.log(anum + bnum); // 12
*/
}
console.log("---------------------------");

{//Question 4
console.log("Question 4");

let a4 = 5 > 4;
let b4 = "apple" > "pineapple";
let c4 = "2" > "12";
let d4 = undefined == null;
let e4 = undefined === null;
let f4 = null == "\n0\n";
let g4 = null === +"\n0\n";

console.log(
  "a4 " +
    a4 +
    "\n" +
    "b4 " +
    b4 +
    "\n" +
    "c4 " +
    c4 +
    "\n" +
    "d4 " +
    d4 +
    "\n" +
    "e4 " +
    e4 +
    "\n" +
    "f4 " +
    f4 +
    "\n" +
    "g4 " +
    g4
);
}
console.log("---------------------------");

{//Question 5
console.log("Question 5");
if ("0"){
  console.log("Will an alert be shown?");
}

/*
if ("0") {
alert( 'Hello' );
}
*/
}
console.log("---------------------------");

{//Question 6
console.log("Question 6");

let a;
let b;
let result = a + b < 4 ? "Below" : "Over";

console.log(result);
}
console.log("---------------------------");

{//Question 7
console.log("Question 7");

const delay =
  (func, ms) =>
  (...arg) =>
    setTimeout(() => func.apply(null, arg), ms);
const hello = (who) => console.log("Hello" + who);
const delayHello = delay(hello, 300);
delayHello("world for question 7");
}
console.log("---------------------------");

{//Question 8
console.log("Question 8");

function isEmpty(value) {
  return Object.keys(value).length === 0;
}

let schedule = {};
console.log(isEmpty(schedule)); // true
schedule["8:30"] = "get up";
console.log(isEmpty(schedule)); // false
}
console.log("---------------------------");
{//Question 9
console.log("Question 9");
let ladder = {
  step: 0,
  up: function() {
    this.step++;
    return this;
  },
  down: function() {
    this.step--;
    return this;
  },
  showStep: function () {
    // shows the current step
    console.log(this.step);
    return this;
  },
};
ladder.up().up().down().showStep();
}
console.log("---------------------------");
{//Question 10
console.log("Question 10");

function Accumulator(startingValue){
  this.value = startingValue;
  this.read = function(){
    let a10 = parseInt(prompt("Enter a number? ", 1))
    this.value += a10 //this adds the value parsed below and also the value entered
  }
}

let accumulator = new Accumulator(1); // initial value 1
accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value
console.log(accumulator.value); // shows the sum of these values

console.log("---------------------------");
}