/*
4) Crear un archivo llamado utils.js 
A) Crear una función llamada validarTipo, que reciba una variable e imprima en consola el tipo 
de variable que es (pista: usar typeof) 
B) Crear una función que no reciba parámetros y no devuelva nada. 
C) Crear una función que reciba parámetros y no devuelva nada. 
D) Crear una función que no reciba parámetros y devuelva algo. 
E) Crear una función que reciba parámetros y devuelva algo. 
F) Crear un Objeto Alumno, con sus propiedades. 
G) Imprimir el objeto Alumno en consola.
*/

function validarTipo(variable)  {
    return console.log(`Esta variable es de tipo: ${typeof(variable)}`)
}
validarTipo("hola")

 function funcionNoParametros(){

 }

 function funcionNoParametros(a,b){
    
 }

 function funcionNoParametros(){
     return "algo"
 }

const Alumno = {
    nota: 9,
    nombre: "Luis",
    edad: 20,
}

console.log(Alumno)