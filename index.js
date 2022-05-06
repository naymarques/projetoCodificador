//quando o usuário escolhe cifra de cesar, abrir opção de incremento
var decodeEscolhido = document.querySelector('#decodificador')
var incremento = document.querySelector('.incremento')
decodeEscolhido.addEventListener('change', function () {
  if (decodeEscolhido.value == 'cifraCesar') {
    incremento.style = 'display: flex'
  } else {
    incremento.style = 'display: none'
  }
})

// quando o usuário decide entre codificar e decodifiar, muda o botão

var tipoRadio = document.forms[0].escolhe
var tipo = document.querySelector('.escolheTraducao')
var enviar = document.querySelector('.enviar')

tipo.addEventListener('change', function () {
  if (tipoRadio[0].checked) {
    enviar.textContent = 'Codificar Mensagem!'
  } else {
    enviar.textContent = 'Decodificar Mensagem!'
  }
})

// Resultado

var formulario = document.forms.formulario

formulario.addEventListener('submit', function (e) {
  e.preventDefault()

  var mensagem = formulario.input.value
  var escolha = formulario.decodificador.value
  var botoes = formulario.escolhe.value
  var numeroIncremento = formulario.valorInc.value
  var mensagemFinal = ''

  if (escolha == 'cifraCesar') {
    mensagemFinal = cesar(botoes, mensagem, numeroIncremento)
  } else {
    mensagemFinal = base64(botoes, mensagem)
  }

  var resultadoTexto = document.getElementById('output')
  resultadoTexto.innerHTML = `${mensagemFinal}`
})

/* Base */
function base64(escolhe, mensagem) {
  if (escolhe == 'codificar') {
    return btoa(mensagem)
  } else {
    return atob(mensagem)
  }
}

/* Cifra */
function cesar(escolhe, mensagem, numeroIncremento) {
  numeroIncremento = Number(numeroIncremento)

  var mensagemFinal = ''

  for (var i = 0; i < mensagem.length; i++) {
    var letra = mensagem[i]
    var codigo = letra.charCodeAt()

    if (escolhe == 'codificar') {
      codigo += numeroIncremento
    } else {
      codigo -= numeroIncremento
    }
    mensagemFinal += String.fromCharCode(codigo)
  }
  return mensagemFinal
}
