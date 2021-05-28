

function calc(){
    let operator = document.getElementById('operator').value
    let number1 = parseInt(document.getElementById('num1').value)
    let number2 = parseInt(document.getElementById('num2').value)
    let result;
    console.log(number1,operator,number2)
    if (operator == '+') {
        result = number1 + number2;
    }
    else if (operator == '-') {
        result = number1 - number2;
    }
    else if (operator == '*') {
        result = number1 * number2;
    }
    else if (operator == '/') {
        result = number1 / number2;
    }
    else {
        result= "Error";
    }
    document.getElementById('res').innerHTML =`
    <input class="form-control" type="number" placeholder="${result}" readonly></div>
    `
    console.log(result);
}

document.getElementById('calculate').addEventListener('click', calc)