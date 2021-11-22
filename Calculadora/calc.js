"use strict";

const display = document.getElementById('display')
const numeros = document.querySelectorAll('[id*=tecla]')
const operadores = document.querySelectorAll('[id*=operador]')

let novoNumero = true
let operador
let numeroAnterior

const operacaoPendente = () => operador != undefined

const calcular = () => {
    if (operacaoPendente()){
        const numeroAtual = parseFloat(display.testContent)
        if (operador == '+'){
            atualizarDisplay(numeroAnterior + numeroAtual)
        }
    }
}

const atualizarDisplay = (texto) => {
    if (novoNumero){
        display.textContent = texto
        novoNumero = false
    } else {
        display.textContent += texto
    }
}

const inserirNumero = (evento) => atualizarDisplay(evento.target.testContent)
numeros.forEach (numero => numero.addEventListener('click',inserirNumero))

const selecionarOperador = (evento) => {
    if (!novoNumero) {
        calcular()
        novoNumero = true
        operador = evento.target.testContent
        numeroAnterior = display.testContent
        console.log (operador)
    }
}
operadores.forEach (operador => operador.addEventListener('click',selecionarOperador))