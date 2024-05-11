const courriel = document.getElementById("courriel");
const password = document.getElementById("password");
const nom = document.getElementById("nom");
const prenom = document.getElementById("prenom");
const boutonCreer = document.getElementById("creer");
const boutonModifier = document.getElementById("modifier");
const courrielcle = document.getElementById("courriel2");
const passwordcle = document.getElementById("password2");
const nouvelleCle = document.getElementById("cle");

boutonCreer.addEventListener("click", creerUtilisateur);
boutonModifier.addEventListener("click", modifierCle);

function creerUtilisateur() {
    fetch(`https://swfinal-alexis.onrender.com/api/utilisateur/ajouter`,{
        method:"POST",
        headers: { 'Content-type': 'application/json'},
        body: JSON.stringify({
            courriel:courriel.value,
            password:password.value,
            nom:nom.value,
            prenom:prenom.value
        })
    })
    // Envoi de la requète et récupération de la réponse    
    .then(reponse => reponse.json())
    // Traitement de la réponse
    .then(data => {
        cle.innerHTML = "Clé d'API :" + data.cleapi;
    });
}

function modifierCle() {
    fetch(`https://swfinal-alexis.onrender.com/api/utilisateur/cle`,{
        method:"PUT",
        headers: { 'Content-type': 'application/json'},
        body: JSON.stringify({
            courriel:courrielcle.value,
            password:passwordcle.value
        })
    })
    // Envoi de la requète et récupération de la réponse    
    .then(reponse => reponse.json())
    // Traitement de la réponse
    .then(data => {
        cle.innerHTML = "Clé d'API :" + data.cleapi;
    });
}