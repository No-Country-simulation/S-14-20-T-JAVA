//Iconos 
import Coche from "../../components/icons/Coche";
import Corbata from "../../components/icons/Corbata";
import IconFlecha from "../../components/icons/IconFlecha";
import IconSearch from "../../components/icons/IconSearch";
import Lapiz from "../../components/icons/Lapiz";
import Sofa from "../../components/icons/Sofa";

//import Hooks
import { useSearch } from "../../hooks/useSearch";
import { usePublicaciones } from "../../hooks/usePublicaciones";
import { useCallback, useState } from "react";
import { useUsers } from "../../hooks/useUsers";

//import  vistas y components
import Publications from "./Publications";
import InputComponents from "../../components/InputComponents";
import debounce from "just-debounce-it";
import Users from "./Users";


export default function Search() {

  const {search, updateSearch, error} = useSearch();
  const {getUser, users} = useUsers({search}); 
  const {getPublication, categoria, setCategoria, publications, isLoading} = usePublicaciones({search});
  const [displayCate, setDisplayCate] = useState(false);
  const [publicationUser, setPublicationuser] = useState(true)

  const Debounce = useCallback( debounce((search, categoria) => {
   getPublication({search, categoria})
   getUser({search})
  },1000),[getPublication, getUser])
 

  const handleSubmit = (event) => {
   event.preventDefault();
   getPublication({search});
   getUser({search});
  }

  const handleChange = (event) => {
   const newQuery = event.target.value;
   if(newQuery.startsWith(' ')) return
   updateSearch(newQuery);
   Debounce(search);
    // debouncedGetPublications(newQuery)
  }

  const Categorias = (categorias) => {
   console.log(categorias);
   setCategoria(categorias);
   updateSearch(categorias);
   Debounce(search,categorias);
   setCategoria('');
  }

 return (
  <div className=" flex max-lg:flex-col max-lg:justify-start max-lg:items-center px-3 py-10 w-full h-full justify-center  ">
   <div className="w-[100%] max-w-[500px]">
   <section className="flex items-center gap-1">
      <IconFlecha/>
      <form className="relative w-full" onSubmit={handleSubmit}>
       <InputComponents type={'text'} place={'Buscar'} Styles={'pl-10'} 
         autoFocus={true} onInputChange={handleChange} value={search}/>
       <IconSearch estilos={'absolute top-[27%] left-3'}/> 
      </form> 
    </section>
       
    <section >
      <section className="flex justify-between my-5">
       <h6>{categoria}</h6>
       <svg width="26" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M1.75 5L16.75 5M16.75 5C16.75 7.07107 18.4289 8.75 20.5 8.75C22.5711 8.75 24.25 7.07107 24.25 5C24.25 2.92893 22.5711 1.25 20.5 1.25C18.4289 1.25 16.75 2.92893 16.75 5ZM9.25 15L24.25 15M9.25 15C9.25 17.0711 7.57107 18.75 5.5 18.75C3.42893 18.75 1.75 17.0711 1.75 15C1.75 12.9289 3.42893 11.25 5.5 11.25C7.57107 11.25 9.25 12.9289 9.25 15Z" stroke="#080808" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
       </svg>
      </section>

      <section className="flex justify-between my-1 ">
       <h6>Categorías</h6>
       <svg onClick={()=>setDisplayCate(!displayCate)}
         width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M16.5 1.5L1.5 16.5M1.5 1.5L16.5 16.5" stroke="#080808" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
       </svg>
      </section>
        
      <hr className="border-disabled " />
     
      <ul className="mt-5 pl-2 flex flex-col gap-3" 
        style={ displayCate ? {display:'none'} : {display:'flex'}}>
       <li className="flex gap-2" onClick={()=>Categorias('Seafood')} ><Coche/> Vehículos</li>
       <li className="flex gap-2" onClick={()=>Categorias('Chiken')}><Corbata/>Accesorios</li>
       <li className="flex gap-2" onClick={()=>Categorias('Pasta')}><Sofa/>Muebles</li>
       <li className="flex gap-2" onClick={()=>Categorias('Side')}><Lapiz/>Arte y manualidades</li>
      </ul>
    </section>
   </div>
       
       <div className="w-full max-w-[850px] ">
       <section className="flex my-3 ">
     <button onClick={()=>{setPublicationuser(true)}}
      className="m-auto w-2/4 border-b-2  border-white focus:border-primary">Publicaciones</button>
     <button onClick={()=>{setPublicationuser(false)}}
      className="m-auto w-2/4 border-b-2 border-white focus:border-primary">Cuentas</button>
    </section>
    
    {error ?? <p className="text-red-600">{error}</p>}
    {publicationUser ?   <Publications Publications={publications}/> : <Users users={users}/> } {/**si es true muestra publicaciones  */}
     
       </div>
    
  </div>
  )
}
