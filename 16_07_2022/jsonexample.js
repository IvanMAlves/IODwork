const book = {
    "book_title" : "C++ Programming 101",
    "description" : "A step-by-step tutorial text for both novice and experienced programmers who want to learn C++",
    "author" : "Greg Perry",
    "number_of_pages" : 700
}

console.log(book["book_title"]);
console.log(book["description"]);
console.log(book["author"]);
console.log(book["number_of_pages"]);

/*
const { json } = require("body-parser");
let jsonObject = `
{
    "data": [
        {
            "name": "Sammy1",
            "age": 60
        },
        {
            "name": "Sammy2",
            "age": 20
        },
        {
            "name": "Sammy3",
            "age": 80
        },
        {
            "name": "Sammy4",
            "age": 40
        }
    ]
}`;
*/

let bodyData = JSON.parse(jsonObject); 

/*
let response = bodyData.data.sort(function(a, b) {
    // (a.age < b.age) ? 1 : -1
    if(a.age < b.age) return 1;
    else return -1;
});
console.log(response);
*/

let data = bodyData.data;
data.forEach(item =>{
    if(!item.name || item.age){
        throw Error('Missing compultory key: name or age');
    }
})