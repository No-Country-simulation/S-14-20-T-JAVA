
import fetchPhotos from "./resources/pexels"
 import { useEffect, useState } from "react"
const Post = ({id,image}) => {
 
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