
//Catalogo para encriptar
const encryptionMap = {
  'e': 'enter',
  'i': 'imes',
  'a': 'ai',
  'o': 'ober',
  'u': 'ufat'
};
//Catalogo para des encriptar
const decryptionMap = {
  'enter': 'e',
  'imes': 'i',
  'ai': 'a',
  'ober': 'o',
  'ufat': 'u'
};

function validateInput(element) {
  // Utilizamos una expresión regular para verificar si el texto contiene solo letras minúsculas del alfabeto inglés
  element.value = element.value.toLowerCase().replace(/[^a-z]+/g, '');
}

// Función para encriptar el texto ingresado por el usuario
function encryptText() {
  // Obtiene el texto ingresado por el usuario desde el campo de entrada correspondiente
  const inputText = document.getElementById("entradaTexto").value;
  
  // Llama a la función processText para encriptar el texto utilizando el mapa de encriptación
  const encryptedText = processText(inputText, encryptionMap);
  
  // Muestra el resultado de la encriptación en la interfaz de usuario
  document.getElementById("result").innerText = encryptedText;
}

// Función para desencriptar el texto ingresado por el usuario
function decryptText() {
  // Obtiene el texto ingresado por el usuario desde el campo de entrada correspondiente
  const inputText = document.getElementById("entradaTexto").value;
  
  // Llama a la función processText para desencriptar el texto utilizando el mapa de desencriptación
  const decryptedText = processText(inputText, decryptionMap);
  
  // Muestra el resultado de la desencriptación en la interfaz de usuario
  document.getElementById("result").innerText =  decryptedText;
}


function processText(inputText, map) {
  let resultText = "";
  let i = 0;

  // Bucle principal para recorrer el texto de entrada
  while (i < inputText.length) {
      let foundMatch = false;

      // Bucle interno para buscar subcadenas desde el final hasta el inicio del texto
      for (let j = inputText.length; j > i; j--) {
          const substr = inputText.substring(i, j);

          // Si la subcadena se encuentra en el mapa de desencriptación
          if (map.hasOwnProperty(substr)) {
              // Agrega el valor desencriptado al resultado
              resultText += map[substr];
              // Actualiza el índice para apuntar al próximo carácter no procesado
              i = j;
              // Indica que se encontró una coincidencia
              foundMatch = true;
              // Sale del bucle interno
              break;
          }
      }

      // Si no se encontró ninguna coincidencia, conserva el carácter original
      if (!foundMatch) {
          resultText += inputText[i];
          i++;
      }
  }

  // Devuelve el resultado desencriptado
  return resultText;
}

//Funcion para borrar el texto de todos los elementos
function clearAllText() {
  document.getElementById("entradaTexto").value = "";
  document.getElementById("result").innerText = "";
}