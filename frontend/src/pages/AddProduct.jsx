import { useState } from "react";

import { useNavigate } from "react-router-dom";

import api from "../api/axios";

import Input from "../components/Input";

import Button from "../components/Button";


function AddProduct(){


const navigate=useNavigate();


const [form,setForm]=useState({


category_id:"",

name:"",

description:"",

price:"",

quantity:"",

image:""


});



const handleChange=(e)=>{


setForm({

...form,

[e.target.name]:e.target.value

});


};




const submit=async(e)=>{


e.preventDefault();



try{


const token=

localStorage.getItem("token");



await api.post(

"/products",

form,

{

headers:{

Authorization:`Bearer ${token}`

}

}

);



navigate("/products");


}



catch(error){


alert("Product creation failed");


}


};




return(

<div>


<h1

className="

text-3xl

font-bold

text-[#3B0A1E]

mb-8

"

>

Add New Product

</h1>



<form


onSubmit={submit}


className="

bg-white/80

rounded-3xl

shadow-xl

p-8

space-y-5

max-w-2xl

"

>



<Input

name="name"

placeholder="Product Name"

onChange={handleChange}

/>



<Input

name="category_id"

placeholder="Category ID"

onChange={handleChange}

/>




<Input

name="price"

placeholder="Price"

onChange={handleChange}

/>



<Input

name="quantity"

placeholder="Quantity"

onChange={handleChange}

/>




<Input

name="image"

placeholder="Image URL"

onChange={handleChange}

/>




<textarea

name="description"

placeholder="Description"

onChange={handleChange}


className="

w-full

p-4

rounded-xl

border

border-[#E7CAD2]

outline-none

"

/>



<Button type="submit">

Save Product

</Button>



</form>



</div>

)


}


export default AddProduct;