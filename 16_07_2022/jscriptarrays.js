let exampleArray = [10, 20, 30, 40, 50];
for (let i = 0; i < exampleArray.length; i++){
    console.log ('Array position ' + [i] + ' Array Value ' + exampleArray[i]);
}

exampleArray [1] = 25;
exampleArray [4] = 55;

for (let x = exampleArray.length -1 ; x >= 0; x--){
    console.log ('Array position ' + [x] + ' Array Value ' + exampleArray[x]);
}