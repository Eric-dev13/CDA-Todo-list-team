import { getFromLocalStorage, setToLocalStorage } from "./localStorage.js";


// **************************************
// **********    GLOBALES  **************
// **************************************
// afficheCompteur dans span pour compter le nombre de taches réaliser
var afficheCompteur = document.getElementById("compteur");
let taches = [];

const todolist = document.querySelector('#todolist');
let compteur = 0;

// ****************************************
// **********     FUNCTIONS  **************
// ****************************************
function compteurFunction() {
    compteur = 0;
    //tacheFait()
    taches.forEach((tache1) => {
        if (tache1.etat == 1) {
            compteur ++;
        }
    });
    return compteur;
    // afficheCompteurARealiser.innerHTML=compteurARealiser;
}
function tacheFait() {
   compteur= compteurFunction();
    taches.forEach((tache) => {
        //i = l'id de l'element
        var i = tache.id;
        //pour l'element dont i est l'id
        const identifiant = document.getElementById(i);
        //a chaque click sur l'element
        identifiant.addEventListener("click", function () {

            if (tache.etat == 0) {
                tache.etat = 1;
                compteur++;
                identifiant.classList.add("fini");


            } else if (tache.etat == 1) {
                tache.etat = 0;
                
                identifiant.classList.remove("fini");
                compteur--;
            }
            setToLocalStorage(taches);
            displayTasks();

          
           
        });
        afficheCompteur.innerHTML = compteur;

    });

}

// fonction pour inserer une tache
function insertTask() {
    var idIndex = taches.length + 1;
    var titre = document.getElementById("exampleInputEmail1").value;
    var description = document.getElementById("exampleInputPassword1").value;

    // Création d'un objet avec les valeurs récupérées.
    let new_task = {}

    new_task.id = idIndex;
    new_task.titre = titre;
    new_task.description = description;
    new_task.date = new Date();
    new_task.etat = 0;

    //Autre méthodes
    // let new_task_2 = {
    //     id: idIndex,
    //     titre: titre,
    //     description: description,
    //     date: new Date(),
    //     etat: 0
    // }

    taches.push(new_task); // Ajout de l'objet dans le tableau taches
    setToLocalStorage(taches);
    displayTasks();
}

/**  Afficher / raffraichir les taches
 *  @param array taches[]
 **/
function displayTasks() {
    const allTaches = getFromLocalStorage();
    // Si pas taches enregistré dans le local storage on sort de la fonction.
    if (!allTaches) return;
    // clone le tableau 
    taches = allTaches.slice();
    console.log('stock', taches);

    // Vide la liste des taches (l'élément ul)
    todolist.innerHTML = '';
    // initialise un compteur
    let index = 1;
    // Parcours le tableau des taches puis les affiches dans la liste des taches (l'élément ul)
    taches.forEach((tache) => {
        // format de la date
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        // Si la tache a été réalisée, on ajoute une classe pour modifier la couleur d'arrière plan
        let addClass = '';
        if (tache.etat === 1) {
            addClass = "fini";
        }
        // On affiche les taches les unes a la suite de l'autre
        todolist.innerHTML += `
            <li class="list-group-item ${addClass}" id="${tache.id}">
                <div class="d-flex justify-content-between p-3 shadow">
                    <span class="px-1 px-md-5 border">${index}</span>
                    <div class="px-1 px-md-5 text-dark border">
                        <h5 class="fw-bold">${tache.titre}</h5><br>
                        <p class="font-weight-light">Description : ${tache.description}</p><br>
                        <small class="fw-bold text-muted">Crée le ${new Date(tache.date).toLocaleDateString('fr-FR', options)}</small>
                    </div>
                    <div class="px-1 px-md-5 d-flex flex-column justify-content-center border">
                        <a href="#" class="editer btn btn-primary p-2">
                            <img src="assets/img/update.png" alt="Editer" width="30">
                        </a>
                        <a href="#" class="supprimer btn btn-danger mt-2 p-2" style="z-index:5;">
                            <img src="assets/img/trash.png" alt="Supprimer" width="30">
                        </a>
                    </div>
                </div>
            </li>
        `;

        index++;
    });

    tacheFait();

    // Suppression d'une tache par son index
    let eletsASup = document.querySelectorAll('.supprimer');
    for (let index = 0; index < eletsASup.length; index++) {
        const element = eletsASup[index];
        eletsASup[index].addEventListener('click', () => {
             console.log('delete: ', index);
            taches.splice(index,1);
            setToLocalStorage(taches);
            displayTasks();

        });
    } 
}

// function compteurTacheFait( taches ) {
//     //tacheFait()
//     taches.forEach((tache1) => {
//         if (tache1.etat == 1) {
//             compteur += 1;
//         }
//     });
//     return compteur;
// }

// ************************************
// **********     CODE   **************
// ************************************

displayTasks();

document.getElementById('inserer').addEventListener('click', insertTask);


//pour chaque tache
// var res = compteurTacheFait(tacheFait());
// console.log(res);
