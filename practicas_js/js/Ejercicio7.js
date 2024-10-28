let estudiantes = [];

function agregarEstudiante() {
    const nombreInput = document.getElementById("nombre");
    const calificacionInput = document.getElementById("calificacion");
    const nombreError = document.getElementById("nombreError");
    const calificacionError = document.getElementById("calificacionError");

    const nombre = nombreInput.value.trim();
    const calificacion = parseFloat(calificacionInput.value);

    // Validaciones
    if (nombre === "") {
        nombreInput.classList.add("is-invalid");
        nombreError.style.display = "block";
        return;
    } else {
        nombreInput.classList.remove("is-invalid");
        nombreError.style.display = "none";
    }

    if (isNaN(calificacion) || calificacion < 0 || calificacion > 100) {
        calificacionInput.classList.add("is-invalid");
        calificacionError.style.display = "block";
        return;
    } else {
        calificacionInput.classList.remove("is-invalid");
        calificacionError.style.display = "none";
    }

    // Crear objeto estudiante y agregarlo al arreglo
    estudiantes.push({ nombre: nombre, calificacion: calificacion });

    // Limpiar los campos
    nombreInput.value = "";
    calificacionInput.value = "";

    alert("Estudiante agregado con éxito.");
}

function calcular() {
    if (estudiantes.length === 0) {
        alert("No se han agregado estudiantes.");
        return;
    }

    const promedioInput = document.getElementById("promedio");
    const mayorInput = document.getElementById("mayor");
    const menorInput = document.getElementById("menor");

    // Calcular el promedio
    const promedio = (estudiantes.reduce((total, estudiante) => total + estudiante.calificacion, 0) / estudiantes.length).toFixed(2);

    // Encontrar la calificación más alta y más baja
    const calificacionMaxima = Math.max(...estudiantes.map(e => e.calificacion));
    const calificacionMinima = Math.min(...estudiantes.map(e => e.calificacion));

    // Encontrar los estudiantes con la calificación más alta y más baja
    const estudianteMayor = estudiantes.find(e => e.calificacion === calificacionMaxima);
    const estudianteMenor = estudiantes.find(e => e.calificacion === calificacionMinima);

    // Mostrar los resultados
    promedioInput.value = promedio;
    mayorInput.value = estudianteMayor.nombre + " - " + estudianteMayor.calificacion;
    menorInput.value = estudianteMenor.nombre + " - " + estudianteMenor.calificacion;
}