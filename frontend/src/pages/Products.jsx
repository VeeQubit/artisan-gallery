import {

useEffect,

useState

} from "react";


import {

FiTrash2,

FiEdit,

FiPlus

} from "react-icons/fi";


import api from "../api/axios";
import { useNavigate } from "react-router-dom";

function Products(){

const navigate = useNavigate();
const [products,setProducts]=useState([]);



const fetchProducts=async()=>{


try{


const res=await api.get("/products");


setProducts(res.data.products);


}


catch(error){


console.log(error);


}


};




useEffect(()=>{


fetchProducts();


},[]);





const deleteProduct=async(id)=>{


const confirmDelete=

window.confirm(

"Delete this product?"

);



if(!confirmDelete)

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



fetchProducts();



}

catch(error){


alert("Delete failed");


}


};






return(

<div>


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

text-[#3B0A1E]

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

from-[#6D1A36]

to-[#3B0A1E]

text-white

px-5

py-3

rounded-xl

shadow-lg

"

>

<FiPlus/>

Add Product


</button>


</div>






<div

className="

bg-white/80

rounded-3xl

shadow-xl

overflow-hidden

"

>


<table

className="w-full"

>


<thead>


<tr

className="

bg-[#F4E6EA]

text-[#3B0A1E]

"

>


<th className="p-5 text-left">

Product

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


products.map(

(product)=>(


<tr

key={product.product_id}

className="border-b"

>


<td className="p-5">


{product.name}


</td>



<td>


{product.category_name}


</td>




<td>


Rs. {product.price}


</td>




<td>


<span

className="

bg-[#F4E6EA]

text-[#6D1A36]

px-3

py-1

rounded-full

"

>


{product.quantity}


</span>


</td>




<td>


<div

className="

flex

gap-4

justify-center

"

>



<button
  onClick={() =>
    navigate(`/products/edit/${product.product_id}`)
  }
>
  <FiEdit className="text-[#6D1A36]" />
</button>



<button

onClick={()=>deleteProduct(

product.product_id

)}

>


<FiTrash2

className="text-red-700"

/>


</button>



</div>



</td>



</tr>


)

)

}



</tbody>


</table>



</div>



</div>


)


}


export default Products;