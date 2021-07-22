var btnGenera = document.getElementById("genera");
var btnGenera = document.getElementById("annulla");
console.log(btnGenera);
var nome, km, fascia_eta;

btnGenera.addEventListener("click",
    function(){
        nome = document.getElementById("nome").value;
        km = document.getElementById("km").value;
        fascia_eta = document.getElementById("fascia_eta").value;
    }
)

btnAnnulla.addEventListener("click",
    function(){
        biglietto.style.display = "none";

        //svuoto input
        document.getElementById("nome").value = " ";
        document.getElementById("km").value = " ";
        document.getElementById("fascia_eta").value = " ";
    }