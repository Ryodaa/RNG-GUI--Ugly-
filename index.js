let output = document.querySelector("div.output");
let preview = document.querySelector("div.previewInputCurrent");

function spinToWin(n) {
    let checkboxInput = document.getElementsByClassName("form-check-input");

    if (n <= -1 || n >= 1e7) {
      output.innerHTML = "Error";
    } else {
        if(checkboxInput.inlineCheckbox1.checked == true) {
            let num = Math.floor(Math.random() * (n - 0 + 1));
            output.innerHTML = num;
        } else if (checkboxInput.inlineCheckbox1.checked == false) {
            let num = Math.floor(Math.random() * (n - 1 + 1)) + 1;
            output.innerHTML = num;
        }
    }
  }

var numbersArray = [];

function push(n, min, max) {
    let baseNum = document.querySelector('input#number');
    let minNum = document.querySelector('input#min-number');
    let maxNum = document.querySelector('input#max-number');

    if (baseNum.value != '' && minNum.value == '' && maxNum.value == '') {
        numbersArray.push(n);
        baseNum.value = '';
        output.innerHTML = numbersArray;
        preview.innerHTML = numbersArray[numbersArray.length - 1];
    } else if (minNum.value != '' && maxNum.value != '' && baseNum.value == '') {
        for (let i = min; i <= max; i++) {
            numbersArray.push(i);
            output.innerHTML = numbersArray;
        }
    } else {
        output.innerHTML = "Error";
    }
}

function arrRandomizer(array) {
    var newArr = [];
    while(array.length) {
        var random = Math.floor(Math.random() * array.length);
        var splicedArr = array.splice(random, 1);
        var splicedNum = splicedArr[0];
        newArr.push(splicedNum);
    }
    numbersArray = newArr;
    output.innerHTML = numbersArray;
    preview.innerHTML = 'Placeholder';
}

// Old functions

// function pushRange(min, max) {
//     for (let i = min; i < max; i++) {
//         numbersArray.push(i);
//     }
// }

// function pushNumber(n) {
//     numbersArray.push(n);
//     document.querySelector("input#number").value = '';
//     document.querySelector("div.previewInputCurrent").innerHTML = numbersArray[numbersArray.length - 1];
//     document.querySelector("div.previewInputFull").innerHTML = numbersArray;
// }
