"use strict";
var form = document.querySelector(".app");
var calculateBtn = document.querySelector(".app__calculate-btn");
var clearField = function (field) {
    field.value = "0";
};
var calculateTip = function (value, percentage) {
    percentage /= 100;
    return percentage * value;
};
var showTip = function (tipValue) {
    var output = document.querySelector(".app__total__value");
    var formatter = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 2,
    });
    output.textContent = formatter.format(tipValue);
};
var toggleEnableBtn = function (valueInput, percentageInput) {
    if (!isNaN(parseFloat(valueInput.value)) &&
        !isNaN(parseFloat(percentageInput.value))) {
        calculateBtn.removeAttribute("disabled");
    }
    else {
        calculateBtn.setAttribute("disabled", "true");
    }
};
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var valueInput = document.querySelector("#value");
    var percentageInput = document.querySelector("#percentage");
    var value = parseFloat(valueInput.value);
    var percentage = parseFloat(percentageInput.value);
    var tipValue = calculateTip(value, percentage);
    showTip(tipValue);
    clearField(valueInput);
    clearField(percentageInput);
    calculateBtn.setAttribute("disabled", " ");
});
form.addEventListener("change", function () {
    var valueInput = document.querySelector("#value");
    var percentageInput = document.querySelector("#percentage");
    toggleEnableBtn(valueInput, percentageInput);
});
//# sourceMappingURL=script.js.map