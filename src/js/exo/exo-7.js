// /* // Récupere les éléments */
// let section7 = document.querySelector('#exo-7');
// let buttons = section7.querySelectorAll('button');
// /* // Définir les fonctionnalités */
// // Supprimer l'élément cliqué
// let deleteButton = function (event) {

//     console.dir(this);
//     // Récuparation du bouton sur lequel on a cliqué
//     let button = event.target;
//     // Récupération du parent
//     let parent = button.parentNode;
//     // Suppression du bouton (seul son parent peut le supprimer)
//     parent.removeChild(button);

// }

// /* // Ajouter les écouteurs d'événement */
// buttons.forEach(function (button) {
//     button.addEventListener('click', deleteButton);
// })


/* // Récupere les éléments */
let section7 = document.querySelector('#exo-7');
let buttons = section7.querySelectorAll('button');
/* // Définir les fonctionnalités */
// Supprimer l'élément cliqué
let deleteButton = function (event) {

    console.dir(this);

    let element = document.createElement('span');

    let button = event.target;

    let largeur = button.offsetWidth + "px";

    let parent = button.parentNode;

    element.style.width = largeur;

    element.style.display = "inline-block";


    parent.replaceChild(element, button);

    //creare un elemento bottone

    let newButton = document.createElement('button');

    //aggiungere il bottone a una classe 
    newButton.className = "btn btn-werning";

    //aggiungere testo al bottone 
    newButton.innerText = "Delete me now";

    //aggiungi alla fine un nuovo bottone
    parent.append(newButton);

    newButton.addEventListener('click', deleteButton);





    // // Récuparation du bouton sur lequel on a cliqué
    // let button = event.target;
    // // Récupération du parent
    // let parent = button.parentNode;
    // // Suppression du bouton (seul son parent peut le supprimer)
    // parent.removeChild(button);

}

/* // Ajouter les écouteurs d'événement */
buttons.forEach(function (button) {
    button.addEventListener('click', deleteButton);
})
