// EJERCICIO #2

//CLASE PRINCIPAL

class Animal {
    constructor({ nombre, edad }) {
        this.nombre = nombre;
        this.edad = edad;
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

    static hacerSonido(nombre, edad) {
        return document.querySelector("#tarjeta").innerHTML = `<div class="card text-bg-light mb-3" style="max-width: 18rem;">
        <div class="card-header"><h5>${nombre}</h5></div>
        <div class="card-body">
        <p class="card-text">El animal ${nombre} de ${edad} años hizo un sonido</p>
        </div>
        </div>`
    }
}

document.addEventListener("click", (e) => {
    e.preventDefault();
    let nombre1 = document.getElementById("nombre").value;
    let edad1 = document.getElementById("edad").value;
    let raza1 = document.getElementById("raza").value;
    if (e.target.id == 'btnSonido') {
        const animal1 = new Animal({ nombre: nombre1, edad: edad1 })
        Animal.hacerSonido(animal1.getNombre, animal1.getEdad);
    } else if (e.target.id == "btnMover") {
        const perro1 = new Perro({ raza:raza1 });
        Perro.moverCola(perro1.raza);
    }
});

// CLASE PERRO

class Perro extends Animal {
    constructor({nombre, edad, raza}) {
        super({nombre, edad})
        this.raza = raza;
    }
    set setRaza(raza) {
        this.raza = raza;
    }
    get getRaza() {
        return this.raza;
    }

    static moverCola(raza) {
        return document.querySelector("#tarjeta2").innerHTML = `<div class="card text-bg-light mb-3" style="max-width: 18rem;">
        <div class="card-header"><h5>${raza}</h5></div>
        <div class="card-body">
        <p class="card-text">El ${raza} está moviendo la cola.</p>
        </div>
        </div>`
    }
};

