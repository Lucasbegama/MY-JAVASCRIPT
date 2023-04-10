function contar(){
    let ini = window.document.getElementById('txti')
    let fim = window.document.getElementById('txtf')
    let passo = window.document.getElementById('txtp')
     let resu = window.document.getElementById('res')
    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] Faltam Dados ')
        res.innerHTML += 'Imposivel comtar'
    }else{
        resu.innerHTML = 'Comtando:'
        let i  =Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0){
            window.alert('passo imvalido .Comsiderando passo 1 ')
            p =1 
        }
         
         if(i < f){
            //contagem cresente 
              for(let c = i;c <= f ; c+= p ){
            resu.innerHTML += `${c}\u{1f449}` 
        }
         }else{
            //contagem regresiva 
            for(c  = i ; c >= f ;c -= p){
                resu.innerHTML+= `${c}\u{1f449}`
            }
         }
      
        resu.innerHTML += '\u{1f3c1}'
    }
}
   