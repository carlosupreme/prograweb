function calcular() {
    const numerosInput = document.getElementById("numeros");
    const mayorInput = document.getElementById("mayor");
    const menorInput = document.getElementById("menor");
    const promedioInput = document.getElementById("promedio");
    const errorMsg = document.getElementById("error-msg");

    // Obtener los números ingresados
    let numerosTexto = numerosInput.value.trim();
    
    // Validaciones
    if (numerosTexto === "") {
        numerosInput.classList.add("is-invalid");
        errorMsg.style.display = "block";
        mayorInput.value = menorInput.value = promedioInput.value = "";
        return;
    }

    // Convertir la cadena a un arreglo de números
    let numerosArray = numerosTexto.split(",").map(num => num.trim());
    
    // Verificar que todos los elementos del arreglo sean números válidos
    if (numerosArray.some(isNaN)) {
        numerosInput.classList.add("is-invalid");
        errorMsg.style.display = "block";
        mayorInput.value = menorInput.value = promedioInput.value = "";
        return;
    } else {
        numerosInput.classList.remove("is-invalid");
        errorMsg.style.display = "none";
    }

    // Convertir el arreglo de cadenas a números
    let numeros = numerosArray.map(Number);

    // Calcular el número mayor, menor y promedio
    let mayor = Math.max(...numeros);
    let menor = Math.min(...numeros);
    let promedio = (numeros.reduce((acc, valor) => acc + valor, 0) / numeros.length).toFixed(2);

    // Mostrar los resultados
    mayorInput.value = mayor;
    menorInput.value = menor;
    promedioInput.value = promedio;
}