/* Exo 3 */
// récupérer les éléments dont on va se servir
let btn = document.querySelector("#first-event");

// écrire les fonctionnalités
let direBonjour = function () {
    console.log("Bonjour");
}
// Ecouter les événements provoqué par l'utilisateur ou autre 
btn.addEventListener('click', direBonjour);