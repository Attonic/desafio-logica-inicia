
class heroi{
    
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;  
    }
   
    atacar(){
        let ataque;
        if(this.tipo === "mago"){
            ataque = "Magia Suprema";
        }else if(this.tipo === "guerreiro"){
            ataque = "Espada Da Luz";
        }else if(this.tipo === "monge"){
            ataque = "Palma da Mão Budista"
        }else if(this.tipo === "ninja"){
            ataque = "Espada das Sombras";
        }
        
        return `O ${this.tipo} atacou usando: ${ataque}`
   }

}

const paladinaDaluz = new heroi("Ayase", "30", "guerreiro");
const magoDeFogo = new heroi("Zé piquno", "30", "mago");
const ninjaDasChamas = new heroi("Scorpion", "35", "ninja");

console.log(paladinaDaluz.atacar());
console.log(magoDeFogo.atacar());
console.log(ninjaDasChamas.atacar());