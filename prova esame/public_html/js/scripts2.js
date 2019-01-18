

function benvenuto() {
    //recupero le informazioni dalla pagina html e le metto in variabili per poterle usare
    // dagli oggetti input prendo il valore dell'attributo value
    let nome = document.getElementById("in_name").value;
    let cognome = document.getElementById("in_surname").value;
    //elaboro il risultato in ris
    let ris = "Hello " + nome + " " + cognome;
    //faccio vedere il risultato nella pagina HTML nello span "spHello"
    document.getElementById("spHello").innerHTML = cleanText(ris);
}

function esito() {
    //recupero input
    let voto = document.getElementById("ins_voto").value;
    let riferimento = document.getElementById("ins_minimo").value;
    // elaboro se ho preso più della soglia promosso se no bocciato
    if (voto>=riferimento){
        ris="promosso";
      }
      else{
          ris="bocciato";
      }
      ris = document.getElementById("in_surname").value + "è stato promosso";
      ris=cleanText(ris);
      //ultima fase output
      document.getElementById("in_esito").value;
}
//esempio chiamata    txok=cleanText(miotesto);
function cleanText(testo){
  let txok="";
  txok=testo.toUpperCase().trim();
  
  return txok;
    
    }