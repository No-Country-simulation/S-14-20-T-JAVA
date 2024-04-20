
export default function InputComponents({place, type, inputName, id,Styles,autoFocus, handleChange,value}) {
  

  return (

    <input className={`border-solid border-[#717171] border-[1px] p-3 h-[40px]  w-full rounded-full ${Styles}`}
     placeholder={place} type={type} name={inputName} id={id} autoFocus={autoFocus} onChange={handleChange} value={value} />
    
  );
}
