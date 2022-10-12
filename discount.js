const productos = [
    {nombre: "teclado", precio: 200},
    {nombre: "mousepad", precio: 100},
    {nombre: "pantalla", precio: 650},
    {nombre: "cable", precio: 200},
    {nombre: "audifonos", precio: 550},
];

let restoCupon = 0;
let cupones = 0
let minimoPago = 1000
let carrito = []
let seleccion = prompt("quieres comprar algo? (si/no)")

if(seleccion == "si"){
    let listaProductos = productos.map(
        (producto) => producto.nombre + " " + "$" + producto.precio
    );
    alert(listaProductos.join(" - "))
    console.log(productos);
} else if (seleccion == "no"){
    alert("vuelva pronto")
}

while (seleccion != "no"){
    let producto = prompt("Escribe un producto")
    let precio = 0
    
    if(producto == "teclado" || producto == "mousepad" || producto == "pantalla" || producto == "cable" || producto == "audifonos"){
        switch (producto){
            case "teclado":
                precio = 200
                break;
            case "mousepad":
                precio = 100
                break;
            case "pantalla":
                precio = 650
                break;
            case "cable":
                precio = 200
                break;
            case "audifonos":
                precio = 550
                break;        
        }
    let cantidad = parseInt(prompt("cuantos"))

    carrito.push({producto, cantidad, precio})
    console.log(carrito)
    } else {
        alert("producto no disponible")
    }

    seleccion = prompt("quiere seguir comprando?")

    while(seleccion === "no"){
        carrito.forEach((productosCarrito) => {
            console.log ("producto:" + productosCarrito.producto + "cantidad:" + productosCarrito.cantidad + "precio" 
            + productosCarrito.precio + "precio total:" + productosCarrito.cantidad * productosCarrito.precio)

            totalComp = productosCarrito.cantidad * productosCarrito.precio
        })

        break;
    }
}

const total = carrito.reduce((acc,el) => acc + el.precio * el.cantidad, 0)
console.log ("total a pagar:$" + total)



function restar (n1, n2){
    restoCupon= n1-n2;
    return;
}


restar(minimoPago,total);

if (restoCupon < 0) {
    restoCupon = restoCupon * -1;
}

if (total >= minimoPago) {
    document.write("<br>Te haz ganado un cupon para tu proxima compra.");
} else {
    document.write("<br>Te falto<br>" + restoCupon + "<br>para conseguir un cupon de descuento en tu proxima compra");
    console.log(restoCupon);
}

while (total >= minimoPago){
    cupones ++;
    console.log("se sumo un cupon");
    console.log(cupones)
    break;
}