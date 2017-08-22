// Récupérer les éléments 
let section6 = document.querySelector('#exo-6');
let button = section6.querySelector('button');
let ul = section6.querySelector('ul');
let input = section6.querySelector('input');

// Fonctionnalité
// Ajout d'un élément
let ajoutElement = function () {
    // Création d'un élément li
    let li = document.createElement('li');
    // Vérifier si l'input est vide
    if (input.value == "") {
        input.classList.add("error");
        input.value = "Champ obligatoire";
        // Enlever le focus de l'élément actif
        input.blur();
        return false;
    }
    // Vérifier que l'input ne soit en en erreur
    if (input.classList.contains('error')) {
        return false;
    }
    // Récupération du texte de l'input
    let texte = input.value;
    // Ajout de texte dans le li
    li.innerText = texte;
    // Ajout d'un class au li
    li.classList.add("list-group-item");
    // Ajout du li dans le ul
    ul.append(li);
    // Vider l'input
    input.value = "";
}

// Fonction vider champ
let viderChamp = function (e) {
    // Vérifier si le champ est en error
    if (input.classList.contains('error')) {
        // Vider la value
        input.value = "";
        // Retirer la class error
        input.classList.remove('error');
    }
}
// Ajouter via touche enter
let enterValidation = function (e) {
    if (e.code == "Enter" || e.code == "NumpadEnter") {
        ajoutElement();
    }
}
// Ajout des événements
button.addEventListener('click', ajoutElement);

input.addEventListener('click', viderChamp);
input.addEventListener('keyup', enterValidation)