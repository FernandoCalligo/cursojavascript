class Producto {
    constructor(nombre, stock, precio) {
        this.nombre = nombre;
        this.stock = stock;
        this.precio = precio;
    }
}

const producto1 = new Producto ("TV Led 30 pulgadas", 20, 40000 );
const producto2 = new Producto ("Horno electrico", null, 14000 );
const producto3 = new Producto ("Heladera", 10, 120000 );
const producto4 = new Producto ("Batidora", null, 8000 );

const productos = [producto1, producto2, producto3, producto4]

const contdiv = document.getElementById("conteiner");
const btnstock = document.getElementById("btnstock");
const btnborrar = document.getElementById("btnborrar");


productos.forEach(productos => {
    contdiv.innerHTML += `
    <div class="cardinfo">
        <h1>${productos.nombre}</h1>
        <span>Stock disponible: ${(productos?.stock ?? "No hay stock disponibles") }</span>
        <p> Precio: $${productos.precio}</p>
    </div>
    `
})

btnstock.addEventListener("click", () => {
    producto1.stock = null;
    producto2.stock = 50;
    producto3.stock = null;
    producto4.stock = 45;
    contdiv.innerHTML = ``

    productos.forEach(productos => {
            contdiv.innerHTML += `
            <div class="cardinfo">
                <h1>${productos.nombre}</h1>
                <span>Stock disponible: ${(productos?.stock ?? "No hay stock disponibles") }</span>
                <p> Precio: $${productos.precio}</p>
            </div>
            `
        })
})

btnborrar.addEventListener("click", () => {
    producto1.stock = null;
    producto2.stock = null;
    producto3.stock = null;
    producto4.stock = null;
    contdiv.innerHTML = ``

    productos.forEach(productos => {
            contdiv.innerHTML += `
            <div class="cardinfo">
                <h1>${productos.nombre}</h1>
                <span>Stock disponible: ${(productos?.stock ?? "No hay stock disponibles") }</span>
                <p> Precio: $${productos.precio}</p>
            </div>
            `
        })
})