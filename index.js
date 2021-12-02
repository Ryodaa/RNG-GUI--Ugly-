function spinToWin(n) {
    if (n <= -1 || n >= 10000000) {
      var result = "Error";
      document.querySelector("div.output").innerHTML = result;
      return result;
    } else {
      var result = Math.floor(Math.random() * n);
      document.querySelector("div.output").innerHTML = result;
      return result;
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