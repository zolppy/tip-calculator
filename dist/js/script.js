"use strict";
var form = document.querySelector(".app");
var calculateBtn = document.querySelector(".app__calculate-btn");
var clearField = function (field) {
    field.value = "";
};
var calculateTip = function (value, percentage) {
    var tipValue = (percentage / 100) * value;
    return value + tipValue;
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
});
//# sourceMappingURL=script.js.map