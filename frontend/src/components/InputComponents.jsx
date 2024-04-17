import React from "react";


 const InputComponents = ({place, type, inputName, id}) =>{
  
  return (

    <input className="border-solid border-[#717171] border-[1px] p-3 h-[40px]  w-full rounded-full " placeholder={place} type={type} name={inputName} id={id} />
    
  );
}
export default InputComponents