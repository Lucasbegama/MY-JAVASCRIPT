const data = new Date()
const mês= data.getMonth() //para pegar o mês
const semana=data.getDay() // para pegar a semana
const ano = data.getFullYear() //para pegar o ano 
const dia =data.getDate() //para pegar o dia numero

console.log(`O ano e ${ano} e o dai  ${dia} de ${mês[0,1,2,3,4,5,6,7,8,9,10,11] } `);

switch(mês){
    case 0  :
       console.log('JANEIRO');
       break

       case 1:
       console.log('FEVEREIRO');
       break

       case 2 :
       console.log('MARÇO');
       break
       case 3 :
       console.log('ABRIL');
       break
       case 4 :
       console.log('MAIO');
       break

       case 5 :
       console.log('JUNHO');
       break
       case 6 :
       console.log('JULHO');
       break
       case 7 :
       console.log('AGOSTO');
       break
       case 8 :
       console.log('SETEMBRO');
       break
       case 9 :
       console.log('OUTUBRO');
       break
       case 10:
       console.log('NOVEMBRO');
       break
       case 11:
       console.log('DEZEMBRO');
       break

     
}  switch(semana){
         case 0:
         console.log(' DOMINGO');
            break
            case 1:
            console.log('SEGUNDA');
               break
               case 2:
         console.log('TERSA');
            break
            case 3:
         console.log('QUARTA');
            break
            case 4:
         console.log('QUINTA');
            break
            case 5 :
         console.log('SEXTA');
            break
            case 6:
         console.log('SABADO');
            break

         
       }   
            