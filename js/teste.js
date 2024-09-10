let botaoAdicionarAndar = document.querySelector('#botaoAdicionarAndar');
let predioEl = document.querySelector("#predio");
let primeiroAndarEl = document.querySelector("#primeiroAndar");
let andarUm = document.querySelector(".andar");
let quantidadeAndares;
let andarVerde;
let imagemAndar;

function andarSelecionado(){
    let andarVerde = document.createElement("img");
    andarVerde.src = "img/andarVerde.png";
    andarVerde.className = "andar";
    predioEl.replaceChild(andarVerde, this);
};

function adicionarAndar(){
    quantidadeAndares = document.querySelectorAll(".andar").length;
    if(quantidadeAndares < 5){
        imagemAndar = document.createElement("img");
        imagemAndar.src = "img/andar.png";
        imagemAndar.className = "andar";
        imagemAndar.addEventListener('click', andarSelecionado);
        predioEl.insertBefore(imagemAndar, primeiroAndarEl);
    }if(quantidadeAndares == 4){
        predioEl.removeChild(botaoAdicionarAndar);
    }
};

botaoAdicionarAndar.addEventListener('click', adicionarAndar);
andarUm.addEventListener('click', andarSelecionado);
primeiroAndarEl.addEventListener('click', function(){
    primeiroAndarEl = document.createElement("img");
    primeiroAndarEl.src = "img/primeiroAndarVerde.png";
    primeiroAndarEl.id = "primeiroAndar";
    predioEl.replaceChild(primeiroAndarEl, this);
});
