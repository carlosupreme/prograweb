const promediarBtn = document.getElementById("promediarBtn");

promediarBtn.addEventListener("click", (e) => {
    e.preventDefault()

    const result = document.getElementById("result");
    let promedio = 0

    for (let i = 1; i <6; i++) {
        promedio += parseInt(document.getElementById("num" + i).value)
    }

    result.setAttribute("value", promedio / 5);
    result.removeAttribute("hidden");
})