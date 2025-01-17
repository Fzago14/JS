function Verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('inade')
    var res = document.querySelector('div#res')
    if (fano.value.lenght == 0 || Number(fano.value) > ano){
        window.alert('Catapimbas')
    } else {
        var fsex = document.getElementsByName('macho')
        var idade = ano - Number(fano.value) }
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        var genero = ''
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 18){
                 //Kid
                 img.setAttribute('src', 'fotopia-m.jpg')
            } else if (idade < 60) {
                //macho
                img.setAttribute('src', 'fotomacho-m.jpg')
            } else {
                //veio da havan
                img.setAttribute('src', 'fotoveio-m.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 18){
                //Kid
                img.setAttribute('src', 'fotopia-f.jpg')
           } else if (idade < 60) {
               //macho
               img.setAttribute('src', 'fotomacho-f.jpg')
           } else {
               //veio da havan
               img.setAttribute('src', 'fotoveio-f.jpg')
           }
        }
        
        res.style.textAlign = 'center'
        res.innerHTML = `Vc é ${genero} com ${idade} anos.`
        res.appendChild(img)  
    
}