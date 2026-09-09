"use client";

import { motion } from "framer-motion";


export default function FloatingElements(){

return(

<>
<motion.span

animate={{
y:[0,-30,0],
opacity:[0.2,0.7,0.2]
}}

transition={{
duration:6,
repeat:Infinity
}}

className="
absolute
left-[15%]
top-20
h-3
w-3
rounded-full
bg-[#FFCC00]
"

/>


<motion.span

animate={{
y:[0,40,0],
opacity:[0.1,0.5,0.1]
}}

transition={{
duration:8,
repeat:Infinity
}}

className="
absolute
right-[20%]
bottom-20
h-5
w-5
rounded-full
bg-[#FFCC00]
"

/>


</>

)

}