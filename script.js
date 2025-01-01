function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function backspace() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function calculate() {
    let display = document.getElementById("display");
    let expression = display.value;
    let result;

    try {
        // Convert trigonometric function inputs from degrees to radians
        expression = expression.replace(/sin\(/g, 'sin(' + Math.PI / 180 + '*');
        expression = expression.replace(/cos\(/g, 'cos(' + Math.PI / 180 + '*');
        expression = expression.replace(/tan\(/g, 'tan(' + Math.PI / 180 + '*');

        result = math.evaluate(expression);
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}

function squareRoot() {
    let display = document.getElementById("display");
    display.value += "sqrt(";
}

function base10Log() {
    let display = document.getElementById("display");
    display.value += "log10("; // Changed to log10 for clarity
}

function pi() {
    let display = document.getElementById("display");
    display.value += Math.PI; // Use Math.PI for the actual value
}

function e() {
    let display = document.getElementById("display");
    display.value += Math.E; // Use Math.E for the actual value
}

function power() {
    let display = document.getElementById("display");
    display.value += "^"; // Just append ^, the actual power operation will be handled in calculate
}