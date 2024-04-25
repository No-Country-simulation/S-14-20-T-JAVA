import getAllPosts from "../hooks/getAllposts";
import Post from "./Post"
import userName from "./resources/userName";
import fetchPhotos from "./resources/pexels"
 import { useEffect, useState } from "react"

const Posts = () => {
  const [photos, setPhotos] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllPosts();
        setPhotos(data ?? []);
        const userNameData = await userName(3);
        setName(userNameData ?? '');
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    };
    
    fetchData();
  }, []);

  return (
    <div className="m-2 snap-y h-full overflow-y-auto w-full max-w-[950px]">
      {
        photos.map((photo) => (
          photo && (
            <Post 
              key={photo.id}
              id={photo.id}
              user={name} 
              image={photo.image?.[0]?.content}
              title={photo.title}
              body={photo.content} 
            />
          )
        ))
      }
    </div>
  );
};

export default Posts