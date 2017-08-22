/* Exo 4 */
// récupérer les éléments dont on va se servir
// récupère mon titre
let titre = document.querySelector('#title-to-change');
// Récupere input
let inputChanger = document.querySelector('#title-content');
// Récupere le bouton
let btnChanger = document.querySelector('#change-title');
// écrire les fonctionnalités
let changerTitre = function () {
    // prendre le contenu de l'input
    let newTitle = inputChanger.value;
    // Mettre ce contenu dans le titre
    titre.innerText = newTitle;
}
// Ecouter les événements provoqué par l'utilisateur ou autre 
btnChanger.addEventListener('click', changerTitre);