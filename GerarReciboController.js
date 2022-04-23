

function gerarRecibo() {
    var valorSalario = parseFloat((document.getElementById("valorRecebido")).value);
    var empregado = document.getElementById("empregado").value;
    var aTituloDe = document.getElementById("aTituloDe").value;
    var remuneracaoMes = document.getElementById("remuneracaoMes").value;
    var empregador = document.getElementById("empregador").value;
    var cpfCnpj = document.getElementById("cpf").value;
    var cidade = document.getElementById("cidade").value;
    var data = document.getElementById("data").value;
    var selecionado = document.getElementsByName("pagamento");
    var duasVias = document.getElementById("vias");
    var mes = verificaMes(data);

    document.getElementById("valorSalario").innerHTML = "R$: " + valorSalario + "#";
    document.getElementById("paragrafoNome").innerHTML = "Eu, " + empregado;
    document.getElementById("paragrafoTitulo").innerHTML = "Declaro para todos os efeitos, ter recebido a título de " + aTituloDe + " a importância de:";
    document.getElementById("paragrafoValor").innerHTML = valorSalario.toString();
    document.getElementById("paragrafoTexto").innerHTML = "e em concordância com o disposto no Art. 462, da CLT, tenho plena consciência de que o respectivo "
    + "valor será descontado, pelo empregador: " + empregador + ", CNPJ: " + cpfCnpj + ", do pagamento da minha remuneração mensal relativa à folha do mês de "
    + remuneracaoMes + " e incidindo na base de cálculo de encargos sociais e fiscais para todos os efeitos legais.";
    document.getElementById("paragrafoCidadeData").innerHTML = cidade + ", " + data[8] + data[9] + " de " + mes + " de " + data[0] + data[1] + data[2] + data[3];



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

function validaFormaPagamento(formaPagamento) {
    for (i = 0; i < formaPagamento.size(); i++) {
        if (formaPagamento[i].checked) {
            return formaPagamento[i].id.toString();
        }
    }
}

function clickFormaPagamento(params) {
    var formaPagamento = validaFormaPagamento(selecionado);
    document.getElementById(formaPagamento + "Div").style.display = "block";
}

function verificaMes(data) {
    if (data[6] == '1' || data[6] == '2') {
        if (data[6] == '1') {
            if (data[5] == 1) {
                return "novembro";
            } else {
                return "janeiro";
            }
        } else {
            if (data[5] == 1) {
                return "dezembro";
            } else {
                return "fevereiro";
            }
        }
    } else if (data[6] == '3') {
        return "março";
    } else if (data[6] == '4') {
        return "abril";
    } else if (data[6] == '5') {
        return "maio";
    } else if (data[6] == '6') {
        return "junho";
    } else if (data[6] == '7') {
        return "julho";
    } else if (data[6] == '8') {
        return "agosto";
    } else if (data[6] == '9') {
        return "setembro";
    } else if (data[6] == '0') {
        return "outubro";
    } else {
        return "janeiro";
    }
}

function abrirImpressao() {
    var divAImprimir = document.getElementById("reciboSalario").innerHTML;  
    var janelaDeImpressao = window.open();  
    janelaDeImpressao.document.write(divAImprimir);  
    janelaDeImpressao.print();  
    janelaDeImpressao.close();
} 