//quando o usuário escolhe cifra de cesar, abrir opção de incremento
var decodeEscolhido = document.querySelector('#decodificador')
var incremento = document.querySelector('#incremento')
decodeEscolhido.addEventListener('change', function () {
  if (decodeEscolhido.value == 'cifraCesar') {
    incremento.style = 'display: flex'
  } else {
    incremento.style = 'display: none'
  }
})

// quando o usuário decide entre codificar e decodifiar, muda o botão

var tipoRadio = document.forms[0].escolhe
var tipo = document.querySelector('.tipo')
var enviar = document.querySelector('.enviar')

tipo.addEventListener('change', function () {
  if (tipoRadio[0].checked) {
    enviar.textContent = 'Codificar Mensagem!'
  } else {
    enviar.textContent = 'Decodificar Mensagem!'
  }
})

// base 64

var mensagem = document.querySelector('#input')
var output = document.querySelector('#output')
function traduz(mensagem) {
  var codigo = btoa(mensagem)
  resposta.innerText = codigo
}
