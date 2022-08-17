let jsonObject = `
{
    "dogBreeds": [{
        "breed": "Labrador Retriever",
        "breedType": "Purebred",
        "origin": "Canada,USA",
        "popularity": "1",
        "temperament": ["Cheerful", "Gentle", "Friendly", "Intelligent"],
        "hypoallergenic": "No",
        "intelligence": 7,
        "photo": "https://learnwebcode.github.io/json-example/images/cat-2.jpg"
    }, {
        "breed": "German Shepard",
        "breedType": "Purebred",
        "origin": "Germany",
        "popularity": "2",
        "temperament": ["Corageous", "Intelligent", "Loyal", "Watchful"],
        "hypoallergenic": "No",
        "intelligence": 3,
        "photo": "https://learnwebcode.github.io/json-example/images/cat-2.jpg"
    }, {
        "breed": "Golden Retriever",
        "breedType": "Purebred",
        "origin": "United Kingdom",
        "popularity": "3",
        "temperament": ["Intelligent", "Kind", "Friendly", "Confident"],
        "hypoallergenic": "No",
        "intelligence": 4,
        "photo": "https://learnwebcode.github.io/json-example/images/cat-2.jpg"
    }, {
        "breed": "French Bulldog",
        "breedType": "Purebred",
        "origin": "France, UK",
        "popularity": "4",
        "temperament": ["Playful", "Sociable", "Friendly", "Lively", "Patient"],
        "hypoallergenic": "No",
        "intelligence": 58,
        "photo": "https://learnwebcode.github.io/json-example/images/cat-2.jpg"

    }, {
        "breed": "Bulldog",
        "breedType": "Purebred",
        "origin": "United Kingdom",
        "popularity": "5",
        "temperament": ["Friendly", "Docile", "Willful", "Gregarious"],
        "hypoallergenic": "No",
        "intelligence": 77,
        "photo": "https://learnwebcode.github.io/json-example/images/cat-2.jpg"

    }, {
        "breed": "Beagle",
        "breedType": "Purebred",
        "origin": "United Kingdom",
        "popularity": "6",
        "temperament": ["Gentle", "Intelligent", "Even Tempered", "Determined"],
        "hypoallergenic": "No",
        "intelligence": 72,
        "photo": "https://learnwebcode.github.io/json-example/images/cat-2.jpg"

    }, {
        "breed": "Poodle",
        "breedType": "Purebred",
        "origin": "Germany, France",
        "popularity": "7",
        "temperament": ["Intelligent", "Faithful", "Trainable", "Instinctual"],
        "hypoallergenic": "Yes",
        "intelligence": 2,
        "photo": "https://learnwebcode.github.io/json-example/images/cat-2.jpg"

    }, {
        "breed": "Rottweiler",
        "breedType": "Purebred",
        "origin": "Germany",
        "popularity": "8",
        "temperament": ["Intelligent", "Corageous", "Fearless", "Confident"],
        "hypoallergenic": "No",
        "intelligence": 9,
        "photo": "https://learnwebcode.github.io/json-example/images/cat-2.jpg"

    }, {
        "breed": "German Shorthaired Pointer",
        "breedType": "Purebred",
        "origin": "Germany",
        "popularity": "9",
        "temperament": ["Intelligent", "Trainable", "Boisterous", "Cooperative"],
        "hypoallergenic": "No",
        "intelligence": 9,
        "photo": "https://learnwebcode.github.io/json-example/images/cat-2.jpg"

    }, {
        "breed": "Yorkshire Terrier",
        "breedType": "Purebred",
        "origin": "United Kingdom",
        "popularity": "10",
        "temperament": ["Independent", "Intelligent", "Corageous", "Confident"],
        "hypoallergenic": "Yes",
        "intelligence": 27,
        "photo": "https://learnwebcode.github.io/json-example/images/cat-2.jpg"

    }, {
        "breed": "Boxer",
        "breedType": "Purebred",
        "origin": "Germany",
        "popularity": "11",
        "temperament": ["Playful", "Friendly", "Devoted", "Loyal"],
        "hypoallergenic": "No",
        "intelligence": 48,
        "photo": "https://learnwebcode.github.io/json-example/images/cat-2.jpg"

    }]
}`;

let bodyData = JSON.parse(jsonObject);
let data = bodyData.dogBreeds;

let listDogName = [];

data.forEach((item) => {
  listDogName.push(item.breed);
  //console.log(listDogintel);
});

let firstselectDogList = document.getElementById("FirstDog");
let secondselectDogList = document.getElementById("SecondDog");

listDogName.forEach((item, index) => {
  let option = document.createElement("option");
  option.value = listDogName[index];
  option.text = listDogName[index];
  firstselectDogList.appendChild(option);
});

listDogName.forEach((item, index) => {
  let option = document.createElement("option");
  option.value = listDogName[index];
  option.text = listDogName[index];
  secondselectDogList.appendChild(option);
});

//this function is to compare the two dog breeds
compare = function () {
  let firstselectDogList = document.getElementById("FirstDog"); //this is the variable of the html element in the option
  let firstValue = firstselectDogList.value; //this is storing the value in the html option into a new variable to compare later
  let firstValueText =
    firstselectDogList.options[firstselectDogList.selectedIndex].text; //This is the text of the value related to the option
  //console.log(firstValue);
  //console.log(firstselectDogList.selectedIndex);

  let secondSelectDogList = document.getElementById("SecondDog"); //this is the variable of the html element in the option
  let secondValue = secondSelectDogList.value; //this is storing the value in the html option into a new variable to compare later
  let secondValueText =
    secondSelectDogList.options[secondSelectDogList.selectedIndex].text; //This is the text of the value related to the option
  //console.log(secondValue);
  //console.log(secondSelectDogList.selectedIndex);

  let firstSelectedProfile = data[firstselectDogList.selectedIndex - 1];
  //console.log(firstSelectedProfile);
  let secondSelectedProfile = data[secondSelectDogList.selectedIndex - 1];
  //console.log(secondSelectedProfile);

  let firstIntel = firstSelectedProfile.intelligence;
  let secondIntel = secondSelectedProfile.intelligence;

  if (firstIntel > secondIntel) {
    document.getElementById("ComparisonMessage").innerHTML =
      firstSelectedProfile.breed +
      " is smarter than " +
      secondSelectedProfile.breed;
  }
  document.getElementById("ComparisonMessage").innerHTML =
    secondSelectedProfile.breed +
    " is smarter than " +
    firstSelectedProfile.breed;

  console.log(firstIntel);
  console.log(secondIntel);

  //go through the array data, for each object I am going to get the img and pass into the html.
};
