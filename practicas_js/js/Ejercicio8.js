        // Funciones flecha para operaciones básicas
        const sumar = (a, b) => a + b;
        const restar = (a, b) => a - b;
        const multiplicar = (a, b) => a * b;
        const dividir = (a, b) => b !== 0 ? a / b : 'Error: División por cero';

        // Función principal que coordina las operaciones
        const calcularOperacion = (operacion) => {
            const numero1 = parseFloat(document.getElementById('numero1').value);
            const numero2 = parseFloat(document.getElementById('numero2').value);
            const resultadoInput = document.getElementById('resultado');

            // Validación de los números
            if (isNaN(numero1) || isNaN(numero2)) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Por favor, ingrese números válidos.',
                    confirmButtonText: 'Aceptar'
                });
                return;
            }

            // Ejecutar la operación seleccionada
            let resultado;
            switch (operacion) {
                case 'suma':
                    resultado = sumar(numero1, numero2);
                    break;
                case 'resta':
                    resultado = restar(numero1, numero2);
                    break;
                case 'multiplicacion':
                    resultado = multiplicar(numero1, numero2);
                    break;
                case 'division':
                    resultado = dividir(numero1, numero2);
                    break;
                default:
                    resultado = 'Operación desconocida';
            }

            // Mostrar el resultado en el campo readonly
            resultadoInput.value = resultado;
        }