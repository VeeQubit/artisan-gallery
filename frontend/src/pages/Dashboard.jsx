import {

useEffect,

useState

} from "react";


import Card from "../components/Card";


import api from "../api/axios";


import {

FiBox,

FiTag,

FiShoppingBag,

FiTrendingUp

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


const res=

await api.get("/dashboard/stats");



setStats(res.data);



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

title:"Products",

value:stats.products,

icon:<FiBox/>

},



{

title:"Categories",

value:stats.categories,

icon:<FiTag/>

},



{

title:"Stock Items",

value:stats.stock || 0,

icon:<FiShoppingBag/>

},



{

title:"Growth",

value:"25%",

icon:<FiTrendingUp/>

}


];






return(

<div>


{/* Header */}


<div className="mb-8">


<h1

className="

text-3xl

font-bold

text-[#3B0A1E]

"

>

Business Overview

</h1>



<p

className="

text-[#9F4564]

mt-1

"

>

Track your handmade collection performance

</p>


</div>







{/* Statistic Cards */}


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


dashboardCards.map(

(item,index)=>(



<Card key={index}>


<div

className="

w-14

h-14

rounded-2xl

bg-[#F4E6EA]

text-[#6D1A36]

flex

items-center

justify-center

text-3xl

mb-5

"

>


{item.icon}



</div>





<h2

className="

text-4xl

font-bold

text-[#3B0A1E]

"

>


{item.value}



</h2>





<p

className="

text-[#9F4564]

mt-2

"

>


{item.title}



</p>



</Card>


)

)

}


</div>








{/* Welcome Section */}


<div

className="

mt-10

bg-gradient-to-r

from-[#3B0A1E]

to-[#6D1A36]

rounded-3xl

p-10

text-white

shadow-xl

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

mt-3

opacity-80

"

>

Manage your artisan products, categories and creative inventory.

</p>



</div>



</div>

)


}



export default Dashboard;