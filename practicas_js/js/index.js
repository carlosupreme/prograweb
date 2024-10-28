import ConversorDistancia from "./ejercicio3.js";

window.addEventListener("DOMContentLoaded", index)

function index() {
    const selector = document.getElementsByTagName("select")[0];
    selector.addEventListener("change", () => {
        const selected = selector.options[selector.selectedIndex].value;
        const conversors = {
            temperatura: "ejercicio1",
            distancia: ConversorDistancia(),
            peso: "ejercicio5",
        }

        if (conversors[selected]) {
            setConversor(conversors[selected]);
        }
    })
}


function setConversor(conversor) {
    const container = document.getElementById("conversor");
    container.innerHTML = null;
    container.insertAdjacentElement("beforeend", conversor);
}
