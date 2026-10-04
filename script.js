/*
    ALGORITMO DO JOGO:

    1. Gerar um número secreto entre 1 e 100.
    2. Definir o máximo de 10 tentativas.
    3. Capturar e validar o palpite.
    4. Comparar o palpite com o número secreto.
    5. Informar se o número é maior, menor ou se acertou.
    6. Atualizar as tentativas restantes.
    7. Encerrar ao acertar ou acabar as tentativas.
    8. Revelar o número secreto ao perder.
*/

// Gera um número aleatório entre 1 e 100.
const numeroSecreto = Math.floor(Math.random() * 100) + 1;

// Define o máximo de tentativa.
const maxTentativas = 10;

// Conta as tentativas utilizadas.
let tentativas = 0;

// Seleciona os elementos do HTML pelo seus IDs.
const campoPalpite = document.getElementById("palpite")
const botaoChutar = document.getElementById("btnChutar")
const mensagem = document.getElementById("mensagem")
const tentativasElemento = document.getElementById("tentativas")

// Verifica o palpite do jogador.
function verificarPalpite() {

    // Impede novas tentativas quando o limite for atingido.
    if (tentativas >= maxTentativas){
        mensagem.textContent = "Para jogar novamamente, atualize a página"
        return;
    }
    
    // Converte o valor digitado para o número inteiro.
    const palpite = parseInt(campoPalpite.value);

    // Verificar se o número está fora do intervalo permitido.
    if (palpite < 1 || palpite > 100){
        mensagem.textContent = "Digite um número entre 1 e 100"
        return;
    }

    // Adiciona uma tentativa
    tentativas += 1;

    // Verifica se o jogador acertou.
    if (palpite === numeroSecreto){
        mensagem.textContent = "Parabéns! Você acertou o número secreto!"
        botaoChutar.disable = true;
        return;
    }

    // Verifica se o número secreto é maior
    else if (palpite < numeroSecreto) {
        mensagem.textContent = "O número secreto é maior"
    }

    // Caso contrário, o número secreto é menor
    else {
        mensagem.textContent = "O número secreto é menor"
    }

    // Calcula as tentativas restantes.
    const tentativasRestante = maxTentativas - tentativas;

    // Atualiza as tentativas exibidas na tela
    tentativasElemento.textContent = `Tentativas Restante: ${tentativasRestante}`

    // Verifica se o jogador atingiu o limite de tentativas.
    if (tentativas >= maxTentativas && palpite !== numeroSecreto){
        mensagem.textContent = `Fim de Jogo! O número secreto era ${numeroSecreto}`;
        botaoChutar.disable = true;
    }

    // Limpa o campo para o próximo palpite.
    campoPalpite.value = "";
}
