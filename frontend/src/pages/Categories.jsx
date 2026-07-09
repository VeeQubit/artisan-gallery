import {

useEffect,

useState

} from "react";


import api from "../api/axios";


import {

FiTrash2,

FiPlus,

FiEdit,

FiX

} from "react-icons/fi";


import {

motion

} from "framer-motion";


import toast from "react-hot-toast";





function Categories(){



const [categories,setCategories]=useState([]);



const [editId,setEditId]=useState(null);




const [form,setForm]=useState({


category_name:"",


description:""


});







const fetchCategories=async()=>{


try{


const res=

await api.get("/categories");



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







useEffect(()=>{


fetchCategories();


},[]);








const submitCategory=async(e)=>{


e.preventDefault();



try{



const token=

localStorage.getItem("token");






if(editId){



const res=

await api.put(

`/categories/${editId}`,

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



}



else{



const res=

await api.post(

"/categories",

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



}





setForm({

category_name:"",

description:""

});



setEditId(null);



fetchCategories();




}



catch(error){



toast.error(


error.response?.data?.message ||

"Operation failed"


);



}



};









const startEdit=(item)=>{



setEditId(

item.category_id

);



setForm({


category_name:item.category_name,


description:item.description


});



};








const cancelEdit=()=>{


setEditId(null);



setForm({


category_name:"",


description:""


});


};









const deleteCategory=async(id)=>{



if(!window.confirm("Delete category?"))

return;




try{



const token=

localStorage.getItem("token");




const res=

await api.delete(

`/categories/${id}`,

{

headers:{


Authorization:`Bearer ${token}`


}

}

);




toast.success(

res.data.message

);



fetchCategories();



}



catch(error){



toast.error(

error.response?.data?.message ||

"Delete failed"

);



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


>







<h1


className="

text-3xl

font-bold

text-[#3B0617]

mb-2

"

>

Categories

</h1>



<p

className="

text-[#9F4564]

mb-8

"

>

Organize artisan product collections

</p>









<form


onSubmit={submitCategory}


className="

bg-white/80

rounded-3xl

shadow-xl

p-6

mb-8

flex

gap-4

border

border-[#F4D7E1]

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

inputStyle

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

inputStyle

flex-1

"

/>







<button


className="

bg-gradient-to-r

from-[#9F1239]

to-[#3B0617]

text-white

px-6

rounded-xl

flex

items-center

gap-2

"

>



{


editId?

<FiEdit/>

:

<FiPlus/>


}



{


editId?

"Update"

:

"Add"


}



</button>






{


editId &&


<button


type="button"


onClick={cancelEdit}



className="

bg-gray-200

px-5

rounded-xl

"

>


<FiX/>


</button>



}







</form>









<div


className="

bg-white/80

rounded-3xl

shadow-xl

overflow-hidden

border

border-[#F4D7E1]

"

>



<table className="w-full">



<tbody>



{


categories.map(

(item,index)=>(




<motion.tr



initial={{

opacity:0,

x:-20

}}


animate={{


opacity:1,


x:0


}}



transition={{


delay:index*.1


}}



key={item.category_id}


className="border-b"



>




<td className="p-5">


<div>


<h3

className="font-semibold text-[#3B0617]"

>


{item.category_name}


</h3>



<p

className="text-sm text-[#9F4564]"

>

{item.description}

</p>


</div>


</td>








<td>



<div

className="

flex

justify-end

gap-5

pr-8

"

>




<button


onClick={()=>startEdit(item)}

>


<FiEdit

className="text-[#7A1232]"


/>


</button>







<button


onClick={()=>deleteCategory(

item.category_id

)}


>



<FiTrash2

className="text-red-700"

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



</div>





</motion.div>


)


}



export default Categories;