//Variables
let numeroMaxicoPosible = 100;
let numeroSecreto = Math.floor(Math.random()*numeroMaxicoPosible)+1; 
let numeroUsuario = 0;  
let intentos = 1;  
//let palabraVeces = 'vez';
let maximosIntentos = 6;

console.log(numeroSecreto);

while (numeroUsuario != numeroSecreto ) {
     numeroUsuario = parseInt(prompt(`Me indica un número del 1 al ${numeroMaxicoPosible} por favor:`)); 

    console.log(typeof(numeroUsuario));
    if (numeroUsuario == numeroSecreto ) {
        alert(`Acertaste, el numero de usuario es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos ==1 ? 'vez' :'veces' }`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert ('El número secreto es menor');
        } else {
            alert ('El número secreto es mayor');
        }
        intentos ++;
        //palabraVeces = 'veces';

        if (intentos > maximosIntentos) {
            alert (`Llegaste al número maximo de ${maximosIntentos} intentos`);
        }
    }
}

