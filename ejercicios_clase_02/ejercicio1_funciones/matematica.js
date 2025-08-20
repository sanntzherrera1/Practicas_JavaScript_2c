/*1) Crear un archivo llamado matematica.js 
A) Crear una función llamada sumar que retorne la suma de dos números que le ingresemos. 
B) Crear una función llamada restar que retorne la resta de dos números que le ingresemos. 
C) Crear una función llamada multiplicar, que retorne la multiplicación de dos números que le 
ingresemos. 
D) Crear una función llamada dividir, que retorne la división de dos números que le 
ingresemos. 
*/

function sumar(a,b){
    return a+b;
}
console.log(`La suma es ${sumar(2,2)}`);

function restar(a,b){
    return a-b;
}
console.log(`La resta es ${restar(2,2)}`);

function multiplicar(a,b){
    return a*b;
}
console.log(`La multiplicacion es ${multiplicar(2,2)}`);

function dividir(a,b){
    return a/b;
}
console.log(`La division es ${dividir(2,2)}`);