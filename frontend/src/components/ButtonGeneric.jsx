import React from 'react'

function ButtonGeneric({bgColor,text,ColorText,Shadow}) {
  return (
 <button type="button" className={`rounded-full w-full w-44 p-3 ${bgColor} ${ColorText} ${Shadow}`}>

    {text}
 
 </button>
  )
}

export default ButtonGeneric

