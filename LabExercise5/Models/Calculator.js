class Calculator {
  constructor() {
    this.id = Math.random();
  }
  #log = (value) => {
    console.log(`[Calculator:${this.id}]:${value}`);
  };

  add(num1, num2) {
    const value = num1 + num2;
    this.#log(value); //this needs to be in the other methods as well
    return value; //this needs to be in the other methods as well
  }

  subt(num1, num2) {
    const value = num1 - num2;
    this.#log(value); //this needs to be in the other methods as well
    return value; //this needs to be in the other methods as well
  }

  mult(num1, num2) {
      const value = num1 * num2;
      this.#log(value); //this needs to be in the other methods as well
      return value; //this needs to be in the other methods as well
  }

  division(num1, num2) {

    if(num2 == 0){
      console.log("Unable to divide by 0")
    } else{
      const value = num1 / num2;
      this.#log(value); //this needs to be in the other methods as well
      return value; //this needs to be in the other methods as well
    }
  }
}

module.exports=Calculator;

//go from slide 52 and follow that for the remainder of question 5
//do sub divide and multiply
