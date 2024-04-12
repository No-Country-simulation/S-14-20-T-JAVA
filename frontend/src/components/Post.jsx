
const Post = ({id,image,user,title,body}) => {
 
  return (
    <div className="py-4">
    <h6 className="font-black">
      {user}
    </h6>
    <p>{title.substring(0,20)}...</p>
    <section key={id}>
      <img src={image} className="w-full" alt="" />
      {body}
    </section>

    </div>
  );
}

export default Post