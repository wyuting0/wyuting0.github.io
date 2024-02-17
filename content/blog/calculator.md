---
external: false
draft: false
title: Creating a Calculator with JavaScript
description: N/A
date: 2024-02-08
---

JavaScript is one of the most capable programming languages around, allowing for extraordinary interactive and dynamic web application development. Let's cover how to make a calculator with HTML, CSS and JavaScript. If you're an amateur coder looking to learn more about programming via coding, alternatively you're an experienced developer looking to brush up on basics, this tutorial will guide you through how to create a basic calculator.

## Set Up Your Project

Start by creating a new directory for your project. Inside this directory, create three files: `index.html`, `style.css`, and `script.js`. The HTML file will contain the structure of your calculator, the CSS file will handle the styling, and the JavaScript file will implement the functionality.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Simple Calculator</title>
</head>
<body>
    <div class="calculator">
        <!-- Calculator UI goes here -->
    </div>
    <script src="script.js"></script>
</body>
</html>
```

## Style Your Calculator

Add some basic styles to make your calculator visually appealing. Feel free to customize the colors, fonts, and layout according to your preferences.

```css
body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    font-family: sans-serif;
    background-color: hsl(0, 0%, 20%);
}

.calculator {
    width: 250px;
    padding: 20px;
    background-color: hsl(0, 0%, 15%);
    border-radius: 25px;
    overflow: hidden;
}

#display {
    width: 100%;
    margin-bottom: 10px;
    padding: 10px;
    font-size: 18px;
    box-sizing: border-box;
    border-radius: 5px;
    overflow: hidden;
}

.buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
}

button {
    width: 100%;
    padding: 15px;
    font-size: 16px;
    border-radius: 50%;
}

.operator, .equal, .clear {
    background-color: orange;
    color: #fff;
}

.equal {
    background-color: grey;
}
```

## Build the Calculator UI

Now, let's create the structure of the calculator in the HTML file. We'll include buttons for digits, operators, and a display to show the input and result.

```html
<!-- Inside the .calculator div in index.html -->
<input type="text" id="display" readonly />
<div class="buttons" onclick="handleButtonClick(event)">
    <button class="operator" data-value="+" aria-label="Addition">+</button>
    <button data-value="7">7</button>
    <button data-value="8">8</button>
    <button data-value="9">9</button>
    <button class="operator" data-value="-" aria-label="Subtraction">-</button>
    <button data-value="4">4</button>
    <button data-value="5">5</button>
    <button data-value="6">6</button>
    <button class="operator" data-value="*" aria-label="Multiplication">*</button>
    <button data-value="1">1</button>
    <button data-value="2">2</button>
    <button data-value="3">3</button>
    <button class="operator" data-value="/" aria-label="Division">/</button>
    <button data-value="0">0</button>
    <button data-value="." aria-label="Decimal Point">.</button>
    <button class="equal" data-value="=" aria-label="Equals">=</button>
    <button class="clear" data-value="C" aria-label="Clear">C</button>
</div>
```

## Implement Calculator Functions in JavaScript

Now, let's add the functionality to the calculator. Open the `script.js` file and start by defining variables and functions for handling user input. Then, complete the JavaScript file by adding functions to handle operators and the equals button. Don't forget to update the display after each user interaction.

```js
document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    document.querySelector('.buttons').addEventListener('click', handleButtonClick);

    function handleButtonClick(event) {
        const buttonValue = event.target.dataset.value;

        if (buttonValue === '=') {
            calculateResult();
        } else if (buttonValue === 'C') {
            clearDisplay();
        } else {
            appendToDisplay(buttonValue);
        }
    }

    function appendToDisplay(value) {
        display.value += value;
    }

    function clearDisplay() {
        display.value = '';
    }

    function calculateResult() {
        try {
            display.value = parseAndCalculate(display.value);
        } catch (error) {
            display.value = 'Error';
        }
    }

    function parseAndCalculate(expression) {
        return new Function('return ' + expression)();
    }
});
```

## Test Your Calculator

Open your `index.html` file in a web browser to test your calculator. Verify that the buttons respond correctly, and the display updates as expected. If there are any issues, review your code for errors or typos.

If you'd like to explore the GitHub repository I've created for this project, click [here](https://github.com/wyuting0/calculator).