import { Link } from "react-router-dom";


function NotFound(){


return(

<div

className="

min-h-screen

flex

items-center

justify-center

bg-[#F4E6EA]

"

>


<div className="text-center">


<h1

className="

text-8xl

font-bold

text-[#6D1A36]

"

>

404

</h1>


<p

className="

text-xl

mt-5

text-[#3B0A1E]

"

>

Page Not Found

</p>




<Link

to="/dashboard"

className="

inline-block

mt-8

px-8

py-3

rounded-xl

bg-[#6D1A36]

text-white

"

>

Back Dashboard

</Link>


</div>


</div>

)


}


export default NotFound;