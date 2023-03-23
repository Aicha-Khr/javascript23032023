

document.querySelector('button').addEventListener('click', function(event) {
    console.log('bouton cliqué');
    console.log(event.target);
});

document.querySelector('h1').addEventListener('click', function(event) {
    console.log('h1 cliqué');
    console.log(event.target);
    event.target.textContent = 'H1 cliqué';
});


// il est possible d'utiliser une fonction non anonyme à exécuter au moment du click
// il faudra alors ne surtout pas mettre les parenthèses
// (sinon elle sera exécutée immédiatemment sans avoir à cliquer)
document.getElementById('createAccount').addEventListener('click', createAccount)

function createAccount() {
    // logique de création de compte utilisateur
    console.log('création du compte utilisateur');
}

document.getElementById('darkMode').addEventListener('click', () => {
    document.body.style.backgroundColor = '#272727';
    document.body.style.color = '#f5f5f5';
})

/*

- afficher en HTML un bouton avec une lune dedans 

- quand on clique sur la lune : 
    - le mode sombre est activé (via une classe CSS)
    - la lune est remplacée par un soleil

- quand on clique sur le soleil :
    - le mode sombre est désactivée
    - le soleil est remplacé par la lune 



*/