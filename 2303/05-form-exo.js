
// on peut cibler des éléments juste avec leur id (sans passer par getElementById)
// userBackgroundColor fait directement référence à l'élément avec cet id
// A UTILISER UNIQUEMENT POUR LES CHAMPS DE FORMULAIRE

document.querySelector('form').addEventListener('submit', function(event){
    event.preventDefault();

    let userInfos = document.querySelectorAll('#userInfos p');

    // selon le texte des paragraphes, on leur ajoute la valeur de l'input correspondant
    for (let userInfo of userInfos) {

        switch (userInfo.textContent) {
            case 'Nom : ' : userInfo.textContent += userName.value;
                break;
            case 'Pseudo : ' : userInfo.textContent += userPseudo.value;
                break;
            case 'Mail : ' : userInfo.textContent += userMail.value;
                break;
        }
    }

    // appliquer les choix de style 
    let userSection = document.getElementById('userInfos');
    userSection.style.backgroundColor = userBackgroundColor.value;
    userSection.style.color = userTextColor.value;
    userSection.style.fontSize = userFontSize.value + 'px';
    userSection.style.fontFamily = userFontFamily.value;

})


// document.querySelector('form').addEventListener('submit', function(event){
//     event.preventDefault();
//     addUserInfos();
//     customizeUserAccount();
// })

// function addUserInfos() {
//     let userInfos = document.querySelectorAll('#userInfos p');

//     // selon le texte des paragraphes, on leur ajoute la valeur de l'input correspondant
//     for (let userInfo of userInfos) {

//         switch (userInfo.textContent) {
//             case 'Nom : ' : userInfo.textContent += userName.value;
//                 break;
//             case 'Pseudo : ' : userInfo.textContent += userPseudo.value;
//                 break;
//             case 'Mail : ' : userInfo.textContent += userMail.value;
//                 break;
//         }
//     }
// }

// function customizeUserAccount() {
//         // appliquer les choix de style 
//         let userSection = document.getElementById('userInfos');
//         userSection.style.backgroundColor = userBackgroundColor.value;
//         userSection.style.color = userTextColor.value;
//         userSection.style.fontSize = userFontSize.value + 'px';
//         userSection.style.fontFamily = userFontFamily.value;
// }