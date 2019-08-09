//1) Obtener los elementos que me interesan
const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const passwordInput = document.querySelector('#password');

const handleInputChange = (input) => {
    if(input.value === '') {
        input.classList.add('is-invalid');
        input.classList.remove('is-valid');
    } else {
        input.classList.add('is-valid');
        input.classList.remove('is-invalid');
    }
}

const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    input.addEventListener('keyup', function(e) {
        handleInputChange(e.target);
    });
    input.addEventListener('mouseup', function(e) {
        handleInputChange(e.target);
    });
});

const handleSubmit = e => {

    const formData = {
        name: nameInput.value,
        password: passwordInput.value
    }

    //todo: Crear las validaciones que yo quiera

    console.log(12);

    e.preventDefault();

}

form.addEventListener('submit', handleSubmit);
