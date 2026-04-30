let result = 0
const operation = {
    num1: "",
    operator: "",
    num2: "",
    operate: function(){
       this.num1 = parseInt(this.num1)
       this.num2 = parseInt(this.num2)
        switch (this.operator){
        case "+":
            result = this.num1 + this.num2
            break
        case "-":
            result = this.num1 - this.num2
            break
        case "*":
            result = this.num1 * this.num2
            break
        case "/":
            if (this.num2 == 0){break} else{
                result = this.num1 / this.num2
            }
        }
        this.num2 = ""
        return result
    }
}
const display = document.querySelector("#display")
const btnOperator = document.querySelectorAll(".operator")
const btnNumber = document.querySelectorAll(".number")
const btnEqual = document.querySelector("#equal")

btnNumber.forEach(button => {
    button.addEventListener("click", ()=>{
        const number = button.textContent
        if(operation.operator !== ""){
            operation.num2 += number
            display.textContent = `${operation.num1} ${operation.operator} ${operation.num2}`
        } else {
            operation.num1 += number
            display.textContent = `${operation.num1}`
        }
})
});
btnOperator.forEach(button =>{
    button.addEventListener("click", ()=>{
        console.log(operation)
        if(operation.num2 !== ""){
            operation.operate()
            operation.num1 = result
        }
        const operator = button.textContent
        operation.operator = operator
        display.textContent = `${operation.num1} ${operation.operator}`
        
    })
})
btnEqual.addEventListener("click", ()=>{
    operation.operate()
    display.textContent = `${result}`
    operation.num1 = result
})