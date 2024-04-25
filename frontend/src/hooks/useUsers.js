import {useCallback,useRef, useState } from "react";
import {  get } from "../services/HttpClient";

export function useUsers({Search}){
  
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const previousSearch = useRef(Search);
    
  const getUser = useCallback(async ({search}) => {

   if(search === previousSearch.current | search==='') return;    
  
   try{
        

       let url = 'http://34.49.227.176/users/username/' + search;
      /* if(search.length == 0){
         url = 'https://freetestapi.com/api/v1/students';
        }
        */ 
         
        console.log(url)
        setIsLoading(true);
        previousSearch.current = search;
        const newUsers = await get({url})
        console.log(newUsers)
         setUsers(newUsers);  
        
      } catch(e){
        Error(e.message);
      } 
  
      finally{setIsLoading(false)}
       
  },[])


   return {getUser, users,isLoading}
}
