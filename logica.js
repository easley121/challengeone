function validateInput(element) {
  // Utilizamos una expresión regular para verificar si el texto contiene solo letras minúsculas del alfabeto inglés
  element.value = element.value.toLowerCase().replace(/[^a-z]+/g, '');
}


function encryptText() {
  var inputText = document.getElementById("inputText").value;
  var encryptedText = "";
  
  for (var i = 0; i < inputText.length; i++) {
      switch (inputText[i]) {
          case "e":
              encryptedText += "enter";
              break;
          case "i":
              encryptedText += "imes";
              break;
          case "a":
              encryptedText += "ai";
              break;
          case "o":
              encryptedText += "ober";
              break;
          case "u":
              encryptedText += "ufat";
              break;
          default:
              encryptedText += inputText[i];
      }
  }
  
  document.getElementById("outputText").innerText = "" + encryptedText;
}

function decryptText() {
  var inputText = document.getElementById("inputDecrypt").value;
    var decryptedText = "";

    var i = 0;
    while (i < inputText.length) {
        switch (inputText.slice(i, i+5)) {
          case "ai":
                decryptedText += "a";
                i += 5;
                break;  
          case "enter":
                decryptedText += "e";
                i += 5;
                break;
            case "imes":
                decryptedText += "i";
                i += 5;
                break;
            case "ober":
                decryptedText += "o";
                i += 5;
                break;
            case "ufat":
                decryptedText += "u";
                i += 5;
                break;
            default:
                decryptedText += inputText[i];
                i++;
        }
    }
    
  document.getElementById("decryptionResult").innerText = "" + decryptedText;
}

function clearAllText() {
  document.getElementById("inputEncrypt").value = "";
  document.getElementById("inputDecrypt").value = "";
  document.getElementById("encryptionResult").innerText = "";
  document.getElementById("decryptionResult").innerText = "";
}