class CareerManager{
    materias = [];
    constructor(){  //Funcion que se ejecuta automaticamente, sin llamarla. 
        this.materias = [];
        /* Contenido info de las materias: { id: 1, nombre: 'PWA', semestre: 1, horas: 2 } */

    }

    //método para agregar materias:
    addMateria(materia){             //Método que recibe como parámetro una materia
        if(!materia.id || !materia.nombre || !materia.semestre || !materia.horas){
            return 'Faltan parámetros obligatorios';
        }

        this.materias.push( materia );
    }

    //método para mostrar materias:
    getMateria(){
        return this.materias;
    }

    getMateriaxId(id){   //--> se pasa por parámetro el id (de la materia).
        const materia = this.materias.find( m => m.id === id );
        if(!materia){
            return "No se encontró la materia"
        }
        return materia;
    }
}


// crear una instancia de la clase: 
const carrera = new CareerManager()


//crear una materia
carrera.addMateria({ id: 1, nombre: 'PWA', semestre: 3, horas: 2 });
carrera.addMateria({ id: 2, nombre: 'Programación I', semestre: 3, horas: 4 });
carrera.addMateria({ id: 3, semestre: 2, horas: 4 });

//llamar a mostrar materia
const materias = carrera.getMateria();
console.table(materias);

//llamar una materia por id
const materia = carrera.getMateriaxId(2);
console.log(materia);
