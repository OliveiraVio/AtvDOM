let titulo = document .getElementById("titulo")
// console.log(titulo);

// let descricao1 = document.getElementById("descricao1")
// console.log(descricao1);

// let descricao2 = document.getElementById("descricao2")
// console.log(descricao2);

// let descricao3 = document.getElementById("descricao3")
// console.log(descricao3);

// let descricao4 = document.getElementById("descricao4")
// console.log(descricao4);

// let descricao5 = document.getElementById("descricao5")
// console.log(descricao5);

// let descricao6 = document.getElementById("descricao6")
// console.log(descricao6);

// ////////////////////////////////////////////////////////////

// let Esporte1 = document.getElementsByTagName("li");
// console.log(Esporte1[0]);

// let Esporte2 = document.getElementsByTagName("li");
// console.log(Esporte1[1]);

// let Esporte3 = document.getElementsByTagName("li");
// console.log(Esporte1[2]);

// let Esporte4 = document.getElementsByTagName("li");
// console.log(Esporte1[3]);

// let Esporte5 = document.getElementsByTagName("li");
// console.log(Esporte1[4]);

// let Esporte6 = document.getElementsByTagName("li");
// console.log(Esporte1[5]);

// let tituloQS = document.querySelector("#titulo");
// let esporteQS = document.querySelectorAll(".descricao");
// console.log("Exibindo com o Query Selector: " + tituloQS.textContent);
// console.log("Exibindo com OS o futebol: " + Esporte1[0].textContent);
// console.log("Exibindo com OS o basquete: " + Esporte1[1].textContent);
// console.log("Exibindo com OS o volei: " + Esporte1[2].textContent);
// console.log("Exibindo com OS o tenis: " + Esporte1[3].textContent);
// console.log("Exibindo com OS o natação: " + Esporte1[4].textContent);
// console.log("Exibindo com OS o atletismo: " + Esporte1[5].textContent);

titulo.innerHTML = "<span style='color:blue'> Meus esportes favoritos </span>"

let lista = document.getElementById("listaEsportes");

//Criar um elemento e adicionar a lista
let novoEsporte1 = document.createElement("li");
novoEsporte1.innerText = "Natação";
lista.appendChild(novoEsporte1);

//Criar um elemento e adicionar a lista
let novoEsporte2 = document.createElement("li");
novoEsporte2.innerText = "Atletismo";
lista.appendChild(novoEsporte2);