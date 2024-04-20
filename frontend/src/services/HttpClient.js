  export async function get({url}){
    try{
        const result = await fetch(url)
        const json = await result.json() ;
        console.log(json)
        return json; 
    } catch(error){
        throw new Error('Error searching for publications')
    }
        
} 



/*export async function  APIuser(user){
    let API = user ? 'https://freetestapi.com/api/v1/students?search='+user 
                   :  'https://freetestapi.com/api/v1/students';
    let newAPI = await get(API);
    return newAPI;
} */