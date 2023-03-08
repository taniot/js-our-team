'use strict';

/*

Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni:
nome
ruolo
foto

MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede
Consigli del giorno:
Ragioniamo come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico!
Buon lavoro!

Wayne Barnett	Founder & CEO	wayne-barnett-founder-ceo.jpg
Angela Caroll	Chief Editor	angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager	walter-gordon-office-manager.jpg
Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
Scott Estrada	Developer	scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg

*/

/*
string
number
boolean
null
undefined
object
*/

// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.

const team = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        foto: 'wayne-barnett-founder-ceo.jpg'
    },
    {

        ruolo: 'Chief Editor',
        foto: 'angela-caroll-chief-editor.jpg'
    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto: 'walter-gordon-office-manager.jpg'
    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: 'angela-lopez-social-media-manager.jpg'
    },
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto: 'scott-estrada-developer.jpg'
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto: 'barbara-ramos-graphic-designer.jpg',
    },
];

console.log(team);

/*
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
*/

for (let i = 0; i < team.length; i++) {
    const member = team[i];

    console.log(`Member ${i + 1}`);
    // console.log(member);
    for (let key in member) {

        console.log(`${key}: ${member[key]}`);

        // console.log(key);
        // console.log(member[key]);

    }

    if (i !== team.length - 1) {
        console.log('---');
    }

}

/*
MILESTONE 2: //template literal
Stampare le stesse informazioni su DOM sottoforma di stringhe

   <li class="member">
            <div class="member-img">image</div>
            <h3 class="member-name">name</h3>
            <p class="member-role">role</p>
    </li>


*/

// const ulContainer = document.getElementById('team');

// for (let i = 0; i < team.length; i++) {
//     const member = team[i];

//     const liElement = `
//     <li class="member">
//         <div class="member-img">${member.foto}</div>';
//         <h3 class="member-name">${member.nome}</h3>
//         <p class="member-role">${member.ruolo}</p>
//     </li>
//     `

//     ulContainer.innerHTML += liElement;


// }

/*
MILESTONE 2: createElement
Stampare le stesse informazioni su DOM sottoforma di stringhe
*/

const ulContainer = document.getElementById('team');

for (let i = 0; i < team.length; i++) {
    const member = team[i];

    const liElement = document.createElement('li');
    liElement.classList.add('member');

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('member-img');
    imageContainer.innerHTML = member.foto;
    liElement.append(imageContainer);


    if (member.nome) {
        const nameContainer = document.createElement('h3');
        nameContainer.classList.add('member-name');
        nameContainer.innerHTML = member.nome;
        liElement.append(nameContainer);
    }

    const roleContainer = document.createElement('p');
    roleContainer.classList.add('member-role');
    roleContainer.innerHTML = member.ruolo;
    liElement.append(roleContainer);

    ulContainer.append(liElement);

}
