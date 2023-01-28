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

//Llama atodos los productos
const get_all = (req, res) =>{
  Producto.find()
  .then(productos =>res.json(productos))
  .catch(err => res.json({message:"hubo un error"+err}));
}

//llama a un producto en especifico por su id
const get_product = (req, res) =>{
  Producto.findOne({_id:req.params.id})
      .then(producto => res.json(producto))
      .catch(err => res.json({message:"hubo un error"+err}));
}


module.exports = {
  crearProducto,
  get_all,
  get_product
}
