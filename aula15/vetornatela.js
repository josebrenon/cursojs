let num = [5,8,2,9,3,8]
/*
for(let pos = 0; pos < num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}*/
num.sort()
for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}