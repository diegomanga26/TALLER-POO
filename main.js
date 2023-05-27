// EJERCICIO #3

//CLASE PRINCIPAL

class Figura {
    constructor({ color, area }) {
        this.color = color;
        this.area = area;
    }

    set setColor(color) {
        this.color = color;
    }
    get getColor() {
        return this.color;
    }
    set setArea(area) {
        this.area = area;
    }
    get getArea() {
        return this.area;
    }

    static calcularArea() {}
}

document.addEventListener("change", (e) => {
    let selectorFig = document.querySelector("#figura").value;
    let radio = document.querySelector("#formRadio");
    let largo = document.querySelector("#formLargo");
    let ancho = document.querySelector("#formAncho");

    radio.style.display = "none";
    largo.style.display = "none";
    ancho.style.display = "none";

    if (selectorFig === "1") {
        radio.style.display = "block";
    } else if (selectorFig === "2") {
        largo.style.display = "block";
        ancho.style.display = "block";
    }
});

document.addEventListener("click", (e) => {
    e.preventDefault();
    let color1 = document.getElementById("color").value;
    let radio1 = document.getElementById("radio").value;
    let largo1 = document.getElementById("largo").value;
    let ancho1 = document.getElementById("ancho").value;
    if (e.target.id === 'btnCalcular')  {
        const circulo1 = new Circulo({ color: color1, radio: radio1 })
        Circulo.calcularArea(circulo1.getColor,circulo1.getRadio);
    } else if (e.target.id === 'btnCalcular') {
        const rectangulo1 = new Rectangulo({ color: color1, largo: largo1, ancho: ancho1 })
        Rectangulo.calcularArea(rectangulo1.getColor,rectangulo1.getLargo, rectangulo1.getAncho);
    }
});

document.addEventListener("click", (e) => {
    e.preventDefault();
    
})

// CLASE CIRCULO

class Circulo extends Figura {
    constructor({color, area, radio}) {
        super({color, area})
        this.radio = radio;
    }
    set setRadio(radio) {
        this.radio = radio;
    }
    get getRadio() {
        return this.radio;
    }

    static calcularArea(color, radio) {
        return document.querySelector("#tarjeta").innerHTML=`<div class="card text-bg-light mb-3" style="max-width: 18rem;">
        <div class="card-header">Circulo</div>
        <div class="card-body">
        <p class="card-text">El circulo color ${color} tiene un area total de ${(Math.PI*(radio**2)).toFixed(3)} m^2.</p>
        </div>
        </div>
        `;
    };
};

// CLASE RECTANGULO

class Rectangulo extends Figura {
    constructor({color, area, largo, ancho}) {
        super({color, area})
        this.largo = largo;
        this.ancho = ancho;
    }
    set setLargo(largo) {
        this.largo = largo;
    }
    get getLargo() {
        return this.largo;
    }
    set setAncho(ancho) {
        this.ancho = ancho;
    }
    get getAncho() {
        return this.ancho;
    }

    static calcularArea(color, largo, ancho) {
        return document.querySelector("#tarjeta").innerHTML=`<div class="card text-bg-light mb-3" style="max-width: 18rem;">
        <div class="card-header">Rectangulo</div>
        <div class="card-body">
        <p class="card-text">El Rectangulo color ${color} total del rectangulo es ${(largo*ancho).toFixed(3)} m^2</p>
        </div>
        </div>
        `;
    }
};
