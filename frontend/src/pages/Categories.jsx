import {

useEffect,

useState

} from "react";


import api from "../api/axios";


import {

FiTrash2,

FiPlus

} from "react-icons/fi";




function Categories(){


const [categories,setCategories]=useState([]);


const [form,setForm]=useState({

category_name:"",

description:""

});





const fetchCategories=async()=>{


const res=

await api.get("/categories");


setCategories(

res.data.categories

);


};





useEffect(()=>{


fetchCategories();


},[]);






const addCategory=async(e)=>{


e.preventDefault();



const token=

localStorage.getItem("token");



await api.post(

"/categories",

form,

{

headers:{

Authorization:`Bearer ${token}`

}

}

);



setForm({

category_name:"",

description:""

});



fetchCategories();



};






const deleteCategory=async(id)=>{


if(!window.confirm("Delete category?"))

return;




const token=

localStorage.getItem("token");



await api.delete(

`/categories/${id}`,

{

headers:{


Authorization:`Bearer ${token}`


}

}

);



fetchCategories();


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

Categories

</h1>




<form

onSubmit={addCategory}


className="

bg-white

rounded-3xl

shadow-xl

p-6

mb-8

flex

gap-4

"

>



<input


placeholder="Category name"


value={form.category_name}


onChange={(e)=>

setForm({

...form,

category_name:e.target.value

})

}


className="

border

rounded-xl

p-3

flex-1

"

/>





<input


placeholder="Description"


value={form.description}


onChange={(e)=>

setForm({

...form,

description:e.target.value

})

}


className="

border

rounded-xl

p-3

flex-1

"

/>





<button

className="

bg-[#6D1A36]

text-white

px-6

rounded-xl

flex

items-center

gap-2

"

>


<FiPlus/>

Add


</button>



</form>






<div

className="

bg-white

rounded-3xl

shadow-xl

overflow-hidden

"

>


<table className="w-full">


<tbody>


{


categories.map(

(item)=>(



<tr

key={item.category_id}

className="border-b"

>


<td className="p-5">


{item.category_name}


</td>




<td>


{item.description}


</td>




<td>


<button


onClick={()=>deleteCategory(

item.category_id

)}


>


<FiTrash2

className="text-red-700"

/>


</button>


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



export default Categories;