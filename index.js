function spinToWin(n) {
    if (n <= -1 || n >= 10000000) {
      var num = "Error";
      document.querySelector("div.output").innerHTML = num;
      return num;
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

function arrRandomizer(array) {
    var newArr = [];
    while(array.length) {
        var random = Math.floor(Math.random() * array.length);
        var splicedArr = array.splice(random, 1);
        var splicedNum = splicedArr[0];
        newArr.push(splicedNum);
    }
    return newArr;
}