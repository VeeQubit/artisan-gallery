const db=require("../config/db");



// CREATE PRODUCT

exports.createProduct=(req,res)=>{


const {

category_id,
name,
description,
price,
quantity,
image


}=req.body;



const sql=

`INSERT INTO products

(category_id,name,description,price,quantity,image)

VALUES (?,?,?,?,?,?)`;



db.query(

sql,

[
category_id,
name,
description,
price,
quantity,
image
],


(error,result)=>{


if(error){


return res.status(500).json({

success:false,

message:"Product creation failed",

error:error.message

});


}



res.status(201).json({


success:true,


message:"Product created successfully",


productId:result.insertId


});



}

);


};




// GET ALL PRODUCTS


exports.getProducts=(req,res)=>{


const sql=

`
SELECT 

products.product_id,

products.name,

products.description,

products.price,

products.quantity,

products.image,

categories.category_name


FROM products


LEFT JOIN categories

ON products.category_id =
categories.category_id

`;



db.query(sql,(error,result)=>{



if(error){


return res.status(500).json({


success:false,


message:"Failed to fetch products"


});


}



res.status(200).json({


success:true,


products:result


});



});


};





// GET SINGLE PRODUCT


exports.getProductById=(req,res)=>{


const id=req.params.id;



const sql=

"SELECT * FROM products WHERE product_id=?";



db.query(sql,[id],(error,result)=>{



if(error){


return res.status(500).json({

message:"Database error"

});

}



if(result.length===0){


return res.status(404).json({

message:"Product not found"

});


}



res.json(result[0]);



});



};




// UPDATE PRODUCT



exports.updateProduct=(req,res)=>{


const id=req.params.id;



const {


category_id,

name,

description,

price,

quantity,

image


}=req.body;




const sql=

`
UPDATE products

SET

category_id=?,

name=?,

description=?,

price=?,

quantity=?,

image=?


WHERE product_id=?

`;



db.query(

sql,


[

category_id,

name,

description,

price,

quantity,

image,

id

],


(error,result)=>{



if(error){


return res.status(500).json({

message:"Update failed"

});


}




res.json({


message:"Product updated successfully"


});



}

);



};






// DELETE PRODUCT



exports.deleteProduct=(req,res)=>{


const id=req.params.id;



const sql=

"DELETE FROM products WHERE product_id=?";



db.query(sql,[id],(error,result)=>{



if(error){


return res.status(500).json({


message:"Delete failed"


});


}




res.json({


message:"Product deleted successfully"


});



});


};