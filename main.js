var btnGenera = document.getElementById("genera");
var btnAnnulla = document.getElementById("annulla");
var nome, km = 0, fascia_eta;

var Minorenne = document.getElementById("minorenne");
var Maggiorenne = document.getElementById("maggiorenne");
var Over65 = document.getElementById("over65");

btnGenera.addEventListener("click",
    function(){
        document.getElementById("biglietto").style.display="block";

        nome = document.getElementById("nome").value;
        km = document.getElementById("km").value;
        fascia_eta = document.getElementById("fascia_eta").value;
        var prezzo = km * 0.21;
        var numerocarrozza = Math.floor(Math.random() * 100) + 1;
        var codiceCP = Math.floor(Math.random() * (100000 - 90000 +1)) + 90000;

        if(fascia_eta == "minorenne"){
            prezzo = (prezzo / 100) * 80;
            document.getElementById("offerta").innerHTML = ("Sconto Minorenne del 20%");
        }
        else if (fascia_eta == "over65"){
            prezzo = (prezzo / 100) * 60;
            document.getElementById("offerta").innerHTML = ("Sconto Over65 del 40%");
        }
        else{
            document.getElementById("offerta").innerHTML = ("Biglietto Standard");
        }
        prezzo = prezzo.toFixed(2);
        document.getElementById("nome-passeggero").innerHTML = (nome);
        document.getElementById("carrozza").innerHTML = (numerocarrozza);
        document.getElementById("codice").innerHTML = (codiceCP);
        document.getElementById("costo").innerHTML = (prezzo + "€");
    }
)

btnAnnulla.addEventListener("click",
    function(){
        biglietto.style.display = "none";

        //svuoto input
        document.getElementById("nome").value = '';
        document.getElementById("km").value = '';
        document.getElementById("fascia_eta").value = '';
    }
) 