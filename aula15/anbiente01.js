let carro_modelo = ['fiat', 'prata',2000 , 'placa 03lx9k' ,'chasi 8892998901.0101 ', 'Palio']
//let carro_modelo =['']
let carro = carro_modelo.length
carro_modelo.push(3)
carro_modelo[6]='Touro'
carro_modelo[7]='Vermelho'
carro_modelo[8]=2023
carro_modelo[9]='strada'
carro_modelo[10]='vinho'
carro_modelo[11]=2007
/*console.log(`O modelo do carro é ${carro_modelo[0]}`);
console.log(`A cor é ${carro_modelo[1]}`);
console.log(`O ano é ${carro_modelo[2]}`);
console.log(`O numero do chasi ${carro_modelo[4]}`)
console.log(`A placa ${carro_modelo[3]}`);
console.log(`Nome do modelo ${carro_modelo[5]}`);*/
for(let carro  = 0 ; carro<carro_modelo.length ; carro++){
    console.log(`O Modelo do ${carro} tem o modelo de ${carro_modelo[carro]}`);

}if(carro > 5){
    console.log(`O modelo do carro é ${carro_modelo[6]} a cor dele e´ ${carro_modelo[7]} da marca ${carro_modelo[0]} com a placa de ${carro_modelo[8]}`);

}else{
    console.log('Sem valores a rever ');
}

