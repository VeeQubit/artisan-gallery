const db=require("../config/db");



exports.getStats=(req,res)=>{


const sql=`

SELECT

(SELECT COUNT(*) FROM products)

AS products,


(SELECT COUNT(*) FROM categories)

AS categories,


(SELECT SUM(quantity) FROM products)

AS stock


`;




db.query(sql,(err,result)=>{


if(err){

return res.status(500).json({

message:"Error loading stats"

});

}



res.json(result[0]);



});


};