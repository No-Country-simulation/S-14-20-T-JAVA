import Post from "./Post"
import fetchPhotos from "./resources/pexels"
 import { useEffect, useState } from "react"

const Posts = () => {
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
    <div>
        <Post/>
    </div>
  )
}

export default Posts