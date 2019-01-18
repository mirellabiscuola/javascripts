
function ass_pot() {
    //recupero le informazioni dalla pagina html e le metto in variabili per poterle usare
    // dagli oggetti input prendo il valore dell'attributo value
   let v1 = document.getElementById("in_v1").value;
   let v2 = document.getElementById("in_v2").value;
   
   let ris=potenza(v1,v2);
   document.getElementById("div_insDati").innerHTML=ris;
    
    }




