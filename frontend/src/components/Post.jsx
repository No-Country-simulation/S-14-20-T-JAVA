import FollowBtn from "./FollowBtn";
import IconComment from "./icons/IconComment";
import IconFavorite from "./icons/IconFavorite";
import IconLike from "./icons/IconLike";
import UserIconFilled from "./icons/UserIconFilled";

const Post = ({id,image,user,title,body}) => {
   

  return (
    <main className="py-4 font-roboto-flex p-4 ">
      <header className="flex items-center justify-between mb-2">
        <div className="flex items-center">
        <UserIconFilled className="mr-2"/>
        <div className=" h-10 flex flex-col ml-2">
                  <h3 className="font-semibold  text-base">
                    {user}
                  </h3>
                  <p className="text-sm font-normal text-[#717171]">{title}...</p>
        </div>
        </div>
        <div className="flex items-center">
          <FollowBtn className="mr-2"/>
        </div>
      </header>
      <section key={id}
      className=""  >
        <img src={`data:image/png;base64,${image}`} className="max-w-full h-auto object-cover " alt="" />
      <footer className="flex flex-row gap-2 mt-2">
        <IconLike/>
        <IconComment/>
        <IconFavorite/>
      </footer>
      <h6 className="font-semibold text-lg">
      {title}
      </h6>
          <p className="font-roboto-flex">

          {body}
          </p>
      </section>

    </main>
  );
}

export default Post