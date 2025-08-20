/*3) Crear un archivo llamado saludos.js 
A) Crear una constante llamada saludo, que reciba por parámetro un día de la semana, una 
temperatura, y un nombre, que retorne un mensaje de saludo personalizado, utilizando los 3 
parámetros de entrada. 
B) Realizar la invocación de la función saludo imprimiendo en la consola el mensaje 
personalizado.
*/

const saludo = (dia,temp,nombre) => {
    return (`hoy es ${dia} hace ${temp} grados me llamo ${nombre}`)
}

console.log(saludo(4,34,"luis"))