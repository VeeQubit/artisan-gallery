import {

useEffect,

useState

} from "react";


import {

FiTrash2,

FiEdit,

FiPlus,

FiImage

} from "react-icons/fi";


import {

motion

} from "framer-motion";


import api from "../api/axios";


import {

useNavigate

} from "react-router-dom";


import Loader from "../components/Loader";


import toast from "react-hot-toast";




function Products(){



const navigate = useNavigate();


const [products,setProducts]=useState([]);


const [loading,setLoading]=useState(true);






const fetchProducts=async()=>{


try{


setLoading(true);



const res=

await api.get("/products");



setProducts(

res.data.products

);



}


catch(error){


toast.error(

"Failed to load products"

);


}



finally{


setLoading(false);


}


};






useEffect(()=>{


fetchProducts();


},[]);







const deleteProduct=async(id)=>{



if(!window.confirm("Delete this product?"))

return;





try{


const token=

localStorage.getItem("token");



await api.delete(

`/products/${id}`,

{

headers:{


Authorization:`Bearer ${token}`


}

}

);



toast.success(

"Product deleted successfully"

);



fetchProducts();



}



catch(error){



toast.error(

"Delete failed"

);



}


};










return(

<div>





{/* HEADER */}


<div

className="

flex

justify-between

items-center

mb-8

"

>


<div>


<h1

className="

text-3xl

font-bold

text-[#3B0617]

"

>

Products

</h1>



<p

className="text-[#9F4564]"

>

Manage handmade collections

</p>


</div>







<button


onClick={()=>navigate("/products/add")}


className="

flex

items-center

gap-2

bg-gradient-to-r

from-[#9F1239]

to-[#3B0617]

text-white

px-5

py-3

rounded-xl

shadow-lg

hover:-translate-y-1

transition

"

>


<FiPlus/>


Add Product


</button>



</div>











{


loading ?


<Loader/>


:


<motion.div


initial={{

opacity:0,

y:30

}}


animate={{

opacity:1,

y:0

}}



transition={{

duration:.5

}}



className="

bg-white/90

rounded-3xl

shadow-2xl

overflow-hidden

border

border-[#F4D7E1]

"

>





<table

className="w-full"

>





<thead>


<tr

className="

bg-[#F4E6EA]

text-[#3B0617]

text-sm

"

>



<th className="p-5">

Product Image

</th>


<th>

Product Name

</th>


<th>

Category

</th>


<th>

Price

</th>


<th>

Stock

</th>


<th>

Actions

</th>



</tr>


</thead>








<tbody>




{

products.length===0 &&


<tr>


<td

colSpan="6"

className="

text-center

p-10

text-[#9F4564]

"

>

No products available


</td>


</tr>


}








{


products.map(

(product,index)=>(



<motion.tr


key={product.product_id}



initial={{

opacity:0,

y:25

}}


animate={{

opacity:1,

y:0

}}


transition={{

delay:index*0.12

}}



className="

border-b

border-[#E7CAD2]

hover:bg-[#FFF7FA]

transition

"

>







{/* IMAGE */}


<td

className="

p-5

text-center

"

>


<div

className="

mx-auto

w-20

h-20

rounded-2xl

overflow-hidden

bg-[#F4E6EA]

flex

items-center

justify-center

shadow

"

>


{


product.image ?



<img


src={product.image}


alt={product.name}


className="

w-full

h-full

object-cover

"


/>


:



<FiImage

className="

text-3xl

text-[#7A1232]

"

/>



}




</div>


</td>









{/* NAME */}


<td

className="

text-center

font-semibold

text-[#3B0617]

"

>


{product.name}


</td>








{/* CATEGORY */}



<td

className="

text-center

text-[#7A1232]

"

>


{product.category_name}


</td>








{/* PRICE */}


<td

className="

text-center

font-medium

"

>


Rs. {product.price}


</td>








{/* STOCK */}


<td

className="text-center"

>



<span

className="

bg-[#F4E6EA]

text-[#7A1232]

px-4

py-1

rounded-full

font-semibold

"

>


{product.quantity}


</span>



</td>









{/* ACTION */}


<td>


<div

className="

flex

justify-center

gap-5

"

>




<button


onClick={()=>


navigate(

`/products/edit/${product.product_id}`

)

}


>



<FiEdit

className="

text-xl

text-[#7A1232]

hover:scale-125

transition

"

/>


</button>








<button


onClick={()=>deleteProduct(product.product_id)}

>



<FiTrash2

className="

text-xl

text-red-700

hover:scale-125

transition

"

/>


</button>





</div>


</td>






</motion.tr>


)

)

}




</tbody>



</table>






</motion.div>


}




</div>

)


}



export default Products;