/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var num1;
var num2;
var risultato;
var totale = 0
var okDati;


function isVuota(testo) {
    if (testo.length > 0)
        return false;
    else
        return true;


}




function checkDati() {
    //verifico num1 e num2
    // e ritorno true se presenti solo numeri
    //altrimenti ritorno false
    if (isNaN(num1) || isNaN(num2) || isVuota(num1) || isVuota(num2)) {
        return false;
    } else {
        return true;
    }

}

function faseInput() {
    num1 = document.getElementById("in_num1").value;
    num2 = document.getElementById("in_num2").value;
    okDati = checkDati();
    //verifico okdati e vedo se trasformare in numeri
    if (okDati == true) {
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
    } else
    {
        alert("attenzione dati non correnti");
    }





}
function faseOutput() {
    document.getElementById("div_ris").innerHTML = risultato;
    document.getElementById("totale").innerHTML = totale;
}

function somma() {

    faseInput();
    if (okDati) {

        //attenzione e ancora testo!!!
        risultato = num1 + num2;
        totale = totale + risultato;
        //richiamo il metodo faseoutput
        faseOutput()
    }
}


function calcola(op) {
    faseInput();
    if (okDati) {
        if (op == "+")
            risultato = num1 + num2;
        if (op == "-")
        risultato = num1 - num2;
        if (op == "*")
        risultato = num1 * num2;
        if (op == "/")
        risultato = num1 / num2;
        
        totale = totale + risultato;
        //richiamo il metodo faseoutput
        faseOutput()
    }
}



