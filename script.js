/**
 * Calcula el factorial de un número positivo.
 * @function calcularFactorial
 * @returns {void} Muestra el resultado en el elemento con id "resultadoFactorial".
 */
function calcularFactorial() {
    const numero = parseInt(document.getElementById("numeroFactorial").value);
    const resultadoDiv = document.getElementById("resultadoFactorial");

    if (isNaN(numero) || numero < 0) {
        resultadoDiv.textContent = "Por favor, introduce un número positivo.";
        return;
    }

    let result = 1;
    for (let i = 2; i <= numero; i++) {
        result *= i;
    }
    resultadoDiv.textContent = `Factorial de ${numero}: ${result}`;
}

/**
 * Calcula la media aritmética de una lista de números separados por comas.
 * @function calcularMediaAritmetica
 * @returns {void} Muestra el resultado en el elemento con id "resultadoMedia".
 */
function calcularMediaAritmetica() {
    const listaNumeros = document.getElementById("listaNumeros").value.split(",").map(Number);
    const resultadoDiv = document.getElementById("resultadoMedia");

    if (listaNumeros.some(isNaN)) {
        resultadoDiv.textContent = "Por favor, introduce una lista válida de números separados por coma.";
        return;
    }

    const suma = listaNumeros.reduce((acc, num) => acc + num, 0);
    const media = suma / listaNumeros.length;
    resultadoDiv.textContent = `Media aritmética: ${media}`;
}

/**
 * Verifica si una cadena de texto es un palíndromo.
 * Ignora espacios y acentos para hacer la comparación.
 * @function verificarPalindromo
 * @returns {void} Muestra el resultado en el elemento con id "resultadoPalindromo".
 */
function verificarPalindromo() {
    const cadena = document.getElementById("textoPalindromo").value;
    const resultadoDiv = document.getElementById("resultadoPalindromo");

    const cadenaNormalizada = cadena
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // Eliminar acentos
        .replace(/\s/g, ""); // Eliminar espacios
    const cadenaInvertida = cadenaNormalizada.split("").reverse().join("");

    if (cadenaNormalizada === cadenaInvertida) {
        resultadoDiv.textContent = `"${cadena}" es un palíndromo.`;
    } else {
        resultadoDiv.textContent = `"${cadena}" no es un palíndromo.`;
    }
}

/**
 * Verifica si un DNI (Documento Nacional de Identidad) es válido.
 * El DNI debe tener 8 dígitos seguidos de una letra. La letra se valida de acuerdo al número.
 * @function verificarDNI
 * @returns {void} Muestra el resultado en el elemento con id "resultadoDNI".
 */
function verificarDNI() {
    const dni = document.getElementById("dni").value;
    const resultadoDiv = document.getElementById("resultadoDNI");

    const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    if (dni.length !== 9) {
        resultadoDiv.textContent = "Formato de DNI incorrecto.";
        return;
    }

    const numero = dni.slice(0, 8);
    const letra = dni.slice(8).toUpperCase();

    if (!/^\d{8}$/.test(numero)) {
        resultadoDiv.textContent = "Formato de DNI incorrecto.";
        return;
    }

    const letraCorrecta = letras[numero % 23];
    if (letra === letraCorrecta) {
        resultadoDiv.textContent = "DNI válido.";
    } else {
        resultadoDiv.textContent = "DNI inválido.";
    }
}
