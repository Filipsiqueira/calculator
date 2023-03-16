const displayOperation = document.querySelector("#display-opt");
const buttonsCalc = document.querySelectorAll(".buttons-container button");
class Calculator {
  constructor(displayOperation) {
    this.displayOperation = displayOperation;
    this.initOperation = "";
  }

  insertDigit(digit) {
    if (digit === "." && this.displayOperation.innerText.includes(".")) {
      return;
    }
    this.initOperation = digit;
    this.updateDisplay();
  }
  updateDisplay() {
    this.displayOperation.innerText += this.initOperation;
  }
  optionOperation(operation) {
    switch (operation) {
      case "+":
        this.displayOperation.innerText += operation;
        break;
      case "-":
        this.displayOperation.innerText += operation;
        break;
      case "*":
        this.displayOperation.innerText += operation;
        break;
      case "/":
        this.displayOperation.innerText += operation;
        break;
      case "C":
        this.displayOperation.innerText = "";
        break;
      case "DEL":
        var display = this.displayOperation.innerText;
        this.displayOperation.innerText = display.substring(
          0,
          display.length - 1,
        );
        break;
      case "=":
        var display = this.displayOperation.innerText;
        this.displayOperation.innerText = eval(display);
    }
  }
}
let calculator = new Calculator(displayOperation);
buttonsCalc.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const value = e.target.innerText;

    if (+value >= 0 || value === ".") {
      calculator.insertDigit(value);
    } else {
      calculator.optionOperation(value);
    }
  });
});
