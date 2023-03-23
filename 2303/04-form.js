

// input Event (se déclenche lors de la saisie dans l'input)

document.getElementById('userName').addEventListener('input', function(event) {
    console.log(event.target.value); // récupère la valeur de l'input au moment de la saisie
})

    
// submit Event (se déclenche lors du click sur le bouton submit du formulaire)

document.querySelector('form').addEventListener('submit', function(event){
    
    event.preventDefault(); // empêcher la page de se recharger
            
    let userNameValue = document.getElementById('userName').value;
    let userMailValue = document.getElementById('userMail').value;
    
    console.log('formulaire envoyé');
    console.log(userNameValue, userMailValue);

})


// EXERCICE : changer la couleur du background du body selon ce qui est saisi dans l'input color

document.getElementById('userColor').addEventListener('input', function(event){
    document.body.style.backgroundColor = event.target.value;
})