import {
  useState,
  useContext,
  useEffect
} from "react";


import {
  useNavigate
} from "react-router-dom";


import {
  FiMail,
  FiLock,
  FiArrowRight,
  FiPackage,
  FiTrendingUp,
  FiDatabase
} from "react-icons/fi";


import {
  motion
} from "framer-motion";


import api from "../api/axios";


import {
  AuthContext
} from "../context/AuthContext";




function Login(){


const navigate = useNavigate();


const { login } = useContext(AuthContext);



const [form,setForm] = useState({

email:"",
password:""

});




useEffect(()=>{


if(localStorage.getItem("token")){


navigate("/dashboard");


}


},[]);







const submit = async(e)=>{


e.preventDefault();



try{


const res =
await api.post(
"/auth/login",
form
);



login(res.data);



navigate(
"/dashboard",
{
replace:true
}
);



}


catch(error){


alert("Invalid credentials");


}


};








return(


<div

className="

relative
min-h-screen
overflow-hidden
flex
items-center
justify-center

bg-gradient-to-br
from-[#2B0714]
via-[#7A1232]
to-[#F8DDE6]

px-6

"

>






{/* floating backgrounds */}



<motion.div


animate={{

y:[0,40,0],
x:[0,20,0]

}}


transition={{

duration:8,
repeat:Infinity

}}


className="

absolute
top-20
left-20

w-80
h-80

rounded-full

bg-[#C85A7C]/30

blur-3xl

"

/>




<motion.div


animate={{

y:[0,-50,0]

}}


transition={{

duration:10,
repeat:Infinity

}}


className="

absolute

bottom-10
right-20

w-[450px]
h-[450px]

rounded-full

bg-[#F4A7BA]/40

blur-3xl

"

/>









<div

className="

relative

grid
grid-cols-1
lg:grid-cols-2

gap-16

items-center

max-w-7xl
w-full

"

>









{/* LEFT SIDE */}



<motion.div


initial={{

opacity:0,
x:-60

}}


animate={{

opacity:1,
x:0

}}


transition={{

duration:.7

}}


className="space-y-8"

>




<div>


<h1

className="

text-5xl
xl:text-6xl

font-black

leading-tight

text-white

"

>

Artisan Gallery

</h1>




<p

className="

mt-6

max-w-xl

text-lg

leading-8

text-[#F8DDE6]

"

>

A complete business management platform designed for artisan brands to manage product collections, inventory records and daily operations.

</p>


</div>








<motion.div


animate={{

y:[0,-15,0]

}}


transition={{

duration:5,
repeat:Infinity

}}



className="

max-w-lg

bg-white/15

backdrop-blur-xl

rounded-3xl

shadow-2xl

p-8

border

border-white/30

"

>


<div

className="

flex

items-center

justify-between

mb-8

"

>


<h3 className="font-bold text-white">

Inventory Overview

</h3>


<span

className="

text-sm

font-semibold

text-[#FFD6E2]

"

>

Live Analytics

</span>


</div>







<div

className="grid grid-cols-3 gap-4"

>


{


[

[
<FiPackage/>,
"Products",
"245"
],


[
<FiDatabase/>,
"Stock",
"1.8K"
],


[
<FiTrendingUp/>,
"Growth",
"32%"
]


].map((item,index)=>(



<div

key={index}


className="

bg-white/20

backdrop-blur-xl

rounded-2xl

p-5

border

border-white/20

hover:-translate-y-2

transition

"

>


<div

className="

text-[#FFD6E2]

text-2xl

mb-3

"

>

{item[0]}

</div>



<h2 className="text-xl font-bold text-white">

{item[2]}

</h2>



<p className="text-sm text-[#F8DDE6]">

{item[1]}

</p>


</div>


))

}


</div>



</motion.div>




</motion.div>









{/* LOGIN PANEL */}



<motion.form


initial={{

opacity:0,

scale:.95,

x:40

}}


animate={{

opacity:1,

scale:1,

x:0

}}



transition={{

duration:.7

}}



onSubmit={submit}



className="

bg-[#FFF7FA]

rounded-[35px]

shadow-2xl

p-10

xl:p-14

border

border-[#F4D7E1]

"

>




<h2

className="

text-4xl

font-black

text-[#3B0617]

"

>

Admin Portal

</h2>




<p

className="

mt-3

text-[#9F4564]

mb-10

"

>

Login to manage your artisan inventory system

</p>








<div className="space-y-5">



<div

className="

flex

items-center

gap-4

border

border-[#F4D7E1]

bg-white

rounded-2xl

px-5

py-4

shadow-sm

"

>


<FiMail className="text-[#7A1232]"/>



<input

className="outline-none flex-1 text-[#3B0617]"

placeholder="Email address"

onChange={(e)=>

setForm({

...form,

email:e.target.value

})

}

/>


</div>








<div

className="

flex

items-center

gap-4

border

border-[#F4D7E1]

bg-white

rounded-2xl

px-5

py-4

shadow-sm

"

>


<FiLock className="text-[#7A1232]"/>



<input

type="password"

placeholder="Password"

className="outline-none flex-1 text-[#3B0617]"


onChange={(e)=>

setForm({

...form,

password:e.target.value

})

}

/>


</div>


</div>








<button

className="

mt-10

w-full

py-4

rounded-2xl

bg-gradient-to-r

from-[#9F1239]

via-[#7A1232]

to-[#3B0617]

text-white

font-bold

flex

justify-center

items-center

gap-3

shadow-xl

hover:-translate-y-1

transition

"

>

Access Dashboard

<FiArrowRight/>


</button>




<p

className="

text-center

mt-8

text-sm

text-[#9F4564]

"

>

Secure Inventory Management Platform

</p>





</motion.form>





</div>



</div>


)


}



export default Login;