// FUNCTION TO CHANGE THE BACKGROUND COLOR
const cor = document.querySelector('#cor');
const btn = document.querySelector('#set');
const body = document.querySelector('body');

btn.addEventListener('click', function(){
    body.style.background = cor.value;

});

// THIS FUNCTION WILL GET THE RGB CODE & EXADECIMAL
const get = document.querySelector('#pegar');
get.addEventListener('click', function(){
    const obterCodigo = document.querySelector('.obter');
    obterCodigo.innerHTML = cor.value;
});
