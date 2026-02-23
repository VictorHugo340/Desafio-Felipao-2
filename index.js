//Função que pega o saldo de partidas
function saldoRankeada(vitoria, derrota){
   return vitoria - derrota; 

}
//Lançamento das Variáveis
let vitoria = 100
let derrota = 10
let saldo = saldoRankeada(vitoria, derrota)
let nivel = ""

//Estrutura de decisão para definir o nivel
    if (saldo < 10) {
        nivel = "Ferro"
    } else if (saldo <= 20) {
        nivel = "Bronze"
    } else if (saldo <= 50){
        nivel = "Prata"
    } else if (saldo <= 80){
        nivel = "Ouro"
    } else if (saldo <= 90){
        nivel = "Diamante"
    } else if (saldo <= 100){
        nivel = "Lendário"
    } else{
        nivel = "Imortal"
    }
//Resultado
console.log("O Heroi tem o saldo de " + saldo + " e está no nível " + nivel)
