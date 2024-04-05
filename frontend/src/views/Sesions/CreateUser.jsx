import LogoBIzWIz from "@components/icons/LogoBIzWIz";
import Buttondynamic from "@components/Buttondynamic";
import InputComponents from "@components/InputComponents";

export default function CreateUser() {
  return (
    <div
      className="h-screen bg-primary  pt-12 
    flex flex-col items-center gap-12 justify-between"
    >
      <section>
        <LogoBIzWIz color="positive" />
      </section>

      <div
        className="rounded-tr-[20%] bg-white py-12 px-4 h-full
      flex items-center flex-col w-[101%]"
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
          
        </form>

        <Buttondynamic
          name="Inciar Sesion"
          name2="Crear Cuenta"
          to="/"
          to2="/createuser"
        />
      </div>
    </div>
  );
}
