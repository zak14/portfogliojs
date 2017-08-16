//définir une phrase d'accueil
let phrase = "Bonjours tout le monde";
//faire apparaitre le contnu de la variable phrase dans la console
console.log(phrase);

//exo 2
//selectionner un element
let element = document.querySelector('#element-to-select');
//afficher dns la console
console.log(element);
console.log(element.innerText);
element.innerText = "ceci est le contenu modifier en js";
console.log(element.innerText);

//exo 3


//recuperer les element dont on va se servir
let btn = document.querySelector("#first-event");
//ecrire les fonctionnalites
let direbonjour = function () {
    console.log("on me click");
}
//ecouter les evenement provoque par l'utilisateur ou autre
btn.addEventListener('click', direbonjour);
