alert("Welcome To My JavaScript Calculator");

setOperator = window.prompt("Type an operator (+, -, /, *, %)");
getFirstNumber = window.prompt("Type the first number");
getSecondNumber = window.prompt("Type the second number");

if (setOperator === "+"){
    result = Number(getFirstNumber) + Number(getSecondNumber);
    alert("The result is " + String(result));
}
else if (setOperator === "-"){
    result = Number(getFirstNumber) - Number(getSecondNumber);
    alert("The result is " + String(result));
}
else if (setOperator === "/"){
    result = Number(getFirstNumber) / Number(getSecondNumber);
    alert("The result is " + String(result));
}
else if (setOperator === "*"){
    result = Number(getFirstNumber) * Number(getSecondNumber);
    alert("The result is " + String(result));
}
else if (setOperator === "%"){
    result = Number(getFirstNumber) % Number(getSecondNumber);
    alert("The result is " + String(result));
}