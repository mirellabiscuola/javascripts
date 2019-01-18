function creaelencoBRobj(array, Objtag) {

    let tuttiNomi = "";

    for (i = 0; i < array.length; i++) {
        // l'istruzione sottostante è uguale a:
        //tuttiNomi=tuttiNomi+ ar_alunni[0]
        tuttiNomi += array[i] + "<BR>";

    }
    Objtag.innerHTML = tuttiNomi;
    return tuttiNomi;
}

function creaOL(ar) {
    //devo produre ris es:<ol><li>andrea</li><li>luca</li>>/ol>
    let tuttiNomi = "";

    for (i = 0; i < ar.length; i++) {
        // l'istruzione sottostante è uguale a:
        //tuttiNomi=tuttiNomi+ ar_alunni[0]
        tuttiNomi += "<li>" + ar[i] + "</li>";

    }
    //per numerare i nomi la stringa va messa fuori dal ciclo for altrimenti si ripete
    tuttiNomi = "<ol type='1' start='1'>" + tuttiNomi + "</ol>";
    return tuttiNomi;
}
function cubo(valore) {
    let ris = 0;
    ris = valore * valore * valore;
    return ris;

}
function quadrato(valore) {
    let ris = 0;
    ris = valore * valore;
    return ris;
}

function potenza(valore, esponente) {
    //creo variabile di ritorno
    let ris = 1;

    //ris=2*2*2 caso 2 aal 3       ris=v*v*v
    //ris= 3*3 caso 3 alla 2

    /*if (esponente==2)
     ris=valore*valore;
     if (esponente==3)
     ris=valore*valore*valore;
     */
    for (i = 0; i < esponente; i++) {
        ris = ris * valore;


    }

    return ris;
}


