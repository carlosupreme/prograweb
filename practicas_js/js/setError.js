export function setError(message, elementId) {
    const errorLbl = document.getElementById(elementId);
    errorLbl.innerText = message;
}

export function removeError(elementId) {
    const errorLbl = document.getElementById(elementId);
    errorLbl.innerText = null;
}