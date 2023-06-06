let taches = [{
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

let tableTodo = document.querySelector('.tableTodo');
let todolist = document.querySelector('#todolist');

taches.forEach((tache) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    todolist.innerHTML += `
    <li class="list-group-item border-dark" data-id="${tache.id}">
        <span class="fw-semibold">Titre</span>: ${tache.titre}<br>
        <span class="fw-semibold">Description</span>: ${tache.description}<br>
        <span class="fw-semibold">Date</span>: ${tache.date.toLocaleDateString('fr-FR', options)}
    </li>
    `;
});


