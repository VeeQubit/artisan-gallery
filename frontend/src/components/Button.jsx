function Button({children,type="button"}){


return(

<button

type={type}


className="

w-full

py-3

rounded-xl

bg-gradient-to-r

from-[#6D1A36]

to-[#3B0A1E]

text-white

font-semibold

shadow-lg

hover:scale-[1.02]

transition

"

>

{children}


</button>


)


}


export default Button;