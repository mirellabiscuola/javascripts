
function benvenuto(){
    //recupero le informazioni dalla pagina html e le metto in variabili per poterle usare
    // dagli oggetti input prendo il valore dell'attributo value
   let nome = document.getElementById("in_name").value;
   let cognome = document.getElementById("in_surname").value;
   //elaboro il risultato in ris
   let ris="Hello " +nome +" " +cognome;
   //faccio vedere il risultato nella pagina HTML nello span "spHello"
   document.getElementById("spHello").innerHTML = ris;
   
   
}
