import { setError } from "./setError.js";

export default function ConversorDistancia() {
    const input = document.createElement("input");
    input.setAttribute("id", "inputKm");
    input.setAttribute("type", "number");
    input.setAttribute("placeholder", "Kilometros");

    const convertirBtn = document.createElement("button");
    convertirBtn.innerText = "Convertir a millas"
    convertirBtn.setAttribute("id", "convertirBtn");

    const resultado = document.createElement("input");
    resultado.setAttribute("id", "conversorDistanciaResult");
    resultado.setAttribute("readonly", true);

    convertirBtn.addEventListener("click", () => {
        if (!input || input.value.length == 0 || isNaN(input.value)) {
            setError("Ingresa un numero");
            return false;
        }

        let millas = parseFloat(input.value) * 0.621371;
        resultado.setAttribute("value", millas);
    })

    const container = document.createElement("div");
    container.insertAdjacentElement("beforeend", input);
    container.insertAdjacentElement("beforeend", convertirBtn)
    container.insertAdjacentElement("beforeend", resultado)

    return container;
}