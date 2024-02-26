var res = document.getElementById('res')
var txtinicio = document.getElementById('txtinicio')
var txtfim = document.getElementById('txtfim')
var txtpasso = document.getElementById('txtpasso')
function contar() {    
    if (txtinicio.value.length == 0 || txtfim.value.length == 0 || txtpasso.value.length == 0) {
        res.innerHTML = 'Impossível contar!'   
    }else{
        res.innerHTML = 'Contando: <br>'
        var inicio = Number(txtinicio.value)
        var fim = Number(txtfim.value)
        var passo = Number(txtpasso.value)
        if (passo == 0) {
            alert('Passo inválido! Considerando PASSO 1')
            passo = 1  
        }
        if (inicio < fim){
            for(inicio; inicio <= fim; inicio += passo){
                res.innerHTML += ` ${inicio} \u{1F449} `
            }
        }else{
            for(inicio; inicio >= fim; inicio -= passo){
                res.innerHTML += ` ${inicio} \u{1F449} `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }   
}