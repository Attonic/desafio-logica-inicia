function rank(vitorias, derrotas){
    let nivel;
    let rank = vitorias - derrotas;
    if(rank <= 10){
        nivel = "Ferro";
    }else if(rank > 11 && rank <= 20){
        nivel = "Bronze";
    }else if(rank > 21 && rank <= 50){
        nivel = "Prata";
    }else if(rank > 51 && rank <= 80){
        nivel = "Ouro";
    }else if(rank > 81 && rank <= 90){
        nivel = "Diamante";
    }else if(rank > 91 && rank <= 100){
        nivel = "Lendário";
    }else if(rank > 101){
        nivel = "Imortal";
    }
    return `O Héroi tem de saldo ${rank} de vitorias e está no novel de ${nivel} `
};

let ranking = rank(10, 2);
console.log(ranking);

console.log(rank(120, 10));