// **************************************
// **********    GLOBALES  **************
// **************************************
// afficheCompteur dans span pour compter le nombre de taches réaliser
var afficheCompteur = document.getElementById("compteur");
const taches = [
  
];

const todolist = document.querySelector('#todolist');
let compteur = 0;

// ****************************************
// **********     FUNCTIONS  **************
// ****************************************

function tacheFait() {
    taches.forEach((tache) => {
        //i = l'id de l'element
        var i = tache.id;
        //pour l'element dont i est l'id
        const identifiant = document.getElementById(i);
        //a chaque click sur l'element
        identifiant.addEventListener("click", function () {
            //on ajoute une classe
            identifiant.classList.add("fait");
            tache.etat = 1;
            compteur++ ;
            afficheCompteur.innerHTML=compteur;
            //alert(i);
            //console.log(compteur);
        });
        
    });
    
//  var test = compteurTacheFait();
//  console.log(test)
}

// fonction pour inserer une tache
function insertTask() {
    var idIndex = taches.length + 1;
    var titre = document.getElementById("exampleInputEmail1").value;
    var description = document.getElementById("exampleInputPassword1").value;

    // Création d'un objet avec les valeurs récupérées
    let new_task = {}

    new_task.id = idIndex;
    new_task.titre=titre;
    new_task.description=description;
    new_task.date=new Date();
    new_task.etat=0;

    taches.push(new_task); // Ajout de l'objet dans le tableau taches
    displayTasks(taches);
}

/**  Afficher / raffraichir les taches
 *  @param array taches[]
 **/
function displayTasks(taches) {
    todolist.innerHTML = '';
    var index = 1;
    taches.forEach((tache) => {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

        if( tache.etat === 1 ){
        todolist.innerHTML += `
            <li class="list-group-item border-dark fait" id="${tache.id}">
                <span class="fw-semibold">Titre : ${tache.titre}</span><br>
                <span class="fw-semibold">Description : ${tache.description}</span><br>
                <div class="task-date">
                    <span class="fw-semibold">Date : ${tache.date.toLocaleDateString('fr-FR', options)}</span><span>${index}</span>
                </div>
            </li>
        `;
        }else{
            todolist.innerHTML += `
            <li class="list-group-item border-dark" id="${tache.id}">
                <span class="fw-semibold">Titre : ${tache.titre}</span><br>
                <span class="fw-semibold">Description : ${tache.description}</span><br>
                <div class="task-date">
                    <span class="fw-semibold">Date : ${tache.date.toLocaleDateString('fr-FR', options)}</span><span>${index}</span>
                </div>
            </li>
        `;
    }

        index++;
    });
    tacheFait();
    
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

displayTasks(taches);

document.getElementById('inserer').addEventListener('click', function(){
insertTask();


});



//pour chaque tache
// var res = compteurTacheFait(tacheFait());
// console.log(res);
