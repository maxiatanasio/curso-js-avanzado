//1) Crear el objeto XHR
/**
 * Una de las cosas a tener en cuenta
 * es la compatibilidad con los navegadores
 * viejos
 */
let xhr;
if(window.XMLHttpRequest) { //Chrome, zafari, firefox
    xhr = new XMLHttpRequest();
} else { //IE viejos
    xhr = new ActiveXObject('Microsoft.XMLHTTP');
}

console.log(xhr);

/**
 * El readyState es 0, que signifca que no fue configurado
 */
console.log(xhr.readyState);

xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');

/**
 * El readyState es 1, porque el objeto ya fue configurado
 */
console.log(xhr.readyState);

/**
 * Ready State
 * 0 -> Objeto no conigurado
 * 1 -> open(), objeto configurado
 * 2 -> send() y ya recibimos los headers del response
 * 3 -> se esta descargando el body del request
 * 4 -> cuando se termino de descargar completamente
 */

//Aca vamos a definir los listeners
xhr.addEventListener('readystatechange', function() {
    if(this.readyState == 2){ //Headers recibidos
        const headers = parseHeaders(this);
        defineResponseType(this, headers['content-type']);
    }
});

/**
 * El evento load se ejecuta cuando el readyState pasa
 * a 4
 */
xhr.addEventListener('load', function() {
    if(this.status == 200) {
        const posts = this.response;
        posts.forEach(post => {
            createPostElement(post);
        });
    } else {
        alert('Ha ocurrido un error obteniendo los posts');
    }
});

xhr.addEventListener('error', function() {
    alert('Ha ocurrido un error obteniendo los posts');
});

//Vamos a realizar la llamada
xhr.send();

function defineResponseType(xhr, contentType) {

    if(contentType.includes('application/json')) {
        xhr.responseType = 'json';
    } else {
        alert("Ha ocurrido un problema");
    }

}

function createPostElement({body, title}) {

    const card = document.createElement('div');
    card.classList.add('card');
    card.classList.add('mb-3');

    const bodyElem = document.createElement('div');
    bodyElem.classList.add('card-body');

    const titleElem = document.createElement('h5');
    titleElem.classList.add('card-title');
    titleElem.textContent = title;

    const text = document.createElement('p');
    text.classList.add('card-text');
    text.textContent = body;

    bodyElem.appendChild(titleElem);
    bodyElem.appendChild(text);
    card.appendChild(bodyElem);
    
    document.querySelector('#container').appendChild(card);

}

function parseHeaders(xhr) {
    const headersLines = xhr.getAllResponseHeaders().split('\n');
    const headers = [];
    headersLines.forEach(headerLine => {
        if(headerLine) {
            const headerInfo = headerLine.split(':');
            headers[headerInfo[0]] = headerInfo[1].trim();
        }
    });
    return headers;

}