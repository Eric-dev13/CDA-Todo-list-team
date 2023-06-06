// **************************************
// **********    GLOBALES  **************
// **************************************

const taches = [
    {
        id: 1,
        titre: "faire l'appli",
        description: "travail d'équipe",
        date: new Date(),
        etat: 0
    },
    {
        id: 2,
        titre: "modifier l'appli",
        description: "ça continue",
        date: new Date(),
        etat: 0
    }
];

const todolist = document.querySelector('#todolist');

// ****************************************
// **********     FUNCTIONS  **************
// ****************************************

// fonction pour inserer une tache
function insertTask() {
    var titre = document.getElementById("exampleInputEmail1").value;
    var description = document.getElementById("exampleInputPassword1").value;

    // Création d'un objet avec les valeurs récupérées
    let new_task = {}
    new_task.id=3;
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
function displayTasks(taches){
    todolist.innerHTML='';
    var index = 1;
    taches.forEach((tache) => {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        todolist.innerHTML += `
            <li class="list-group-item border-dark" id="${tache.id}">
                <span class="fw-semibold">Titre : ${tache.titre}</span><br>
                <span class="fw-semibold">Description : ${tache.description}</span><br>
                <div class="task-title">
                    <span class="fw-semibold">Date : ${tache.date.toLocaleDateString('fr-FR', options)}</span><span>${index}</span>
                </div>
            </li>
        `;
        index++;
    });   
}


// ************************************
// **********     CODE   **************
// ************************************

displayTasks(taches);

document.getElementById('inserer').addEventListener('click',insertTask);


//pour chaque tache
taches.forEach((tache) => {
    //i = l'id de l'element
    var i=tache.id;
    //pour l'element dont i est l'id
    const identifiant = document.getElementById(i);
    //a chaque click sur l'element
    identifiant.addEventListener("click", function(){
        //on ajoute une classe
        identifiant.classList.add("fait");
        //alert(i);
    }
    );
});

