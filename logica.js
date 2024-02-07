let textoOriginal = '';
let vocalesArray = [];

function convertirATexto() {
  let texto = document.getElementById("textoInput").value;
  textoOriginal = texto;
  document.getElementById("resultado").textContent = textoOriginal;
}

function convertirAArray() {
  vocalesArray = textoOriginal.match(/[aeiou]/gi);
  document.getElementById("resultado").textContent = vocalesArray.join(", ");
}
