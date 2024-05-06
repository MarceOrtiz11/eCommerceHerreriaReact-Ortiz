const products = [
    {
        "id": "N9TT-9G0A-B7FQ",
        "name": "Manija de Aluminio",
        "description": "Manija de aluminio resistente y duradera para puertas y ventanas. Ideal para proyectos de construcción y renovación.",
        "fullDescription": "Manija de aluminio resistente y duradera para puertas y ventanas. Esta manija está diseñada para ofrecer un agarre cómodo y seguro. Fabricada con materiales de alta calidad, es perfecta para proyectos de construcción y renovación que requieren productos confiables y de larga duración.",
        "stock": 4,
        "category": "aluminio",
        "image": "https://www.bronzen.com.ar/Imagenes/Productos/591/907/main.jpg",
        "price": 1000
    },
    {
        "id": "QK6A-JI6S-7ETR",
        "name": "Bisagra Reforzada",
        "description": "Bisagra reforzada para puertas y portones. Ofrece resistencia y estabilidad para un funcionamiento suave y duradero.",
        "fullDescription": "Bisagra reforzada para puertas y portones. Esta bisagra está diseñada para proporcionar resistencia y estabilidad excepcionales, garantizando un funcionamiento suave y duradero incluso en condiciones exigentes. Con acabados de alta calidad, es ideal para aplicaciones residenciales y comerciales.",
        "stock": 2,
        "category": "aluminio",
        "image": "https://www.bronzen.com.ar/Imagenes/Productos/592/908/main.jpg",
        "price": 2000
    },
    {
        "id": "SXFP-CHYK-ONI6",
        "name": "Cerradura Multipunto",
        "description": "Cerradura multipunto de alta seguridad para puertas. Ofrece protección adicional y tranquilidad para su hogar o negocio.",
        "fullDescription": "Cerradura multipunto de alta seguridad para puertas. Esta cerradura está diseñada para brindar protección adicional y tranquilidad para su hogar o negocio. Con múltiples puntos de cierre y mecanismos anti-palanca, garantiza la máxima seguridad. Fácil de instalar y operar, es una opción ideal para quienes buscan seguridad sin compromisos.",
        "stock": 6,
        "category": "aluminio",
        "image": "https://www.bronzen.com.ar/Imagenes/Productos/599/915/main.jpg",
        "price": 3000
    },
    {
        "id": "XNSS-HSJW-3NGU",
        "name": "Cerradura para Puerta Principal",
        "description": "Cerradura de alta calidad para puertas principales. Ofrece seguridad y estilo para su hogar.",
        "fullDescription": "Cerradura de alta calidad para puertas principales. Esta cerradura combina seguridad y estilo para brindarle tranquilidad y mejorar la estética de su hogar. Fabricada con materiales duraderos y acabados elegantes, es una opción ideal para quienes buscan protección sin sacrificar el diseño. Fácil de instalar y mantener, garantiza un funcionamiento suave y confiable.",
        "stock": 7,
        "category": "puerta",
        "image": "https://www.bronzen.com.ar/Imagenes/Categorias/30/main.jpg",
        "price": 900
    },
    {
        "id": "NHLE-L6MI-4GE4",
        "name": "Aldaba de Hierro Fundido",
        "description": "Aldaba de hierro fundido para puertas. Agrega un toque de elegancia y funcionalidad a su entrada.",
        "fullDescription": "Aldaba de hierro fundido para puertas. Esta aldaba combina elegancia y funcionalidad para agregar un toque distintivo a su entrada. Con un diseño clásico y acabados de calidad, es perfecta para aquellos que buscan realzar la estética de su hogar con un elemento práctico y duradero.",
        "stock": 20,
        "category": "puerta",
        "image": "https://www.bronzen.com.ar/Imagenes/Categorias/31/main.jpg",
        "price": 700
    },
    {
        "id": "6ETI-UIL2-9WAX",
        "name": "Cerrojo de Acero Inoxidable",
        "description": "Cerrojo de acero inoxidable resistente y confiable para puertas. Proporciona seguridad y tranquilidad para su hogar o negocio.",
        "fullDescription": "Cerrojo de acero inoxidable resistente y confiable para puertas. Este cerrojo está diseñado para proporcionar seguridad y tranquilidad, ya sea en su hogar o negocio. Fabricado con materiales de alta calidad y mecanismos de cierre avanzados, ofrece una protección confiable contra intrusos. Fácil de instalar y operar, es una opción ideal para aquellos que buscan una solución de seguridad efectiva y duradera.",
        "stock": 26,
        "category": "puerta",
        "image": "https://www.bronzen.com.ar/Imagenes/Categorias/32/main.jpg",
        "price": 600
    },
    {
        "id": "2E62-E3SR-33FI",
        "name": "Grifería de Baño",
        "description": "Grifería de baño elegante y funcional para su hogar. Agrega estilo y comodidad a su cuarto de baño.",
        "fullDescription": "Grifería de baño elegante y funcional para su hogar. Esta grifería combina estilo y funcionalidad para agregar un toque de lujo a su cuarto de baño. Con acabados de alta calidad y diseño ergonómico, ofrece un control preciso del flujo de agua y una experiencia de uso cómoda. Fácil de instalar y mantener, es una opción ideal para renovar su espacio de baño con un toque de elegancia.",
        "stock": 28,
        "category": "baño",
        "image": "https://www.bronzen.com.ar/Imagenes/Categorias/38/main.jpg",
        "price": 5000
    },
    {
        "id": "7EIQ-72IU-2YNV",
        "name": "Toallero de Acero Cromado",
        "description": "Toallero de acero cromado resistente y duradero para su baño. Proporciona un lugar conveniente para colgar toallas.",
        "fullDescription": "Toallero de acero cromado resistente y duradero para su baño. Este toallero ofrece un lugar conveniente para colgar toallas, manteniéndolas organizadas y al alcance. Fabricado con acero de alta calidad y acabado cromado, combina durabilidad y estilo para complementar la decoración de su baño. Fácil de instalar y limpiar, es una adición práctica y elegante a cualquier cuarto de baño.",
        "stock": 45,
        "category": "baño",
        "image": "https://www.bronzen.com.ar/Imagenes/Categorias/39/main.jpg",
        "price": 600
    },
    {
        "id": "EJ8J-L5YQ-N9SM",
        "name": "Porta Papel Higiénico de Metal",
        "description": "Porta papel higiénico de metal resistente y funcional para su baño. Mantiene el papel higiénico organizado y accesible.",
        "fullDescription": "Porta papel higiénico de metal resistente y funcional para su baño. Este porta papel higiénico mantiene el papel organizado y accesible, asegurando que nunca se quede sin él cuando lo necesite. Fabricado con metal duradero y acabado de alta calidad, es una adición práctica y elegante a cualquier baño. Fácil de instalar y limpiar, ofrece comodidad y estilo sin esfuerzo.",
        "stock": 29,
        "category": "baño",
        "image": "https://www.bronzen.com.ar/Imagenes/Categorias/40/main.jpg",
        "price": 1900
    },
    {
        "id": "8EEX-4W3W-C68J",
        "name": "Cerradura para Portón Automático",
        "description": "Cerradura de alta seguridad para portones automáticos. Garantiza protección y control de acceso para su propiedad.",
        "fullDescription": "Cerradura de alta seguridad para portones automáticos. Esta cerradura está diseñada para garantizar protección y control de acceso para su propiedad. Con tecnología avanzada y mecanismos de cierre robustos, ofrece una solución confiable para portones automáticos residenciales y comerciales. Fácil de instalar y programar, proporciona tranquilidad y conveniencia.",
        "stock": 12,
        "category": "porton",
        "image": "https://www.bronzen.com.ar/Imagenes/Categorias/61/main.jpg",
        "price": 11000
    },
    {
        "id": "2NTH-UNS2-6XMP",
        "name": "Bisagra para Portón de Hierro",
        "description": "Bisagra resistente para portones de hierro. Ofrece resistencia y durabilidad para un funcionamiento seguro.",
        "fullDescription": "Bisagra resistente para portones de hierro. Esta bisagra está diseñada para ofrecer resistencia y durabilidad, asegurando un funcionamiento seguro y confiable de su portón de hierro. Fabricada con materiales de alta calidad y acabados resistentes a la intemperie, es ideal para aplicaciones exteriores. Fácil de instalar y mantener, proporciona años de servicio sin problemas.",
        "stock": 90,
        "category": "porton",
        "image": "https://www.bronzen.com.ar/Imagenes/Categorias/63/main.jpg",
        "price": 1000
    },
    {
        "id": "7NP3-ZD8M-47GP",
        "name": "Aldaba Decorativa de Bronce",
        "description": "Aldaba decorativa de bronce para portones. Agrega estilo y elegancia a su entrada.",
        "fullDescription": "Aldaba decorativa de bronce para portones. Esta aldaba combina estilo y elegancia para agregar un toque distintivo a su entrada. Con un diseño decorativo y acabado de bronce envejecido, es perfecta para aquellos que buscan realzar la estética de su hogar con un elemento decorativo y funcional. Fácil de instalar y mantener, es una opción elegante para cualquier portón.",
        "stock": 27,
        "category": "porton",
        "image": "https://www.bronzen.com.ar/Imagenes/Categorias/78/main.jpg",
        "price": 1700
    }
]

//obtener productos
const getProducts = new Promise((resolve, reject) => {
  //simulamos un retraso de red con setTimeout
    setTimeout(() => {
    resolve(products);
    }, 3000);
});

export default getProducts