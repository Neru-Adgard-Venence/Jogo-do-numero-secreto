//let titulo = document.querySelector('h1'); //Indicar ao JavaScript onde está o titulo.
//titulo.innerHTML = 'Jogo do número secreto'; //Indicando o texto que deve ser apesentado no site.

//let paragrafo = document.querySelector('p'); //Indicar ao JavaScript onde está o paragrafo.
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10'; //Indicando o texto que deve ser apesentado no site.

let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio(); //Cria a variavel numero secreto se conectando com a função de numero aleatório.
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {  //Function consegue reduzir a escrita do código, criando "pseu-do-variaveis" para organizar o código.
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2}); //Chamar voz do site de narração.
}

function exibirMensagemInicial() {
    
    exibirTextoNaTela('h1','Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute() { //Função que coleta o dado do usuario ter apentado o botão.
    let chute = document.querySelector('input').value; //A variavel chute em document (HTML) implementavel em "input" com caracteristica valor.

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o numero secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
    // console.log(chute == numeroSecreto); //Exibir no console que o usuario apertou o botão.
}

function gerarNumeroAleatorio() {      //Função de gerar um numero aleatório.
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1); // O numero aleatório é criado com as funções de Math Random e ele então retorna seu valor ao apertar o botão de Chute.
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) { //Pega a informação do NS e identifica se ela já foi utilizada.
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial ();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Boolean = Valor é verdadeiro (true) ou falso (false).

// else if = Verificar mais uma condição entre if e else:

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function verificarNumero(numero) {
  //if (numero > 0) {
    //console.log("O número é positivo.");
  //} else if (numero < 0) {
    //console.log("O número é negativo.");
  //} else {
    //console.log("O número é zero.");
  //}
//}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Array = lista:

// let numeros = [1, 2, 3]

// - Exibir numeros:

// numeros

//- Exibir comprimento da lista:

// numeros.length

// - Exibir primeiro numero da lista:

// numeros[0]

// - Exibir o ultimo numero:

// numeros[numeros.length - 1]

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Coodigo Voice 2 (Em caso de erros na voice 1):

// - Js: 

// function exibirTextoNaTela(tag, texto) {
//     let campo = document.querySelector(tag);
//     campo.innerHTML = texto;
//     if ('speechSynthesis' in window) {
//         let utterance = new SpeechSynthesisUtterance(texto);
//         utterance.lang = 'pt-BR'; 
//         utterance.rate = 1.2; 
//         window.speechSynthesis.speak(utterance); 
//     } else {
//         console.log("Web Speech API não suportada neste navegador.");
//     }
// }

// - HTML:

//<head>
    //<meta charset="UTF-8">
    //<meta name="viewport" content="width=device-width, initial-scale=1.0">
    //<link rel="preconnect" href="https://fonts.googleapis.com">
    //<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    //<link href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@700&family=Inter:wght@400;700&display=swap"
        //rel="stylesheet">
    //<link rel="stylesheet" href="style.css">
    //<title>JS Game</title>
//</head>