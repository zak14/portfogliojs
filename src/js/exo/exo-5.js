/* Exo 4 */
// récupérer les éléments dont on va se servir
// Récupérer ma section
let section5 = document.querySelector('#exo-5');
// récupère mon titre
let titre = section5.querySelector('#title-to-change');
// Récupere input
let inputChanger = section5.querySelector('#title-content');
// Récupere le bouton
let btnChanger = section5.querySelector('button');
// écrire les fonctionnalités
let changerTitre = function () {
    // prendre le contenu de l'input
    let newTitle = inputChanger.value;
    // Vérifier que le newTitle n'est pas vide
    if (newTitle == "") {
        // mettre une class error
        inputChanger.classList.add('error');
        inputChanger.value = "champs obligatoire";
    } else {
        // Mettre ce contenu dans le titre
        titre.innerText = newTitle;

    }
}

// Fonction vider champ
let viderChamp = function () {
    // Vérifier si le champ est en error
    if (inputChanger.classList.contains('error')) {
        // Vider la value
        inputChanger.value = "";
        // Retirer la class error
        inputChanger.classList.remove('error');
    }
}
// Ecouter les événements provoqué par l'utilisateur ou autre 
btnChanger.addEventListener('click', changerTitre);
inputChanger.addEventListener('click', viderChamp);