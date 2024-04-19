import FollowBtn from "./FollowBtn";
import IconComment from "./icons/IconComment";
import IconLike from "./icons/IconLike";
import UserIconFilled from "./icons/UserIconFilled";

const Post = ({id,image,user,title,body}) => {
 
  return (
    <main className="py-4 font-roboto-flex">
      <header className="flex items-center justify-between mb-2">
        <div className="flex items-center">
        <UserIconFilled className="mr-2"/>
        <div className=" h-10 flex flex-col ml-2">
                  <h3 className="font-semibold  text-base">
                    {user}
                  </h3>
                  <p className="text-sm font-normal text-[#717171]">{title.substring(0,8)}...</p>
        </div>
        </div>
        <div className="flex items-center">
          <FollowBtn className="mr-2"/>
        </div>
      </header>
      <article key={id}>
        <img src={image} className="" alt="" />
      <footer className="flex flex-row gap-2">
        <IconLike/>
        <IconComment/>
      </footer>
      <h6 className="font-semibold text-lg">
      {title.substring(0,8)}
      </h6>
          <p className="font-roboto-flex">

          {body}
          </p>
      </article>

    </main>
  );
}

export default Post