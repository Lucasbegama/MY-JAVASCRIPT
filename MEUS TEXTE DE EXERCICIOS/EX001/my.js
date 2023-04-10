function verificar(){
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('image')
    let cx =window.document.getElementById('caixa')
    let data = new Date()
    let horas = data.getHours()
    let minutos = data.getMinutes()
    let segundos = data.getSeconds()
    let timehoras = horas + ':' + minutos+ ':'+ segundos
    msg.innerHTML =`Agora são ${timehoras} horas <br><br> `
     //var horas=18

    if(horas >= 0 && horas < 12){
        msg.innerHTML+='UM BOM DIA '
        img.src='img/map.png'
        document.body.style.backgroundColor='#a76d00'
        cx.style.backgroundColor='#3f2900'
        msg.style.color='white'

    }else if(horas >= 12 && horas < 18 ){
        msg.innerHTML+='UMA BOA TARDE '
        img.src='img/tar.png'
        document.body.style.backgroundColor='#ff8289'
        cx.style.backgroundColor='#ff82c8'
        msg.style.color='white'
    }else{
        msg.innerHTML+='UMA BOA NOITE '
        img.src='img/no.png'
        document.body.style.backgroundColor='#8800ff'
        cx.style.backgroundColor='#491589'
        msg.style.color='white'

    }

}
setInterval(verificar,1000)