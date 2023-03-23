

// possibilité de vérification pour savoir si le dark mode est activé //

/*
- regarder la couleur du background du body
- regarder si le body possède la classe darkMode
- regarder l'icône qui est affichée (soleil / lune)
*/


// document.getElementById('darkModeBtn').addEventListener('click', function(event) {

//     document.body.classList.toggle('darkMode');

//     if (event.target.alt === 'icone lune') {
//         event.target.alt = 'icone soleil';
//         event.target.src = 'sun.png';
//     }
//     else {
//         event.target.alt = 'icone lune';
//         event.target.src = 'moon.png';
//     }

// })


document.getElementById('darkModeBtn').addEventListener('click', activateDarkMode)


function activateDarkMode (event) {
    document.body.classList.toggle('darkMode');

    if (event.target.alt === 'icone lune') {
        event.target.alt = 'icone soleil';
        event.target.src = 'sun.png';
    }
    else {
        event.target.alt = 'icone lune';
        event.target.src = 'moon.png';
    }
}

