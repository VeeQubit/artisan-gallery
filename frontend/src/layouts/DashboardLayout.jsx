import Sidebar from "../components/Sidebar";

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


<main className="p-8">


{children}


</main>



</div>


</div>

)


}


export default DashboardLayout;