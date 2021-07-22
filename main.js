var btnGenera = document.getElementById("genera");
var btnAnnulla = document.getElementById("annulla");
console.log(btnGenera);
var nome, km, fascia_eta, sconto;
var prezzo = km * 0.21;

var Minorenne = document.getElementById("minorenne");
var Maggiorenne = document.getElementById("maggiorenne");
var Over65 = document.getElementById("over65");

btnGenera.addEventListener("click",
    function(){
        document.getElementById("biglietto").style.display="block";

        nome = document.getElementById("nome").value;
        km = document.getElementById("km").value;
        fascia_eta = document.getElementById("fascia_eta").value;

        if(fascia_eta == "Minorenne"){
            sconto = (prezzo / 100) * 20;
            console.log(prezzo - sconto);
        }
        else if (fascia_eta == "Over65"){
            sconto = (prezzo / 100) * 40;
            console.log(prezzo - sconto);
        }
        else{
            console.log(prezzo);
        }
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
) 