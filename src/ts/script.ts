const form = document.querySelector(".app") as HTMLFormElement;
const calculateBtn = document.querySelector(
  ".app__calculate-btn"
) as HTMLButtonElement;

const clearField = (field: HTMLInputElement) => {
  field.value = "0,00";
};

const calculateTip = (value: number, percentage: number): number => {
  const tipValue: number = (percentage / 100) * value;
  return value + tipValue;
};

const showTip = (tipValue: number) => {
  const output = document.querySelector(
    ".app__total__value"
  ) as HTMLSpanElement;

  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });

  output.textContent = formatter.format(tipValue);
};

const toggleEnableBtn = (
  valueInput: HTMLInputElement,
  percentageInput: HTMLInputElement
) => {
  if (
    !isNaN(parseFloat(valueInput.value)) &&
    !isNaN(parseFloat(percentageInput.value))
  ) {
    calculateBtn.removeAttribute("disabled");
  } else {
    calculateBtn.setAttribute("disabled", "true");
  }
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const valueInput = document.querySelector("#value") as HTMLInputElement;
  const percentageInput = document.querySelector(
    "#percentage"
  ) as HTMLInputElement;

  const value: number = parseFloat(valueInput.value);
  const percentage: number = parseFloat(percentageInput.value);
  const tipValue: number = calculateTip(value, percentage);

  showTip(tipValue);

  clearField(valueInput);
  clearField(percentageInput);

  calculateBtn.setAttribute("disabled", " ");
});

form.addEventListener("change", () => {
  const valueInput = document.querySelector("#value") as HTMLInputElement;
  const percentageInput = document.querySelector(
    "#percentage"
  ) as HTMLInputElement;

  toggleEnableBtn(valueInput, percentageInput);
});
