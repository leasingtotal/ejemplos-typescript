"use strict";
// primero, debemos partir abriendo la terminal y ponemos tsc --init para abrir el archivo
// de configuracion de typescript. Con el, podemos cambar la salida de javascript que tendra
//  y las herramientas que estaran permitidas usar.
//  voy a partir con una funcion auto invocada para ver los resultados en el navegaor.
// tsc -w
(() => {
    const saludo = (nombre) => {
        console.log(`Hola ${nombre} que tal`);
    };
    const persona = {
        nombre: "Jose",
        apellido: "Sakuda",
        correo: "sakudacastro@gmail.com",
        celular: 989070635,
    };
    saludo(persona.nombre);
    const validar = (nombre, apellido, dni = 12341234, celular) => {
        if (nombre === 'Jose' && apellido === 'Sakuda') {
            return console.log(`Hola ${persona.nombre} ${persona.apellido}. Tu numero de celular es: ${celular} y tu dni es: ${dni}`);
        }
        else {
            return console.log('No eres el indicado');
        }
    };
    validar(persona.nombre, persona.apellido);
    // destructurar un objeto
    const auto = {
        velocidad: 100,
        marca: 'audi',
        modelo: 'A4'
    };
    const { marca, modelo } = auto;
    console.log(`Tu auto es un ${marca} modelo ${modelo}`);
    // promesas
    console.log('Inicio');
    const prom = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Se termino el Timeout');
        }, 1000);
    });
    prom.then(mensaje => console.log(mensaje));
    // .catch(error => console.warn(error))
    console.log('fin');
    // otro ejemplo
    const retiro = (monto) => {
        let dineroActual = 1500;
        return new Promise((resolve, reject) => {
            if (monto > dineroActual) {
                reject('Supera la cantidad de fondos');
            }
            else {
                dineroActual -= monto;
                resolve(monto);
            }
        });
    };
    retiro(1000)
        .then(dineroActual => console.log(`Quedan ${dineroActual}`))
        .catch(console.warn);
    const casaEjemplo = {
        metrosCuadrados: 1200,
        habitaciones: 'dos',
        tipo: 'DFL1',
        precio: 100000000
    };
})();
