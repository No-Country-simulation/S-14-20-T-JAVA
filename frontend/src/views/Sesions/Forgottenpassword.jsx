import LogoBIzWIz from '../../components/icons/LogoBIzWIz';
import InputComponents from '../../components/InputComponents';
import { useForm } from '../../hooks/useForm';
import { GeneralButton } from '../../components/GeneralButton';

const Forgottenpassword = () => {
    const { email, onInputChange } = useForm({ email: '', password:'' }); 

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div className="h-screen bg-primary pt-2 relative flex flex-col items-center gap-12 justify-between w-full">
            <section>
                <LogoBIzWIz color="positive" />
            </section>

            <section className="rounded-tr-[100px] bg-white py-12 px-4 h-full flex items-center flex-col w-[101%] animate-fade-in-delay absolute mt-[94px]">
                <div>
                    <h6 className="font-black text-xl">
                        ¿Olvidaste tu contraseña?
                    </h6>

                    <p className="text-[14px] opacity-75 p-3 text-center">
                        Verifica tu correo electrónico
                    </p>
                </div>

                <form className="flex flex-col gap-3 min-w-[350px]" onSubmit={handleSubmit}>
                    <InputComponents
                        placeholder="Correo Electronico"
                        type="email"
                        name="email"
                        id="email"
                        isRequired={true}
                        value={email}
                        onInputChange={onInputChange}
                    />


                    <GeneralButton
                        type="submit"
                        name="Validar"
                        to="/forgottenpassword"
                    />
                </form>
            </section>
        </div>
    );
};

export default Forgottenpassword;
