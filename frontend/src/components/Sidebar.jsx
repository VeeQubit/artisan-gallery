import {

NavLink,

useNavigate

} from "react-router-dom";



import {


FiGrid,

FiBox,

FiTag,

FiLogOut


} from "react-icons/fi";


import toast from "react-hot-toast";



function Sidebar(){


const navigate=useNavigate();




const logout=()=>{


localStorage.clear();


toast.success(

"Logged out successfully"

);


navigate("/");


};




const menu=[


{

name:"Dashboard",

path:"/dashboard",

icon:<FiGrid/>

},



{

name:"Products",

path:"/products",

icon:<FiBox/>

},



{

name:"Categories",

path:"/categories",

icon:<FiTag/>

}


];






return(

<div

className="

w-72

min-h-screen

bg-gradient-to-b

from-[#3B0A1E]

to-[#6D1A36]

text-white

p-6

"

>


<h1

className="

text-2xl

font-bold

mb-12

"

>

Artisan Gallery

</h1>





<div className="space-y-3">


{


menu.map(

(item)=>(


<NavLink


key={item.name}


to={item.path}



className={({isActive})=>


`

flex

items-center

gap-3

px-4

py-3

rounded-xl

transition



${

isActive

?

"bg-white text-[#6D1A36]"

:

"hover:bg-white/20"


}


`

}



>


{item.icon}


{item.name}



</NavLink>


)

)

}


</div>







<button


onClick={logout}


className="


flex

items-center

gap-3

mt-20

px-4

py-3

rounded-xl

hover:bg-white/20

w-full

"


>


<FiLogOut/>


Logout



</button>



</div>


)


}



export default Sidebar;