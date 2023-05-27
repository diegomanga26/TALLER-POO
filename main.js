// EJERCICIO #1

//CLASE PRINCIPAL

class Persona {
    constructor({ nombre, edad, sexo }) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
    }

    set setNombre(nombre) {
        this.nombre = nombre;
    }
    get getNombre() {
        return this.nombre;
    }
    set setEdad(edad) {
        this.edad = edad;
    }
    get getEdad() {
        return this.edad;
    }
    set setSexo(sexo) {
        this.sexo = sexo;
    }
    get getSexo() {
        return this.sexo;
    }

    static saludar(nombre, edad, sexo) {
        return document.querySelector("#tarjeta").innerHTML = `<div class="card text-bg-light mb-3" style="max-width: 18rem;">
        <div class="card-header"><h5>${nombre}</h5></div>
        <div class="card-body">
        <p class="card-text">Hola me llamo ${nombre}, soy ${sexo} y tengo ${edad} años</p>
        </div>
        </div>`
    }
    static esMayorDeEdad(edad) {
        if (edad >= 18) {
            return true
        } else {
            return false
        }
    }
}

document.addEventListener("click", (e) => {
    e.preventDefault();
    let nombre1 = document.getElementById("nombre").value;
    let edad1 = document.getElementById("edad").value;
    let sexo1 = document.getElementById("sexo").value;
    let carrera1 = document.getElementById("carrera").value;
    if (e.target.id == 'btnSaludar') {
        const persona1 = new Persona({ nombre: nombre1, edad: edad1, sexo: sexo1 })
        Persona.saludar(persona1.getNombre, persona1.getEdad, persona1.getSexo);
        console.log(Persona.esMayorDeEdad(persona1.edad));
    } else if (e.target.id =="btnEstudiar"){
        const estudiante1 = new Estudiante({ nombre: nombre1, edad: edad1, sexo: sexo1, carrera: carrera1 });
        Estudiante.estudiar(estudiante1.nombre, estudiante1.edad, estudiante1.sexo, estudiante1.carrera);
        console.log(Persona.esMayorDeEdad(estudiante1.edad));
    }
});

// CLASE ESTUDIANTE

class Estudiante extends Persona {
    constructor({ nombre, edad, sexo, carrera }) {
        super({ nombre, edad, sexo });
        this.carrera = carrera;
    }
    set setCarrera(carrera) {
        this.carrera = carrera;
    }
    get getCarrera() {
        return this.carrera;
    }
    static estudiar(nombre, edad, sexo, carrera) {
        return document.querySelector("#tarjeta2").innerHTML = `<div class="card text-bg-light mb-3" style="max-width: 18rem;">
        <div class="card-header"><h5>${nombre}</h5></div>
        <div class="card-body">
        <p class="card-text">Hola me llamo ${nombre}, soy ${sexo}, tengo ${edad} años y estudié ${carrera}</p>
        </div>
        </div>`
    }
};

