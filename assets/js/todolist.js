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
taches.forEach((tache) => {
    todolist.innerHTML += `<li id="${tache.id}" class="list-group-item">${tache.titre} <br> ${tache.description} </li>`;
    
});

/*taches.forEach((tache) => {
    //i = l'id de l'element
    var i=tache.id;
    //pour l'element dont i est l'id
    const identifiant = document.getElementById(i);
    //a chaque click sur l'element
    identifiant.addEventListener("click", function(){
        //on ajoute une classe
        identifiant.classList.add("fait");
        alert(i);
    }
    );
});
/**/