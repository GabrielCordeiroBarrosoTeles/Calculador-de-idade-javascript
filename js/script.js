function imprimir(){
    var nome=document.getElementById('nome').value
    var sobrenome=document.getElementById('sobrenome').value
    var ano=Number(document.getElementById('ano').value)
    var agora = new Date();
    var ano_atual = agora.getFullYear()
    var idade = ano_atual - ano
    document.getElementById('resultado').value=`${nome} ${sobrenome} tem ${idade} anos!`

}
