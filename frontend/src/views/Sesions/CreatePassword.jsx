import LogoBIzWIz from '../../components/icons/LogoBIzWIz';
import InputComponents from '../../components/InputComponents';
import { GeneralButton } from '../../components/GeneralButton';
function CreatePassword() {
    return (
        <div className="h-screen bg-primary pt-2 relative flex flex-col items-center gap-12 justify-between w-full">
            <section>
                <LogoBIzWIz color="positive" />
            </section>

            <div className="rounded-tr-[100px] bg-white py-12 px-4 h-full flex items-center flex-col w-[101%] animate-fade-in-delay absolute mt-[94px]">
                <div className="flex flex-col gap-3 min-w-[350px]">
                    <h6 className="font-black text-xl text-center">
                        Crear contraseña
                    </h6>
                    <p className="text-[14px] opacity-75  p-3 text-center">
                        Crea una nueva contraseña segura.
                    </p>

                    <InputComponents
                        type="password"
                        place={'Nueva contraseña '}
                        inputName={'newPassword'}
                        id={'newPassword'}
                    />

                    <InputComponents
                        type="password"
                        place={'Repetir nueva contraseña'}
                        inputName={'repeatNewPassword'}
                        id={'repeatNewPassword'}
                    />

                    <GeneralButton name={'Enviar'} to={'/createpassword'} />
                </div>
            </div>
        </div>
    );
}

export default CreatePassword;
