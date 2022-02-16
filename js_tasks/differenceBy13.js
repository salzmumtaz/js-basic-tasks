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

// function difference(data) {
//   var data = parseInt(data);
//   var newDifference = 13 - data;
//   var big = newDifference * 2;
//   var result = newDifference > 13 ? `${big}` : data;
//   return result;
// }
// console.log(difference(66));

// function minus(b) {
//   var z = 13 - b;
//   return z;
// }
// console.log(minus(66));
