import { Link } from "react-router-dom";
import LogoBIzWIz from "../../Icons/LogoBIzWIz";
import '@/styles/CreateUser.css'

export default function CrearUsuario() {
  return (
    <div className="h-screen bg-primary  pt-12 
    flex flex-col items-center gap-12 justify-between">
      <section>
        <LogoBIzWIz/>
      </section>
      
      <div className="formulario bg-white py-12 px-4 h-full
      flex items-center flex-col w-[101%]">
      <section className="mb-4">
        <h6 className="font-black text-xl">Crear cuenta</h6>
        <p className="text-[14px] opacity-75">Bienvenido a BizWiz</p>
      </section>

      <form className="flex flex-col gap-3 w-full  text-[#717171]" action="" method="">   
       <input className="border-solid border-[#717171] border-[1px] p-3 h-[40px]  rounded-full" type="text" placeholder="Nombre y apellido"/>
       <input className="border-solid border-[#717171] border-[1px] p-3 h-[40px] rounded-full" type="email" placeholder="Correo electrónico"/>
       <input className="border-solid border-[#717171] border-[1px] p-3  h-[40px] rounded-full" type="password" placeholder="Contraseña"/>
       <input className='h-[45px] bg-primary rounded-full w-[211px]
         text-white font-black ml-auto mt-3' type="button" value='Crear cuenta'/>
      </form>

      <div className="bg-primary rounded-full h-[50px] text-xs mt-auto  flex  ">
        <Link className="flex items-center justify-center text-white h-full w-[115px] " to={'/'}>Iniciar sesión</Link>
        <Link className="flex items-center justify-center
          bg-[#F5F5F5] rounded-full w-[116px]  shadow-[-5px_1px_4px_0px_#00000038]" to={'/createuser'}>Crear cuenta</Link>
      </div>
      </div>
      
      
    </div>
  )
}
