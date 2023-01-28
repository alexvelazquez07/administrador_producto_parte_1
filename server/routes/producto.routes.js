const ProductoController = require("../controllers/producto.controller");

module.exports = function (app) {
    app.post("/api/crearproducto", ProductoController.crearProducto);
};