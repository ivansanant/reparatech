const products = require('../data/productsData');

const controller = {
    // Obtener todos los productos (para tu ShopPage)
    getAllProducts: (req, res) => {
        res.json(products); 
    },

    // Obtener detalle de producto (para tu página de Detalle)
    getProductById: (req, res) => {
        // 1. Capturamos el ID de la URL (viene como string, lo convertimos a número)
        const id = parseInt(req.params.id);

        // 2. Buscamos el producto en nuestro array
        const product = products.find(p => p.id === id);

        // 3. Respondemos según el resultado
        if (product) {
            res.status(200).json(product); // Encontramos el producto, devolvemos JSON
        } else {
            res.status(404).json({ message: "Producto no encontrado" }); // Error 404
        }
    }
};

module.exports = controller;