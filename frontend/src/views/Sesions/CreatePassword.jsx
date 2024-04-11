import React from 'react'
import LogoBIzWIz from "../../components/icons/LogoBIzWIz";
import InputComponents from "../../components/InputComponents";
import ButtonGeneric from "../../components/ButtonGeneric";
function CreatePassword() {
  return (
    <div
    className="h-screen bg-primary  pt-12 
  flex flex-col items-center gap-12 justify-between"
  >
    <section>
      <LogoBIzWIz color="positive"/>
    </section>
    <div
      className="formulario bg-white py-12 px-4 h-full
    flex items-center flex-col w-[101%] gap-2  rounded-tr-[20%]"
    >
      <h6 className="font-black text-xl">Crear contraseña</h6>
      <p className="text-[14px] opacity-75  p-3 text-center">
      Crea una nueva contraseña segura.
      </p>
{/* 
    Falta implementar el ojo en el input  */}
      <InputComponents
        type="password"
        place={"Nueva contraseña "}
        inputName={"newPassword"}
        id={"newPassword"}
      />
    
      <InputComponents
        type="password"
        place={"Repetir nueva contraseña"}
        inputName={"repeatNewPassword"}
        id={"repeatNewPassword"}
      />

      <ButtonGeneric
        text={"Cambiar contraseña"}
        bgColor={"bg-primary"}
        ColorText={"text-white"}
        Shadow={"shadow-lg"}

/>
    </div>
  </div>
  )
}

export default CreatePassword
