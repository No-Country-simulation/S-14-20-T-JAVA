import LogoBIzWIz from '../../components/icons/LogoBIzWIz';
import InputComponents from '../../components/InputComponents';
import { GeneralButton } from '../../components/GeneralButton';
function VerificationCode() {
    return (
        <div className="h-screen bg-primary pt-2 relative flex flex-col items-center gap-12 justify-between w-full">
            <section>
                <LogoBIzWIz color="positive" />
            </section>

            <div className="rounded-tr-[100px] bg-white py-12 px-4 h-full flex items-center flex-col w-[101%] animate-fade-in-delay absolute mt-[94px]">
                <div className="flex flex-col gap-3 min-w-[350px]">
                    <h6 className="font-black text-xl text-center">
                        ¿Olvidaste tu contraseña?
                    </h6>
                    <p className="text-[14px] opacity-75  p-3 text-center text-black">
                        Verifica tu correo electrónico
                    </p>

                    <InputComponents
                        type="email"
                        place={'Correo Electronico '}
                        inputName={'recoverPassword'}
                        id={'recoverPassword'}
                    />
                    <p className="text-[14px] opacity-75 p-3 text-center text-black">
                        Te enviamos a tu correo electrónico un código de
                        verificación.{' '}
                    </p>
                    <InputComponents
                        type="password"
                        place={'Código'}
                        inputName={'code'}
                        id={'code'}
                    />

                    <GeneralButton name={'Enviar'} to={'/verificationcode'} />
                </div>
            </div>
        </div>
    );
}

export default VerificationCode;
