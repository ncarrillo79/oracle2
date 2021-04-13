console.log('ola')
var tempoInicial=$("#tempo-digitacao").text()

var frase =$(".frase").text()
var numPalavras=frase.split(" ").length
var tamanhoFrase = $('#tamanho-frase')

tamanhoFrase.text(numPalavras)

var campo = $(".campo-digitacao")

//console.log(campo)
campo.on('input',function(){
var conteudo =campo.val()

var qtdPalavras = conteudo.split(/\S+/).length-1

//  /\S+/ = A expressão regular será responsável por buscar qualquer caractere, exceto espaço vazio
// A função .val() pode ser usada para pegar de elementos como <input>, <textarea> e <select>

console.log(qtdPalavras)
$("#contador-palavras").text(qtdPalavras)

var qtdCaracteres = conteudo.length
$("#contador-caracteres").text(qtdCaracteres)

})

var tempoRestante= $("#tempo-digitacao").text()
campo.one("focus",function(){
    var cronometroID= setInterval(function() {
     
        tempoRestante--;
        console.log(tempoRestante)
        $("#tempo-digitacao").text(tempoRestante);

        if(tempoRestante <1) {
            campo.attr("disabled", true);
            clearInterval(cronometroID)

        }
        campo.attr("rows")
        
        

    }, 1000);
})

//$("#botao-reiniciar").on("click",function() {
 //   console.log("cliquei")
//})

$("#botao-reiniciar").click(function(){
    campo.attr("disabled",false)
    campo.val("")
    $("#contador-palavras").text("0")
    $("#contador-caracteres").text("0")
    $("#tempo-digitacao").text(tempoInicial)
})