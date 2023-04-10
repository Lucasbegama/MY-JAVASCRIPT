        function tabuada(){
           let nu = window.document.getElementById('txtn')  
           let tab = window.document.getElementById('seltab')
            
           if(nu.value.length == 0 ){
            window.alert('por favor ,digite um numero ')
           }else{
            let n = Number(nu.value)
            let v  =1
            tab.innerHTML = ''
            while( v <= 10 ){
                let item = document.createElement('option')
                item.text = `${n} x ${v} = ${n*v}`
                item.valeu  = `tab${v}`
                tab.appendChild(item)
                v++
            }
            
           }
    
        }
   
