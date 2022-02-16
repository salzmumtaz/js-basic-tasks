function formatTime() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var amPm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var timeNow = `Current time is: ${hours} ${amPm}: ${minutes} : ${seconds}`;
  document.getElementById("demo").innerHTML = timeNow;
  //document.write(timeNow);
}
//window.onload = formatTime();

// function myName() {
//   setTimeout(console.log("my name is", 2000));
// }

// window.onload = () => {
//   formatTime();
// };
window.onload = formatTime;
