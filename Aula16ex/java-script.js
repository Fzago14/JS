function tabelar(){
    let num = document.getElementById('inum')
    let box = document.getElementById('itext')

    if (num.value.length == 0 || num.value.length <= 100) {
        window.alert('Bota alguma coisa certa meu nobre')
    } else {
        let n = Number(num.value)
        let item = document.createElement('option')
        item.text = (`Valor ${n} adicionado`)
        box.appendChild(item)
    }
}