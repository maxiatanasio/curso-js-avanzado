function handleButtonClick(num) {
    alert('Buenas noches usuario. ' + num);
}

function handleInputFocus() {
    console.log('Input seleccionado!!!');
}

function handleInputBlur() {
    console.log('Input deseleccionado');
}

function handlePaisesChange(paisValue) {
    const paisOptionElem = document.querySelector("select#paises option[value='"+paisValue+"']");
    console.log(paisOptionElem.textContent);
}

//Ahora vamos a asignar acciones a los eventos del usuario

//1) Obtener el elemento
const apretameButton = document.querySelector('#apretameBtn');

//2) Asignar al evento un reaccion o una respuesta
apretameButton.onclick = function() {
    const num = Math.floor(Math.random() * 100);
    handleButtonClick(num);
};

//Ahora hacemos el resto
const inputField = document.querySelector('#inputField');
inputField.onFocus = function() {
    handleInputFocus();
}
inputField.onBlur = function() {
    handleInputBlur();
}

const selectPaises = document.querySelector('#paises');
selectPaises.onchange = function(event) {
    handlePaisesChange(event.target.value);
}



