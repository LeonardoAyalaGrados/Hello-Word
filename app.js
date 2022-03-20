const x = prompt("ingrese su edad");

const edad = (x) => {

    return x > 18 ? "Mayor de edad" : "Menor de edad";

}

document.write(edad(x));