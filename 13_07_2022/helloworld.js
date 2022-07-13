
const str1 = "Hello"
const str2 = "World"

const prompt = require("prompt-sync")({sigint: true});

const A = parseInt(prompt ("Enter a number "));
const B = parseInt(prompt ("Enter a 2nd number "));
const sum = A + B;
const sub = A - B;
const div1 = A/B;
const multi1 = A*B;

const newString = str1.concat(" ",str2)

console.log (newString)

console.log("Basic Calculations below")

function ThisIsTheName(Signature){
    Body
}

function SayHello(){
    console.log('Howdy')
}

function Sum(A,B){
    console.log('The Sum of ' + A + ' and ' + B + ' is ' + sum)
}

function Subtract(A,B){
    console.log( A + ' minus ' + B + ' is ' + sub)
}

function Divide(A,B){
    console.log(A + ' Divided by ' + B + ' is ' + div1)
}

function Multiply(A,B){
    console.log(A + ' Multiplied by ' + B + ' is ' + multi1)
}

Sum (A,B)
Subtract (A,B)
Divide (A,B)
Multiply (A,B)