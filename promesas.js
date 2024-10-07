/*let miPromesa = new Promise((resolver,rechazar) => {     //*promesas
let expresion = false;
if (expresion)
    resolver ('resolvio correcto');
else
rechazar ('se produjo un error');
});

miPromesa
.then(valor => console.log (valor))
.catch (error => console.log (error));

/*let promesa = new promise ((resolver) => {    //*promesas usando setimeout, callbaks funcion anonima y funcion arrows
//console.log ('inicio promesa');
setTimeout(() => resolver ('saludos con promesa y timeout'), 3000);
//console.log ('fin promesa');
})

//promesa.then (valor => console.log (valor));*/

/*async function miFuncionConPromesa (){    //*promesas usando async y await 
    return 'saludos con promesa y async';
}

miFuncionConPromesa().then(valor=> console.log (valor));

const button = document.querySelector('button'); //*funcion anonima con funcion arrow
button.addEventListener('click', () => {
  console.log('Botón clickeado');
});


const operation =  (numero1, numero2, operand) => { //* funciones arrow
  return operand(numero1, numero2);
}

operation(5,4, (a, b) => a + b);
operation(5,4, (a, b) => a - b);
operation(5,4, (a, b) => a * b);
operation(5,4, (a, b) => a / b);
*/

async function promesaConAsyncYAwait() {
  console.log('inicio funcion');
  let miPromesa = new Promise(resolve => {
    setTimeout(()=> resolve('promesa con async y await'), 300);
  });
  console.log(await miPromesa);
  console.log('fin de la funcion');

}
promesaConAsyncYAwait();
/*
//* ejemplo con express

const express = require('express');
const app = express();

// Simulación de una función que devuelve una promesa (como una consulta a una base de datos)
function obtenerDatos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exito = true;
      if (exito) {
        resolve({ mensaje: 'Datos obtenidos exitosamente' });
      } else {
        reject('Error al obtener los datos');
      }
    }, 2000); // Simula un retraso de 2 segundos
  });
}

// Ruta en Express
app.get('/datos', (req, res) => {
  obtenerDatos()
    .then((resultado) => {
      res.json(resultado); // Enviamos los datos como respuesta en formato JSON
    })
    .catch((error) => {
      res.status(500).send(error); // Enviamos un error si la promesa falla
    });
});

// Levantar el servidor
app.listen(3000, () => {
  console.log('Servidor corriendo en el puerto 3000');
});
*/