let titulo = document .getElementById("titulo")
console.log(titulo);

let descricao1 = document.getElementById("descricao1")
console.log(descricao1);

let descricao2 = document.getElementById("descricao2")
console.log(descricao2);

let descricao3 = document.getElementById("descricao3")
console.log(descricao3);

let descricao4 = document.getElementById("descricao4")
console.log(descricao4);

////////////////////////////////////////////////////////////

let Esporte1 = document.getElementsByTagName("li");
console.log(Esporte1[0]);

let Esporte2 = document.getElementsByTagName("li");
console.log(Esporte1[1]);

let Esporte3 = document.getElementsByTagName("li");
console.log(Esporte1[2]);

let Esporte4 = document.getElementsByTagName("li");
console.log(Esporte1[2]);

let tituloQS = document.querySelector("#titulo");
let esporteQS = document.querySelectorAll(".descricao");
console.log("Exibindo com o Query Selector: " + tituloQS.textContent);
console.log("Exibindo com OS o futebol: " + Esporte1[0].textContent);
console.log("Exibindo com OS o basquete: " + Esporte1[1].textContent);
console.log("Exibindo com OS o volei: " + Esporte1[2].textContent);
console.log("Exibindo com OS o tenis: " + Esporte1[3].textContent);
