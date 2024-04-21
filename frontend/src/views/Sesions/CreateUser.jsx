import LogoBIzWIz from '@components/icons/LogoBIzWIz';
import Buttondynamic from '@components/Buttondynamic';
import InputComponents from '@components/InputComponents';
import { GeneralButton } from '../../components/GeneralButton';

export default function CreateUser() {
    return (
        <div
            className="h-screen bg-primary pt-2 relative flex flex-col items-center gap-12 justify-between w-full"
        >
            <section>
                <LogoBIzWIz color="positive" />
            </section>

            <div className="rounded-tr-[100px] bg-white py-12 px-4 h-full flex items-center flex-col w-[101%] animate-fade-in-delay absolute mt-[94px]">
                <div className="mx-auto  flex flex-col">
                    <section className="mx-auto  flex flex-col mb-4 ">
                        <h6 className="font-black text-xl">Crear cuenta</h6>
                        <p className="text-[14px] opacity-75">
                            Bienvenido a BizWiz
                        </p>
                    </section>

                    <form
                        className="flex flex-col gap-3 w-full text-[#717171]"
                        action=""
                        method=""
                    >
                        <InputComponents
                            place="Nombre y Apellido"
                            type="text"
                        />
                        <InputComponents
                            place="Correo Electronico"
                            type="email"
                        />

                        <InputComponents place="Contraseña" type="password" />

                        <div className="flex justify-end mt-4 min-w-[350px] ">
                            <GeneralButton
                                name={'Crear Cuenta'}
                                to={'/createuser'}
                            />
                        </div>
                    </form>

                    <div className="mt-8">
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
