import {
  useEffect,
  useState
} from "react";


import {
  motion
} from "framer-motion";


import Card from "../components/Card";


import api from "../api/axios";


import {
  FiBox,
  FiTag,
  FiShoppingBag,
  FiTrendingUp,
  FiActivity,
  FiCheckCircle
} from "react-icons/fi";




function Dashboard(){


const [stats,setStats]=useState({


products:0,

categories:0,

stock:0


});





useEffect(()=>{


const fetchStats=async()=>{


try{


const res =
await api.get(
"/dashboard/stats"
);



setStats(
res.data
);


}

catch(error){


console.log(
"Dashboard stats error",
error
);


}


};



fetchStats();



},[]);






const dashboardCards=[



{

title:"Total Products",

value:stats.products,

icon:<FiBox/>,

text:"Managed collections"

},



{

title:"Categories",

value:stats.categories,

icon:<FiTag/>,

text:"Product groups"

},



{

title:"Inventory Stock",

value:stats.stock || 0,

icon:<FiShoppingBag/>,

text:"Available items"

},



{

title:"Performance",

value:"25%",

icon:<FiTrendingUp/>,

text:"Business growth"

}



];









return(

<div>


{/* HEADER */}



<motion.div


initial={{
opacity:0,
y:20
}}

animate={{
opacity:1,
y:0
}}


className="mb-10"


>


<h1

className="

text-4xl

font-black

text-[#3B0617]

"

>

Business Overview

</h1>




<p

className="

text-[#9F4564]

mt-2

"

>

Monitor your artisan inventory performance and operations

</p>


</motion.div>









{/* CARDS */}



<div

className="

grid

grid-cols-1

md:grid-cols-2

xl:grid-cols-4

gap-6

"

>


{


dashboardCards.map((item,index)=>(


<motion.div


key={index}


initial={{

opacity:0,

y:60,

scale:0.9

}}


animate={{

opacity:1,

y:0,

scale:1

}}


transition={{


duration:0.7,


delay:0.4 + index * 0.25,


ease:"easeOut"


}}



whileHover={{


y:-10,


scale:1.03,


transition:{

duration:0.25

}


}}


>



<Card>


<div

className="

flex

items-center

justify-between

mb-8

"

>



<div

className="

w-14

h-14

rounded-2xl

bg-gradient-to-br

from-[#9F1239]

to-[#3B0617]

text-white

flex

items-center

justify-center

text-2xl

shadow-lg

"

>


{item.icon}


</div>



<FiActivity

className="

text-[#C85A7C]

"

/>


</div>






<h2

className="

text-4xl

font-black

text-[#3B0617]

"

>

{item.value}

</h2>



<p

className="

font-semibold

text-[#7A1232]

mt-2

"

>

{item.title}

</p>



<span

className="

text-sm

text-[#9F4564]

"

>

{item.text}

</span>



</Card>


</motion.div>


))

}



</div>









{/* LOWER SECTION */}


<div

className="

grid

grid-cols-1

lg:grid-cols-3

gap-8

mt-10

"

>




<motion.div


initial={{
opacity:0,
x:-30
}}


animate={{
opacity:1,
x:0
}}


transition={{
delay:.5
}}


className="

lg:col-span-2

rounded-3xl

p-10

text-white

shadow-xl

bg-gradient-to-br

from-[#3B0617]

via-[#7A1232]

to-[#9F4564]

"

>



<h2

className="

text-3xl

font-bold

"

>

Welcome Back Admin

</h2>




<p

className="

mt-4

text-white/80

leading-7

"

>

Your Artisan Gallery workspace is ready.
Manage product collections, monitor inventory
records and organize your handmade business.

</p>



</motion.div>









<motion.div


initial={{
opacity:0,
x:30
}}

animate={{
opacity:1,
x:0
}}

transition={{
delay:.6
}}


className="

bg-white/80

backdrop-blur-xl

rounded-3xl

shadow-xl

p-8

"

>


<h3

className="

font-bold

text-[#3B0617]

mb-6

"

>

System Status

</h3>



{


[

"Secure admin session",

"Database connected",

"Inventory active"


].map((item,index)=>(



<div

key={index}

className="

flex

items-center

gap-3

mb-4

text-[#7A1232]

"

>


<FiCheckCircle/>


{item}


</div>


))

}



</motion.div>






</div>





</div>


)


}



export default Dashboard;