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
            if (this.num2 == 0){
                display.textContent=`ERROR`
                this.num1 = ""
                this.num2 = ""
                this.operator = ""
                result = 0
                return result
                break
            } else{
                result = this.num1 / this.num2
            }
        }
        this.num2 = ""
        this.operator = ""
        display.textContent = `${result}`
        this.num1 = result
        return result
    }
}
const display = document.querySelector("#display")
const btnOperator = document.querySelectorAll(".operator")
const btnNumber = document.querySelectorAll(".number")
const btnEqual = document.querySelector("#equal")
const btnC = document.querySelector("#C")
const btnDelete = document.querySelector("#delete")

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
        if(operation.num2 !== ""){
            operation.operate()
        }
        if(operation.num1 !== ""){
            const operator = button.textContent
            operation.operator = operator
            display.textContent = `${operation.num1} ${operation.operator}`
        }
    })
})
btnEqual.addEventListener("click", ()=>{
    if(operation.num2 !== ""){
        operation.operate()
    }
})
btnC.addEventListener("click",()=>{
    operation.num1 = ""
    operation.num2 = ""
    operation.operator = ""
    result = 0
    display.textContent = `${result}`
})
btnDelete.addEventListener("click", ()=>{
    if (operation.num2 !== ""){
            operation.num2 = operation.num2.slice(0, operation.num2.length - 1)
            if (operation.num2 !== ""){
                display.textContent = `${operation.num1} ${operation.operator} ${operation.num2}`
            } else {
                display.textContent = `${operation.num1} ${operation.operator}`
            }
    } else if (operation.operator !== "") {
        operation.operator = ""
        display.textContent = `${operation.num1}`
    } else if (operation.num1 !== ""){
            operation.num1 = operation.num1.slice(0, operation.num1.length - 1)
            if (operation.num1 !== ""){
                display.textContent = `${operation.num1}`
            } else {
                result = 0
                display.textContent = `${result}`
            }
    }
})