import React from "react";

const Publication = ({ publications }) => {
  return (
    <section className="grid grid-cols-2 gap-3 self-center ">
      {publications.map((publication, index) => (
        <React.Fragment key={index}>
          {publication.images.map((image, imageIndex) => (
            <div key={imageIndex} className="w-40 h-40">
              <img src={image} alt="" className="w-full h-full object-cover" />
            <div className="relative bottom-7   bg-gray-800 bg-opacity-40">
            <p className="text-white m-1">200k me gusta</p></div>
            
            </div>
          ))}
        </React.Fragment>
      ))}

      
    </section>
  );
};

export default Publication;
