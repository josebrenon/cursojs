let num = [5,4,8,2]
num.push(7)
num.sort()
console.log(`Nosso vetor é ${num}`)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor é ${num[0]}`)
let pos = num.indexOf(8)
if (pos == -1) {
    console.log('Valor não encontrado!')
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}