var ar_alunni = [];


function aggiungi_nome() {
    //recupero le informazioni dalla pagina html e le metto in variabili per poterle usare
    // dagli oggetti input prendo il valore dell'attributo value
    let nome = document.getElementById("in_name").value;
    //inserisco il nome nell'array
    ar_alunni.push(nome);

    //let tuttiNomi = "";

    //tuttiNomi = creaTable();

    //visualizzo nel div
    //document.getElementById("div_lista_nomi").innerHTML = tuttiNomi;
    //alert("cubo di" + cubo(5));
    //alert("quadrato di 5:" + quadrato(5));
    let mytag = document.getElementById("div_lista_nomi");
    creaelencoBRobj(ar_alunni,mytag);
}




function creaBR(array,objtag) {

    let tuttiNomi = "";

    for (i = 0; i < ar_alunni.length; i++) {
        // l'istruzione sottostante è uguale a:
        //tuttiNomi=tuttiNomi+ ar_alunni[0]
        tuttiNomi += ar_alunni[i] + "<BR>";

    }
    //per numerare i nomi la stringa va messa fuori dal ciclo for altrimenti si ripete
    return tuttiNomi;
}




function creaTable() {
    //devo produre ris es:<ol><li>andrea</li><li>luca</li>>/ol>
    let tuttiNomi = "";

    for (i = 0; i < ar_alunni.length; i++) {
        // l'istruzione sottostante è uguale a:
        //tuttiNomi=tuttiNomi+ ar_alunni[0]
        tuttiNomi += "<tr><td>" + ar_alunni[i] + "</tr></td>";

    }
    //per numerare i nomi la stringa va messa fuori dal ciclo for altrimenti si ripete
    tuttiNomi = "<table border ='1'>" + tuttiNomi + "</table>";
    return tuttiNomi;

}

