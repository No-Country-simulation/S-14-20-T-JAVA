import {useCallback,useRef, useState } from "react";
import {  get } from "../services/HttpClient";

export function usePublicaciones({Search}){
  
  const [publications, setPublications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const previousSearch = useRef(Search);
  const [categoria, setCategoria] = useState(''); 
    
  const getPublication = useCallback(async ({search, categoria = ''}) => {

    let url = 'https://www.themealdb.com/api/json/v1/1/search.php?s='+search;
      if( categoria.length > 0){
        url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c='+categoria ;
        } 

       
      try{
        console.log(url)
        setIsLoading(true);
        previousSearch.current = search;
        const newPublications = await get({url})
        console.log(newPublications)
        setPublications(newPublications.meals);  
        
      } catch(e){
        Error(e.message);
      } 
      
      finally{setIsLoading(false)}
       
     },[])


   return {getPublication, categoria, setCategoria, publications, isLoading}
}
