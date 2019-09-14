let i = 0;

theLabel = document.querySelector("#popularity-value");
let interval = setInterval(function() {
  if (i == 1680) {
    clearInterval(interval);
  }
  theLabel.innerHTML = i;
  i++;
}, 1);

var j = 0;
theLabel2 = document.querySelector("#customers-value");
var interval2 = setInterval(function() {
  if (j == 1200) {
    clearInterval(interval2);
  }
  theLabel2.innerHTML = j;
  j++;
}, 1);

var k = 0;
label3 = document.querySelector("#awards-value");
var interval3 = setInterval(function() {
  if (k == 400) {
    clearInterval(interval3);
  }
  label3.innerHTML = k;
  k++;
}, 1);
