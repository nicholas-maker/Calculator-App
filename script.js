const erase_all = document.querySelector('#erase-all');
const erase = document.querySelector('#erase');
const del = document.querySelector('#delete');
const input = document.querySelector('.input');
const minus = document.querySelector('#minus');
const plus = document.querySelector('#plus');
const multiply = document.querySelector('#multiply');
const divide = document.querySelector('#divide');
const smooth = document.querySelector('#smooth');
const comma = document.querySelector('#comma');
const output = document.querySelector('.output');

let error;

window.onload = function() {
    input.focus();
};

erase_all.addEventListener('click', () => {
    input.value = '';
    output.textContent = '';
    input.focus();
});

del.addEventListener('click', () => {
    input.value = input.value.slice(0, -1);
    output.textContent = '';
    input.focus();

    if (error === 'Ошибка') {
        input.value = '';
        output.textContent = 'Ошибка';
    }
});

erase.addEventListener('click', () => {
    input.value = '';
    input.focus();
});

const addNumber = (number) => {
    input.value += number;
    input.focus();
};

document.querySelector('#btn_1').addEventListener('click', () => addNumber(1));
document.querySelector('#btn_2').addEventListener('click', () => addNumber(2));
document.querySelector('#btn_3').addEventListener('click', () => addNumber(3));
document.querySelector('#btn_4').addEventListener('click', () => addNumber(4));
document.querySelector('#btn_5').addEventListener('click', () => addNumber(5));
document.querySelector('#btn_6').addEventListener('click', () => addNumber(6));
document.querySelector('#btn_7').addEventListener('click', () => addNumber(7));
document.querySelector('#btn_8').addEventListener('click', () => addNumber(8));
document.querySelector('#btn_9').addEventListener('click', () => addNumber(9));
document.querySelector('#btn_0').addEventListener('click', () => addNumber(0));

const addOperation = (operation) => {
    input.value += operation;
    input.focus();
};

minus.addEventListener('click', () => addOperation('-'));
plus.addEventListener('click', () => addOperation('+'));
multiply.addEventListener('click', () => addOperation('*'));
divide.addEventListener('click', () => addOperation('/'));
comma.addEventListener('click', () => addOperation('.'));
percent.addEventListener('click', () => addOperation('%'));

smooth.addEventListener('click', () => {
    let input_value = input.value;
    output.textContent = input_value;


    // let result = eval(input_value);
    let result = new Function('return ' + input_value)();

    input.value = result;
    input.focus();

    if (!isFinite(result)) {
        error = 'Ошибка';
        input.value = error;
    }
});