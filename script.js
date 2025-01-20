function verificar () {
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById ('txtano') // pega o texto da caixa de texto
   var res = document.querySelector('div#res') // pega o resultado no HTML

   if (fano.value.length == 0 || Number(fano. value) > ano){ // primeiro verifica se a caixa esta vazia e se o valor foi maior do que o ano atual
    window.alert ('[ERRO] verifique os dados e tente novamente!')
   } else { 
         var fsex = document.getElementsByName('radsex')// verifica o botão do genero
         var idade = ano - Number(fano.value) // realiza o calculo da idade de acordo com o valor digitado pelo usuario
   // res.innerHTML = `Idade calculada ${idade}` teste para ver se o calculo funcionou
        var gênero = ''// varivel vazia para ser atribuido o valor de acordo com a interação do usuario
        
        var img = document.createElement('img') // cria uma tag img
        img.setAttribute('id', 'foto') // coloca um ID pra tag criada

        if (fsex[0].checked){ // se o botão checado for o masculino vai atribui o genero masculino (homem)
            gênero = 'Homem'
            if (idade >= 0 && idade <10){ // Criança se a idade for maior ou igual a 0 e menor do que 10  
                img.setAttribute('src', 'criança-menino.png') // seleciona a imagem na pasta          
            } else if (idade < 21) { 
                // jovem
                img.setAttribute('src','adolescente-menino.png')
            } else if (idade < 50){
                // adulto
                img.setAttribute('src', 'jovem-homem.png')
            } else {
                // idoso
                img.setAttribute('src', 'idoso.png')
            }

        } else if (fsex[1].checked){
            gênero = 'Mulher'
            if (idade >= 0 && idade <10){
                // criança
                img.setAttribute('src', 'criança-menina.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'adolescente-menina.png')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'jovem-mulher.png')
            } else {
                // idoso
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign = 'center' // alinha o texto utilizado a tag style
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos. `
        res.appendChild(img) // acrescenta a imagem no site apos a mensagem acima. 
   }

}