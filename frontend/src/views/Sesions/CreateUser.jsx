import LogoBIzWIz from "@components/icons/LogoBIzWIz";
import Buttondynamic from "@components/Buttondynamic";
import InputComponents from "@components/InputComponents";

export default function CreateUser() {
  return (
    <div
      className="h-screen bg-primary  pt-12 
    flex flex-col items-center gap-12 justify-between "
    >
      <section>
        <LogoBIzWIz color="positive" />
      </section>

      <div
        className="rounded-tr-[20%] bg-white py-12 px-4 h-full
      flex items-center flex-col w-[101%] animate-fade-in-delay"
      >
        <section className="mb-4">
          <h6 className="font-black text-xl">Crear cuenta</h6>
          <p className="text-[14px] opacity-75">Bienvenido a BizWiz</p>
        </section>

        <form
          className="flex flex-col gap-3 w-full  text-[#717171]"
          action=""
          method=""
        >
          <InputComponents place="Nombre y Apellido" type="text" />
          <InputComponents place="Correo Electronico" type="email" />

          <InputComponents place="Contraseña" type="password" />
          
          <input className='h-[45px] bg-primary rounded-full w-[211px]
         text-white font-black ml-auto mt-3' type="button" value='Crear cuenta'/>
        </form>

        <Buttondynamic
          name="Iniciar Sesion"
          name2="Crear Cuenta"
          to="/login"
          to2="/createuser"
        />
      </div>
    </div>
  );
}
