function tabuar(){
let num = document.getElementById('inume')
let tabu = document.getElementById('contab')

if (num.value.length ==  0){
    window.alert('Bota alguma coisa aí')
} else {
    let n = Number(num.value)
    let c = 1
    while (c <= 10) {
        let item = document.createElement('option')
        item.text = `${num} x ${c} = ${num*c}`}
        tabu.appendChild(item)
        c++
    }
}
