const nombre = 'Lara';

console.log(`Hola ${nombre}`);

const persona = {
    nombre: 'José',
    email: 'jose@mail.com',
    edad: 26,

    //funcion:
    mostrarEdad(){    // this --> es este objeto.
        console.log(`Mi edad es ${this.edad}`);
    }
}

console.log( persona.nombre);
persona.mostrarEdad();