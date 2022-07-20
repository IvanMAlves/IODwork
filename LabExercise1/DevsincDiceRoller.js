let diceSide = [4, 6, 8, 10, 12, 20];
let diceType = ["d4", "d6", "d8", "d10", "d12", "d20"];
let arrayX = [];

var dice = {
  roll: function (sides) {
    var randomNumber = Math.floor(Math.random() * sides) + 1;
    return randomNumber;
  },
};


function printNumber(result) {
  console.log(result);
  for (let y = 0; y < result.length; y++) {
    let placeholder = document.getElementById(diceType[y]);
    placeholder.innerHTML = result[y];
  }
}

var button = document.getElementById("button");

button.onclick = function () {
  for (let i = 0; i < diceSide.length; i++) {
    var result = dice.roll(diceSide[i]);
    arrayX.push(result);
  }
  printNumber(arrayX);
  arrayX = [];
};
