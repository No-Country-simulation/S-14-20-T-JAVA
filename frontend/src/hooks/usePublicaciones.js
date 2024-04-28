import {useCallback,useRef, useState } from "react";
import {  get } from "../services/HttpClient";

export function usePublicaciones({Search}){
  
  const [publications, setPublications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const previousSearch = useRef(Search);
  const [categoria, setCategoria] = useState(''); 
    
  const getPublication = useCallback(async ({search, categoria = ''}) => {

    if(search === '') return;


    let url = 'http://34.49.227.176/posts/get/posts/'+ search;
    

      if( categoria.length > 0){
        url = 'http://34.49.227.176/posts/get/posts/category/'+categoria ;
        } 

       
      try{
        console.log(url)
        setIsLoading(true);
        previousSearch.current = search;
        const newPublications = await get({url})
        console.log(newPublications)
        setPublications(newPublications);  
        
      } catch(e){
        Error(e.message);
      } 
      
      finally{setIsLoading(false)}
       
     },[])


   return {getPublication, categoria, setCategoria, publications, isLoading}
}
