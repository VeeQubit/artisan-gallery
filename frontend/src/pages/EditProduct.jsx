import {

useEffect,

useState

} from "react";


import {

useNavigate,

useParams

} from "react-router-dom";


import {

motion

} from "framer-motion";


import api from "../api/axios";


import Button from "../components/Button";


import toast from "react-hot-toast";




function EditProduct(){



const {id}=useParams();


const navigate=useNavigate();




const [categories,setCategories]=useState([]);


const [saving,setSaving]=useState(false);




const [form,setForm]=useState({


category_id:"",

name:"",

description:"",

price:"",

quantity:"",

image:""


});






useEffect(()=>{



const fetchData=async()=>{


try{



const productRes =

await api.get(

`/products/${id}`

);




setForm(productRes.data);





const categoryRes =

await api.get(

"/categories"

);




setCategories(

categoryRes.data.categories

);



}



catch(error){


toast.error(

"Failed to load product"

);


}



};




fetchData();




},[id]);









const change=(e)=>{


setForm({


...form,


[e.target.name]:

e.target.value



});



};









const update=async(e)=>{


e.preventDefault();



try{


setSaving(true);




const token=

localStorage.getItem("token");





const res =

await api.put(


`/products/${id}`,


form,


{


headers:{


Authorization:`Bearer ${token}`


}


}


);





toast.success(

res.data.message

);




navigate(

"/products"

);



}




catch(error){



toast.error(


error.response?.data?.message ||

"Product update failed"


);



}




finally{


setSaving(false);


}



};










return(


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



>







<div className="mb-8">



<h1


className="

text-3xl

font-bold

text-[#3B0617]

"

>

Edit Product

</h1>




<p

className="

text-[#9F4564]

mt-2

"

>

Update artisan product information

</p>




</div>









<form


onSubmit={update}



className="


bg-white/80


backdrop-blur-xl


rounded-3xl


shadow-xl


p-8


space-y-6


max-w-3xl


border


border-[#F4D7E1]


"

>








<div>


<label

className="

font-semibold

text-[#3B0617]

"

>

Product Name

</label>




<input


name="name"


value={form.name}



onChange={change}



className="inputStyle"



/>



</div>









<div>



<label

className="

font-semibold

text-[#3B0617]

"

>

Category

</label>





<select


name="category_id"



value={form.category_id}



onChange={change}



className="inputStyle"


>



<option value="">

Select Category

</option>





{


categories.map(

(item)=>(



<option


key={item.category_id}


value={item.category_id}


>


{item.category_name}


</option>



)

)

}




</select>



</div>









<div

className="

grid

md:grid-cols-2

gap-5

"

>






<div>


<label

className="

font-semibold

text-[#3B0617]

"

>

Price

</label>



<input


type="number"


name="price"


value={form.price}



onChange={change}



className="inputStyle"


/>



</div>








<div>



<label

className="

font-semibold

text-[#3B0617]

"

>

Quantity

</label>




<input


type="number"


name="quantity"



value={form.quantity}



onChange={change}



className="inputStyle"


/>



</div>





</div>









<div>



<label

className="

font-semibold

text-[#3B0617]

"

>

Image URL

</label>




<input


name="image"



value={form.image || ""}



onChange={change}



className="inputStyle"


/>




</div>










<div>


<label

className="

font-semibold

text-[#3B0617]

"

>

Description

</label>





<textarea



name="description"



value={form.description || ""}



onChange={change}



className="

inputStyle

min-h-[120px]

resize-none

"


/>



</div>









<div

className="

flex

gap-5

"

>


<Button

type="submit"

disabled={saving}

>


{

saving ?

"Updating Product..."

:

"Update Product"


}


</Button>





<button

type="button"

onClick={()=>navigate("/products")}

className="

w-full

bg-white

border

border-[#6D1A36]

text-[#6D1A36]

py-4

rounded-xl

font-bold

shadow-md

hover:bg-[#F4E6EA]

transition

"

>


Cancel


</button>




</div>






</form>





</motion.div>


)


}




export default EditProduct;