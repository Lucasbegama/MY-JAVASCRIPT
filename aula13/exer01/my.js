function carregar(){
    var msg = window.document.getElementById('msg')
    var img  = window.document.getElementById('imagens')
    var t_h =window.document.getElementById('pri')
    var c_x = window.document.getElementById('caixa')
    var data= new Date()
     var hora = data.getHours()
     var minuto = data.getMinutes()
     var segu =data.getSeconds()
     var time = hora+ ':'+minuto+ ':'+segu
     

    //var hora =18
    msg.innerHTML =`Agora são ${time} horas`

    if(hora >= 0 && hora < 12){
          img.src='img/map.png'
          document.body.style.backgroundColor='#4d443d'
        //Bom dia 
    }else if(hora >= 12 && hora <18){
        img.src='img/tar.png'
        document.body.style.backgroundColor='#c4925d'
        //boa tarde 
    }else{
         img.src='img/no.png'
         document.body.style.backgroundColor='#010623'
         msg.style.color='#22273a'
         msg.style.textShadow='0px 0px 5px #4377ae '
         t_h.style.textShadow='0 0 30px #4377ae'
         c_x.style.boxShadow='0px 0px 20px #4377ae'
        //boa noite 
    }

}  

setInterval(carregar,1000)