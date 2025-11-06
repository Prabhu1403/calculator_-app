let input = document.querySelector("input");

function getClick(inputVal) {
  input.value += inputVal;
}

function delVal(params) {
  input.value = input.value.slice(0, input.value.length - 1);
}

function Clearval(params) {
  input.value = "";
}

function Return(params) {
  input.value = eval(input.value);
}
