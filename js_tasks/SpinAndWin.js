function spin() {
  var data = parseInt(document.getElementById("spinAndWin").value);
  var randomNumber = Math.floor(Math.random() * 11) + 1;
  var game =
    data === randomNumber
      ? `Good work`
      : data === 0
      ? `enter a number`
      : `Not matched`;
  document.getElementById("spin").innerHTML = game;
  // alert("hy");
}

// console.log(spin(5));
