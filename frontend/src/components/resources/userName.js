import axios from "axios";


async function userName({id = 4}) {
    const url = "http://34.49.227.176/users/id/"
    
    console.log(id)
    if(id){
        try {
           const response = await axios.get(`${url}${id}`);
           const user = response.data 
           console.log(user)
           return user.firstName + " " + user.lastName
        } catch (error) {
            console.error(error)
        }
    }

}

export default userName;