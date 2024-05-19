'use client'

import React from 'react'

interface iChildProp {
    changeTextProp: (text: string) => void
}

const InputComponent = ({changeTextProp}: iChildProp) => {

    // const handleChange=(e: React.ChangeEvent<HTMLInputElement>) =>{
    //     changeTextProp(e.target.value)
    // }


  return (
    <div>
  {/* <input onChange={handleChange}  className="shadow-slate-500 shadow-md border-2 rounded border-slate-600 " type="text" /> */}
      <input onChange={(e)=> changeTextProp(e.target.value)}  className="shadow-slate-500 shadow-md border-2 rounded border-slate-600 " type="text" />
    </div>
  )
}

export default InputComponent
