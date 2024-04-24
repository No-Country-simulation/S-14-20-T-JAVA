import Post from "./Post"
import jsonData from "./resources/jsonplacehol";
import fetchPhotos from "./resources/pexels"
 import { useEffect, useState } from "react"

const Posts = () => {
  const [photos, setPhotos] = useState([]);
  const [jsonPlace,setJsonPlace] =useState([])
  console.log(jsonPlace)
  console.log(photos)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPhotos("technology");
        setPhotos(data);
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    };
    const fetchJson = async () =>{
      try {
        const data = await jsonData();
        setJsonPlace(data);
      } catch (error) {
        console.error('Error fetchin jsonplaceholder', error)
      }
    }
    fetchData();
    fetchJson();
  }, []);

  
  const filteredPhotos = photos.map(photo => ({
    id: photo.id,
    photographer: photo.photographer,
    image: photo.src.large,
    title:"",
    body:""
  }));
  const postsWithData = filteredPhotos.map((photo, index) => ({
    ...photo,
    title: jsonPlace[index] ? jsonPlace[index].title : "", // Si hay un elemento en jsonPlace, asigna su título, de lo contrario cadena vacía
    body: jsonPlace[index] ? jsonPlace[index].body : ""     // Si hay un elemento en jsonPlace, asigna su cuerpo, de lo contrario cadena vacía
  }));
  console.log(postsWithData)

  
  return (
    <div className="m-2  snap-y h-full overflow-y-auto w-full max-w-[950px]">
      {
        postsWithData.map((photo) => (
          <Post 
          key={photo.id}
          id={photo.id}
          user={photo.photographer} 
          image={photo.image}
          title={photo.title}
          body={photo.body} 
          
          />
        ))
      }
    </div>
  )
}

export default Posts