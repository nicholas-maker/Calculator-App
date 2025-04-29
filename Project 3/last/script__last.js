const erase_all = document.querySelector('#erase-all');
const erase = document.querySelector('#erase');
const del = document.querySelector('#delete');
const input = document.querySelector('.input');
const minus = document.querySelector('#minus');
const plus = document.querySelector('#plus');
const multiply = document.querySelector('#multiply');
const divide = document.querySelector('#divide');
const smooth = document.querySelector('#smooth');
const comma = document.querySelector('.comma');

let numbers = [];
let number = '';
let operation = '';
let result = 0;

window.onload = function() {
    input.focus();
};

const addNumber = (num) => {
    number += num;
    input.value = number;

    input.focus();
}

document.querySelector('#btn_1').addEventListener('click', () => addNumber('1'));
document.querySelector('#btn_2').addEventListener('click', () => addNumber('2'));
document.querySelector('#btn_3').addEventListener('click', () => addNumber('3'));
document.querySelector('#btn_4').addEventListener('click', () => addNumber('4'));
document.querySelector('#btn_5').addEventListener('click', () => addNumber('5'));
document.querySelector('#btn_6').addEventListener('click', () => addNumber('6'));
document.querySelector('#btn_7').addEventListener('click', () => addNumber('7'));
document.querySelector('#btn_8').addEventListener('click', () => addNumber('8'));
document.querySelector('#btn_9').addEventListener('click', () => addNumber('9'));

del.addEventListener('click', () => {
    number = number.slice(0, -1);
    input.value = number;
    input.focus();
});

const addOperation = (oper) => {
    number_value = parseFloat(number);
    numbers.push(number_value);
    console.log(numbers);
    operation = oper;
    input.value = '';
    number = '';
    console.log(operation);
    input.focus();

    if (numbers.length === 2) {
        switch (operation) {
            case '+':
                result = numbers[0] + numbers[1];
                numbers.push(result);
                break;
            case '-':
                result = numbers[0] - numbers[1];
                numbers.push(result);
                break;
            case '*':
                result = numbers[0] * numbers[1];
                numbers.push(result);
                break;
            case '/':
                result = numbers[0] / numbers[1];
                numbers.push(result);
                break;
            case '=':
                numbers.push(numbers[1]);
                result = numbers[0];
                input.value = result;
                break;
        }
        numbers = [];
        numbers.push(result);
        console.log(numbers);
    }
}

minus.addEventListener('click', () => addOperation('-'));
plus.addEventListener('click', () => addOperation('+'));
multiply.addEventListener('click', () => addOperation('*'));
divide.addEventListener('click', () => addOperation('/')); 
smooth.addEventListener('click', () => addOperation('='));


erase_all.addEventListener('click', () => {
    input.value = '';
    number = '';
    operation = '';
    numbers = [];
    input.focus();
});

erase.addEventListener('click', () => {
    input.value = '';
    number = '';
    operation = '';
    numbers = [];
    input.focus();
});
