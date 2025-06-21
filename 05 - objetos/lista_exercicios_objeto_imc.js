class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome,peso,altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
    calcularImc(){
        return this.peso / (this.altura * this.altura);
    }
    calcularImc() {
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
}
}
const jose = new Pessoa('jose',70,1.75);
console.log(jose.calcularImc());
const renan =new Pessoa ('renan',63,1.75);
console.log(renan.calcularImc());
const vitor =new Pessoa('vitor',60,1.69);
console.log(vitor.calcularImc());