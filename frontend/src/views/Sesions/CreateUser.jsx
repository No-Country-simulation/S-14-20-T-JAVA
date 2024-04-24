import LogoBIzWIz from '@components/icons/LogoBIzWIz';
import Buttondynamic from '@components/Buttondynamic';
import InputComponents from '@components/InputComponents';
import { GeneralButton } from '../../components/GeneralButton';
import { useForm } from '../../hooks/useForm';
import { LoginAndRegisterRequest } from '../../services/LoginAndRegisterRequest';
import { useNavigate } from 'react-router-dom';

export default function CreateUser() {
    const { firstName, lastName, email, password, onInputChange } = useForm({
        firstName:'',
        lastName:'',
        email: '',
        password: '',
    });

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const url = 'users/auth/register';
        const data = {
            username: email,
            password,
            firstName,
            lastName
        };

        try {
            const response = await LoginAndRegisterRequest(url, data);

            // Si la respuesta es exitosa, redirige al usuario a '/home'
            if (response.status === 200) {
                navigate('/home');
            } else {
                console.error('Error al registrar usuario:', response.data);
            }
        } catch (error) {
            console.error('Error al registrar usuario:', error);
        }
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
                            placeholder="Nombre"
                            type="text"
                            name="firstName"
                            id="firstName"
                            isRequired={true}
                            value={firstName}
                            onInputChange={onInputChange}
                        />
                        <InputComponents
                            placeholder="Apellido"
                            type="text"
                            name="lastName"
                            id="lastName"
                            isRequired={true}
                            value={lastName}
                            onInputChange={onInputChange}
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
                                name="Crear cuenta"
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
