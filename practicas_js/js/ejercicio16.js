const sumarBtn = document.getElementById("sumBtn")

function sumar(e) {
    e.preventDefault();
    
    const num1 = parseInt(document.getElementById("num1")?.value)
    const num2 = parseInt(document.getElementById("num2")?.value)

    const resultInput = document.getElementById("result")
    resultInput.setAttribute("value", num1 + num2)
    resultInput.removeAttribute("hidden")
}


sumarBtn.addEventListener("click", sumar)

