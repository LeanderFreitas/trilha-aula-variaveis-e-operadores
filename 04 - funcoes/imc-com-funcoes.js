function calcularImc(peso,altura){
    return peso / Math.pow(altura, 2);
}
function classificarImc(imc){
    if(imc < 18.5){
        return('abaixo do peso');
    }else if(imc >=18.5 && imc < 25){
        return('peso normal');
    }
    else if(imc >=25 && imc < 30){
        return('acima do peso');
    }
    else if(imc >=30 && imc < 40){
        return('obeso');
    }else{
        return('obsedidade grave');
    }

const peso =70;
const altura=1.70
const imc = peso / Math.pow(altura, 2);
console.log(imc);
}
//main//
(function (){
    const peso = 75;
    const altura = 1.75;

    const imc =calcularImc(peso,altura);
    console.log(classificarImc(imc));
})();
