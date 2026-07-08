const db=require("../config/db");



// CREATE CATEGORY

exports.createCategory=(req,res)=>{


const {

category_name,

description


}=req.body;




if(!category_name){


return res.status(400).json({

success:false,

message:"Category name required"

});


}




const sql=

"INSERT INTO categories(category_name,description) VALUES(?,?)";



db.query(

sql,

[category_name,description],


(error,result)=>{


if(error){


return res.status(500).json({

success:false,

message:"Category creation failed"

});


}




res.status(201).json({


success:true,

message:"Category created successfully",

categoryId:result.insertId


});



}

);



};




// GET ALL CATEGORIES



exports.getCategories=(req,res)=>{


const sql=

"SELECT * FROM categories";



db.query(sql,(error,result)=>{


if(error){


return res.status(500).json({

success:false,

message:"Failed to fetch categories"


});

}



res.status(200).json({


success:true,

categories:result


});



});


};




// UPDATE CATEGORY


exports.updateCategory=(req,res)=>{


const id=req.params.id;


const {

category_name,

description


}=req.body;



const sql=

`
UPDATE categories

SET

category_name=?,

description=?

WHERE category_id=?

`;




db.query(

sql,

[category_name,description,id],


(error,result)=>{


if(error){


return res.status(500).json({

message:"Category update failed"


});


}




res.json({

message:"Category updated successfully"

});



}

);



};






// DELETE CATEGORY



exports.deleteCategory=(req,res)=>{


const id=req.params.id;



const sql=

"DELETE FROM categories WHERE category_id=?";




db.query(sql,[id],(error,result)=>{


if(error){


return res.status(500).json({

message:"Category delete failed"

});


}




res.json({

message:"Category deleted successfully"

});



});


};