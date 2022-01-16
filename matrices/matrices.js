/*Declara un array llamado "carreritas" con los siguientes valores: Lucía, Roberto, María, Jesús, Andrea y José (éste será el orden de sus posiciones dentro de una carrera). Deberás imprimir la clasificación actual.
La carrera continúa y se van modificando esas posiciones:
1-Andrea adelanta a María
2-José es descalificado de la carrera
3-Detrás de Lucía y antes de Roberto se clasifican tres nuevos corredores: Cristóbal, Fernanda y Armando
4-Hay un nuevo concursante que toma el primer puesto: Federico
5-Imprime la clasificación actual con las posiciones que se han modificado*/
 
var carreritas = ["Lucía", "Roberto", "María", "Jesús", "Andrea", "José"];
//console.log(carreritas);
 
carreritas.splice(4,1);//Quita a Andrea
console.log(carreritas);
 
carreritas.unshift("Andrea");//1-Andrea adelanta a María
console.log(carreritas);
 
carreritas.splice(1,1);//Eliminamos a Lucía
console.log(carreritas);
 
carreritas.splice(1,1);//Eliminamos a Roberto
console.log(carreritas);
 
carreritas.unshift("Roberto");//Agregamos a Roberto
console.log(carreritas);
 
carreritas.unshift("Lucía");//Agregamos a Lucía
console.log(carreritas);
 
//2-Descalificamos a José

carreritas.pop();//Agregamos a Roberto
console.log(carreritas);
 
//3-Detrás de Lucía y antes de Roberto se clasifican tres nuevos corredores: Cristóbal, Fernanda y Armando

carreritas.splice(0,1);//Eliminamos a Lucía
console.log(carreritas);
 
carreritas.unshift("Armando");//Agregamos a Armando
console.log(carreritas);
 
carreritas.unshift("Fernanda");//Agregamos a Fernando
console.log(carreritas);
 
carreritas.unshift("Cristóbal");//Agregamos a Cristóbal
console.log(carreritas);

carreritas.unshift("Lucía");//Agregamos a Lucía
console.log(carreritas);
 
//4-Hay un nuevo concursante que toma el primer puesto: Federico
carreritas.unshift("Federico");
console.log(carreritas);
 
//5-Clasificación Actual
console.log(carreritas);
 
