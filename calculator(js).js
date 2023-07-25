import "./styles.css";
var operand1 = 0;
var operand2 = 0;
var loperand1 = 0;
var loperand2 = 0;
var operator;
var result;

var disp = document.getElementById("display");
document.getElementById("app").innerHTML = ``;
var seven = document.getElementById("seven");
seven.addEventListener("click", function () {
  disp.innerHTML += 7;
});

var eight = document.getElementById("eight");
eight.addEventListener("click", function () {
  disp.innerHTML += 8;
});
var nine = document.getElementById("nine");
nine.addEventListener("click", function () {
  disp.innerHTML += 9;
});
var mul = document.getElementById("mul");
mul.addEventListener("click", function () {
  operand1 = disp.innerHTML;
  loperand1 = parseFloat(operand1);
  operator = "*";
  disp.innerHTML = "";
});
var four = document.getElementById("four");
four.addEventListener("click", function () {
  disp.innerHTML += 4;
});
var five = document.getElementById("five");
five.addEventListener("click", function () {
  disp.innerHTML += 5;
});
var six = document.getElementById("six");
six.addEventListener("click", function () {
  disp.innerHTML += 6;
});

var sub = document.getElementById("sub");
sub.addEventListener("click", function () {
  operand1 = disp.innerHTML;
  loperand1 = parseFloat(operand1);
  operator = "-";
  disp.innerHTML = "";
});
var one = document.getElementById("one");
one.addEventListener("click", function () {
  disp.innerHTML += 1;
});
var two = document.getElementById("two");
two.addEventListener("click", function () {
  disp.innerHTML += 2;
});
var three = document.getElementById("three");
three.addEventListener("click", function () {
  disp.innerHTML += 3;
});
var add = document.getElementById("add");
add.addEventListener("click", function () {
  operand1 = disp.innerHTML;
  loperand1 = parseFloat(operand1);
  operator = "+";
  disp.innerHTML = "";
});
var dot = document.getElementById("dot");
dot.addEventListener("click", function () {
  disp.innerHTML = ".";
});
var percentile = document.getElementById("percentile");
percentile.addEventListener("click", function () {
  operand1 = disp.innerHTML;
  loperand1 = parseFloat(operand1);
  operator = "%";
  disp.innerHTML = "";
});
var zero = document.getElementById("zero");
zero.addEventListener("click", function () {
  disp.innerHTML += 0;
});
var divide = document.getElementById("divide");
divide.addEventListener("click",function(){
  operand1 = disp.innerHTML;
  loperand1 = parseFloat(operand1);
  operator = "/";
  disp.innerHTML = "";
})
var equal = document.getElementById("equal");
equal.addEventListener("click", function () {
  operand2 = disp.innerHTML;
  loperand2 = parseFloat(operand2);
  if (operator == "+") {
    result = loperand1 + loperand2;
  }
  if (operator == "-") {
    result = loperand1 - loperand2;
  }
  if (operator == "/") {
    result = loperand1 / loperand2;
  }
  if (operator == "*") {
    result = loperand1 * loperand2;
  }
  if (operator == "%") {
    result = loperand1 % loperand2;
  }
  disp.innerHTML = result;
});
var AC = document.getElementById("AC");
AC.addEventListener("click", function () {
  disp.innerHTML = "";
});
