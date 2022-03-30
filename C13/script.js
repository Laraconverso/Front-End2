const contenedorProductos = document.getElementById('productos')


const productos = [
    {
        id: 1,
        nombre: "Producto 1",
        precio: 1500,
        img: "https://via.placeholder.com/250"
    },
    {
        id: 2,
        nombre: "Producto 2",
        precio: 2500,
        img: "https://via.placeholder.com/250"
    },
    {
        id: 3,
        nombre: "Producto 3",
        precio: 3500,
        img: "https://via.placeholder.com/250"
    },
    {
        id: 4,
        nombre: "Producto 4",
        precio: 4500,
        img: "https://via.placeholder.com/250"
    },
    {
        id: 5,
        nombre: "Producto 5",
        precio: 5500,
        img: "https://via.placeholder.com/250"
    },
    {
        id: 6,
        nombre: "Producto 6",
        precio: 6500,
        img: "https://via.placeholder.com/250"
    },
    {
        id: 7,
        nombre: "Producto 7",
        precio: 7500,
        img: "https://via.placeholder.com/250"
    },
]

productos.forEach((product) => {

    contenedorProductos.innerHTML += `
        <div>
        <img src=${product.img} />
        <h3 class="titulo">${product.nombre}</h3>
        <p class="strong">Precio: $${producto.precio}</p>
        <p>Código: ${producto.id}</p>
        <button onclick="agregarAlCarrito(${producto.id})">Agregar</button>
        </div>
    `
    console.log("iteracion "+producto.id);

    // contenedorProductos.append(div)
})