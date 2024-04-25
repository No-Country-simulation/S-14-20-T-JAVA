import axios from "axios";
export const baseUrl = 'http://34.49.227.176/';

const token = localStorage.getItem('token');
async function useCategories() {
    try {  
        
        const response = await axios.get(`${baseUrl}posts/categories`)
        // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    console.log(response)
    console.log(response.data)    
    return response.data
    } catch (error) {
        console.log(error)
    }
    
    
}

export default useCategories;