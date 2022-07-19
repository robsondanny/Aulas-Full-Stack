const VISOR = document.getElementById('visor');

let memoriaAuxiliar = 0;
let operacao = false;

function selecionarNumero(numero) {
    if (VISOR.innerHTML.length >= 9) {
        return;
    }

    if (VISOR.innerHTML == 0 || memoriaAuxiliar != 0 || operacao == false) {
        VISOR.innerHTML = numero;
    } else {
        //concatenando
        VISOR.innerHTML += numero;
    }
}

function limpar() {
    VISOR.innerHTML = 0;
}

function somar() {
    operacao = true;

    if (memoriaAuxiliar != 0) {
        VISOR.innerHTML = parseInt(memoriaAuxiliar) + parseInt(VISOR.innerHTML);
        memoriaAuxiliar = 0;

        operacao = false;
        return;
    }

    memoriaAuxiliar = VISOR.innerHTML;
}

