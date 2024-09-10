let botaoAdicionarAndar = document.querySelector('#botaoAdicionarAndar');
let predioEl = document.querySelector("#predio");
let primeiroAndarEl = document.querySelector("#primeiroAndar");
let ultimoAndar = document.querySelector(".andar");
let quantidadeAndares;
let andarVerde;
let imagemAndar;
var arrayAndares = [primeiroAndarEl, ultimoAndar];
let selecionado = 0;

function andarSelecionado(){
    for(let i = 0; i<arrayAndares.length; i++){
        if(arrayAndares[i].src == "file:///C:/Users/letic/Music/testeHTML/img/andarVerde.png"){
            imagemAndar = document.createElement("img");
            imagemAndar.src = "img/andar.png";
            imagemAndar.className = "andar";
            if(arrayAndares[i] == ultimoAndar){
                ultimoAndar = imagemAndar;
            }
            imagemAndar.addEventListener('click', andarSelecionado);
            predioEl.replaceChild(imagemAndar,  arrayAndares[i]);
            arrayAndares[i].src = "img/andar.png";
            arrayAndares[i] = imagemAndar;
        }
        else if(arrayAndares[i].src == "file:///C:/Users/letic/Music/testeHTML/img/primeiroAndarVerde.png"){
            primeiroAndarEl.src = "img/primeiroAndar.png";
            primeiroAndarEl.id = "primeiroAndar";
            primeiroAndarEl.addEventListener('click', primeiroAndarSelecionado);
            predioEl.replaceChild(primeiroAndarEl,  arrayAndares[i]);
            arrayAndares[i] = primeiroAndarEl;
        }
        else if(arrayAndares[i] == this){
            selecionado = i;
        }
    }

    if(this.src == "file:///C:/Users/letic/Music/testeHTML/img/andar.png"){
        andarVerde = document.createElement("img");
        andarVerde.src = "img/andarVerde.png";
        andarVerde.className = "andar";
        andarVerde.addEventListener('click', andarSelecionado);
        if(this == ultimoAndar){
            ultimoAndar = andarVerde;
        }
        predioEl.replaceChild(andarVerde, this);
        arrayAndares[selecionado] = andarVerde;
    }
};

function adicionarAndar(){
    quantidadeAndares = document.querySelectorAll(".andar").length;
    if(quantidadeAndares < 5){
        imagemAndar = document.createElement("img");
        imagemAndar.src = "img/andar.png";
        imagemAndar.className = "andar";
        imagemAndar.addEventListener('click', andarSelecionado);
        predioEl.insertBefore(imagemAndar, ultimoAndar);
        ultimoAndar = imagemAndar;
    }if(quantidadeAndares == 4){
        predioEl.removeChild(botaoAdicionarAndar);
    }
};

function primeiroAndarSelecionado(){
    primeiroAndarEl = document.createElement("img");
    for(let i = 0; i<arrayAndares.length; i++){
        if(arrayAndares[i].src == "file:///C:/Users/letic/Music/testeHTML/img/andarVerde.png"){
            imagemAndar = document.createElement("img");
            imagemAndar.src = "img/andar.png";
            imagemAndar.className = "andar";
            imagemAndar.addEventListener('click', andarSelecionado);
            if(arrayAndares[i] == ultimoAndar){
                ultimoAndar = imagemAndar;
            }
            predioEl.replaceChild(imagemAndar,  arrayAndares[i]);
            arrayAndares[i].src = "img/andar.png";
            arrayAndares[i] = imagemAndar;
        }
    }
    if(this.src == "file:///C:/Users/letic/Music/testeHTML/img/primeiroAndar.png"){
        primeiroAndarEl.src = "img/primeiroAndarVerde.png";
        primeiroAndarEl.addEventListener('click', primeiroAndarSelecionado);
        primeiroAndarEl.id = "primeiroAndar";
        predioEl.replaceChild(primeiroAndarEl, this);
        arrayAndares[1] = primeiroAndarEl;
    }
}

botaoAdicionarAndar.addEventListener('click', adicionarAndar);
ultimoAndar.addEventListener('click', andarSelecionado);
primeiroAndarEl.addEventListener('click', primeiroAndarSelecionado);

