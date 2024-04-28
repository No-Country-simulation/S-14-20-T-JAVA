import React, { useState } from "react";
import { GeneralButton } from "../../components/GeneralButton";
import Publication from "../../components/Publication/Publication";
import { Link } from "react-router-dom";
import NameProfile from "../../components/Publication/NameProfile";
import Description from "../../components/Publication/Description";
import IconoFlecha from "../../components/icons/IconArrow";
const AnotherProfile = () => {
  const [publicationType, setPublicationType] = useState("Element1"); 
  const publications = {
    Element1: [
      {
        images: ["https://ar.todomoda.com/media/catalog/product/7/2/72783505_0_1_20220817180510.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=841&width=657&canvas=657:841",
         "https://http2.mlstatic.com/seguidoresdescD_NQ_NP_690294-MLA51326563761_082022-O.webp",  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXkAcEqbVj0MKC3c966EbZRSGBXMd7No1hkE52M8GjVQ&s', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNRSBFzzrjaBlqYSNoi1OiylAn76XzOiKPOwiZK-0SDw&s', 'https://media.newera.com.ar/wysiwyg/sliders/newera/banner-4-nyy-enero2023-mobile.jpg']
      },
  
    ],
    Element2: [
      {
        images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoxTsiqV5fJcpbjNybXKWZSpX52yJIq0nF-hrXHAC5Jw&s",
        "https://http2.mlstatic.com/D_NQ_NP_846122-MLA49489151899_032022-O.webp"]
      },
  
    ],
    Element3: [
      {
        images: ["https://ansol.com.ar/wp-content/uploads/2022/08/ropa.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEqTbftRwZ4bezwVwI_mjSTAXIS7zIZCEtsOhj_wmPCi60Wq1IiN7zOOZK5XoOoghKUMQ&usqp=CAU", 'https://www.esdesignbarcelona.com/sites/default/files/imagenes/haz-crecer-tu-marca-de-ropa-frente-la-competencia_1.jpg']
      },
    ],
  };

  const handleClick = (type) => { 
    setPublicationType(type); 
  };

  return (
    <section className="flex flex-row gap-11 p-2 h-full w-full max-lg:flex-col">
    <div className="w-[100%] max-w-[600px] p-9 flex gap-6  flex-col">
    <article>
    <IconoFlecha/>
      </article>

    
       <NameProfile
       name={'Carina Rojas'}
       followers={'15'}
       />
    

     <Description
     description={'Ofrezco una variedad de accesorios, ropa y joyas únicas. Mi objetivo es brindar a mis clientes piezas elegantes y originales que les permitan expresar su estilo con confianza. ¡Descubre el brillo y la belleza en cada detalle de mi colección!'}
     
     />
    </div>
     
     <div className="w-[100%] max-w-[900px] mt-10">
     <section className="flex font-extrabold justify-evenly mb-10">
        <Link onClick={() => handleClick("Element1")} className="inline-block text-gray-600 border-b-2 border-transparent focus:border-primary focus:outline-none">Accesorios</Link>
        <Link onClick={() => handleClick("Element2")} className="inline-block text-gray-600 border-b-2 border-transparent focus:border-primary focus:outline-none">Joyas</Link>
        <Link onClick={() => handleClick("Element3")} className="inline-block text-gray-600 border-b-2 border-transparent focus:border-primary focus:outline-none">Ropa</Link>
      </section>

     
      {publicationType && (
        <Publication publications={publications[publicationType]} />
      )}
  
     </div>

     </section>
  );
};

export default AnotherProfile;
