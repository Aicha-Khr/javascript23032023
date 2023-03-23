
// création fonction fléchée

const sayHi = () => {
    console.log('Hi !');
}

// si une seule instruction : pas besoin des accolades
const sayBye = () => console.log('Bye !');

// si la seule instruction est un return : pas besoin de le préciser
const addNumb = (numb1, numb2) => numb1 + numb2;

// si un seul argument : pas besoin des parenthèses
const sayHello = userName => console.log('Hello' + userName);


// utilisation fonction fléchée

sayHi();
sayBye();