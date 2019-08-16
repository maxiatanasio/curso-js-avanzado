const padreContainer = document.querySelector('#padre-container');
const hijoContainer = document.querySelector('#hijo-container');
const nietoContainer = document.querySelector('#nieto-container');

const padre2Container = document.querySelector('#padre2-container');
const hijo2Container = document.querySelector('#hijo2-container');
const nieto2Container = document.querySelector('#nieto2-container');

const handleClick = function(e) {
    //Si utilizamos funciones tradicionales, podemos usar 
    //this en vez de e.currentTarget

    //e.target hace referencia al elemento original en el cual
    //ocurrio el evento

    //e.currentTarget hace referencia al elemento que esta
    //capturando la propagacion del evento
    console.log(this.id);

    const actualContent = this.children[0].querySelector('span').textContent;
    this.children[0].querySelector('span').textContent = parseInt(actualContent) + 1;
}

padreContainer.addEventListener('click', handleClick);
hijoContainer.addEventListener('click', function(e) {
    e.stopPropagation();
    console.log(this.id);
    const actualContent = this.children[0].querySelector('span').textContent;
    this.children[0].querySelector('span').textContent = parseInt(actualContent) + 1;
});
nietoContainer.addEventListener('click', handleClick);
padre2Container.addEventListener('click', handleClick, true);
hijo2Container.addEventListener('click', function(e) {
    e.stopPropagation();
    console.log(this.id);
    const actualContent = this.children[0].querySelector('span').textContent;
    this.children[0].querySelector('span').textContent = parseInt(actualContent) + 1;
}, true);
nieto2Container.addEventListener('click', handleClick, true);