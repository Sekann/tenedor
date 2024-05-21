console.log("l l l ")
console.log("l l l ")
console.log("l l l ")
console.log("l l l ")
console.log("l l l ")

//Funcion para imprimir forma de tenedor

function printtenedor() {
    console.log("tenedor:");
    console.log("Imprimir tenedor")
}

//Funcion para imprimir forma de cucharilla 
function printcucharilla() {
    console.log("cucharilla:");
    console.log("Imprimir cucharilla")
}

//Funcion para imprimir forma de cuchillo
function printcuchillo() {
    console.log("cuchillo:");
    console.log("Imprimir cuchillo")
}

//Imprimir 1 vez tenedor 
printtenedor();

//Imprimir 2 veces cucharilla
for (let i = 0; i < 2; i++) {
    printcucharilla();
}

//Imprimir 3 veces cuchillo
for (let i = 0; i < 3; i++) {
    printcuchillo();
}

