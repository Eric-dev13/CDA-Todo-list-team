let taches = [{
        id: 1,
        titre: "faire l'appli",
        description: "travail d'équipe",
        date: "",
        etat: 0
    },
    {
        id: 2,
        titre: "modifier l'appli",
        description: "ça continue",
        date: "",
        etat: 0
    }
];

let todolist = document.querySelector('#todolist');

// ********************
// *******   FUNCTIONS      *************
// ********************
// ********************








// *************************************
// *******   CODE      *************
// *************************************
// *************************************

// Afficher les taches ( a partir du tableau taches)
taches.forEach((tache) => {
    todolist.innerHTML += `<li class="list-group-item">${tache.titre} <br> ${tache.description} </li>`;
    
});

displayTasks()







