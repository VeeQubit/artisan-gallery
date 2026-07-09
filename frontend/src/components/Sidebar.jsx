import {

NavLink,

useNavigate

} from "react-router-dom";



import {

FiGrid,

FiBox,

FiTag,

FiLogOut,

FiLayers

} from "react-icons/fi";



import {

motion

} from "framer-motion";



import toast from "react-hot-toast";





function Sidebar(){



const navigate = useNavigate();




const logout = ()=>{


localStorage.clear();


toast.success(

"Logged out successfully"

);


navigate("/");


};





const menu=[


{

name:"Overview",

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


<motion.aside



initial={{

x:-80,

opacity:0

}}


animate={{

x:0,

opacity:1

}}



className="

w-72

h-screen

sticky

top-0

self-start


bg-gradient-to-b

from-[#3B0617]

via-[#64132D]

to-[#8A2347]


text-white

p-6

shadow-2xl


flex

flex-col

"

>






{/* LOGO */}



<div

className="

flex

items-center

gap-3

mb-14

"

>



<div

className="

w-12

h-12

rounded-2xl

bg-white/20

flex

items-center

justify-center

text-2xl

"

>


<FiLayers/>


</div>





<div>


<h1

className="

text-xl

font-bold

"

>

Artisan

</h1>



<p

className="

text-xs

text-white/60

"

>

Inventory System

</p>


</div>




</div>








{/* MENU */}



<div

className="

space-y-3

flex-1

"

>


{


menu.map((item)=>(


<NavLink


key={item.name}


to={item.path}


className={({isActive})=>

`

flex

items-center

gap-4

px-5

py-4

rounded-2xl

transition

font-medium



${

isActive

?

"bg-white text-[#7A1232] shadow-xl"

:

"text-white/75 hover:bg-white/15"

}

`

}


>


<span className="text-xl">

{item.icon}

</span>


{item.name}



</NavLink>


))

}



</div>








<button


onClick={logout}



className="


flex

items-center

gap-4


px-5

py-4

rounded-2xl


text-white/80


hover:bg-white/15

transition

"


>



<FiLogOut/>


Logout



</button>






</motion.aside>


)


}




export default Sidebar;