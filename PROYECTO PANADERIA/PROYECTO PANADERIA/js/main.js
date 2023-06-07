// PRODUCTOS

const productos = [

    // Abrigos
    
    {
    
    id: "abrigo-01",
    
    titulo: "PAN GRANDE",
    
    imagen: "../img/PAN DE QUESO.png",
    
    categoria: {
    
    nombre: "Panaderia",
    
    id: "Panaderia"
    
    },
    
    precio: 3000
    
    },
    
    {
    
    id: "abrigo-02",
    
    titulo: "PAN PEQUEÑO ",
    
    imagen: "../img/-PAN ROLLO.jpg",
    
    categoria: {
    
    nombre: "Panaderia",
    
    id: "Panaderia"
    
    },
    
    precio: 600
    
    },
    
    {
    
    id: "abrigo-03",
    
    titulo: "CROISSANT",
    
    imagen: "../img/croissant.jpg",
    
    categoria: {
    
    nombre: "Panaderia",

    id: "Panaderia"

    },
    
    precio: 2500
    
    },
    
    {
    
    id: "abrigo-04",
    
    titulo: "BAGUETTE",
    
    imagen: "../img/baguette.jpeg",
    
    categoria: {
    
    nombre: "Panaderia",
    
    id: "Panaderia"
    
    },
    
    precio: 4000
    
    },
    
    {
    
    id: "abrigo-05",
    
    titulo: "ALMOJÁBANA",
    
    imagen: "../img/ALMOJABANA.jpeg",
    
    categoria: {
    
    nombre: "Panaderia",
    
    id: "Panaderia"
    
    },
    
    precio: 2500
    
    },
    
    // Camisetas
    
    {
    
    id: "camiseta-01",
    
    titulo: "PASTEL POLLO",
    
    imagen: "../img/Pastel2.jpg",
    
    categoria: {
    
    nombre: "Pasteleria",
    
    id: "Pasteleria"
    
    },
    
    precio: 3500
    
    },
    
    {
    
    id: "camiseta-02",
    
    titulo: "MANTECADA",
    
    imagen: "../img/Mantecada.webp",
    
    categoria: {
    
    nombre: "Pasteleria",
    
    id: "Pasteleria"
    
    },
    
    precio: 3000
    
    },
    
    {
    
    id: "camiseta-03",
    
    titulo: "PORCION POSTRE",
    
    imagen: "../img/POSTRE PORCION.jpg",
    
    categoria: {
    
    nombre: "Pasteleria",
    
    id: "Pasteleria"
    
    },
    
    precio: 3500
    
    },
    
    {
    
    id: "camiseta-04",
    
    titulo: "BROWNIES",
    
    imagen: "../img/Brownies.jpg",
    
    categoria: {
    
    nombre: "Pasteleria",
    
    id: "Pasteleria"
    
    },
    
    precio: 3500
    
    },
    
    {
    
    id: "camiseta-05",
    
    titulo: "GALLETAS",
    
    imagen: "../img/galletas.jpg",
    
    categoria: {
    
    nombre: "Pasteleria",
    
    id: "Pasteleria"
    
    },
    
    precio: 2500
    
    },
    
    {
    
    id: "camiseta-06",
    
    titulo: "PASABOCAS",
    
    imagen: "../img/PASABOCAS CON BOCADILLO.jpg",
    
    categoria: {
    
    nombre: "Pasteleria",
    
    id: "Pasteleria"
    
    },
    
    precio: 2500
    
    },
    
    {
    
    id: "camiseta-07",
    
    titulo: "MUFFINS",
    
    imagen: "../img/Muffins.jpg",
    
    categoria: {
    
    nombre: "Pasteleria",
    
    id: "Pasteleria"
    
    },
    
    precio: 3500
    
    },
    
    {
    
    id: "camiseta-08",
    
    titulo: "SÁNDWICH",
    
    imagen: "../img/sandwich.jpg",
    
    categoria: {
    
    nombre: "Pasteleria",
    
    id: "Pasteleria"
    
    },
    
    precio: 4000
    
    },
    
    // Pantalones
    
    {
    
    id: "pantalon-01",
    
    titulo: "COMBO-01 TAMAL",
    
    imagen: "../img/COMBO TAMAL.jpg",
    
    categoria: {
    
    nombre: "Desayunos",
    
    id: "Desayunos"
    
    },
    
    precio: 12000
    
    },
    
    {
    
    id: "pantalon-02",
    
    titulo: "COMBO-02 HUEVOS",
    
    imagen: "../img/COMBO HUEVOS.jpeg",
    
    categoria: {
    
    nombre: "Desayunos",
    
    id: "Desayunos"
    
    },
    
    precio: 11000
    
    },
    
    {
    
    id: "pantalon-03",
    
    titulo: "COMBO-03 CHANGUA",
    
    imagen: "../img/Changua.jpg",
    
    categoria: {
    
    nombre: "Desayunos",
    
    id: "Desayunos"
    
    },
    
    precio: 12000
    
    },
    
    {
    
    id: "pantalon-04",
    
    titulo: "COMBO-04 CALDO COSTILLA",
    
    imagen: "../img/CALDO-de-costilla.jpg",
    
    categoria: {
    
    nombre: "Desayunos",
    
    id: "Desayunos"
    
    },
    
    precio: 12500
    
    },
    
    {
    
    id: "pantalon-05",
    
    titulo: "COMBO-05 MOÑONA",
    
    imagen: "../img/desayunos_el_coquito_monona.jpg",
    
    categoria: {
    
    nombre: "Desayunos",
    
    id: "Desayunos"
    
    },
    
    precio: 13000
    
    }
    
    ];
    
    const contenedorProductos = document.querySelector("#contenedor-productos");
    
    const botonesCategorias = document.querySelectorAll(".boton-categoria");
    
    const tituloPrincipal = document.querySelector("#titulo-principal");
    
    let botonesAgregar = document.querySelectorAll(".producto-agregar");
    
    const numerito = document.querySelector("#numerito");
    
    function cargarProductos(productosElegidos) {
    
    contenedorProductos.innerHTML = "";
    
    productosElegidos.forEach(producto => {
    
    const div = document.createElement("div");
    
    div.classList.add("producto");
    
    div.innerHTML = `
    
    <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
    
    <div class="producto-detalles">
    
    <h3 class="producto-titulo">${producto.titulo}</h3>
    
    <p class="producto-precio">$${producto.precio}</p>
    
    <button class="producto-agregar" id="${producto.id}">Agregar</button>
    
    </div>
    
    `;
    
    contenedorProductos.append(div);
    
    })
    
    actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {

boton.addEventListener("click", (e) => {

botonesCategorias.forEach(boton => boton.classList.remove("active"));

e.currentTarget.classList.add("active");

if (e.currentTarget.id != "todos") {

const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);

tituloPrincipal.innerText = productoCategoria.categoria.nombre;

const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);

cargarProductos(productosBoton);

} else {

tituloPrincipal.innerText = "Todos los productos";

cargarProductos(productos);

}

})

});

function actualizarBotonesAgregar() {

botonesAgregar = document.querySelectorAll(".producto-agregar");

botonesAgregar.forEach(boton => {

boton.addEventListener("click", agregarAlCarrito);

});

}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {

productosEnCarrito = JSON.parse(productosEnCarritoLS);

actualizarNumerito();

} else {

productosEnCarrito = [];

}

function agregarAlCarrito(e) {

const idBoton = e.currentTarget.id;

const productoAgregado = productos.find(producto => producto.id === idBoton);

if(productosEnCarrito.some(producto => producto.id === idBoton)) {

const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);

productosEnCarrito[index].cantidad++;

} else {

productoAgregado.cantidad = 1;

productosEnCarrito.push(productoAgregado);

}

actualizarNumerito();

localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));

}

function actualizarNumerito() {

let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);

numerito.innerText = nuevoNumerito;

}