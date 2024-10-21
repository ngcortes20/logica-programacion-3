//Calcular el factorial de un numero
function calcularFactorial(n) {
    if (n === 0 || n === 1) {     //Si n = 0 OR n = 1
        return 1; //devuelve 1  
    }
    let resultado = 1;

    // Decremento i despues de cada iteracion 
    for (let i = 2; i <= n; i++) {
        //Se guarda el valor de n de cada iteracion
        resultado *= i;
    }
    return resultado; //bota el resultado
}


function solicitarNumero() {
    // Obtenemos el valor ingresado
    let numero = document.getElementById("numero").value;
    //Number(numero) convierte la cadena de texto obtenida a un número. 
    numero = Number(numero); 


    // Verificamos si es un número válido

    //isNaN(numero): Veriefica si la conversión del valor del cuadro de texto a número falló.
    //numero < 0: Verifica que el número no sea negativo.
    if (isNaN(numero) || numero < 0) { 
        alert("Error: Debes introducir un número entero positivo.");
    } else {
        // Calculamos el factorial y mostramos el resultado en el DOM
        let resultadoFactorial = calcularFactorial(numero);
        document.getElementById("resultado").textContent = `El factorial de ${numero} es: ${resultadoFactorial}`;
        console.log(`El factorial de ${numero} es: ${resultadoFactorial}`);
    }
}


//Para que salga en el front
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("calcularBtn").addEventListener("click", solicitarNumero);
});






