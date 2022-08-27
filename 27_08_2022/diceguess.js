const prompt = require("prompt-sync")();

const YES_ANSWERS = ['y' , 'yes'];
/*
User story: A user can enter a number
User story: The system picks a random number from 1 to 6
User story: If the user's number is equal to a random number, give the user 2 points
User story: If the user's number is different than the random number by 1,
give the user 1 point. Otherwise, give the user 0 points
User story: The user can play the game as long as they want to

Extend Question
- How to continue if users type invalid keyword.
- How to get the total score after the game is finish 
*/

const enterNumber = () => {
  return new Promise((resolve, reject) => {
    const userNumber = Number(prompt("Enter a number (1 - 6): "));
    const randomNumber = Math.floor(Math.random() * 6 + 1); // Pick a random number between 1 and 6

    //Validate input is number
    if (isNaN(userNumber)) {

    }

    //Get the logic 
    // If the user's number matches the random number, return 2 points
    // If the user's number is different than the random number by 1, return 1 point
    // Else return 0 points

    /*
    * Hint: need to resolve after checking 
    
        resolve({
            points: 1,
            randomNumber,
        });   
    */
  });
};

const continueGame = () => {

  // Using promise to get value => Promise((resolve))  
  // Get the user's choice from prompt prompt("Do you want to continue - type y/yes or n/no to decide ? ");
  //Checking the choice value and resolve true or false  
};

const handleGuess = async () => {
  try {
    const result = await enterNumber(); // Instead of the then method, we can get the result directly by just putting await before the promise

    console.log(
      `Dice: ${result.randomNumber}: you got ${result.points} points`
    );

    const isContinuing = await continueGame();
    //Continue based on user's choice
    
  } catch (error) {
    console.log(error);
  }
};

handleGuess(); // Run handleGuess function