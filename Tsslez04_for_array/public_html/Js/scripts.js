/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// array per immagazzinare i nomi dei donatori
var ar_nomi = ["bianci","rossi","verdi","gialli";
// array per immagazzinare le donazioni effettuate
var ar_valori = [45.50,12.20,78.05,123.12];
var Tot_Don = 0;
var num_don =0;
function cancella() {

    // il -1 è per due motivi. Il rpimo è per selezionare l'elemento con indice giusto, e poi per "tradurre" da stringa a numero
    var elem = document.getElementById("in_elem").value - 1;
    var domanda = confirm("Sei sicuro di voler cancellare la donazione?");
    if (domanda === true) {
        ar_nomi.splice(elem, 1);
        ar_valori.splice(elem, 1);
        prep_output();
    }

}


function modifica() {

// il -1 è per due motivi. Il rpimo è per selezionare l'elemento con indice giusto, e poi per "tradurre" da stringa a numero
    var elem = document.getElementById("in_elem").value - 1;
    var domanda = confirm("Sei sicuro di voler modificare la donazione?");
    if (domanda === true) {
        ar_nomi[elem] = document.getElementById("in_nome").value;
        ar_valori[elem] = document.getElementById("in_valore").value;
        // volendo (vedi righe successive, si può usare lo splice, inserendo come terzo parametro il valore da sostituire
        //ar_nomi.splice(elem,1,document.getElementById("in_nome").value);
        //ar_valori.splice(elem,1,document.getElementById("in_valore").value);

        prep_output();
    }

}
function addDonazione() {
// carico array
    ar_nomi.push(document.getElementById("in_nome").value);
    ar_valori.push(document.getElementById("in_valore").value);
    prep_output();
}

// funzione per cancellare ultimo elemento dagli array
function undo() {
    ar_nomi.pop();
    ar_valori.pop();
    prep_output();
}

function prep_output() {
    div_donazioni.innerHTML = print_don();
//document.getElementById("div_donazioni").innerHTML = print_don();
    document.getElementById("totale").innerHTML = print_tot();
    document.getElementById("in_elem").value = "";
    document.getElementById("in_elem").max = ar_nomi.length;
    document.getElementById("in_elem").min = 1;
}
function cerca() {
    let nome_ricerca = document.getElementById("in_nome").value;
    // do{

    //}while(condizionevera){

    // }
    let continua = true;
    let i = 0;
    while (continua === true) {
        nome_corrente = ar_nomi[i];
        if (nome_ricerca === nome_corrente) {
            ////trovatooooooo
            continua = false;
            document.getElementById("valore_ricerca").innerHTML = "ar_valori[i]";
        } else {
            i++;
            /////niente vado al prossimo
        }
        //verifico che ce ne siano ancora
        if (i >= ar_nomi.length) {
            continua = false;
            document.getElementById("valore_ricerca").innerHTML = "non trovato";


        }



    }

}
// funzione per stampare le persone che hanno donato
function print_don() {
// quando il metodo mi deve ritornare qualcosa per prima cosa inizializzo la variabile e in fondo
// metto il "return nomevariabile;"
    let text = "";
    //let miosaldo = 0;

    //let maxver = 0;


    for (i = 0; i < ar_nomi.length; i++) {
// In questo modo tutte le linee vengono generate con uno span con un id univoco, quindi possono essere gestiti anche singolarmenti
        text += "<span id'don" + i + "'><b>#" + (i + 1) + "</b> --> " + ar_nomi[i] + " ha donato " + ar_valori[i] + " €<br/></span>";
    }


    return text;
}

// funzione che stampa il totale donato
function print_tot() {
// quando il metodo mi deve ritornare qualcosa per prima cosa inizializzo la variabile e in fondo
// metto il "return nomevariabile;"
    let totale = 0;
    //let miosaldo = 0;

    //let maxver = 0;


    for (i = 0; i < ar_nomi.length; i++) {

        totale += ar_valori[i] * 1;
    }


    return totale;
}