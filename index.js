let outputShuf = document.getElementsByClassName("outputShuf").outputWindow;
let output = document.querySelector("div.output");
let baseNum = document.querySelector('input#number');
let minNum = document.querySelector('input#min-number');
let maxNum = document.querySelector('input#max-number');
let checkboxInput = document.getElementsByClassName('form-check-input');
let textInputMinMax = document.getElementsByClassName('minMax');
let textInputSingle = document.getElementById('number');
let confirmBtn = document.querySelector('button.confirm');
let numbersArray = [];

function spinToWin(n) {
  if (n <= -1 || n >= 1e7) {
    output.innerHTML = 'Error';
  } else {
    if (checkboxInput.inlineCheckbox1.checked == true) {
      let num = Math.floor(Math.random() * (n - 0 + 1));
      output.innerHTML = num;
    } else if (checkboxInput.inlineCheckbox1.checked == false) {
      let num = Math.floor(Math.random() * (n - 1 + 1)) + 1;
      output.innerHTML = num;
    }
  }
}

function push(n, min, max) {
  if (baseNum.value != '' && minNum.value == '' && maxNum.value == '') {
    numbersArray.push(" " + n);
    outputShuf.value = numbersArray;
  } else if (minNum.value != '' && maxNum.value != '' && baseNum.value == '') {
    for (let i = min; i <= max; i++) {
      numbersArray.push(" " + i);
    }
    outputShuf.value = numbersArray;
    confirmBtn.disabled = true;
  } else {
    outputShuf.value = 'Error';
  }
}

function arrRandomizer(array) {
  let newArr = [];
  while (array.length) {
    let random = Math.floor(Math.random() * array.length);
    let splicedArr = array.splice(random, 1);
    let splicedNum = splicedArr[0];
    newArr.push(splicedNum);
  }
  numbersArray = newArr;
  outputShuf.value = numbersArray;
}

function resetArray() {
  numbersArray = [];
  confirmBtn.disabled = false;
}

function reset(n) {
  baseNum.value = '';
  maxNum.value = '';
  minNum.value = '';
  if (n === 1) {
    outputShuf.value = '';
  }
}