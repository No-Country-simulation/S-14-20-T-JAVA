import React from "react";
import LogoBIzWIz from "../../components/icons/LogoBIzWIz";
import InputComponents from "../../components/InputComponents";
import ButtonGeneric from "../../components/ButtonGeneric";
import { GeneralButton } from "../../components/GeneralButton";
const SerEmprendedor = () => {
  return (
    <div
      className="h-screen bg-primary  pt-12 
 flex flex-col items-center gap-12  justify-between "
    >
      <section>
        <LogoBIzWIz color="positive" />
      </section>
      <div
        className="formulario bg-white py-12 px-4 h-full
         flex items-center flex-col w-[101%] gap-4  rounded-tr-[20%]"
      >
        <section
          className="formulario bg-white py-12 px-4 h-full
         flex items-center flex-col w-[101%] gap-4  rounded-tr-[20%]"
        >
          <h6 className="font-black text-xl">Ser emprendedor</h6>

          <p className="text-[14px] opacity-75 p-3 text-center">
            Verifica tu ubicación para alcanzar a mas gente de tu localidad.
          </p>

          <InputComponents
            type="text"
            place={"Ubicación "}
            inputName={"unicacion"}
            id={"unicacion"}
          />

          <ButtonGeneric
            text={"Siguiente"}
            bgColor={"bg-primary"}
            ColorText={"text-white"}
            Shadow={"shadow-lg"}
            to={"/tuocupacion"}
          />
        </section>
      </div>
    </div>
  );
};

export default SerEmprendedor;
