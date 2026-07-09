import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import {
  motion
} from "framer-motion";



function DashboardLayout({

children

}){


return(


<div


className="

flex

h-screen

overflow-hidden

bg-gradient-to-br

from-[#FFF7FA]

via-[#F8E8EF]

to-[#F3D6E1]

"

>





<motion.div


initial={{

x:-100,

opacity:0

}}


animate={{

x:0,

opacity:1

}}


transition={{

duration:.7,

ease:"easeOut",

delay:.1

}}


className="

h-screen

shrink-0

"

>


<Sidebar/>


</motion.div>








<div

className="

flex-1

h-screen

flex

flex-col

overflow-hidden

"

>






<motion.div


initial={{

y:-50,

opacity:0

}}


animate={{

y:0,

opacity:1

}}


transition={{

duration:.6,

delay:.25

}}


className="

shrink-0

"

>


<Navbar/>


</motion.div>










<motion.main


initial={{

opacity:0,

y:40

}}


animate={{

opacity:1,

y:0

}}


transition={{

duration:.6,

delay:.4

}}



className="

flex-1

p-8

overflow-y-auto

"

>


{children}



</motion.main>





</div>




</div>


)


}



export default DashboardLayout;