import React, { useState } from "react";
import LogoBIzWIz from "../../components/icons/LogoBIzWIz";
import InputComponents from "../../components/InputComponents";
import { Link } from "react-router-dom";
import SelectInput from '../FormularioEmprendedor/Selected'
import { GeneralButton } from "../GeneralButton";

const Ocupacion = () => {
  const [selectedOption, setSelectedOption] = useState(''); 

  const handleChange = (event) => {
    setSelectedOption(event.target.value); 
  };

  const options = [ 
  
    { value: 'opcion1', label: 'Vehículos' },
    { value: 'opcion2', label: 'Accesorios' },
    { value: 'opcion3', label: 'Muebles' },
    { value: 'opcion3', label: 'Arte y mensualidades' },
  ];

  return (
    <div className="h-screen bg-primary pt-2 relative flex flex-col items-center gap-12 justify-between w-full">
      <section>
        <LogoBIzWIz color="positive" />
      </section>
      <div className="formulario bg-white py-12 px-4 h-full flex items-center flex-col w-[101%] gap-4 rounded-tr-[20%]">
        <section className="formulario bg-white py-12 px-4 h-full flex items-center flex-col w-[101%] gap-4 rounded-tr-[20%]">
          <h6 className="font-black text-xl">Tu ocupación</h6>

          <p className="text-[14px] opacity-75 p-3 text-center">
            Selecciona qué tipo de ocupación tienes, así podremos recomendarte a más personas con respecto a sus gustos.
          </p>

          <InputComponents
            type="text"
            place={"Ocupación"}
            inputName={"ocupacion"}
            id={"ocupacion"}
          />

          <SelectInput
            place="Categorias"
            selectName="opciones"
            id="opciones"
            autoFocus={true}
            handleChange={handleChange}
            value={selectedOption}
            options={options}
          />

          {/* <ButtonGeneric
            text={"Ser emprendedor "}
            bgColor={"bg-primary"}
            ColorText={"text-white"}
            Shadow={"shadow-lg"}
            to={"/enviado"}
          /> */}
          <Link to={'/enviado'}>
          <GeneralButton
          type="submit"
          name={'Siguiente'}
          /></Link>
          
        </section>
      </div>
    </div>
  );
};

export default Ocupacion;
