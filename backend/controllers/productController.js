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



// required validation

if(
!category_id ||
!name ||
!price ||
!quantity
){


return res.status(400).json({

success:false,

message:"Please fill all required fields"

});


}



// price validation

if(price<=0){


return res.status(400).json({

success:false,

message:"Price must be greater than 0"

});


}



// quantity validation

if(quantity<0){


return res.status(400).json({

success:false,

message:"Quantity cannot be negative"

});


}




// check category exists


db.query(

"SELECT * FROM categories WHERE category_id=?",

[category_id],


(error,category)=>{


if(error){


return res.status(500).json({

success:false,

message:"Database error"

});


}




if(category.length===0){


return res.status(400).json({

success:false,

message:"Selected category does not exist"

});


}




// duplicate product check


db.query(

"SELECT * FROM products WHERE name=?",

[name],


(error,existing)=>{


if(error){


return res.status(500).json({

success:false,

message:"Database error"

});


}




if(existing.length>0){


return res.status(409).json({

success:false,

message:"Product already exists"

});


}





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

message:"Product creation failed"

});


}



res.status(201).json({

success:true,

message:"Product created successfully",

productId:result.insertId

});



}

);


}

);


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

success:false,

message:"Database error"

});

}



if(result.length===0){


return res.status(404).json({

success:false,

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





if(
!name ||
!category_id ||
!price ||
!quantity
){


return res.status(400).json({

success:false,

message:"Please fill all required fields"

});


}




if(price<=0){


return res.status(400).json({

success:false,

message:"Invalid price value"

});


}




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

success:false,

message:"Update failed"

});


}




res.json({


success:true,

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


success:false,

message:"Delete failed"


});


}




res.json({

success:true,

message:"Product deleted successfully"


});



});


};