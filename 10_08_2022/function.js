let list = [
  {
    firstName: "Unleashed",
    lastName: "Atlantis",
    salary: 69000,
  },
  {
    firstName: "Stacie",
    lastName: "Motherland",
    salary: 70000,
  },
  {
    firstName: "Snu",
    lastName: "Fatherland",
    salary: 90000,
  },
  {
    firstName: "Snubert",
    lastName: "Vaterland",
    salary: 80000,
  },
  {
    firstName: "Dragon",
    lastName: "Labrador",
    salary: 80000,
  },
  {
    firstName: "Ultima",
    lastName: "Thule",
    salary: 60000,
  },
  {
    firstName: "Unleaded",
    lastName: "Petrol",
    salary: 43000,
  },
];

function checkExists() {
  let input = document.getElementById("fname").value.toLowerCase(); // a new variable 'input' which takes the html element 'fname' and getting the value
  let display = document.getElementById("display"); // new variable display gets the location of the <p> by the html id 'display'
  let text = "";

  for (let i = 0; i < list.length; i++) { //this for loop goes through the array like normal
    if (input.length > 0) { // this checks to see if the user has entered any text because blanks are in everyones name
      if (list[i].firstName.toLowerCase().includes(input) || list[i].lastName.toLowerCase().includes(input)) {  //if turns everything to lower case and checks the input against the first name and last name
        text += "Name: " + list[i].firstName + " " + list[i].lastName + "\n" + "Salary: " + list[i].salary + "\n"; //just showing the results
        text += "\n";
      }
    }
  }
  display.innerText = text; //updates the display value so it updates the display id in HTML
}

function showAll() {
  let display = document.getElementById("display"); // new variable display gets the location of the <p> by the html id 'display'
  let text = "";
  for (let i = 0; i < list.length; i++) { //for loop to go through the array
    text += "Name: " + list[i].firstName + " " + list[i].lastName + "\n"; //for each item in the array store the values into text
    text += "Salary: " + list[i].salary + "\n"; //for each salary also store in text
    if (i < list.length - 1) {
      text += "-------+-------------------------\n"; //if at the end of each item in the array put the ----- after the name
    }
  }
  display.innerText = text;
}

function highestSal() {
  let display = document.getElementById("display");   // new variable display gets the location of the <p> by the html id 'display'
  let text = "";   // this will be used to display the text we want, this could be used for 1 value or multiple values
  if (list.length > 0){   // this makes sure that there is atleast 1 user left in the list
    let highestSalary = list[0].salary;  // this sets the variable to the first item in the array which will be changed later unless it is the highest
    let highestindexes = [0];  // index is variable used to be to determine the first name and last name and salary in the array
    for(let i = 1; i < list.length; i++) {  // for loop to go through the array
      if(list[i].salary > highestSalary) {  // checks the current item in the array against the currently stored highest salary
        highestSalary = list[i].salary  // sets the highest salary if the statement above is true, if not goes back through the loop
        highestindexes = [i];   // setting index to i so the loop knows when to break
      }
      else if (list[i].salary == highestSalary) {  // this checks if they are equal and then does the next line
        highestindexes.push(i); //so we push the highest item even if it is equal into the array which we delete everything in this array
      }
    }
    
    for (i = 0; i < highestindexes.length; i++ ) {
      text += list[highestindexes[i] - i].firstName + " " + list[highestindexes[i] - i].lastName + " with a salary of " + list[highestindexes[i] - i].salary + " is deleted\n\n";  //displays the item we want to delete
      list.splice(highestindexes[i] - i, 1);   //actually gets rid of the selected item in the array
    }
    display.innerText = text;
  }else {
    display.innerText = "No users exist";  //when there are no more users.
  }
}
