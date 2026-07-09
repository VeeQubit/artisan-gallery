import { Link } from "react-router-dom";

import {
FiGrid,
FiBox,
FiTag,
FiLogOut
} from "react-icons/fi";


function Sidebar(){


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



<nav className="space-y-4">



<Link

className="flex items-center gap-3"

to="/dashboard"

>

<FiGrid/>

Dashboard

</Link>




<Link

className="flex items-center gap-3"

to="/products"

>

<FiBox/>

Products

</Link>




<Link

className="flex items-center gap-3"

to="/categories"

>

<FiTag/>

Categories

</Link>



<button

className="

flex

items-center

gap-3

pt-10

"

>


<FiLogOut/>

Logout


</button>



</nav>


</div>


)


}


export default Sidebar;