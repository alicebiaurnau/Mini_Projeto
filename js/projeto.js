var contadorCor = 0;

function adicionar() {
    var notaTexto = document.getElementById('nota').value.trim();
    if (notaTexto=="") {
        alert('Digite uma nota!');
        return;
    }
    var urgente=document.querySelector('input[name="urgente"]:checked').value;
    var listaId;
    if(urgente == "urgente"){
        listaId = "lista_urgente"
    }else{
        listaId = "lista_nao_urgente"
    }

    var lista=document.getElementById(listaId);
    var li=document.createElement('li');

    li.textContent = notaTexto;

    var btnRemover = document.createElement('button');
    btnRemover.textContent = "Remover";
    btnRemover.classList.add("btn-remover");
    btnRemover.onclick = function() {
        li.remove();
    };
    li.appendChild(btnRemover);

    var cores=['cor-azul','cor-verde', 'cor-roxo'];
    li.classList.add(cores[contadorCor % 3]);
    contadorCor++;

    li.classList.add(urgente);
    lista.appendChild(li);
    document.getElementById('nota').value = '';
}

li.classList.add(urgente);

lista.appendChild(li);
document.getElementById('nota').value = '';

function apagarTudo() {
    document.getElementById('lista_nao_urgente').innerHTML = '';
    document.getElementById('lista_urgente').innerHTML = '';
    contadorCor = 0; 
}