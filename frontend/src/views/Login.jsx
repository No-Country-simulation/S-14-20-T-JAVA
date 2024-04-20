import LogoBIzWIz from '@components/icons/LogoBIzWIz';
import Buttondynamic from '@components/Buttondynamic';
import InputComponents from '@components/InputComponents';
import { Link } from 'react-router-dom';
import { GoogleIcon } from '@/components/icons/GoogleIcon';
import { GeneralButton } from '../components/GeneralButton';
export default function Login() {
    return (
        <div
            className="h-screen bg-white pt-2 relative flex flex-col items-center gap-12 justify-between w-full">

            <section>
                <LogoBIzWIz color="" />
            </section>

            <div
                className="rounded-tr-[100px]  bg-gradient-to-b from-degraded-v-start to-degraded-h-end py-12 px-4 h-full
      flex items-center flex-col w-[101%] animate-fade-in-delay absolute mt-[94px]"
            >
                <div className="  mx-auto  flex flex-col">

                    <section className="mb-4 text-white text-center">
                        <h6 className="font-semibold text-xl ">
                            Iniciar sesión
                        </h6>
                        <p className="text-[14px] opacity-75">
                            Inicia en tu cuenta en BizWiz
                        </p>
                    </section>

                    <form
                        className="flex flex-col gap-3 w-full  text-[#717171]  "
                        action=""
                        method=""
                    >
                        <InputComponents
                            place="Correo Electronico"
                            type="email"
                        />
                        <InputComponents place="Contraseña" type="password" />

                        <div className="flex justify-end mt-4 min-w-[350px] ">
                        <GeneralButton name={'Iniciar Sesion'} to={'/login'} />
                    </div>
                    </form>

                    <div className="mt-6 flex space-around">
                        <Link
                            className="text-white text-center max-w-[184px] max-hw-[20px] font-size-[14px]"
                            to="/forgottenpassword"
                        >
                            ¿Olvidaste tu contraseña?
                        </Link>
                    </div>

                    <div className="flex flex-row w-full mt-2 items-center justify-center min-w-[350px]">
                        <hr className="bg-white w-1/2 border-dotted" />
                        <p className=" p-2 font-normal text-white"> O </p>
                        <hr className="bg-white w-1/2 border-dotted" />
                    </div>

                    <GoogleIcon />

                    <div>
                        <Buttondynamic
                            name="Iniciar Sesion"
                            name2="Crear Cuenta"
                            to="/login"
                            to2="/createuser"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
