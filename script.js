var horas = 0;
var minutos = 0;
var segundos = 18345;

minutos = (segundos / 60) | 0;
segundos = segundos % 60;
horas = (minutos / 60) | 0;
minutos = minutos % 60;
console.log(horas , 'horas' , minutos , 'minutos' , segundos , 'segundos');