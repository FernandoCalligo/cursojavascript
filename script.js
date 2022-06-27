let numerofib = prompt("Ingrese el numero maximo de fibonacci");

let numprev = 1;
let numprev2 = 0;
let acum = 0;

if (!isNaN(numerofib)) {
    for (let i = 2; i <= numerofib; i ++){
        acum = numprev + numprev2;
        numprev2 = numprev;
        numprev = acum;

        console.log("La sucesion es: ", acum)
    }
}else {
    alert("El numero ingresado no es un numero!");
}
