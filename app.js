// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];

function agregarAmigo() {
    
    if (validarAmigo() == false) {
        return;
    }

    agregarAmigoLista();

    console.log(listaAmigos);


}

function validarAmigo(){
    if (document.getElementById("amigo").value === "") { 
        alert("Debe ingresar un nombre");
        return false;
    } else {
        return true;
    }
}

agregarAmigoLista = () => {
    listaAmigos.push(document.getElementById("amigo").value);
    document.getElementById("amigo").value = "";
    mostrarAmigos();
    
}

function mostrarAmigos() {
    document.getElementById("listaAmigos").innerHTML = "";
    listaAmigos.forEach((amigo) => {
        //document.getElementById("listaAmigos").innerHTML += `<li>${amigo}</li>`;
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(amigo));
        document.getElementById("listaAmigos").appendChild(li);
    });
}

function sortearAmigo(){

  
    if (listaAmigos.length === 0) {
        console.log("No hay amigos para sortear");
        alert("No hay amigos para sortear");
        
    }else {
        let amigoSorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
        console.log(amigoSorteado);
        document.getElementById("listaAmigos").innerHTML = "";

        document.getElementById("resultado").innerHTML = `el amigo secreto sorteado es: ${amigoSorteado}`;
        listaAmigos = [];
    }
}


