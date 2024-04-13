import UserIconFilled from "./icons/UserIconFilled";

const Post = ({id,image,user,title,body}) => {
 
  return (
    <div className="py-4">
    <section className="grid grid-cols-2">
    <div className="">
    <UserIconFilled/>
    </div>
    <div className="text-left ">
    <h6 className="font-black">
      {user}
    </h6>
    <p>{title.substring(0,14)}...</p>
    </div>
    </section>
    <section key={id}>
      <img src={image} className="" alt="" />
      {body}
    </section>

    </div>
  );
}

export default Post