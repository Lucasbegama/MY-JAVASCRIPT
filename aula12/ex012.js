
var horas = new Date() 
var agora = horas.getHours()
console.log(`Agoar são exatamente ${agora} Horas `)
if(agora <12){
    console.log('Um Bom dia ')
}else if(agora< 18 ){
    console.log('Uma Boa Tarde')
}else if(agora > 18  ){
    console.log('Uma Boa Noite ')
}