import {

useEffect,

useState

} from "react";


import {

useNavigate,

useParams

} from "react-router-dom";


import api from "../api/axios";

import Input from "../components/Input";

import Button from "../components/Button";



function EditProduct(){


const {id}=useParams();


const navigate=useNavigate();



const [form,setForm]=useState({});




useEffect(()=>{


api.get(`/products/${id}`)

.then(

res=>setForm(res.data)

);


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



const token=

localStorage.getItem("token");



await api.put(

`/products/${id}`,

form,

{

headers:{

Authorization:`Bearer ${token}`

}

}

);



navigate("/products");


};






return(

<form

onSubmit={update}


className="

bg-white

p-8

rounded-3xl

space-y-5

max-w-2xl

"

>


<h1

className="

text-3xl

font-bold

text-[#3B0A1E]

"

>

Edit Product

</h1>




<Input

name="name"

value={form.name || ""}

onChange={change}

/>



<Input

name="price"

value={form.price || ""}

onChange={change}

/>



<Input

name="quantity"

value={form.quantity || ""}

onChange={change}

/>




<textarea


name="description"

value={form.description || ""}

onChange={change}


className="

w-full

border

rounded-xl

p-4

"

/>




<Button type="submit">

Update Product

</Button>



</form>

)


}



export default EditProduct;