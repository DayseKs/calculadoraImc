function imcCalculation() {
  let weight = parseFloat(document.getElementById("weight").value);
  let height = parseFloat(document.getElementById("height").value);
  let valueImc = document.querySelector(".imc-value");
  let classification = document.querySelector(".classification");
  let imc = weight / Math.pow(height, 2);

  if (imc < 18.5) {
    valueImc.textContent = imc.toFixed(2);
    classification.textContent = "VOCÊ ESTÁ ABAIXO DO PESO";
    classification.style.color = "#ffa200";
  } else if (imc >= 18.5 && imc < 25) {
    valueImc.textContent = imc.toFixed(2);
    classification.textContent = "VOCÊ ESTÁ COM PESO NORMAL";
    classification.style.color = "#008200";
  } else if (imc >= 25 && imc < 30) {
    valueImc.textContent = imc.toFixed(2);
    classification.textContent = "VOCÊ ESTÁ COM SOBREPESO";
    classification.style.color = "#ed7b7d";
  } else {
    valueImc.textContent = imc.toFixed(2);
    classification.textContent = "VOCÊ ESTÁ COM OBESIDADE";
    classification.style.color = "#bf0839";
  }
}

const btnRestart = document.getElementById("restart");
btnRestart.addEventListener("click", () => {
  weight.value = "0";
  height.value = "0";

  let valueImc = document.querySelector(".imc-value");
  let classification = document.querySelector(".classification");

  valueImc.textContent = "0";
  classification.textContent = "";
});

const btnCalculate = document.getElementById("calculate");
btnCalculate.addEventListener("click", () => {
  imcCalculation();
});
