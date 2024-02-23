import { Router } from "express";
import {getAll, getOne, insertOne, updateOne, deleteOne} from '../controllers/products.controllers.js';
const router = Router();
router.get('/', getAll);
router.get('/:barcode',getOne);
router.post('/',insertOne);
router.put('/:barcode',updateOne);
router.delete('/:barcode',deleteOne);
export default router;
router.post("/:barcode", updateOne)//Actualizar productos de la otra pagina 
router.get("/delete/:barcode", deleteOne)
router.get('/fotos', function(req, res) {
    // Obtener información de los productos para la galería de fotos
    ProductDAO.getAll()
      .then(products => {
        // Renderizar la vista `fotos.ejs` con los productos
        res.render('../src/views/fotos.ejs', { products });
      })
      .catch(err => {
        // Manejar error
        // res.render('error', { error: err.message }); // Ejemplo de renderizado de página de error
      });
  });
  