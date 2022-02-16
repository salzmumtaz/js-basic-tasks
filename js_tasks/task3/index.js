function difference() {
  var data = document.getElementById("diffBy13").value;
  var newDifference = 13 - data;
  var newDifference = parseInt(newDifference);
  var big = newDifference * 2;
  var result =
    data > 13
      ? `${big}`
      : newDifference < 13 || newDifference > 13
      ? newDifference
      : `Please enter a number`;
  document.getElementById("thirteen").innerHTML = result;
}
