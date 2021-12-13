let outputShuf = document.getElementsByClassName("outputShuf").outputWindow;
let output = document.querySelector(".output");
let spinBtn = document.querySelector(".spinBtn");
let spinInput = document.querySelector(".spinInput");
let shuffleButton = document.querySelector(".shuffle");
let resetButton = document.querySelector(".resetbtn");
let baseNum = document.querySelector('#number');
let minNum = document.querySelector('#min-number');
let maxNum = document.querySelector('#max-number');
let checkboxInput = document.getElementsByClassName('form-check-input');
let textInputMinMax = document.getElementsByClassName('minMax');
let textInputSingle = document.getElementById('number');
let confirmBtn = document.querySelector('.confirm');
let numbersArray = []; //The array from the comment in line 65

function spinToWin(n) {
  if (n <= -1 || n >= 1e7) {
    output.innerHTML = 'Error';
  } else {
    if (checkboxInput.inlineCheckbox1.checked) {
      let num = Math.floor(Math.random() * (parseInt(n) + 1));
      output.innerHTML = num;
    } else {
      let num = Math.floor(Math.random() * n) + 1;
      output.innerHTML = num;
    }
  }
}

function push(n, min, max) {
  if (max > 250000) {
    outputShuf.value = "Error: Number can't be higher than 250.000";
  } else if (min < -250000) {
    outputShuf.value = "Error: Number can't be lower than -250.000";
  } else {
    if (baseNum.value != '' && minNum.value == '' && maxNum.value == '') {
      numbersArray.push(" " + n);
      numbersArray[0] = numbersArray[0].trim();
      outputShuf.value = numbersArray;
    } else if (minNum.value != '' && maxNum.value != '' && baseNum.value == '') {
      for (let i = min; i <= max; i++) {
        numbersArray.push(" " + i);
      }
      numbersArray[0] = numbersArray[0].trim();
      outputShuf.value = numbersArray;
      confirmBtn.disabled = true;
    } else {
      outputShuf.value = 'Error';
    }
  }
}

function arrRandomizer(arr) {
  let newArr = [];
  numbersArray[0] = " " + numbersArray[0];
  while (arr.length) {
    let random = Math.floor(Math.random() * arr.length);
    let splicedArr = arr.splice(random, 1);
    let splicedNum = splicedArr[0];
    newArr.push(splicedNum);
  }
  numbersArray = newArr; //numbersArray needs to be created outside of the function unless you make this function return an array.
  numbersArray[0] = numbersArray[0].trim();
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

function inputDisable() {
  if (baseNum.value != '') {
    confirmBtn.disabled = false;
    textInputMinMax[0].disabled = true;
    textInputMinMax[1].disabled = true;
  } else if (minNum.value != '' && maxNum.value != '') {
    confirmBtn.disabled = false;
    textInputSingle.disabled = true;
  } else if (minNum.value != '' || maxNum.value != '') {
    textInputSingle.disabled = true;
  } else {
    confirmBtn.disabled = true;
    textInputMinMax[0].disabled = false;
    textInputMinMax[1].disabled = false;
    textInputSingle.disabled = false;
  }

  outputShuf.value != '' ? shuffleButton.disabled = false : shuffleButton.disabled = true;

  if (baseNum.value != '' || maxNum.value != '' || minNum.value != '' || outputShuf.value != '') {
    resetButton.disabled = false;
  } else {
    resetButton.disabled = true;
  }
}