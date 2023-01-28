const Producto = require("../models/producto.models");


 /*const crearProducto = (request, response) => {
  const { title, price, description } = request.body;
  Producto.create({
    title,
    price,
    description,
  })
    .then((producto) => response.json(producto))
    .catch((err) => response.json(err));
};*/

//Crear un Producto
const crearProducto =  (req, res)=>{
  Producto.create(req.body)
  .then((resultado)=>{
      console.log(req.body)
      res.json(resultado)
  }).catch((error)=>{
      console.log(error)
  })
}


module.exports = {
  crearProducto
}
