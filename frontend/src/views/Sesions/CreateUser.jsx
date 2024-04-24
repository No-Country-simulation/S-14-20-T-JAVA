import LogoBIzWIz from '@components/icons/LogoBIzWIz';
import Buttondynamic from '@components/Buttondynamic';
import InputComponents from '@components/InputComponents';
import { GeneralButton } from '../../components/GeneralButton';
import { useForm } from '../../hooks/useForm';
import { LoginAndRegisterRequest } from '../../services/LoginAndRegisterRequest';

export default function CreateUser() {
    const { firstlastname, email, password, onInputChange } = useForm({
        email: '',
        password: '',
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        const url = 'users/auth/register';
        const data = {
            username: email,
            password,
            roles: 'INVITED',
        };

        LoginAndRegisterRequest(url, data);
    };

    return (
        <div className="h-screen bg-primary  relative flex flex-col items-center gap-12 justify-between w-full pt-10">
            <section>
                <LogoBIzWIz color="positive" />
            </section>

            <div
                className="rounded-tr-[100px] bg-white py-12 px-4 h-full flex items-center flex-col 
                w-[101%] animate-fade-in-delay absolute mt-[94px]"
            >
                <div className="mx-auto  flex flex-col">
                    <section className="mx-auto  flex flex-col mb-4 ">
                        <h6 className="font-black text-xl">Crear cuenta</h6>
                        <p className="text-[14px] opacity-75">
                            Bienvenido a BizWiz
                        </p>
                    </section>

                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-3 w-full text-[#717171]"
                        action=""
                        method=""
                    >
                        <InputComponents
                            placeholder="Nombre y Apellido"
                            type="text"
                            name="firstlastname"
                            id="firstlastname"
                            isRequired={true}
                            value={firstlastname}
                        />
                        <InputComponents
                            placeholder="Correo Electronico"
                            type="email"
                            name="email"
                            id="email"
                            isRequired={true}
                            value={email}
                            onInputChange={onInputChange}
                        />

                        <InputComponents
                            placeholder="Contraseña"
                            type="password"
                            id="password"
                            name="password"
                            isRequired={true}
                            value={password}
                            onInputChange={onInputChange}
                        />

                        <div className="flex justify-end mt-4 min-w-[350px] ">
                            <GeneralButton
                                type="submit"
                                name="Iniciar Sesion"
                                to="/createuser"
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
