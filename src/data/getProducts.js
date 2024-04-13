const products = [
    {
        id: "IDparaElProducto1",
        name: "Nombre Corto 1",
        description: "Esta es una descripcion para un producto. 1",
        fullDescription: "Esta es una descripcion para un producto, que es un poco mas larga. Para rellenar la card. 1",
        stock: 4,
        category: "aluminio",
        image: "https://www.bronzen.com.ar/Imagenes/Productos/591/907/main.jpg",
        price: 1000
    },
    {
        id: "IDparaElProducto2",
        name: "Nombre Corto 2",
        description: "Esta es una descripcion para un producto. 2",
        fullDescription: "Esta es una descripcion para un producto, que es un poco mas larga. Para rellenar la card. 2",
        stock: 2,
        category: "aluminio",
        image: "https://www.bronzen.com.ar/Imagenes/Productos/592/908/main.jpg",
        price: 2000
    },
    {
        id: "IDparaElProducto3",
        name: "Nombre Corto 3",
        description: "Esta es una descripcion para un producto. 3",
        fullDescription: "Esta es una descripcion para un producto, que es un poco mas larga. Para rellenar la card. 3",
        stock: 6,
        category: "aluminio",
        image: "https://www.bronzen.com.ar/Imagenes/Productos/599/915/main.jpg",
        price: 3000
    },
    {
        id: "IDparaElProducto4",
        name: "Nombre Corto 4",
        description: "Esta es una descripcion para un producto. 4",
        fullDescription: "Esta es una descripcion para un producto, que es un poco mas larga. Para rellenar la card. 4",
        stock: 7,
        category: "puerta",
        image: "https://www.bronzen.com.ar/Imagenes/Categorias/30/main.jpg",
        price: 900
    },
    {
        id: "IDparaElProducto5",
        name: "Nombre Corto 5",
        description: "Esta es una descripcion para un producto. 5",
        fullDescription: "Esta es una descripcion para un producto, que es un poco mas larga. Para rellenar la card. 5",
        stock: 20,
        category: "puerta",
        image: "https://www.bronzen.com.ar/Imagenes/Categorias/31/main.jpg",
        price: 700
    },
    {
        id: "IDparaElProducto6",
        name: "Nombre Corto 6",
        description: "Esta es una descripcion para un producto. 6",
        fullDescription: "Esta es una descripcion para un producto, que es un poco mas larga. Para rellenar la card. 6",
        stock: 26,
        category: "puerta",
        image: "https://www.bronzen.com.ar/Imagenes/Categorias/32/main.jpg",
        price: 600
    },
    {
        id: "IDparaElProducto7",
        name: "Nombre Corto 7",
        description: "Esta es una descripcion para un producto. 7",
        fullDescription: "Esta es una descripcion para un producto, que es un poco mas larga. Para rellenar la card. 7",
        stock: 28,
        category: "baño",
        image: "https://www.bronzen.com.ar/Imagenes/Categorias/38/main.jpg",
        price: 5000
    },
    {
        id: "IDparaElProducto8",
        name: "Nombre Corto 8",
        description: "Esta es una descripcion para un producto. 8",
        fullDescription: "Esta es una descripcion para un producto, que es un poco mas larga. Para rellenar la card. 8",
        stock: 45,
        category: "baño",
        image: "https://www.bronzen.com.ar/Imagenes/Categorias/39/main.jpg",
        price: 600
    },
    {
        id: "IDparaElProducto9",
        name: "Nombre Corto 9",
        description: "Esta es una descripcion para un producto. 9",
        fullDescription: "Esta es una descripcion para un producto, que es un poco mas larga. Para rellenar la card. 9",
        stock: 29,
        category: "baño",
        image: "https://www.bronzen.com.ar/Imagenes/Categorias/40/main.jpg",
        price: 1900
    },
    {
        id: "IDparaElProducto10",
        name: "Nombre Corto 10",
        description: "Esta es una descripcion para un producto. 10",
        fullDescription: "Esta es una descripcion para un producto, que es un poco mas larga. Para rellenar la card. 10",
        stock: 12,
        category: "porton",
        image: "https://www.bronzen.com.ar/Imagenes/Categorias/61/main.jpg",
        price: 11000
    },
    {
        id: "IDparaElProducto11",
        name: "Nombre Corto 11",
        description: "Esta es una descripcion para un producto. 11",
        fullDescription: "Esta es una descripcion para un producto, que es un poco mas larga. Para rellenar la card. 11",
        stock: 90,
        category: "porton",
        image: "https://www.bronzen.com.ar/Imagenes/Categorias/63/main.jpg",
        price: 1000
    },
    {
        id: "IDparaElProducto12",
        name: "Nombre Corto 12",
        description: "Esta es una descripcion para un producto. 12",
        fullDescription: "Esta es una descripcion para un producto, que es un poco mas larga. Para rellenar la card. 12",
        stock: 27,
        category: "porton",
        image: "https://www.bronzen.com.ar/Imagenes/Categorias/78/main.jpg",
        price: 1700
    },
]
//obtener productos
const getProducts = new Promise((resolve, reject) => {
  //simulamos un retraso de red con setTimeout
    setTimeout(() => {
    resolve(products);
    }, 3000);
});

export default getProducts