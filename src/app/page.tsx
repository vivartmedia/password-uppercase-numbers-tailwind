'use client'

import InputComponent from "@/component/InputComponent";
import { useState } from "react";


export default function Home() {
const [changeText, setChangeText] = useState('');

const uppercaseBgClass = /[A-Z]/.test(changeText);
const numbersBgClass = /[0-9]/.test(changeText);
const pageBg = (uppercaseBgClass && numbersBgClass)? 'bg-red-900' : 'bg-yellow-600'



const changeTextFunc = (text: string) => {
  setChangeText(text)
}




  return (
    <main className={`${pageBg} flex min-h-screen flex-col items-center gap-4 p-24`}>
     {/* <input onChange={(e)=> setChangeText(e.target.value)} className="shadow-slate-500 shadow-md border-2 rounded border-slate-600 " type="text" /> */}
<InputComponent changeTextProp = {changeTextFunc} />


     <h1 className="text-2xl text-white font-medium">Password must contain: 
      <span style={{background: /[A-Z]/.test(changeText)? 'blue': 'red'}}> Uppercase</span>


      <span className={` ${pageBg} bg-yellow-400`}> and and the others </span>

      <span style={{color: /[0-9]/.test(changeText)? 'blue': 'red'}}>Lowercase</span>
     </h1>
    </main>
  );
}
