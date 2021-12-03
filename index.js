function spinToWin(n) {
    if (n <= -1 || n >= 10000000) {
      document.querySelector("div.output").innerHTML = "Error";
    } else {
        if(document.getElementsByClassName("form-check-input").inlineCheckbox1.checked == true) {
            var num = Math.floor(Math.random() * (n - 0 + 1));
            document.querySelector("div.output").innerHTML = num;
            return num;
        } else if (document.getElementsByClassName("form-check-input").inlineCheckbox1.checked == false) {
            var num = Math.floor(Math.random() * (n - 1 + 1)) + 1;
            document.querySelector("div.output").innerHTML = num;
            return num;
        }
    }
  }

var numbersArray = [];

function push(n, min, max) {
    if (document.querySelector('input#number').value != '' && document.querySelector('input#min-number').value == '' && document.querySelector('input#max-number').value == '') {
        numbersArray.push(n);
        document.querySelector("input#number").value = '';
        document.querySelector("div.previewInputCurrent").innerHTML = numbersArray[numbersArray.length - 1];
        document.querySelector("div.previewInputFull").innerHTML = numbersArray;
    } else if (document.querySelector('input#min-number').value != '' && document.querySelector('input#max-number').value != '' && document.querySelector('input#number').value == '') {
        for (let i = min; i <= max; i++) {
            numbersArray.push(i);
            document.querySelector("div.previewInputFull").innerHTML = numbersArray;
        }
    } else {
        document.querySelector("div.output").innerHTML = "Error";
    }
}

// The Old functions

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

function arrRandomizer(array) {
    var newArr = [];
    while(array.length) {
        var random = Math.floor(Math.random() * array.length);
        var splicedArr = array.splice(random, 1);
        var splicedNum = splicedArr[0];
        newArr.push(splicedNum);
    }
    document.querySelector("div.output").innerHTML = newArr;
    document.querySelector("div.previewInputCurrent").innerHTML = 'Placeholder';
    document.querySelector("div.previewInputFull").innerHTML = 'Placeholder';
}