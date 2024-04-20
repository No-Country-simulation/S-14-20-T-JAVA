import React from 'react';
import LogoBIzWIz from '../../components/icons/LogoBIzWIz';
import InputComponents from '../../components/InputComponents';
import ButtonGeneric from '../../components/ButtonGeneric';
const Forgottenpassword = () => {
    return (
        <div className="h-screen bg-primary pt-2 relative flex flex-col items-center gap-12 justify-between w-full">

            <section>
                <LogoBIzWIz color="positive" />
            </section>
            
          
                <section
                    className="rounded-tr-[100px] bg-white py-12 px-4 h-full flex items-center flex-col w-[101%] animate-fade-in-delay absolute mt-[94px]">
                    <div>
                        <h6 className="font-black text-xl">
                            ¿Olvidaste tu contraseña?
                        </h6>

                        <p className="text-[14px] opacity-75 p-3 text-center">
                            Verifica tu correo electrónico
                        </p>
                    </div>

                    <div className="flex flex-col gap-3 min-w-[350px]">
                        <InputComponents
                            type="email"
                            place={'Correo Electronico '}
                            inputName={'recoverPassword'}
                            id={'recoverPassword'}
                        />

                        <ButtonGeneric
                            text={'Validar'}
                            bgColor={'bg-primary'}
                            ColorText={'text-white'}
                            Shadow={'shadow-lg'}
                            to={'/verificationcode'}
                        />
                    </div>
                </section>
            
        </div>
    );
};

export default Forgottenpassword;
