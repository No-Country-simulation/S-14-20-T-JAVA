import React from 'react'
import { Link } from 'react-router-dom'

function ButtonGeneric({bgColor,text,ColorText,Shadow, to}) {
  return (
   
 <Link to ={to} type="button"  className={`rounded-full w-full w-44 p-3 text-center   ${bgColor} ${ColorText} ${Shadow}`}>

    {text}
 
 </Link>
 
  )
}
export default ButtonGeneric

