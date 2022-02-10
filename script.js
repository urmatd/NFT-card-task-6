"use strict";

let main = document.getElementById("wrapper");
main.style.backgroundColor = "hsl(216, 50%, 16%)";
main.style.width = "300px";
main.style.borderRadius = "20px";
main.style.padding = "20px";
main.style.margin = "auto";

let mainPhoto = document.createElement("img");
mainPhoto.setAttribute("src", "./images/image-equilibrium.jpg");
main.appendChild(mainPhoto);

main.firstChild.style.width = "100%";
main.firstChild.style.borderRadius = "20px";
main.firstChild.style.color = "rgba(161, 181, 214, 0.80)";

let h3 = document.createElement("h3");
h3.innerHTML = "Equilibrium #3429";
main.appendChild(h3);

let p = document.createElement("p");
p.innerHTML = "Our Equilibrium collection promotes balance and calm.";
main.appendChild(p);

let indicateOne = document.createElement("div");
main.appendChild(indicateOne);
let arrowPhoto = document.createElement("img");
arrowPhoto.setAttribute("src", "./images/icon-ethereum.svg");
indicateOne.appendChild(arrowPhoto);
img.style.width = "10px";
