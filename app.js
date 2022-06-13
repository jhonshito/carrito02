
const carrito = document.getElementById('carrito');
const template = document.getElementById('template');
const fragmen = document.createDocumentFragment();
const botones = document.querySelectorAll('.card button');


const objectos = {};

const agregarCarrito = (a) => {

    // console.log(a.target.dataset.frutas)
    // console.log(a.target.dataset.frutas)
    const productos = {
        titulo: a.target.dataset.frutas,
        id: a.target.dataset.frutas,
        cantidad: 1,
    }

    if (objectos.hasOwnProperty(productos.id)) {
        productos.cantidad = objectos[productos.id].cantidad + 1;
    }

    objectos[productos.id] = productos;

    pintarCarrito();
}



botones.forEach((boton) => boton.addEventListener("click", agregarCarrito));


const pintarCarrito = () => {
    carrito.textContent = "";
    // for(i=0;i<objectos.lengt();i++){
    //     item = objetos[i];
    // }
    Object.values(objectos).forEach((item) => {
        const clone = template.content.cloneNode(true);
            clone.querySelector('.lead').textContent = item.titulo;
            clone.querySelector('.rounded-pill').textContent = item.cantidad;
            fragmen.appendChild(clone);
    })
    carrito.appendChild(fragmen); 
}