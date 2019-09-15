let i = 0;

label = document.querySelector("#popularity-value");
let interval = setInterval(function() {
  if (i == 1680) {
    clearInterval(interval);
  }
  label.innerHTML = i;
  i++;
}, 1);

let j = 0;
label2 = document.querySelector("#customers-value");
let interval2 = setInterval(function() {
  if (j == 1200) {
    clearInterval(interval2);
  }
  label2.innerHTML = j;
  j++;
}, 1);

let k = 0;
label3 = document.querySelector("#awards-value");
let interval3 = setInterval(function() {
  if (k == 400) {
    clearInterval(interval3);
  }
  label3.innerHTML = k;
  k++;
}, 1);
