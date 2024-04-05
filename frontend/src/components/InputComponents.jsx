import React from "react";


export default function InputComponents({place, type, inputName, id}) {
  
  return (

    <input className="border-solid border-[#717171] border-[1px] p-3 h-[40px]  rounded-full" placeholder={place} type={type} name={inputName} id={id} />
    
  );
}
