function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('foto')
var data = new Date()
//var hora = data.getHours()
var hora = 16
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12) {
//BOM DIA!
img.src = 'imagens/pexels-pixabay-531972.jpg'
}else if (hora >= 12 && hora < 18){
//BOA TARDE!
img.src = 'imagens/pexels-nihat-12231-69224.jpg'
document.body.style.background = '#e2cd9f'
}else {
//BOA NOITE!
img.src = 'imagens/pexels-pixabay-355465.jpg'
document.body.style.background = 'black'
}
}