let cantidad, precio, desc, compra, pagar, cupones, minimoPago, restoCupon;

precio = parseFloat(prompt("Ingresar precio"));
cantidad = parseFloat(prompt("Ingresar cantidad de productos"));

compra = precio * cantidad;
desc = compra * 0.15;
pagar = compra - desc;
minimoPago = 500;
cupones = 0;
restoCupon=0;

function restar (n1, n2){
    restoCupon= n1-n2;
    return;
}

restar(minimoPago,pagar);

document.write("Tu descuento es de: " + desc);
document.write("<br>Tu total a pagar es de:" + pagar);

if (restoCupon < 0) {
    restoCupon = restoCupon * -1;
}

if (pagar >= minimoPago) {
    document.write("<br>Te haz ganado un cupon para tu proxima compra.");
} else {
    document.write("<br>Te falto<br>" + restoCupon + "<br>para conseguir un cupon de descuento en tu proxima compra");
    console.log(restoCupon);
}

while (pagar >= minimoPago){
    cupones ++;
    console.log("se sumo un cupon");
    break;
}