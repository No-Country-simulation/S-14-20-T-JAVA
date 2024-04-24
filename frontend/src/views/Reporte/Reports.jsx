import { Link } from "react-router-dom";
import IconoFlecha from "../../components/icons/IconArrow";
import IconArrowR from "../../components/icons/IconArrowR";



export default function Reports() {
  return (
    <div className="flex flex-col gap-5 px-3 py-5">
        <Link className="flex  hover:scale-x-125 transition-transform w-12"><IconoFlecha/></Link>
        
        <h6 className="text-error font-semibold text-xl">Denunciar</h6>
        <p className="text-disabled text-[14px]">
        Reportar una cuenta en esta plataforma es una medida 
        seria que puede tener consecuencias significativas. 
        El reporte de una cuenta debe ser realizado solo en casos 
        legítimos de violación de nuestras políticas comunitarias, como acoso, 
        spam o contenido inapropiado. El uso indebido de la función de reporte 
        con el propósito de dañar la reputación de otros usuarios o de manera 
        malintencionada puede resultar en medidas disciplinarias contra tu propia 
        cuenta. Por favor, utilice esta función con responsabilidad y respeto. 
        Gracias por ayudarnos a mantener nuestra comunidad 
        segura y respetuosa para todos.
        </p>
        <h6 className="font-medium ">Denunciar si rompe una de las siguientes normas:</h6>
        <ul className="flex flex-col gap-4">
            <li className="flex justify-between items-center">
                <p>Violencia y abuso</p>
                <Link to={'report'}> <IconArrowR/> </Link>
                
            </li>
            <li className="flex justify-between items-center">
                <p>Odio y acoso</p>
                <Link to={'report'}> <IconArrowR/> </Link>
            </li>
            <li className="flex justify-between items-center">
                <p>Desnudes o contenido de carácter sexual</p>
                <Link to={'report'}> <IconArrowR/> </Link>
            </li>
            <li className="flex justify-between items-center">
                <p>Fraudes y estafas</p>
                <Link to={'report'}> <IconArrowR/> </Link>
            </li>
        </ul>
    </div>
  )
}
