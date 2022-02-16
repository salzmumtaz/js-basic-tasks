function spin() {
  var data = document.getElementById("spinAndWin").value;
  console.log(data);
  var randomNumber = Math.floor(Math.random() * 11) + 1;
  console.log(randomNumber);
  //var game = data === randomNumber ? `Good work` : `Not matched`;
  console.log(data);
  var check =
    data == ""
      ? `enter a number`
      : data == randomNumber
      ? "good work "
      : "not matched";

  // if (data !== NaN) {
  //   var check = data === randomNumber ? `Good work` : `Not matched`;
  // } else {
  //   `Enter a number`;
  // }
  // var game = data !== null ?
  //   data === randomNumber
  //     ? `Good work`
  //     : data === null
  //     ? `enter a number`
  //     : `Not matched`;
  document.getElementById("spin").innerHTML = check;
  // alert("hy");
}

// var data = NaN;
// if (data !== NaN) {
//   console.log("not");
// } else {
//   console.log("yes");
// }
