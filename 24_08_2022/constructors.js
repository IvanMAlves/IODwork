/*
TASK 1
- Write a Person Constructor that initializes `name` and `age` from arguments.
- All instances of Person should initialize with an empty `stomach` array.
- Give instances of Person the ability to `.eat("someFood")`:
    + When eating an edible, it should be pushed into the `stomach`.
    + The `eat` method should have no effect if there are 10 items in the `stomach`.
- Give instances of Person the ability to `.poop()`:
    + When an instance poops, its `stomach` should empty.
- Give instances of Person a method `.toString()`:
    + It should return a string with `name` and `age`. Example: "Mary, 50"
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/