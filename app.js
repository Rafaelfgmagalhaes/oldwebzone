const data = new Date();
    
const dia = data.getDate();
const mes = data.getMonth();
const ano = data.getFullYear();
const DSemana = data.getDay();
const meses = [
  'janeiro', 'fevereiro', 'março', 'abril',
  'maio', 'junho', 'julho', 'agosto',
  'setembro', 'outubro', 'novembro', 'dezembro'
];


let hoje = function(){
    if(DSemana == 0){
        return 'Domingo';
    } else if(DSemana == 1){
        return 'Segunda-feira'
    } else if(DSemana == 2){
        return 'Terça-feira';
    } else if(DSemana == 3){
        return 'Quarta-feira'
    }else if(DSemana == 4){
        return 'Quinta-feira'
    }else if(DSemana == 5){
        return 'Sexta-feira'
    }else if(DSemana == 6){
        return 'Sábado'
    }
};


// console.log(`Olá, hoje é ${hoje()}, ${dia} de ${meses[mes]} de ${ano}`);


const calendario = `Ol&aacute;, hoje &eacute; ${hoje()}, ${dia} de ${meses[mes]} de ${ano}`;
document.getElementById("datadehoje").innerHTML = calendario;

