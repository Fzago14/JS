let num = [14,69,09,22,3]
num.push(1)
num.sort()
console.log(num)
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`Nossa primeira posição é ${num[0]}`)
let pos = num.indexOf(14)
if (pos == -1) {
    console.log('O valor não foi encontrado')
} else {
console.log(`O valor 14 está na posição ${pos}`)
}