/*
const alien1 = {
    name: "Ali",
    species: "alien",
    phrase: () => console.log("I'm Ali the alien!"),
    fly: () => console.log("Zzzzzziiiiiinnnnnggggg!!")
}
const alien2 = {
    name: "Lien",
    species: "alien",
    sayPhrase: () => console.log("Run for your lives!"),
    fly: () => console.log("Zzzzzziiiiiinnnnnggggg!!")
}
const bug1 = {
    name: "Buggy",
    species: "bug",
    sayPhrase: () => console.log("Your debugger doesn't work with me!"),
    hide: () => console.log("You can't catch me now!")
}
const bug2 = {
    name: "Erik",
    species: "bug",
    sayPhrase: () => console.log("I drink decaf!"),
    hide: () => console.log("You can't catch me now!")
}
const Robot1 = {
    name: "Tito",
    species: "robot",
    sayPhrase: () => console.log("I can cook, swim and dance!"),
    transform: () => console.log("Optimus prime!")
}
const Robot2 = {
    name: "Terminator",
    species: "robot",
    sayPhrase: () => console.log("Hasta la vista, baby!"),
    transform: () => console.log("Optimus prime!")
}


class Alien { // Name of the class
    // The constructor method will take a number of parameters and assign those parameters as properties to the created object.
    constructor (name, phrase) {
        this.name = name
        this.phrase = phrase
        this.species = "alien"
    }
    // These will be the object's methods.
    fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!")
    sayPhrase = () => console.log(this.phrase)
}

class Bug {
    constructor (name, phrase) {
        this.name = name
        this.phrase = phrase
        this.species = "bug"
    }
    hide = () => console.log("You can't catch me now!")
    sayPhrase = () => console.log(this.phrase)
}

class Robot {
    constructor (name, phrase) {
        this.name = name
        this.phrase = phrase
        this.species = "robot"
    }
    transform = () => console.log("Optimus prime!")
    sayPhrase = () => console.log(this.phrase)
}

const alien3 = new Alien("Ali", "I'm Ali the alien!")
const alien4 = new Alien("Lien", "Run for your lives!")
const bug3 = new Bug("Buggy", "Your debugger doesn't work with me!")
const bug4 = new Bug("Erik", "I drink decaf!")
const Robot3 = new Robot("Tito", "I can cook, swim and dance!")
const Robot4 = new Robot("Terminator", "Hasta la vista, baby!")
*/