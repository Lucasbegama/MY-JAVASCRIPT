let data  = new Date()
let meses  = data.getMonth()
let diasemana = data.getDay()
let dia = diasemana.length
//let meses =
console.log(`O mes é ${meses}`);
console.log(`Estamo no dia ${dia}`);

 switch(meses){
    case 0 :
        console.log('Janeiro');     
        break
    case 1:
        console.log('Fevereiro');
        break
    case 2:
        console.log('Março');
        break 
    case 3:
        console.log('Abril');
        break
    case 4:
        console.log('Maio');
         break
    case 5 :
        console.log('Junho');
        break
    case 6:
        console.log('Julho');
        break
    case 7:
        console.log('Agosto');
        break
    case 8:
        console.log('Setembro');
        break
    case 9:
        console.log('Outubro');
        break
    case 10:
        console.log('Novembro');
        break
    case 11:
        console.log('Dezembro');
        break  

    }if(meses ==11 || meses == 0 || meses == 1 ){
              console.log('ESTAMOS NO VERÃO ');

       }else if(meses == 2 || meses ==3 || meses == 4){
            console.log('ESTAMOS NO OUTORNO');

        }else if(meses == 5 || meses == 6 || meses == 7 ){
            console.log('ESTAMOS NO INVERNO ');

        }else if(meses == 8 || meses == 9 || meses ==10){
            console.log('ESTAMOS NA PRIMAVERA ');
        }
       switch(diasemana){
            case 0:
                console.log('Domingo');
                break
            case 1:
                console.log('Segunda');
                break
            case 2:
                console.log('Tersa');
                break
            case 3:
                console.log('Quarta ');
                break
            case 4:
                console.log('Quinta');
                break
            case 5:
                console.log('Sexta');
                break
            case 6:
                console.log('Sabado');
                break
                default :
                    if(diasemana== 0){
                        console.log('Domingo');
                    }else if(diasemana == 1){
                        console.log('Segunda-feira');

                    }else if(diasemana == 2){
                        console.log('Tersa-feira');

                    }else if(diasemana== 3){
                        console.log('Quarta- feira ');

                    }else if(diasemana== 4){
                        console.log('Quinta- feira ');
                    }else if(diasemana == 5){
                        console.log('Sexta-feira');
                    }else{
                        console.log('Sabado');
                    }

            

                
            }
  