
let rangeInputs = document.querySelectorAll('input');

for (let rangeInput of rangeInputs) {

    // pour capter la saisie sur chaque input
    rangeInput.addEventListener('input', function(){

        // fabrication du code couleur à chaque fois qu'un curseur est manipulé
        let rgbCode = `rgb(${redColorInput.value}, ${greenColorInput.value}, ${blueColorInput.value})`;

        // applique le code couleur au body
        document.body.style.backgroundColor = rgbCode;

        // affiche le code couleur dans le paragraphe
        document.getElementById('rgbCode').textContent = rgbCode;
    })

}



// pour capter la saisie sur l'ensemble du container

// document.querySelector('.inputContainer').addEventListener('input', function(){

//     // fabrication du code couleur à chaque fois qu'un curseur est manipulé
//     let rgbCode = `rgb(${redColorInput.value}, ${greenColorInput.value}, ${blueColorInput.value})`;

//     // applique le code couleur au body
//     document.body.style.backgroundColor = rgbCode;

//     // affiche le code couleur dans le paragraphe
//     document.getElementById('rgbCode').textContent = rgbCode;
// })