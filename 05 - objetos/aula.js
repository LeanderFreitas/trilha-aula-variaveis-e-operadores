class Pessoa{
    nome;
    idade;
    anoDENascimento;

    constructor(nome,idade){
        this.nome;
        this.idade;
        this.anoDENascimento = 2022 - idade;
    }
        descrever(){
            console.log('Meu nome é ${this.nome} e minha idade é ${this.idade}');
        }
    }
    const vior = new Pessoa('vitor',25);
    console.log(vitor);