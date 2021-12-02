function spinToWin(n) {
    if (n <= -1) {
      var result = "Error";
      document.querySelector("div.output").innerHTML = result;
      return result;
    } else {
      var result = Math.floor(Math.random() * n);
      document.querySelector("div.output").innerHTML = result;
      return result;
    }
  }
  