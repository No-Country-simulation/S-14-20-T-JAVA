import React from "react";
import LogoBIzWIz from "../../Icons/LogoBIzWIz";
import InputComponents from "../InputComponents";

const Forgottenpassword = () => {
  return (
    <div
      className="h-screen bg-primary  pt-12 
 flex flex-col items-center gap-12 justify-between"
    >
      <section>
        <LogoBIzWIz />
      </section>
      <div
        className="formulario bg-white py-12 px-4 h-full
      flex items-center flex-col w-[101%]"
      >
        <section >
          <h6 className="font-black text-xl">¿Olvidaste tu contraseña?</h6>

          <p className="text-[14px] opacity-75 p-3 text-center">
            Verifica tu correo electrónico
          </p>

          <InputComponents
            type="email"
            place={"Correo Electronico "}
            inputName={"recoverPassword"}
            id={"recoverPassword"}
           
            
          />

          {/* Falta agregar componente boto
           n que todavia no esta */}
        </section>
      </div>
    </div>
  );
};

export default Forgottenpassword;
