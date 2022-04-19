

function gerarRecibo() {
    var valorSalario = parseFloat((document.getElementById("valorRecebido")).value);
    var empregado = document.getElementById("empregado");
    var aTituloDe = document.getElementById("aTituloDe");
    var remuneracaoMes = document.getElementById("remuneracaoMes");
    var empregador = document.getElementById("empregador");
    var cpfCnpj = document.getElementById("cpf");
    var cidade = document.getElementById("cidade");
    var data = document.getElementById("data");
    var selecionado = document.getElementById("dinheiro");
    var duasVias = document.getElementById("vias");

    document.getElementById("valorSalario").innerHTML = "R$: " + valorSalario + "#";



    mostrarRecibo();

}



function mostrarRecibo() {
    var reciboPronto = document.getElementById("reciboPronto").style.display;

    if (reciboPronto == "none") {
        document.getElementById("reciboPronto").style.display = "block";
    } else {
        document.getElementById("reciboPronto").style.display = "none";
    }
}

