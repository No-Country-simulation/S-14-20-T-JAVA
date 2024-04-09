
import LogoBIzWIz from "@components/icons/LogoBIzWIz";
import Buttondynamic ,{classCreate} from "@components/Buttondynamic";
import InputComponents from "@components/InputComponents";
import { Link } from "react-router-dom";
import { GoogleIcon } from "@/components/icons/GoogleIcon";
export default function Login() {
  return (
    <div
      className="h-screen bg-white  pt-12 
    flex flex-col items-center gap-12 justify-between "
    >
      <section>
        <LogoBIzWIz color="" />
      </section>

      <div
        className="rounded-tr-[100px]  bg-gradient-to-b from-degraded-v-start to-degraded-h-end py-12 px-4 h-full
      flex items-center flex-col w-[101%] animate-fade-in-delay"
      >
        <section className="mb-4 text-white text-center">
          <h6 className="font-black text-xl">Iniciar sesión</h6>
          <p className="text-[14px] opacity-75">Inicia en tu cuenta en BizWiz</p>
        </section>

        <form
          className="flex flex-col gap-3 w-full  text-[#717171]"
          action=""
          method=""
        >
          <InputComponents place="Correo Electronico" type="email" />
          <InputComponents place="Contraseña" type="password" />
          
        </form>
            <Link to="/forgotpassword" className="text-white mt-6">¿Olvidaste tu contraseña?</Link>

            <input className='h-[45px] bg-white rounded-full w-[211px]
          font-semibold ml-auto my-4' type="button" value='Iniciar sesión'/>
<div className="flex flex-row w-full mt-2 items-center justify-center">

          <hr className="bg-white w-1/2 border-dotted"/>
          <p className=" p-2 font-normal text-white"> O </p>
          <hr className="bg-white w-1/2 border-dotted"/>
</div>
<GoogleIcon/>
        <Buttondynamic
          name="Iniciar Sesion"
          name2="Crear Cuenta"
          to="/login"
          to2="/createuser"
        />
      </div>
    </div>
  )
}
