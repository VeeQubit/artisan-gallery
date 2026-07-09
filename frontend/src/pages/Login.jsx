import {

useState,

useContext

} from "react";


import {

useNavigate

} from "react-router-dom";


import api from "../api/axios";


import Button from "../components/Button";


import Input from "../components/Input";


import {

AuthContext

} from "../context/AuthContext";



function Login(){


const navigate=useNavigate();


const {login}=useContext(AuthContext);



const [form,setForm]=useState({


email:"",

password:""


});




const submit=async(e)=>{


e.preventDefault();


try{


const res=

await api.post(

"/auth/login",

form

);



login(res.data);


navigate("/dashboard");


}


catch(error){


alert(

"Invalid login"

);


}



};




return(


<div

className="

min-h-screen

flex

items-center

justify-center

bg-gradient-to-br

from-[#FAF7F7]

via-[#F4E6EA]

to-[#E7CAD2]

"

>


<form


onSubmit={submit}


className="


w-[420px]

bg-white/70

backdrop-blur-xl

shadow-2xl

rounded-3xl

p-10

border

border-white


"


>


<h1

className="

text-3xl

font-bold

text-[#3B0A1E]

text-center


"

>

Artisan Gallery


</h1>



<p

className="

text-center

text-[#9F4564]

mt-2

mb-8

"

>

Management Portal


</p>




<Input

placeholder="Email"

onChange={

e=>setForm({

...form,

email:e.target.value

})

}

/>


<br/>

<br/>


<Input


type="password"


placeholder="Password"


onChange={

e=>setForm({

...form,

password:e.target.value

})

}

/>



<div className="mt-8">


<Button type="submit">

Login

</Button>


</div>


</form>


</div>

)


}


export default Login;