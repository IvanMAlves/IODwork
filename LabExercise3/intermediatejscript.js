//Question 1
{
/* 
1. Uppercase the first character Write a function ucFirst(str) that returns the string str with the capitalized first character, for instance: ucFirst("john") == "John";
*/

console.log("Question 1");
function ucFirst (str){
    console.log(str.charAt(0).toUpperCase() + str.slice(1));
}
ucFirst('ivan');
console.log("-----------------------------");
}
//Question 2
{
/*
2. Truncate the text Create a function truncate(str, maxlength) that checks the length of the str and, if it exceeds maxlength – replaces the end of str with the ellipsis character "…", to make its length equal to maxlength.
The result of the function should be the truncated (if needed) string.
For instance:
truncate("What I'd like to tell on this topic is:", 20) = "What I'd like to te…"
truncate("Hi everyone!", 20) = "Hi everyone!"
*/
console.log("Question 2");

function truncate(str, maxlength){
  // If the length of str is less than or equal to num
  // just return str--don't truncate it.
  if (str.length <= maxlength) {
    return str
  }
  // Return str truncated with '...' concatenated to the end of str.
  return str.slice(0, maxlength) + '...'

}
console.log(truncate("Hi everyone!", 20));

console.log("-----------------------------");
}
//Question 3
{
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
console.log (styles);
styles.push("Rock-n-Roll");
console.log (styles);
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
console.log (styles);
console.log( styles.shift() );
styles.unshift("Rap", "Reggae");
console.log (styles);
console.log("-----------------------------");
}

//Question 4
{
console.log("Question 4")
/*
4. Translate border-left-width to borderLeftWidth Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”. 
That is: removes all dashes, each word after dash becomes uppercased. 
Examples:
camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
*/
    function camelize(str){
        return str.replace(/^([A-Z])|[\s-_]+(\w)/g, function(match, p1, p2, offset){
            if (p2) return p2.toUpperCase();
            return p1.toLowerCase();
            
        });
    }
    //string.split
    //substring
    //foreach
    //
    console.log(camelize("background-color"));

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

}


//Question 5
//Question 6
//Question 7
//Question 8
//Question 9
//Question 10
//Question 11
//Question 12