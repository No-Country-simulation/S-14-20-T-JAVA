
import fetchPhotos from "./resources/pexels"
 import { useEffect, useState } from "react"
const Post = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPhotos();
        setPhotos(data);
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    {
      photos.map((picture) => (
        <div key={picture.id}>
        <img src={picture.src.large} alt={picture.alt} />
        </div>
      ))
    }
    </>
  );
}

export default Post