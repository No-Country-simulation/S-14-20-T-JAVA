import { useState, useEffect } from "react";

export function useSearch (){
    const [search,updateSearch] = useState('');
    const [error,setError] = useState(null);

    useEffect(()=>{

        if(search.match(/^\d+$/) &&  search!==''){
            setError('No se puede buscar la publicación con números')
            return
        }
        setError(null);
    },[search])

    return {search,updateSearch,error}
}