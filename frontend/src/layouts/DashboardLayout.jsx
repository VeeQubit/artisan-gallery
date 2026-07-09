import Sidebar from "../components/Sidebar";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";


function DashboardLayout({

children

}){


return(


<div className="flex">


<Sidebar/>


<div

className="

flex-1

min-h-screen

bg-gradient-to-br

from-[#FAF7F7]

via-[#F4E6EA]

to-[#EFE1E6]

"

>


<Navbar/>


<motion.main
  initial={{
    opacity: 0,
    y: 20
  }}
  animate={{
    opacity: 1,
    y: 0
  }}
  transition={{
    duration: 0.4
  }}
  className="p-8"
>

  {children}

</motion.main>



</div>


</div>

)


}


export default DashboardLayout;