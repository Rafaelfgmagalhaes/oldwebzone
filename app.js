var data = new Date();
var dia = data.getDate();
var mes = data.getMonth();
var ano = data.getFullYear();
var DSemana = data.getDay();

var meses = [
  'janeiro', 'fevereiro', 'marco', 'abril',
  'maio', 'junho', 'julho', 'agosto',
  'setembro', 'outubro', 'novembro', 'dezembro'
];

var hoje = function(){
    if(DSemana == 0){
        return 'Domingo';
    } else if(DSemana == 1){
        return 'Segunda-feira';
    } else if(DSemana == 2){
        return 'Terca-feira';
    } else if(DSemana == 3){
        return 'Quarta-feira';
    } else if(DSemana == 4){
        return 'Quinta-feira';
    } else if(DSemana == 5){
        return 'Sexta-feira';
    } else if(DSemana == 6){
        return 'Sabado';
    }
};

var calendario = "Ol&aacute;, hoje &eacute; " + hoje() + ", " + dia + " de " + meses[mes] + " de " + ano;
document.getElementById("datadehoje").innerHTML = calendario;
