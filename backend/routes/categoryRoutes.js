const express=require("express");


const router=express.Router();



const verifyToken=

require("../middleware/authMiddleware");




const {


createCategory,

getCategories,

updateCategory,

deleteCategory


}=require("../controllers/categoryController");




// CREATE

router.post(

"/",

verifyToken,

createCategory

);




// READ

router.get(

"/",

getCategories

);




// UPDATE


router.put(

"/:id",

verifyToken,

updateCategory

);



// DELETE


router.delete(

"/:id",

verifyToken,

deleteCategory

);



module.exports=router;