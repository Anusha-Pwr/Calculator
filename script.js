class Calculator {
    Calculator(previousTextElement, currentTextElement) { // Constructor
        this.previousTextElement = previousTextElement;
        this.currentTextElement = currentTextElement;
       
        this.clear();
    }

    clear() {
        this.previousOperand = '';
        this.currentOperand = '';
        this.operation = '';
        
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0,-1); // stores the current operand except the last digit
    }

    appendNumber(number) {
        console.log(typeof(currentOperand));
        if(number === '.' && flag===true && this.currentOperand.includes('.')) { // if the number already has a decimal(.)
            return;
        }
        if(flag === false) { // if the user has typed for the first time
            this.currentOperand = number;
        } else {
            this.currentOperand = this.currentOperand.toString() + number.toString(); // append the new character to the previous one
        }
        flag = true;
    }

    chooseOperation(operation) {
        if(this.currentOperand === '') {
            return;
        }
        if(this.previousOperand !== '') {
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    compute() {
        let computation;
        const prev = parseFloat(this.previousOperand); // converting to a number
        const current = parseFloat(this.currentOperand);
        if(prev === '' || current === '') { // if any one of the operands is empty
            return;
        }

        switch (this.operation) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '*':
                computation = prev * current;
                break;
            case '/':
                computation = prev / current;
                break;
        
            default:
                return;
        }
        this.currentOperand = computation;
        this.previousOperand = '';
        this.operation = '';
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString();
        //console.log(stringNumber);
        const integerDigits = parseFloat(stringNumber.split('.')[0]);
        //console.log(integerDigits);
        const decimalDigits = stringNumber.split('.')[1];
        //console.log(decimalDigits);
        let integerDisplay;
        if(isNaN(integerDigits)) {
            integerDisplay = '';
        }
        else {
            integerDisplay = integerDigits.toLocaleString('en', {maximumFractionDigits: 0});
        }

        if(!(isNaN(decimalDigits))) {
            console.log("hello");
            console.log(`${integerDisplay}.${decimalDigits}`);
            return `${integerDisplay}.${decimalDigits}`;
        }
        else {
            return integerDisplay;
        }
        // const floatNumber = parseFloat(number);
        // console.log(floatNumber);
        // if(isNaN(floatNumber)) {
        //     return '';
        // }
        // else {
        //     return floatNumber.toLocaleString('en');
        // }
    }

    updateDisplay() {
       
        // console.log(this.currentOperand);
        currentTextElement.text(this.getDisplayNumber(this.currentOperand));
        // console.log(this.getDisplayNumber(this.currentOperand));
        if(this.operation !== undefined) {
           // console.log(this.operation);
            previousTextElement.text(this.getDisplayNumber(this.previousOperand) + this.operation.toString());
        }
        else {
            previousTextElement.text('');
        }
      
    }
}

var flag = false; // to know if the user has typed the first digit or not

const numberButtons = $("[data-number]"); // selecting elements by using data attribute
const operationButtons = $("[data-operation]");
const equalsButton = $("[data-equals]");
const deleteButton = $("[data-delete]");
const allClearButton = $("[data-all-clear]");
const previousTextElement = $("[data-previous-operand]");
const currentTextElement = $("[data-current-operand]");

const calculator = new Calculator(previousTextElement, currentTextElement);

numberButtons.click(function(){
    calculator.appendNumber($(this).text());
    calculator.updateDisplay();
})

operationButtons.click(function(){
    calculator.chooseOperation($(this).text());
    calculator.updateDisplay();
})

equalsButton.click(function(){
    calculator.compute();
    calculator.updateDisplay();
})

allClearButton.click(function(){
    calculator.clear();
    calculator.updateDisplay();
})

deleteButton.click(function(){
    calculator.delete();
    calculator.updateDisplay();
})

// class Calculator {
//     constructor(previousOperandTextElement, currentOperandTextElement) {
//       this.previousOperandTextElement = previousOperandTextElement
//       this.currentOperandTextElement = currentOperandTextElement
//       this.clear()
//     }
  
//     clear() {
//       this.currentOperand = ''
//       this.previousOperand = ''
//       this.operation = undefined
//     }
  
//     delete() {
    
//     }
  
//     appendNumber(number) {
//         this.currentOperand = number;
//     }
  
//     chooseOperation(operation) {
     
//     }
  
//     compute() {
      
//     }
  
//     getDisplayNumber(number) {
      
//     }
  
//     updateDisplay() {
//       this.currentOperandTextElement.innerText = "!";
        
//   }
// }
  

// const numberButtons = document.querySelectorAll('[data-number]')
// const operationButtons = document.querySelectorAll('[data-operation]')
// const equalsButton = document.querySelector('[data-equals]')
// const deleteButton = document.querySelector('[data-delete]')
// const allClearButton = document.querySelector('[data-all-clear]')
// const previousOperandTextElement = document.querySelector('[data-previous-operand]')
// const currentOperandTextElement = document.querySelector('[data-current-operand]')

// const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

// numberButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     calculator.appendNumber(button.innerText)
//     calculator.updateDisplay()
//   })
// })