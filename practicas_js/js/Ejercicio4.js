        // Tasa de cambio predefinida
        const tasaDeCambio = 0.055; // 1 USD = 18.18 MXN

        function convertir() {
            const pesosInput = document.getElementById("pesos");
            const dolaresInput = document.getElementById("dolares");
            const errorMsg = document.getElementById("error-msg");

            // Obtener valor ingresado
            let pesos = pesosInput.value;

            // Validaciones
            if (pesos === "" || isNaN(pesos) || pesos <= 0) {
                pesosInput.classList.add("is-invalid");
                errorMsg.style.display = "block";
                dolaresInput.value = "";
            } else {
                pesosInput.classList.remove("is-invalid");
                errorMsg.style.display = "none";

                // Realizar la conversión
                let dolares = (pesos * tasaDeCambio).toFixed(2);
                
                // Mostrar el resultado en el campo de texto readonly
                dolaresInput.value = dolares;
            }
        }