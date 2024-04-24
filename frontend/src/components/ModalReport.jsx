
export default function ModalReport({name='Carina Rojas',State,Denunciar,Styles }) {
  const Cancelar = () =>{
    State(false);
  }
  const denunciar = () =>{
    Denunciar(true);
  }
  return (
    <div className=" w-[92%] max-w-96 px-8 py-11 rounded-[35px] flex-col  m-auto bg-white "
     style={Styles}>
        <p className="text-center">¿Estas seguro que deseas denunciar a <strong>{name}</strong>?</p>
        <section className="flex justify-around mt-7">
            <button className="bg-error py-2 px-6 rounded-full text-amber-50 
             hover:scale-110 transition-transform" onClick={denunciar}>Denunciar</button>
            <button className="bg-white py-2 px-6 rounded-full
             border-[1px] border-black hover:scale-110 transition-transform"
             onClick={Cancelar}>Cancelar</button>
        </section>
    </div>
  )
}
