let section8 = document.querySelector('#exo-8');
let inputA = section8.querySelector('#title-content1');
let inputB = section8.querySelector('#title-content2');
let button = section8.querySelector('button');
let somme = section8.querySelector('#risultato');
let operatore = section8.querySelector('#operatore');
let bottoneC = section8.querySelector('#cancella');


let controlla = function (x) {

    if (x.value == "" || isNaN(x.value)) {
        if (x.value == "") {
            x.classList.add("error");
            x.value = "Champ obligatoire";
            // Enlever le focus de l'élément actif
            x.blur();

        }

        else if (isNaN(x.value)) {
            x.classList.add("error");
            x.value = "Error char";
            // Enlever le focus de l'élément actif
            x.blur();
        }
    }
}

let Ccarattere = function () {

    // Définition d'un expression régulière
    let reg = /^-?[0-9]*\.?[0-9]*$/;
    // Vérifier si la valeur est bien un nombre
    while (!reg.test(this.value)) {
        // Récupérer la longeur de la chaine de caractère
        let Ltesto = this.value.length;
        // Enlever le dernier cractère
        this.value = this.value.substr(0, Ltesto - 1);
    }

}

let plus = function () {


    controlla(inputA);
    controlla(inputB);


    if (inputA.classList.contains('error') || inputB.classList.contains('error')) {
        return false;
    }

    let a = parseInt(inputA.value);
    let b = parseInt(inputB.value);
    let c;
    switch (operatore.value) {
        case '+':
            c = a + b;
            break;
        case '-':
            c = a - b;
            break;
        case '*':
            c = a * b;
            break;
        case '/':
            c = a / b;
            break;

    }



    somme.innerText = c;
}

let viderChamp = function (e) {
    // Vérifier si le champ est en error
    if (inputA.classList.contains('error') || inputB.classList.contains('error')) {
        // Vider la value
        if (inputA.classList.contains('error')) {
            inputA.value = "";
            // Retirer la class error
            inputA.classList.remove('error');
        }

        if (inputB.classList.contains('error')) {
            inputB.value = "";
            // Retirer la class error
            inputB.classList.remove('error');
        }
    }
}


// let vidertout = function () {
inputA.value = "";
// Retirer la class error
inputA.classList.remove('error');

inputB.value = "";
// Retirer la class error
inputB.classList.remove('error');
}




button.addEventListener('click', plus);
inputA.addEventListener('click', viderChamp);
inputB.addEventListener('click', viderChamp);
bottoneC.addEventListener('click', vidertout);
inputA.addEventListener('keyup', Ccarattere);
inputB.addEventListener('keyup', Ccarattere);