import React from "react";
import LogoBIzWIz from "../../components/icons/LogoBIzWIz";
import "./Enviados.css"; // 
const Enviado = () => {
  return (
    <div className="h-screen bg-primary pt-12 flex flex-col items-center gap-12 justify-between">
      <section>
        <LogoBIzWIz color="positive" />
      </section>
      <div className="formulario bg-white py-12 px-4 h-full flex items-center flex-col w-[101%] gap-4  rounded-tr-[20%]">
        <section className="formulario bg-white py-12 px-4 h-full flex items-center flex-col w-[101%] gap-4  rounded-tr-[20%]">
          <h6 className="font-black text-xl">Formulario Enviado con éxito</h6>

          <div className="check-animation">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="50" height="50" fill="#7fbf7f">
              <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Enviado;
