import {
useEffect,
useState
} from "react";


import {
useNavigate
} from "react-router-dom";


import {
motion
} from "framer-motion";


import api from "../api/axios";


import Button from "../components/Button";


import toast from "react-hot-toast";




function AddProduct(){


const navigate = useNavigate();



const [categories,setCategories] = useState([]);


const [saving,setSaving] = useState(false);



const [form,setForm] = useState({


category_id:"",

name:"",

description:"",

price:"",

quantity:"",

image:""


});







useEffect(()=>{


const fetchCategories = async()=>{


try{


const res =
await api.get(
"/categories"
);



setCategories(
res.data.categories
);



}


catch(error){


toast.error(
"Failed to load categories"
);


}


};



fetchCategories();



},[]);








const handleChange=(e)=>{


setForm({

...form,

[e.target.name]:e.target.value


});


};









const submit=async(e)=>{


e.preventDefault();



try{


setSaving(true);



const token =
localStorage.getItem("token");




const res =
await api.post(

"/products",

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

"Product creation failed"


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

Add New Product

</h1>



<p

className="text-[#9F4564] mt-2"

>

Create a new artisan inventory item

</p>


</div>










<form


onSubmit={submit}



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


<label className="font-semibold text-[#3B0617]">

Product Name

</label>



<input


name="name"


value={form.name}


onChange={handleChange}



placeholder="Enter product name"



className="inputStyle"


/>


</div>










<div>


<label className="font-semibold text-[#3B0617]">

Category

</label>




<select


name="category_id"


value={form.category_id}


onChange={handleChange}



className="inputStyle"



>


<option value="">

Select category

</option>




{


categories.map((item)=>(



<option


key={item.category_id}


value={item.category_id}


>


{item.category_name}



</option>



))


}



</select>


</div>











<div className="grid md:grid-cols-2 gap-5">





<div>


<label className="font-semibold text-[#3B0617]">

Price

</label>



<input


name="price"


type="number"


value={form.price}



onChange={handleChange}



placeholder="Product price"


className="inputStyle"


/>


</div>







<div>


<label className="font-semibold text-[#3B0617]">

Quantity

</label>



<input


name="quantity"


type="number"


value={form.quantity}


onChange={handleChange}


placeholder="Available stock"


className="inputStyle"


/>


</div>




</div>











<div>


<label className="font-semibold text-[#3B0617]">

Image URL

</label>



<input


name="image"


value={form.image}


onChange={handleChange}


placeholder="Product image link"


className="inputStyle"


/>



</div>









<div>


<label className="font-semibold text-[#3B0617]">

Description

</label>




<textarea


name="description"


value={form.description}


onChange={handleChange}



placeholder="Product description"



className="

inputStyle

min-h-[120px]

resize-none

"


/>



</div>









<Button

type="submit"

disabled={saving}

>


{


saving ?

"Saving Product..."

:

"Save Product"


}


</Button>





</form>





</motion.div>


)


}



export default AddProduct;