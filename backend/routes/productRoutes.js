const express=require("express");


const router=express.Router();



const verifyToken=

require("../middleware/authMiddleware");



const {


createProduct,

getProducts,

getProductById,

updateProduct,

deleteProduct


}=require("../controllers/productController");





router.post(

"/",

verifyToken,

createProduct

);



router.get(

"/",

getProducts

);




router.get(

"/:id",

getProductById

);




router.put(

"/:id",

verifyToken,

updateProduct

);





router.delete(

"/:id",

verifyToken,

deleteProduct

);




module.exports=router;