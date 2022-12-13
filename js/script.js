//variabili

let container = document.getElementById('container');
let div, utenteTeams;


function creaDiv(){
    div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `<p>${utenteTeams.nome}<br>${utenteTeams.role}</p> <img src="./img/${utenteTeams.image}">`;
    return div;
}

//oggetto

let team = [{
    nome: "Wayne Barnett",
    role: "Founder & CEO",
    image: "wayne-barnett-founder-ceo.jpg"
},
{
    nome: "Angela Caroll",
    role: "Chief Editor",
    image: "angela-caroll-chief-editor.jpg"
},
{
    nome: "Walter Gordon",
    role: "Office Manager",
    image: "walter-gordon-office-manager.jpg"
},
{
    nome: "Angela Lopez",
    role: "Social Media Manager",
    image: "angela-lopez-social-media-manager.jpg"
},
{
    nome: "Scott Estrada",
    role: "Developer",
    image: "scott-estrada-developer.jpg"
},
{
    nome: "Barbara Ramos",
    role: "Graphic Designer",
    image: "barbara-ramos-graphic-designer.jpg"
}
]

for(let i = 0; i<team.length; i++){

    //stampa console
    utenteTeams = team[i];
    console.log(utenteTeams);
    //stampa dom
    creaDiv(utenteTeams);
    container.appendChild(div);

}