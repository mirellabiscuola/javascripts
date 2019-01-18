function benvenuto() {
    let nome = document.getElementById("in_name").value;
    let cognome = document.getElementById("in_surname").value;



    document.getElementById("spHello").innerHTML = " Hello " + nome + " " + cognome;


}

function esito() {
    let voto = document.getElementById("ins_voto").value * 1;
    let riferimento = document.getElementById("ins_minimo").value * 1;
    if (voto >= riferimento) {
        document.getElementById("");

    } else {
        bocciato;
    }
}

