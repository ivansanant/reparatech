const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Ruta para el listado general: GET /products
router.get('/', productController.getAllProducts);

// Ruta para el detalle (ESTA ES LA QUE NECESITAS): GET /products/:id
// Los dos puntos ':' indican que 'id' es un parámetro variable
router.get('/:id', productController.getProductById);

module.exports = router;