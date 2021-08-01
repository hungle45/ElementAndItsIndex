'use strict'
const question = document.querySelector('.question');
const answer = document.querySelector('.answer');
const checkBtn = document.querySelector('.check');

let elements = {
    1 : 'H',
    2 : 'He',
    3 : 'Li',
    4 : 'Be',
    5 : 'B',
    6 : 'C',
    7 : 'N',
    8 : 'O',
    9 : 'F',
    10 : 'Ne',
    11 : 'Na',
    12 : 'Mg',
    13 : 'Al',
    14 : 'Si',
    15 : 'P',
    16 : 'S',
    17 : 'Cl',
    18 : 'Ar',
    19 : 'K',
    20 : 'Ca',
    21 : 'Sc',
    22 : 'Ti',
    23 : 'V',
    24 : 'Cr',
    25 : 'Mn',
    26 : 'Fe',
    27 : 'Co',
    28 : 'Ni',
    29 : 'Cu',
    30 : 'Zn'
}

let randomNum = Math.floor(Math.random()*30)+1;
let isElement = Math.round(Math.random());
let expectedAns = '';
if(isElement == 1) {
    expectedAns = `${randomNum}`;
    question.textContent = `The index of ${elements[randomNum]} is`;
} else {
    expectedAns = `${elements[randomNum]}`;
    question.textContent = `The element ${randomNum}th is`;
}

document.body.addEventListener('keyup', (e) => {
    if(e.code == 'Enter') checkAnswer();
})
checkBtn.addEventListener('click', checkAnswer);

function checkAnswer() {
    const playerAns = answer.value;
    if(playerAns == '') {
        alert('Please fill your answer !!!');
    }
    else if(playerAns == expectedAns) {
        document.body.style.backgroundColor = '#60b347';
        setTimeout(reset, 1000);
    } else {
        document.body.style.backgroundColor = 'rgb(226, 86, 86)';
    }
}

function reset() {
    answer.value = '';
    document.body.style.backgroundColor = '#222';
    randomNum = Math.floor(Math.random()*30);
    isElement = Math.round(Math.random());
    if(isElement == 1) {
        expectedAns = `${randomNum}`;
        question.textContent = `The index of ${elements[randomNum]} is`;
    } else {
        expectedAns = `${elements[randomNum]}`;
        question.textContent = `The element ${randomNum}th is`;
    }
}