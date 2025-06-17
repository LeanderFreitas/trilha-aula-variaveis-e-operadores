const numero = 12;
const numeroDivisivelPOr5 =  ( numero % 5) === 0;

if (numero === 0){
    console.log('o numero é invalido');
} else if(numeroDivisivelPOr5){
    console.log('sim');
}
else{
    console.log('nao');
}