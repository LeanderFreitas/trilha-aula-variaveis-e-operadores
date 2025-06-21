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
    function compararPessoas(p1,p2){
        if(p1.idade > p2.idade){
           console.log('${p1.nome} é mais velho(a) que ${p2.nome}');
        }
        else if(p1.idade > p2.idade){
            console.log('${p2.nome} é mais velho(a) que ${p1.nome}');
        }
        else{
             console.log('${p1.nome} é mais velho(a) que ${p2.nome}');
        }
    }
    const vitor = new Pessoa('vitor',25);
    const renan = new Pessoa('renan',30);