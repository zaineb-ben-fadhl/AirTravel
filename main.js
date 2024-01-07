document.addEventListener('DOMContentLoaded', function() {
    var toggle_menu = document.querySelector('.responsive-menu');
    var menu = document.querySelector('.menu');

    toggle_menu.onclick = function () {
        toggle_menu.classList.toggle('active');
        menu.classList.toggle('responsive');
    }

    let table = document.querySelector('#table tbody');
    table.innerHTML = '';
    for (let i = 0; i < 5; i++) {
        let row = table.insertRow();
        row.insertCell(0).innerHTML = `Destination ${i}`;
        row.insertCell(1).innerHTML = `Country ${i}`;
        row.insertCell(2).textContent = `${Math.ceil(Math.random() * 1000)}$`;
    }

})


function reserverMaintenant() {
    let nom = '';
    let email = '';
    nom = prompt("Donner votre nom");
    prenom = prompt("donner votre prenom");
    cin =prompt("donner cin");
    email = prompt("Donner votre email");
    if(email && nom && prenom && cin)
    alert(`réservation pour ${nom} a été enregistrée avec succès !`);
    else{
    alert(`réservation annulé pas de nom ou email`);
    }
};
function alertePersonnalisee() {

    alert("Vous avez cliqué sur le bouton !");

}


function wheredidiclick(id) {

    let name = document.getElementById(id).innerHTML
    alert(`Vous avez cliquer sur ${name}`);

}