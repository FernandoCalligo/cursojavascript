let num;
let mes;
let bool = false;


do {
    num = parseInt(prompt("Ingrese su día de nacimiento"));

    if(validar(num) == 1){
        bool = true;
    }else {
        alert("Lo ingresado no es un numero");
    }

} while(bool == false)

mes = prompt("Ingrese su mes de nacimiento").toLowerCase();

algoritmo(num, mes);

function validar (num) {
    if (!isNaN(num)) {
        return 1;
    }else {
        return 0
    }
}

function algoritmo (num, mes) {

    if((num >= 22 && mes == "enero" || mes == 1) || (num <= 19 && mes == "febrero")){
        alert("Usted es de Acuario");
    }
    if((num >= 20 && mes == "febrero" || mes == 2 ) || (num <= 20 && mes == "marzo")){
        alert("Usted es de Picis");
    }
    if((num >= 21 && mes == "marzo" || mes == 3) || (num <= 20 && mes == "abril")){
        alert("Usted es de Aries");
    }
    if((num >= 21 && mes == "abril" || mes == 4) || (num <= 21 && mes == "mayo")){
        alert("Usted es de Tauro");
    }
    if((num >= 22 && mes == "mayo" || mes == 5) || (num <= 21 && mes == "junio")){
        alert("Usted es de Geminis");
    }
    if((num >= 22 && mes == "junio" || mes == 6) || (num <= 23 && mes == "julio")){
        alert("Usted es de Cancer");
    }
    if((num >= 24 && mes == "julio" || mes == 7) || (num <= 13 && mes == "agosto")){
        alert("Usted es de Leo");
    }
    if((num >= 24 && mes == "agosto" || mes == 8) || (num <= 23 && mes == "septiembre")){
        alert("Usted es de Virgo");
    }
    if((num >= 24 && mes == "septiembre" || mes == 9) || (num <= 23 && mes == "octubre")){
        alert("Usted es de Libra");  
    }
    if((num >= 24 && mes == "octubre" || mes == 10) || (num <= 22 && mes == "noviembre")){
        alert("Usted es de Escorpio");
    }
    if((num >= 23 && mes == "noviembre" || mes == 11) || (num <= 21 && mes == "diciembre")){
        alert("Usted es de Sagitario");
    }
    if((num >= 22 && mes == "diciembre" || mes == 12) || (num <= 20 && mes == "enero")){
        alert("Usted es de Capricornio");
    }
}