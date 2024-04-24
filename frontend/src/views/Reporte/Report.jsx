import { Link } from "react-router-dom";
import IconoFlecha from "../../components/icons/IconArrow";
import { useState } from "react";
import ModalReport from "../../components/ModalReport";
import Check from "../../components/Check";

export default function Report() {
  const [reports,setReports] = useState(false);
  const [Denunciar,setDenunciar] = useState(false)
  
  const Report = () =>{
    setReports(true)
  }
  

  
  return (
    <div className="p-3 relative  h-screen ">
        <section className="flex justify-between items-center mb-3">
         <Link to={'/reports'}>
         <IconoFlecha/>
         </Link>
         
         <p className="text-error  font-medium">Denunciar</p>
        
        <Link to={'../'}>
         <svg 
         width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M16.5 1.5L1.5 16.5M1.5 1.5L16.5 16.5" stroke="#080808" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
         </svg>
        </Link> 
        </section>
        <hr />
        <h6 className="mt-6 font-semibold mb-5">Violencia y abuso</h6>
        <p className="text-disabled">Queda prohibido lo siguiente:</p>
        <ul className="text-disabled text-[14px] list-disc py-2 px-4 ">
            <li>Demostración, promoción o amenazas con violencia física,
                 incluida la tortura en el mundo real, 
                violencia explícita y lucha física extrema
            </li>
            <li>Demostración, promoción o amenazas con violencia física,
                 incluida la tortura en el mundo real, 
                violencia explícita y lucha física extrema
            </li>
            <li>Demostración, promoción o amenazas con violencia física,
                 incluida la tortura en el mundo real, 
                violencia explícita y lucha física extrema
            </li>
            <li>Demostración, promoción o amenazas con violencia física,
                 incluida la tortura en el mundo real, 
                violencia explícita y lucha física extrema
            </li>
        </ul>
        <button className="bg-error py-2 px-6 rounded-full text-amber-50 
             hover:scale-105 transition-transform 
             w-[85%] absolute  bottom-[18%] left-[8%] " 
             onClick={Report}>Denunciar</button>

        
         <div className=" h-screen  flex absolute top-0 left-0 right-0  bg-black bg-opacity-80 "
          style={{display:reports ? 'flex' : 'none'}} >
         <ModalReport State={setReports} Denunciar={setDenunciar} Styles={{display:Denunciar ? 'none' : 'flex'}}/>
         <Check OKay={setDenunciar} OKayreport={setReports} Styles={{display:Denunciar ? 'flex' : 'none'}} />
         </div>
         
          
    </div>
  )
}
