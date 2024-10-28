function verificarVoto() {
    const edadInput = document.getElementById("edad");
    const resultadoInput = document.getElementById("resultado");
    const errorMsg = document.getElementById("error-msg");

    // Obtener valor ingresado
    let edad = edadInput.value;

    // Validaciones
    if (edad === "" || isNaN(edad) || edad <= 0) {
        edadInput.classList.add("is-invalid");
        errorMsg.style.display = "block";
        resultadoInput.value = "";
    } else {
        edadInput.classList.remove("is-invalid");
        errorMsg.style.display = "none";

        // Evaluar si la edad es suficiente para votar
        if (edad >= 18) {
            resultadoInput.value = "Puedes votar";
        } else {
            resultadoInput.value = "No puedes votar";
        }
    }
}