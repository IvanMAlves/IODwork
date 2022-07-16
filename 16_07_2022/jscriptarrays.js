let exampleArray = [10, 20, 30, 40, 50];
for (let i = 0; i < exampleArray.length; i++){
    console.log ('Array position ' + [i] + ' Array Value ' + exampleArray[i]);
}

exampleArray [1] = 25;
exampleArray [4] = 55;

for (let x = exampleArray.length -1 ; x >= 0; x--){
    console.log ('Array position ' + [x] + ' Array Value ' + exampleArray[x]);
}

let accounts = [[2,8,7],[7,1,3],[1,9,5]];

let highest = 0;
for (let i of accounts){
    let total = 0;
    let accounts = i.length;
    
    for (let index = 0; index < accounts; index ++){
        total += i[index];
    }
    highest = total > highest? total : highest;
}

console.log(highest);