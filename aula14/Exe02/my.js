function verificar(){
   // window.alert('testando')
   var data =new Date()
   var ano  =data.getFullYear()
   var fano =document.getElementById('txtano')
   var res  = document.getElementById('res')
   if(fano.value.length == 0 || fano.value >ano ){
    window.alert(' Erro! Verifica e tente novamente ')
   }else{
       var fsex = document.getElementsByName('radsex')
       var idade  = ano - Number(fano.value)
       var genero = ''
       var img  = document.createElement('img')
       img.setAttribute('id','foto')

       //   MASCULINO!!
       if(fsex[0].checked){
        genero ='Homem'
        if(idade >= 0 && idade < 4){
            //Bêbe
             img.setAttribute('src','homem/bebe.png')
        }else if(idade >4 && idade < 10){
            //criança
            img.setAttribute('src','homem/criança.png')
        }else if(idade > 10 && idade <17){
            //adolecente
            img.setAttribute('src','homem/adolecente.png')
        }else if(idade > 17 && idade < 30){
            //jovem
            img.setAttribute('src','homem/jovem.png')
        }else if(idade > 30 && idade < 60){
            //adulto
            img.setAttribute('src','homem/adulto.png')
        }else{
            //idoso
            img.setAttribute('src','homem/idoso.png')
        }

        //FEMENINO
       }else if(fsex[1].checked){
        genero = 'Mulher'
        if(idade >= 0 && idade < 4){
            img.setAttribute('src','mulher/bebem.png')
            //Bêbe 
        }else if(idade >4 && idade < 10){
            //criança
            img.setAttribute('src','mulher/bebem.png')
        }else if(idade > 10 && idade <17){
            //adolecente
            img.setAttribute('src','mulher/criançam.png')
        }else if(idade > 17 && idade < 30){
            //jovem
            img.setAttribute('src','mulher/jovemm.png')
        }else if(idade > 30 && idade < 60){
            //adulto
            img.setAttribute('src','mulher/adultam.png')
        }else{
            //idosa
            img.setAttribute('src','mulher/idosa.png')
        }
       }

       res.innerHTML= `Detectamos ${genero} com ${idade} anos `
       res.style.textAlign='center'
       res.appendChild(img)
}
}