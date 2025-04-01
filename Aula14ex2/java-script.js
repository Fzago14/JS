function tabuar(){
let num = document.getElementById('inume')
let tabu = document.getElementById('contab')

if (num.value.length ==  0){
    window.alert('Bota alguma coisa aí')
} else {
    let n = Number(num.value)
    let c = 1
    tabu.innerHTML = ''
    while (c <= 10) {
        let item = document.createElement('option')
        item.text = `${n} x ${c} = ${n*c}`
        tabu.appendChild(item)
        c++
    }}
}
